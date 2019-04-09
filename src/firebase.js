import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyDRexkTfZ1VV3fmxy1yEIQN_qnEfeJg3bw",
  authDomain: "fir-vue-3d444.firebaseapp.com",
  databaseURL: "https://fir-vue-3d444.firebaseio.com",
  projectId: "fir-vue-3d444",
  storageBucket: "",
  messagingSenderId: "480173510141"
});

export const db = app.database();
export const namesRef = db.ref("names");
