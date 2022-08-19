import { getDocs, collection, where } from "firebase/firestore";
import { dateFormat } from "../utils/firestoreDateFormat";
import db from "../config/firebase";

const listOrders = async () => {
  return (await getDocs(collection(db, "orders"))).docs.map(doc => {
    const { patrimony, status, created_at } = doc.data();
    return {
      id: doc.id,
      patrimony,
      when: dateFormat(created_at),
      status,
    };
  });
};

const editOrders = async (orderId: string) => {
  return (
    await getDocs(collection(db, "orders"), where("id", "==", orderId))
  ).docs.map(doc => {
    const { patrimony, status, created_at } = doc.data();
    return {
      id: doc.id,
      patrimony,
      when: dateFormat(created_at),
      status,
    };
  });
};

const deleteOrders = async () => {
  return (await getDocs(collection(db, "orders"))).docs.map(doc => {
    const { patrimony, status, created_at } = doc.data();
    return {
      id: doc.id,
      patrimony,
      when: dateFormat(created_at),
      status,
    };
  });
};

export { listOrders };
