# Netflix GPT

1. This project was bootstrapped with below

### `npx create-react-app`.

2. We configured Tailwind using [Documents](https://tailwindcss.com/docs/guides/create-react-app)

3. Created Header
4. Routing of pages
5. Created Login Page
6. Sign up form
7. Form Validation
8. useRef
9. Added validation for username, password on sign 
10. Firebase setup
11. create a sign up user [Firebase API Docs](https://firebase.google.com/docs/auth/web/password-auth)
12. created sign in API
13. configure redux (`npm i react-redux`,`npm i -D @reduxjs/toolkit`)
13. [on Auth state chnaged API firebase]
(https://firebase.google.com/docs/reference/js/auth.user)
14. Configure store 
 - create app Store
 - create userSlice
15. Implemented Sign out
16. updated user profile 
Bug Fix

17. added constants to file
18. Registered in TMDB website to get token for API's
19. Get Data from now playing API of TMDB
20. Created custom hook 
21. Planing for main container, secondary container
23. Build Main container (added video backdrop, movie title)
24. added Movie card
25. added Movie List


## Setting Up Firebase for authentication

1. Go to google firebase website
2. Click on Get Started 
3. Create a project -> Regsiter a web app (will be in this (__<>__) symbol)
4. Install firebase to react app using `npm i firebase`
5. Add config file to react-app.
6. `npm install -g firebase-tools`
7. `firebase-login`
8. `firebase-init`
  - Hosting: Configure
  - existing project
  - select project you created
  - build
  - no
  - no

9. `npm run build`
10. `firebase deploy`
  

## Features

- Login/Sign In page
  - Sign In page
  - redirect to browse page on submit
- Browse (after authetication)
  - header
  - Main Movie
    -Movie tile
    - trailer playing
    - info
- Netflix GPT
  - Search bar
  - Movie suggestions








### CSS Tips:
Key Words:
- Z- index
- absolute
- background gradient
- background opacity
- aspect-video


Scenarios:
- For making two html blocks overlap use absolute for both the blocks


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
