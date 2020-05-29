import * as firebase from 'firebase/app';
import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyDhJ4tLEBpwIXop-z4NQuks6YwLVSj60u8",
    authDomain: "nuxtjs-todo.firebaseapp.com",
    databaseURL: "https://nuxtjs-todo.firebaseio.com",
    projectId: "nuxtjs-todo",
    storageBucket: "nuxtjs-todo.appspot.com",
    messagingSenderId: "1050403742363",
    appId: "1:1050403742363:web:7549e6fa7c65d935d91c3e",
    measurementId: "G-GBELVZCT3P"
  };
  
  var app = null;

  if (!firebase.apps.length){

    app = firebase.initializeApp(firebaseConfig)

  }
