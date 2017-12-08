import Firebase from 'firebase'

let config = {
  
}
export let firebase = Firebase.initializeApp(config);
let db = firebase.database();

export let venuesRef = db.ref('venues');
export let showsRef = db.ref('shows');
export let messageRef = db.ref('messages');