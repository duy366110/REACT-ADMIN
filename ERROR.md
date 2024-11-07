# REACT ADMIN
    - Sử dụng yarn


# EXAMPLE DEMO

    1) NẾU RUN APP GẶP ERROR vite.config.ts:

        import { defineConfig } from 'vite';

        import path from 'path';
        import fs from 'fs';
        import react from '@vitejs/plugin-react';
        import { visualizer } from 'rollup-plugin-visualizer';
        import preserveDirectives from 'rollup-preserve-directives';
        import { fileURLToPath } from 'url';

        const **filename = fileURLToPath(import.meta.url);
        const **dirname = path.dirname(\_\_filename);

        // https://vitejs.dev/config/
        export default defineConfig(async () => {
        const packages = fs.readdirSync(path.resolve(**dirname, '../../packages'));
        const aliases: Record<string, string> = {
        'data-generator-retail': path.resolve(**dirname, '../data-generator/src'),
        };

            for (const dirName of packages) {
                if (dirName === 'create-react-admin') continue;

                const packageJsonPath = path.resolve(__dirname, '../../packages', dirName, 'package.json');
                const packageJsonURL = `file://${packageJsonPath.replace(/\\/g, '/')}`;
                const packageJson = await import(packageJsonURL, { assert: { type: 'json' } });

                aliases[packageJson.default.name] = path.resolve(
                    __dirname,
                    `../../packages/${packageJson.default.name}/src`
                );
            }

            return {
                plugins: [
                    react(),
                    visualizer({
                        open: process.env.NODE_ENV !== 'CI',
                        filename: './dist/stats.html',
                    }),
                ],
                define: {
                    'process.env': process.env,
                },
                server: {
                    port: 8000,
                    open: true,
                },
                base: './',
                esbuild: {
                    keepNames: true,
                },
                build: {
                    sourcemap: true,
                    rollupOptions: {
                        plugins: [preserveDirectives()],
                    },
                },
                resolve: {
                    preserveSymlinks: true,
                    alias: [
                        ...Object.keys(aliases).map(packageName => ({
                            find: packageName,
                            replacement: aliases[packageName],
                        })),
                    ],
                },
            };

        });

# EXAMPLE SIMPLE

    1) Nếu yarn run run-simple gặp lỗi: import { useTranslate } from 'react-admin';

        - bước 1:

            yarn add react-admin

        - bước 2: Thêm config tsconfig.json
            "baseUrl": ".",
            "paths": {
                "react-admin": ["./node_modules/react-admin"],
                "@mui/icons-material/*": ["./node_modules/@mui/icons-material/esm/*"]
            }

        - bước 3: chỉnh sửa vite.config.ts

            import react from '@vitejs/plugin-react';
            import path from 'path';
            import fs from 'fs';
            import { defineConfig } from 'vite';

            export default defineConfig(async () => {
                let aliases: Array<{ find: RegExp; replacement: string }> = [];
                
                try {
                    const packages = fs.readdirSync(path.resolve(__dirname, '../../packages'));
                    for (const dirName of packages) {
                        if (dirName === 'create-react-admin') continue;
                        const packageJson = JSON.parse(
                            fs.readFileSync(
                                path.resolve(__dirname, '../../packages', dirName, 'package.json'),
                                'utf-8'
                            )
                        );
                        aliases.push({
                            find: new RegExp(`^${packageJson.name}$`),
                            replacement: path.resolve(__dirname, `../../packages/${packageJson.name}/src`),
                        });
                    }
                } catch (error) {
                    console.error("Error setting up aliases:", error);
                }

                return {
                    plugins: [react()],
                    resolve: {
                        alias: [
                            ...aliases,
                            {
                                find: /^@mui\/icons-material\/(.*)/,
                                replacement: '@mui/icons-material/esm/$1',
                            },
                            {
                                find: 'react-admin',
                                replacement: path.resolve(__dirname, 'node_modules/react-admin'),
                            },
                        ],
                    },
                    server: {
                        port: 8080,
                    },
                    define: { 'process.env': {} },
                };
            });
