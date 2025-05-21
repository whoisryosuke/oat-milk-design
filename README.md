![Oat Milk Design logo](/docs/branding/White%20on%20Black%20BG.png)

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
  href="https://fonts.googleapis.com/css2family=Hubot+Sans:ital,wght@0,200..900;1,200..900&IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
  rel="stylesheet"
/>
```

4. Use the components!: `import {Button} from '@whoisryosuke/oat-milk-design'`

### Icons

Use Box Icons from `react-icons`:

```shell
yarn add react-icons
```

Check the stories for examples of using icons from that library (like changing the `size`).

The colors should sync with the component since the icon library uses `currentcolor`, so as long as the parent component's `color` is what you need, it'll look right.

## Development

### Preview the code

1. Clone this project: `git clone git@github.com:whoisryosuke/oat-milk-design.git`
1. Install dependencies: `yarn`
1. Start the dev server: `yarn storybook`

Open the app in your web browser: http://localhost:4200/

### Write code

Write code in `src/` and export any components, functions, etc in the `index.ts`.

### Release

**Using GitHub:**

1. [Run the new version GitHub action.](https://github.com/whoisryosuke/oat-milk-design/actions/workflows/generate-version-tag.yml)
1. [Create a new release with the new tag.](https://github.com/whoisryosuke/oat-milk-design/releases/new)

**Or manually:**

1. Bump version in `package.json`
1. `yarn build`
1. `npm publish`
1. Create new release on GitHub and manually upload build.
