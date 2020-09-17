# Facebook Messenger Clone

## [https://facebook-messenger-clone-wdn.web.app/](https://facebook-messenger-clone-wdn.web.app/)

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Create Project
`$ npx create-react-app`

# Setup Firebase
- Create project on Firebase named facebook-messenger-clone-wdn
- Create app and hosting for facebook-messenger-clone-wdn
- `$ npm install -g firebase-tools`
- `$ firebase login`

# Install Material UI
- Install material ui
`$ npm install @material-ui/core`

# Create Cloud Firestore Database
- Create Collection named messages
- Add field and fill with message and username
- install firebase `$ npm install firebase`

# Install React Flip Move
react flip move for animation, use case for this project is chat animation
-  Goto
`https://github.com/joshwcomeau/react-flip-move`
- Install react flip move
`npm i -S react-flip-move`
- Usage with Functional Components (see in the github link)

# Install Material UI Icons
`$ npm i @material-ui/icons`

# Deploy to Firebase
1. Install firebase tools
`$ npm install -g firebase-tools`
2. Firebase Init
`$ firebase init`
- Are you ready to procees? Jawab Y
- Pilih Hosting: Configure and deploy Firebase Hosting sites
- What do you want to use as your public directory? (awalnya public ganti jadi build)
- Configure as a single-page app (rewrite all urls to /index.html)? (y/N) , jawab YES aja
- `$ npm run build`
- `$ firebase deploy`
- Cara cepat `$ npm run build && firebase deploy`
