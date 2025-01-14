# React Vite Library Boilerplate

Create code libraries using React, Typescript, and Vite to automatically release to NPM.

For example, you could create a component library for a design system (so someone can `import { ComponentName } from 'your-custom-library'`).

## Getting Started

### Preview the code

1. Clone this project: `git clone git@github.com:whoisryosuke/react-vite-library-boilerplate.git`
1. Install dependencies: `yarn`
1. Start the dev server: `yarn dev`

Open the app in your web browser: http://localhost:5174/

### Write code

Write code in `src/` and export any components, functions, etc in the `index.ts`.

### Release

1. Bump version in `package.json`
1. `yarn build`
1. `npm publish`
