import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ContactFormValues } from "../model/contact.types";
import db from "@/shared/config/firebase/firebase-config";


export async function createContact(values: ContactFormValues): Promise<string> {
  const contactsCollection = collection(db, 'contacts')

  const docRef = await addDoc(contactsCollection, {
    ...values,
    createdAt: serverTimestamp()
  })

  return docRef.id
}