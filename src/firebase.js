import firebase from "firebase"

const firebaseApp = firebase.initializeApp ({
        apiKey: "AIzaSyAibo72DX2g72Bmahi9u4r1ihq1V28a_kk",
        authDomain: "messenger-clone-7b7dc.firebaseapp.com",
        projectId: "messenger-clone-7b7dc",
        storageBucket: "messenger-clone-7b7dc.appspot.com",
        messagingSenderId: "68665378936",
        appId: "1:68665378936:web:da29f2dacfe6b3b43a058d",
        measurementId: "G-3DCKQR9HSD"
      });

const db = firebaseApp.firestore();

export { db }