const mix = require('laravel-mix');
const path = require('path');

var webpackConfig = {
    resolve: {
        extensions: [".*",".wasm",".mjs",".js",".jsx",".json"],
        alias: {
            "@": path.resolve("resources/js")
        }
    }
}

mix.options({
    hmrOptions: {
        host: "localhost",
        port: 8000,
        https: false
    }
});

mix
  .js("resources/js/app.jsx", "public/js")
  .postCss("resources/css/app.css", "public/css", [
    require("tailwindcss"),
  ])
  .react()
  .webpackConfig(webpackConfig);
