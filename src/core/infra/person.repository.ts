import { Person } from "../domain/Person";
import { app } from "./firebase";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore/lite";

const db = getFirestore(app);

export async function addPerson(person: Person) {
  return await addDoc(collection(db, "person"), { ...person });
}

export async function queryPerson() {
  const q = query(collection(db, "person"), where("isActive", "==", true));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

  return querySnapshot;
}
