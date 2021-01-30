  import  firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyC4MH5AWi-95Hf0NbHm_SzOX2fLHIInlBA",
    authDomain: "firegram-78003.firebaseapp.com",
    projectId: "firegram-78003",
    storageBucket: "firegram-78003.appspot.com",
    messagingSenderId: "680564492066",
    appId: "1:680564492066:web:4a5a8d3e211b9432bd477b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  const ProjectStorage = firebase.storage();
  const ProjectFireStore  = firebase.firestore(); 
  const TimeStamp =firebase.firestore.FieldValue.serverTimestamp;
  export {ProjectStorage ,ProjectFireStore ,TimeStamp  };