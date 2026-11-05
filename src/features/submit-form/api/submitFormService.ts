import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { SubmitFormType, SubmitFormValues } from "../model/submitForm.types";
import db from "@/shared/config/firebase/firebase-config";


export async function createFormSubmissions(values: SubmitFormValues, type: SubmitFormType) {
  const submissionsCcollection = collection(db, 'formSubmissions')

  const docRef = await addDoc(submissionsCcollection, {
    ...values,
    type,
    status: 'new',
    createdAt: serverTimestamp()
  })

  return docRef.id
}