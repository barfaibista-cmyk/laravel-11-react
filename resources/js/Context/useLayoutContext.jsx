import { createContext, useContext, useCallback, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { getSystemTheme, toggleAttribute } from '@/Utils/layout';
import { debounce } from '@/Helpers/debounce';

const INIT_STATE = {
    sidenav: {
        size: 'default',
        color: 'light'
    },
    theme: 'light',
    dir: 'ltr'
};

const LayoutContext = createContext(undefined);

export const useLayoutContext = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayoutContext can only be used within LayoutProvider');
    }
    return context;
};

const LayoutProvider = ({ children }) => {
    const [settings, setSettings] = useLocalStorage('__TAILWICK_CONFIG__', INIT_STATE);
    const updateSettings = useCallback(_newSettings => {
        setSettings(prevSettings => ({
            ...prevSettings,
            ..._newSettings,
            sidenav: {
                ...prevSettings.sidenav,
                ...(_newSettings.sidenav || {})
            }
        }));
    }, [setSettings]);

    const reset = useCallback(() => {
        setSettings(INIT_STATE);
    }, [setSettings]);

    const changeSideNavSize = useCallback((nSize, persist = true) => {
        toggleAttribute('data-sidenav-size', nSize);
        if (persist) {
            setSettings(prev => {
                if (prev.sidenav.size === nSize) return prev;

                return {
                    ...prev,
                    sidenav: {
                        ...prev.sidenav,
                        size: nSize
                    }
                };
            });
        }
    }, [setSettings]);

    useEffect(() => {
        toggleAttribute('data-sidenav-color',
            settings.sidenav.color);
        toggleAttribute('data-sidenav-size',
            settings.sidenav.size);
        toggleAttribute('data-theme',
            settings.theme === 'system' ? getSystemTheme(): settings.theme);
        toggleAttribute('dir',
            settings.dir);
    }, [settings]);

    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        setHasHydrated(true);
    }, []);

    useEffect(() => {
        if (!hasHydrated) return;

        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                changeSideNavSize('offcanvas', false);
            } else if (width <= 1140) {
                changeSideNavSize('sm', false);
            } else {
                changeSideNavSize('default', false);
            }
        };

        handleResize();

        const debouncedResize = debounce(handleResize, 200);
        window.addEventListener('resize', debouncedResize);

        return () => {
            window.removeEventListener('resize', debouncedResize);
        };

    }, [hasHydrated, changeSideNavSize]);

    const contextValue = useMemo(() => ({
        ...settings,
        updateSettings,
        reset,
        changeSideNavSize
    }), [settings, updateSettings, reset, changeSideNavSize]);

    return (
        <LayoutContext.Provider value={contextValue}>
            {children}
        </LayoutContext.Provider>
    );
};

export default LayoutProvider;
