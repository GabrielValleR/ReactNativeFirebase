import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
        apiKey: "AIzaSyD1ST9l9Gdul478hlkl5akIjiql_NFbEsk",
        authDomain: "toptarefas.firebaseapp.com",
        projectId: "toptarefas",
        storageBucket: "toptarefas.appspot.com",
        messagingSenderId: "399566406858",
        appId: "1:399566406858:web:f18b12c69f0314463a2033",
        measurementId: "G-821EG5L80N"
};
if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
}
export default firebase;