
import { initializeApp } from "firebase/app";
import {getFirestore ,doc, getDoc} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCd8_5yHAvIDwoA3degT9Q-Nw9hHyZDWA0",
  authDomain: "testing-b6b73.firebaseapp.com",
  databaseURL: "https://testing-b6b73-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testing-b6b73",
  storageBucket: "testing-b6b73.appspot.com",
  messagingSenderId: "793745860630",
  appId: "1:793745860630:web:beec23bb495275ab136d37"
};


const app = initializeApp(firebaseConfig);
const firestoe  = getFirestore()

const data = doc(firestoe,'login/data')

async function read(username,password){
    const snap = await getDoc(data);
    if(snap.exists()){
        const docData  = snap.data();
        if(username == docData.username & password == docData.password){
            alert("done");
            
        }else{
            alert("wronf");
        }
    }
    
}
export default read;