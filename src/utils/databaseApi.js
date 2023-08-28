import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, limit} from 'firebase/firestore';

export async function getPuzzleByRating(rating, margin) {
    const firebaseConfig = {
        apiKey: "AIzaSyA5EIpoxvITdhlp2UP9GdR75MLFzT5-mp0",
        authDomain: "pegasus-fdff4.firebaseapp.com",
        projectId: "pegasus-fdff4",
        storageBucket: "pegasus-fdff4.appspot.com",
        messagingSenderId: "548426755097",
        appId: "1:548426755097:web:577eb663349ff4b7004e88"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    const puzzleCollection = collection(db, "puzzles")
    const q = query(puzzleCollection, where("Rating", "<=", rating+margin), where("Rating", ">=", rating-margin), limit(1));

    let data = null
    
    await getDocs(q)
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            data = doc.data()
        });
    })
    .catch((error) => {
        console.error('Error getting documents: ', error);
    });

    return data
}