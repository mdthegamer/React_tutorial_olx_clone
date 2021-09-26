import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

import {initializeApp} from 'firebase/app'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAs54Pm2oc1736yLCz1oBG6TCidYVH_IEg",
    authDomain: "olx-clone-46bb5.firebaseapp.com",
    projectId: "olx-clone-46bb5",
    storageBucket: "olx-clone-46bb5.appspot.com",
    messagingSenderId: "879230218250",
    appId: "1:879230218250:web:a6752ae6246ecb54d9aff3",
    measurementId: "G-4MQ3VXPE0V"
  };
export default firebase.initializeApp(firebaseConfig)