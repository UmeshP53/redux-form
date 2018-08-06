Setting up the project in remote machine::
==========================================
<ol>
    <li>When you need to copy the project, you don't have to copy whole project folder but copy only:</ol>
        <ul>
            <li>`src` folder</li>
            <li>`.babelrc` file</li>
            <li>`package.json` file</li>
            <li>`webpack.config.js` file</li>
            <li>`readme.md` file</li>
        </ul>
    </li>
2: Run `npm install`.
3: Run `npm run watch` to create `index.html` and `main.js` bundled JS file.
4: Run `npm start` to start the `webpack-dev-server`
</ol>

If you wish to change the port number of the localhost:
=======================================================
1: Open `webpack.config.js` file and search for `devServer` object property and inside of that, check for `port` and change.
2: Stop the server in command line with `ctrl+c`.
3: Run the command line `npm start`
