import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
    let aliases: Array<{ find: RegExp; replacement: string }> = [];

    try {
        const packages = fs.readdirSync(
            path.resolve(__dirname, '../../packages')
        );
        for (const dirName of packages) {
            if (dirName === 'create-react-admin') continue;
            const packageJson = JSON.parse(
                fs.readFileSync(
                    path.resolve(
                        __dirname,
                        '../../packages',
                        dirName,
                        'package.json'
                    ),
                    'utf-8'
                )
            );
            aliases.push({
                find: new RegExp(`^${packageJson.name}$`),
                replacement: path.resolve(
                    __dirname,
                    `../../packages/${packageJson.name}/src`
                ),
            });
        }
    } catch (error) {
        console.error('Error setting up aliases:', error);
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
                    replacement: path.resolve(
                        __dirname,
                        'node_modules/react-admin'
                    ),
                },
            ],
        },
        server: {
            port: 8082,
        },
        define: { 'process.env': {} },
    };
});
