import { defineConfig } from 'vite';
import { resolve } from 'path';

import handlebars from 'vite-plugin-handlebars';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

import postcssPresetsEnv from 'postcss-preset-env';

const ROOT_DIR = resolve(__dirname, 'src');
const OUTPUT_DIR = resolve(__dirname, 'dist');

const BASE_PROD_URL = '/';
const BASE_DEV_URL = '/';

const BASE_API_PROD_URL = 'http://127.0.0.1:8080';
const BASE_API_TEST_URL = 'http://127.0.0.1:8080';
const BASE_API_DEV_URL = 'http://127.0.0.1:8080';

function getBaseAPIUrl(mode) {
    let baseAPIUrl;
    switch (mode) {
        case 'production':
            baseAPIUrl = BASE_API_PROD_URL;
            break;
        case 'test':
            baseAPIUrl = BASE_API_TEST_URL;
            break;

        default:
            baseAPIUrl = BASE_API_DEV_URL;
            break;
    }
    console.info('ℹ️ Base API url:', baseAPIUrl);
    return baseAPIUrl;
}

function getBasePublicPath(mode) {
    const basePublicPath = mode === 'production' ? BASE_PROD_URL : BASE_DEV_URL;
    console.info('ℹ️ Base public path:', basePublicPath);
    return basePublicPath;
}

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    console.info('ℹ️ Vite command:', command);
    console.info('ℹ️ Vite mode:', mode);
    console.info('ℹ️ Vite isSsrBuild:', isSsrBuild);
    console.info('ℹ️ Vite isPreview:', isPreview);
    console.info(' ');

    const basePublicPath = getBasePublicPath(mode);

    return {
        root: ROOT_DIR,
        base: basePublicPath,
        define: {
            __BASE_API_URL__: JSON.stringify(getBaseAPIUrl(mode)),
        },
        css: {
            postcss: {
                plugins: [
                    postcssPresetsEnv({ stage: 2, autoprefixer: true }),
                ],
            },
        },
        build: {
            outDir: OUTPUT_DIR,
            emptyOutDir: true,
            rollupOptions: {
                input: {
                    main: resolve(ROOT_DIR, 'index.html'),
                    thankYou: resolve(ROOT_DIR, 'thank-you', 'index.html'),
                },
            },
            assetsDir: 'assets',
            sourcemap: false,
            minify: 'terser',
            terserOptions: {
                mangle: true,
                compress: true,
            },
            cssMinify: 'lightningcss',
        },
        plugins: [
            handlebars({
                partialDirectory: resolve(ROOT_DIR, 'assets/html/partials'),
                context: {
                    title: 'Vite Handlebars',
                    description: 'Vite Handlebars Starter Template',
                },
            }),
            mode === 'production' && ViteMinifyPlugin(),
        ],
    };
});
