import { store } from "./app/store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// const firebaseApp = {
//    apiKey: "AIzaSyAB_h55Yp6URwkXQN2H_6iKDq-r7KzZkNQ",
//    authDomain: "instagram-clone-b5e74.firebaseapp.com",
//    projectId: "instagram-clone-b5e74",
//    storageBucket: "instagram-clone-b5e74.appspot.com",
//    messagingSenderId: "526667561957",
//    appId: "1:526667561957:web:bc44e238d47b8b2fff0d0c",
// };
// const firebaseApp =  {
//    apiKey: "AIzaSyB5kRkmBYbEmklZfJa1k4BBzV1EAmwfhmI",
//    authDomain: "easy-paisa-coin-app.firebaseapp.com",
//    databaseURL: "https://easy-paisa-coin-app-default-rtdb.firebaseio.com",
//    projectId: "easy-paisa-coin-app",
//    storageBucket: "easy-paisa-coin-app.appspot.com",
//    messagingSenderId: "965278350185",
//    appId: "1:965278350185:web:3c8cd9d7e2ca2b379a9bf8",
//    measurementId: "G-1C22CBGT9L"
//  };
const firebaseApp = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_DATABASE_URL,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_APP_ID,
   measurementId: process.env.REACT_APP_MEASUREMENT_ID
 };
 

export const app = initializeApp(firebaseApp);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();
export const auth = getAuth();

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);
