const firebaseConfig = {
    apiKey: "AIzaSyCfCPqRhGyL7cmpICldCZChx2cyVe7P9Ww",
    authDomain: "reelocash.firebaseapp.com",
    projectId: "reelocash",
    storageBucket: "reelocash.firebasestorage.app",
    messagingSenderId: "134046729864",
    appId: "1:134046729864:web:7cea62a512f3141155013d
};
    firebase.initializeApp(firebaseConfig);
window.auth = firebase.auth();
window.db = firebase.firestore();
