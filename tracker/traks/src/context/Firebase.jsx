import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCO_B1gl3CAYxnZHHwE3BsGpBTjN-UcO9w",
    authDomain: "tracks-f08b1.firebaseapp.com",
    projectId: "tracks-f08b1",
    storageBucket: "tracks-f08b1.appspot.com",
    messagingSenderId: "977717338174",
    appId: "1:977717338174:web:eea3a526fa5c84bbceb16f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
