![node@latest: v19.0.1 (shields.io)](https://img.shields.io/badge/node%40latest-v19.0.1-c80000?style=flat-square&logo=npm) ![yarn@stable: 3.2.4 (shields.io)](https://img.shields.io/badge/yarn%40stable-3.2.4-2188b6?style=flat-square&logo=yarn) ![React@latest: 18.2.0 (shields.io)](https://img.shields.io/badge/react%40latest-^18.2.0-61dafb?style=flat-square&logo=react) ![Next.js: 12.3.0 (shields.io)](https://img.shields.io/badge/next@latest-^13.0.2-323130?style=flat-square&logo=nextdotjs) ![Typescript: lang (shields.io)](https://img.shields.io/badge/-typescript-3178c6?style=flat-square&logo=typescript&logoColor=white) ![antd@latest: 4.23.3 (shields.io)](https://img.shields.io/badge/antd%40latest-^4.24.1-1890ff?style=flat-square&logo=antdesign) ![tailwindcss (shields.io)](https://img.shields.io/badge/-tailwindcss-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)

## Table of content
 - [Installation](#installation)
 - [CLI Commands](#cli-commands)
 - [View host](#view-host)
 - [Important notes](#important-notes)

## Installation
    git clone git@github.com:hieu1871998/mezu-app-frontend.git
    cd mezu-app-frontend
    yarn install  

## CLI Commands
### Build:
	yarn build
### Development:
    yarn dev
### Production
	yarn start
	
## View host
    http://localhost:3000/

## Important notes
- Yarn [Plug'n'Play](https://yarnpkg.com/features/pnp) enabled.
- Next.js [appDir](https://beta.nextjs.org/docs/routing/fundamentals) enabled.
- Remember to replace `"typescript.tsdk": "./node_modules/typescript/lib"` -> `"typescript.tsdk": ".yarn/sdks/typescript/lib"` after running `yarn dev` or `yarn build` or any next related command.