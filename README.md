<h1 align="center">
    <img alt="Rocketshoes" src="https://res.cloudinary.com/jvpoletti/image/upload/v1582415333/rocketshoes_logo.png" />
    <br>
</h1>

<h4 align="center">
  Shoe shopping made easy with this application build in React Native!
</h4>

<p align="center">
  <a href="#checkered_flag-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rotating_light-attetion">Attetion</a>
</p>

## :checkered_flag: Technologies

This project was developed in order to complete a challenge from the [RocketSeat](https://rocketseat.com.br/) team using the following technologies:

-   [React Native](https://facebook.github.io/react-native/)
-   [Redux](https://redux.js.org/)
-   [Redux Saga](https://github.com/redux-saga/redux-saga)
-   [Immer](https://github.com/immerjs/immer)
-   [styled-components](https://styled-components.com/)
-   [Axios](https://github.com/axios/axios)
-   [prop-types](https://github.com/airbnb/prop-types)
-   [Ngrok](https://ngrok.com/)
-   [VS Code][vc] with [EditorConfig][vceditconfig], [ESLint][vceslint] and [Prettier][prettier]

## :information_source: How To Use

In order to run this application, it's required that you install [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone git@github.com:joao96/react-native-rocketshoes.git

# Go into the repository
$ cd react-native-rocketshoes

# Install dependencies
$ yarn

# Set Metro
$ yarn start --reset-cache

# Install the app on device (Android)
$ react-native run-android

# Install the app on device (IOS)
$ react-native run-ios
```

## :rotating_light: Attetion
The products inside the app come from a [json-server](https://github.com/typicode/json-server) file. With that in mind, run the following:

```
$ json-server server.json -p 3333
```

Also, once the server is up and running, you need to install [Ngrok](https://ngrok.com/). Once installed, enter:

```
$ ngrok http 3333
```

Copy the first Forwarding URL (http) and add it to the *baseURL* field inside src/services/api.js.

---
## That's all! 😎

[Get in touch!](https://www.linkedin.com/in/jvpoletti/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://prettier.io/
