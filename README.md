# isolated-kit

[![Greenkeeper badge](https://badges.greenkeeper.io/iamstarkov/isolated-kit.svg)](https://greenkeeper.io/)

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
