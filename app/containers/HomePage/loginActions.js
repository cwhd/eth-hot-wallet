/**
 * 
 * Login and logout
 */
import firebase from '../../firebaseConfig';

export function logout() {
  firebase.auth().signOut().then(() => {
    this.setState({
      user: null
    });
  });
}

export function login() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(result => {
    const user = result.user;
    this.setState({
      user
    });
  });
}