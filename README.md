# auth-linking

###### Auto Deep linking with Authentication Flow

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

You need to provide an `onAuthChange` prop to `AuthLinkingProvider`. This a function that should return a promise with the user or truthy value (if logged in) and null or falsy (if the user is not logged in).

```js
    const onAuthChange = () => {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, resolve, reject);
      });
    };
    ...

    <AuthLinkingProvider onAuthChange={onAuthChange}>
```

### useAutoRedirectToDeepLink

Call this hook inside a screen that will render after all auth flow is completed. So this hook will automatically redirect to the deep link through which the app is opened.

```js
import { useAutoRedirectToDeepLink } from "auth-linking";

...

const Home = () => {
  useAutoRedirectToDeepLink()

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
