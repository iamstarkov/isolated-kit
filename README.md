# isolated-kit

* [react-jss/theming](#react-jss-theming)
* [Install](#install)
* [Getting-started](#getting-started)
* [Usage](#usage)
  * [Components](#components)
  * [kitInitize](#kitInitize)
  * [theme](#theme)
  * [hocs](#hocs)
* [License](#license)

## [Install](#install)

```sh
npm install --save-dev isolated-kit
# or
yarn add isolated-kit
```

## [react-jss/theming](#react-jss-theming)

```sh
git clone git@github.com:cssinjs/react-jss.git
cd react-jss
git checkout feat/theming
npm install
npm run build:lib
npm link
cd ..

git clone git@github.com:iamstarkov/isolated-kit.git
cd isolated-kit
git checkout feat/react-jss-with-theming
npm install
npm link react-jss
npm start
```
Open http://localhost:6060/ and look at `DynamicThemedBox` and `StaticThemedBox` components.

## [Getting Started](#getting-started)

```jsx
// your app
import { ThemeProvider, theme } from 'isolated-kit';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>

// your components
import { Button } from 'isolated-kit';

// <Button />
```

## [Usage](#usage)

### [Components](#components)

```js
import { Alert, Button } from 'isolated-kit';
```

### [kitInitize](#kitinitize)

```js
import { kitInitize } from 'isolated-kit';
```

### [theme](#theme)

```js
import { theme } from 'isolated-kit';
```

### [hocs](#hocs)

```js
// Use components with this
import { themeProvider } from 'isolated-kit';

// write your own components with these
import { withTheme, injectSheet } from 'isolated-kit';
```

## [License](#license)

MIT © [Vladimir Starkov][]

[Vladimir Starkov]: https://iamstarkov.com/
