import { getApps, initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { query, where, getFirestore, addDoc, collection, getDocs, doc, deleteField, deleteDoc, setDoc, onSnapshot, getDoc, updateDoc, Timestamp, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// 初期化
const apps = getApps
if (!apps.length) {
  initializeApp(firebaseConfig)
}
export const auth = getAuth();
export const db = getFirestore();
const provider = new GoogleAuthProvider();

export const googleLogin = async () => {
  await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("🚀 ~ file: firebase.js ~ line 32 ~ .then ~ user", user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log("🚀 ~ file: firebase.js ~ line 37 ~ .then ~ errorCode", errorCode)
    const errorMessage = error.message;
    console.log("🚀 ~ file: firebase.js ~ line 39 ~ .then ~ errorMessage", errorMessage)
    // The email of the user's account used.
    const email = error.email;
    console.log("🚀 ~ file: firebase.js ~ line 42 ~ .then ~ email", email)
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("🚀 ~ file: firebase.js ~ line 45 ~ .then ~ credential", credential)
    // ...
  });

}

export const createUser = async (email, password) => {
  let result2 = ""
  console.log("createUser")
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("s", user)
      result2 = "success"
    })
    .catch((error) => {
      const errorMessage = error.message;
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
      console.log("s", userCredential.user)
      result = "success"
    })
    .catch((error) => {
      console.log("🚀 ~ file: firebase.js ~ line 76 ~ login ~ error", error)      
      result = "error"
    });
  console.log(result, "result")
  return result
}

export const logout = async () => {
  let result3 = ""
  await signOut(auth)
    .then(() => {
      result3 = "success"
      console.log("ss")
    }).catch((error) => {
      result3 = "error"
      console.log("ee")
    });
  return result3
}

export const createDataInFirebase = async (name, message) => {
  let returnObj = ""
  console.log('firebase start', name, message)
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      message: message,
      time: serverTimestamp()
    });
    console.log("Document written with ID:", docRef.id);
  } catch (e) {
    console.log('firebase start2')
    returnObj = "test2"
    console.errror("Error adding document: ", e.message);
  }
  return returnObj
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
  const q = query(collection(db, "messages"));
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
  console.log('firebase start')
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: first,
      last: last,
      born: born
    });
    console.log("Document written with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

export const selectGetData = async () => {
  const q = query(collection(db, "users"), where("born", "==", "1996"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
