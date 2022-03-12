// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { query, where, getFirestore, addDoc, collection, getDocs, doc, deleteField, deleteDoc, setDoc, onSnapshot, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import TkChat from '../pages/TkChat'
// import { useNavigate, useParams } from "react-router-dom";


// const { name } = useParams()


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase


export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  //const auth = getAuth();
  //auth.languageCode = 'it';
  //provider.setCustomParameters({ 'login_hint': 'user@example.com'});

  let result4 = ""

  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // eslint-disable-next-line
      const token = credential.accessToken;
      // The signed-in user info.
      // eslint-disable-next-line
      const user = result.user;
      // ...
      // eslint-disable-next-line
      console.log(user, 'user check')
      result4 = user

    }).catch((error) => {
      // Handle Errors here.
      // eslint-disable-next-line
      const errorCode = error.code;
      // eslint-disable-next-line
      const errorMessage = error.message;
      // The email of the user's account used.
      // eslint-disable-next-line
      const email = error.email;
      // The AuthCredential type that was used.
      // eslint-disable-next-line
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorMessage, 'error message check')
      result4 = "error"
    });
  return result4

}

const apps = getApps
if (!apps.length) {
  initializeApp(firebaseConfig)
}

export const auth = getAuth();

export const createUser = async (email, password) => {
  // eslint-disable-next-line 
  let result2 = ""
  console.log("createUser")
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // eslint-disable-next-line 
      const user = userCredential.user;
      console.log("s")
      result2 = "success"
      // ...
    })
    .catch((error) => {
      //const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage)
      result2 = "error"
    });
  return result2
}

export const login = async (email, password) => {
  let result = ""
  console.log(email, password)
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // eslint-disable-next-line
      console.log("s")

      result = "success"

    })
    .catch((error) => {
      // eslint-disable-next-line
      //const errorCode = error.code;
      // eslint-disable-next-line

      result = "error"
    });
  console.log(result, "result")
  return result
}

export const logout = async () => {

  let result3 = ""

  await signOut(auth)
    .then(() => {
      // Sign-out successful.
      result3 = "success"
      console.log("ss")

    }).catch((error) => {
      // An error happened.
      result3 = "error"
      console.log("ee")
    });
  return result3
}

export const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}

export const db = getFirestore();

export const createDataInFirebase = async (name, message) => {
  let returnObj = ""
  console.log('firebase start')
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      message: message,
      time: "未実行"
    });
    returnObj = "test1"
    console.log("Document written with ID:", docRef.id);
  } catch (e) {
    returnObj = "test2"
    console.errror("Error adding document: ", e);
  }
  return returnObj
}

export const timestamp = async () => {
  const docRef = doc(db, 'objects', 'some-id');

  const updateTimestamp = await updateDoc(docRef, {
    timestamp: serverTimestamp()
  });
}





export const createDataSpecialInFirebase = async () => {
  await setDoc(doc(db, "users", "test"), {
    first: "AdaAda",
    last: "lovelace",
    born: 1815
  });
}


export const readData = async () => {
  console.log('readData')
  const q = query(collection(db, "users"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

export const updateData = async () => {
  const washingtonRef = doc(db, "users", "81NfTOeEcs3aaEnfYDhY");
  await updateDoc(washingtonRef, {
    capital: true
  });
};

export const deleteData = async () => {
  const cityRef = doc(db, 'users', 'programmingAcademy');
  await updateDoc(cityRef, {
    capital: deleteField()
  });
}

export const deletUserData = async () => {
  await deleteDoc(doc(db, 'users', 'programmingAcademy'));
}


export const myDataInFirebase = async (first, last, born) => {
  let returnObj = ""
  console.log('firebase start')
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: first,
      last: last,
      born: born
    });
    returnObj = "test1"
    console.log("Document written with ID:", docRef.id);
  } catch (e) {
    returnObj = "test2"
    console.error("Error adding document: ", e);
  }
}

export const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}

export const selectGetData = async () => {

  const q = query(collection(db, "users"), where("born", "==", "1996"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}





