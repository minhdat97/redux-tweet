# Redux-Tweet
Twitter clone built in react, redux, firebase, and webpack.

## Folder Structure

After running npm i, the project should look like this:
Note – individual component dirs nested under app/components/ contain presentational
       React components and are co-located with any individual style overrides
```
redux-tweet/
  .babelrc
  .eslintrc
  .gitignore
  README.md
  node_modules/
  package.json
  webpack.config.babel.js
  app/
    components/
      Autheniticate/
      FacebookAuthButton/
      Home/
      Logout/
      Modal/
      Navigation/
      Replies/
      Timeline/
      Tweet/
      TweetDetails/
      User/
      index.js
    config/
      constants.js
      routes.js
    containers/
      Autheniticate/
      FacebookAuthButton/
      Home/
      Logout/
      Modal/
      Navigation/
      Replies/
      Timeline/
      Tweet/
      TweetDetails/
      User/
      index.js
    helpers/
      api.js
      auth.js
      utils.js
    redux/
      modules/
        index.js
        likeCount.js
        listeners.js
        modal.js
        replies.js
        timeline.js
        tweets.js
        users.js
        usersLikes.js
        usersTweets.js
    sharedStyles/
      styles.css
    index.html
    index.js
```

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

Development mode includes hot model reloading, and will maintain app state when you make changes to your code, while updating your componenets in browser.<br>

### `npm run production`

Builds the app for production to the `dist` folder in the root dir.<br>
It correctly bundles React in production mode and optimizes the build for the best performance. This is generally a 33% performance gain.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run lint`

Runs the source code through eslint, which can be configured in the top-level .eslintrc file.

### `npm run fix`

Will attempt to fix linting errors automatically.

## TODO
Refactor to use immutable.js
