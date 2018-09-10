## Setting up the project in remote machine::

When you need to copy the project, you don't have to copy whole project folder but copy only:
- [`src` folder]
- [`.babelrc` file]
- [`package.json` file]
- [`webpack.config.js` fil]
- [`readme.md` file]

2: Run `npm install`.
3: Run `npm run watch` to create `index.html` and `main.js` bundled JS file.
4: Run `npm start` to start the `webpack-dev-server`
</ol>

If you wish to change the port number of the localhost:
=======================================================
1: Open `webpack.config.js` file and search for `devServer` object property and inside of that, check for `port` and change.
2: Stop the server in command line with `ctrl+c`.
3: Run the command line `npm start`
