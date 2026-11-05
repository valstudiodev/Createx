import { CreateEventPayload } from "@/entities/event/model/event-types";
import db from "@/shared/config/firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";


export async function createEvent(eventData: CreateEventPayload): Promise<string> {
  const eventsCollection = collection(db, 'events')

  const docRef = await addDoc(eventsCollection, eventData)

  return docRef.id
}