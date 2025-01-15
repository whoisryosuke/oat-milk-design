# Oat Milk Design

Design system and UI components for prototyping.

## Getting Started

1. Install the library: `yarn add @whoisryosuke/oat-milk-design`
2. Wrap your app in the `<AppWrapper>` component.
3. Add the fonts to your app wherever appropriate (ideally in the `<head>` of the HTML):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Hubot+Sans:ital,wght@0,200..900;1,200..900&family=Inter+Tight:ital,wght@0,600;1,600&display=swap"
  rel="stylesheet"
/>
```

4. Use the components!: `import {Button} from '@whoisryosuke/oat-milk-design'`

## Development

### Preview the code

1. Clone this project: `git clone git@github.com:whoisryosuke/react-vite-library-boilerplate.git`
1. Install dependencies: `yarn`
1. Start the dev server: `yarn storybook`

Open the app in your web browser: http://localhost:4200/

### Write code

Write code in `src/` and export any components, functions, etc in the `index.ts`.

### Release

1. Bump version in `package.json`
1. `yarn build`
1. `npm publish`
