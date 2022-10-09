# auth-linking

###### Deep linking with Authentication Flow

Deep linking is very easy to use with authentication. But some people take it hard way. So this package will help you to achieve the easiest way to handle Deep linking with Authentication Flow.

## Installation

```sh
npm install auth-linking
```

```sh
yarn add auth-linking
```

## Usage

### AuthLinkingProvider

You need to wrap your app with `AuthLinkingProvider`.

```js
import AuthLinkingProvider from "auth-linking";

...

const App = () => {
  return (
    <AuthLinkingProvider theme="light">
      {/* Your app components */}
    </AuthLinkingProvider>
  );
};

export default App;
```

### `onAuthChange` prop

You can provide a `onAuthChange` prop to `AuthLinkingProvider`. This a function that should return a promise with the user or null (if the user is not logged in).
_If you are using `firebase js sdk` you don't need to provide this prop._

```js
    <AuthLinkingProvider onAuthChange={onAuthChange}>
```

### useAutoRedirect

Call this hook inside a screen that will render after all auth flow is completed. So this hook will automatically redirect to the deep link through which the app is opened.

```js
import { useAutoRedirect } from "auth-linking";

...

const Home = () => {
    useAutoRedirect()

  return (
    <View>{...}</View>
  );
};
```

All done.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
