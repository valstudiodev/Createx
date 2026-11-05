import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { EventFullDetails } from "../model/event-types";
import db from "@/shared/config/firebase/firebase-config";


export async function getEvents(): Promise<EventFullDetails[]> {
  const eventsCollection = collection(db, 'events')
  const snapShot = await getDocs(eventsCollection)

  const events: EventFullDetails[] = []

  snapShot.forEach((doc) => {
    const event: EventFullDetails = {
      id: doc.id,
      ...(doc.data()) as Omit<EventFullDetails, 'id'>
    }
    events.push(event)
  });

  return events
}

export async function getEventByID(eventId: string): Promise<EventFullDetails | null> {
  const eventDocRef = doc(db, 'events', eventId)

  const eventSnap = await getDoc(eventDocRef)

  if (!eventSnap.exists()) {
    console.log(`Document with ID ${eventId} is not found.`);
    return null
  }

  const eventData = eventSnap.data() as Omit<EventFullDetails, 'id'>
  console.log('Event data:', eventData);
  console.log('About:', eventData.about);
  console.log('Is about array:', Array.isArray(eventData.about));

  return {
    id: eventSnap.id,
    ...eventData
  }
}