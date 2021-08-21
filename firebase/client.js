import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCs0jIu7IT-7e1lEeFbQRv7N9uNT0oTbZQ',
  authDomain: 'learning-react-d6b99.firebaseapp.com',
  databaseURL: 'https://learning-react-d6b99.firebaseio.com',
  projectId: 'learning-react-d6b99',
  storageBucket: 'learning-react-d6b99.appspot.com',
  messagingSenderId: '736017761465',
  appId: '1:736017761465:web:27ed206e486a1b9489c768'
}

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig)

export const loginWithGithub = () => {
  const githubProvide = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvide)
}

export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizeUser = mapUserFromFirebaseToUser(user)
      onChange(normalizeUser)
    })
}

const mapUserFromFirebaseToUser = (user) => {
  const { displayName, email, photoURL } = user
  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}
