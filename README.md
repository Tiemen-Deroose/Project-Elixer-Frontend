# Elixer front-end

This is the front-end for my elixer project, made with React, Material UI and TailwindCSS, along with a number of other packages which you can find in package.json at the root folder.

## How to view the website

### `Online`

If you would like to view the online version of the website hosted on github, you can click on the following link; https://hogent-web.github.io/frontendweb-thomas-2122-tiemenderoose/

It should be noted however that, github pages currently does not to play nice with react-router (the repository name seems to be omitted); Manually refreshing will cause the browser to try to find a page like 'https://hogent-web.github.io/login', which does not exist.

### `Local`

If instead you'd like to run this project locally with working api calls, you'll need to have the back-end running locally, which you can find here; https://github.com/HOGENT-Web/webservices-thomas-2122-tiemenderoose.

Make sure to first run `yarn install` in order to install the dependencies.  
Afterwards, you can start the website with `yarn start`.

## Pages Description

### `Login & Register`

In order to log in, one can simply make a new account on the `Register` page with a fake email. You can then use this account to log in and view the site as a regular user.

If running this locally, you can also use the following preset accounts, assuming they're present in the local database;

```
user1:  
username: user1@domain.com  
password: pass123

user2 (admin):  
username: user2@domain.com  
password: pass123
```

### `Browse`

On login, you'll be lead to the first main page. This is where you can view and search for both art & jewelry. You can search by name or property of the item you're looking for. All users can favourite any displayed item. Admins can also edit and delete these items.

### `Art & Jewelry`

The Art & Jewelry pages are very similar, you can interact with the items all the same as you could on the browse page. If you are an admin, you can also click to add a new art/jewelry from here. Doing so will redirect you to the art/jewelry creation forms which have input validation.

## Additional React Documentation

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches cypress, go to E2E testing to view & run the tests

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
