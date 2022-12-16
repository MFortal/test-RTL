import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfc07LdPSuECrVNn8lU_hQ5aBJJ83Xhzc",
  authDomain: "test-rtl.firebaseapp.com",
  projectId: "test-rtl",
  storageBucket: "test-rtl.appspot.com",
  messagingSenderId: "692160424711",
  appId: "1:692160424711:web:72937f43cf5da1e454b3a2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const itemsCollection = collection(db, "items");

// Чтение данных
export const getData = async () => {
  const querySnapshot = await getDocs(itemsCollection);
  const itemList = querySnapshot.docs.map((doc) => doc.data());
  return itemList;
};

// Попытка чтения данных в реальном времени из этого файла в Table
export const getData2 = () => {
  let items = [];
  onSnapshot(itemsCollection, (querySnapshot) => {
    items = [];
    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        type: doc.data().type,
        count: doc.data().count,
        positionX: doc.data().positionX,
        positionY: doc.data().positionY,
      };
      items.push(item);
    });
  });
  return items;
};

// Добавление элемента в бд
export const createData = async (item) => {
  await setDoc(doc(itemsCollection, item.id.toString()), {
    id: item.id,
    type: item.type,
    count: item.count,
    positionX: item.positionX,
    positionY: item.positionY,
  });
};

// Удаление элемента
export const deleteData = async (item) => {
  await deleteDoc(doc(itemsCollection, item.id.toString()));
};

// Oбновление количества элемента
export const updateCount = async (item, newCount) => {
  const itemRef = doc(itemsCollection, item.id);
  await updateDoc(itemRef, {
    count: newCount,
  });
};

// Oбновление позиции элемента
export const updatePositions = async (item, posX, posY) => {
  const itemRef = doc(itemsCollection, item.id);
  await updateDoc(itemRef, {
    positionX: posX,
    positionY: posY,
  });
};
