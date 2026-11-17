import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { EventFullDetails } from "../model/event-types";
import db from "@/shared/config/firebase/firebase-config";


export async function getEvents(): Promise<EventFullDetails[]> {
  const eventsCollection = collection(db, 'events')
  const snapshot = await getDocs(eventsCollection)

  // const events: EventFullDetails[] = []

  // snapShot.forEach((doc) => {
  //   const event: EventFullDetails = {
  //     id: doc.id,
  //     ...(doc.data()) as Omit<EventFullDetails, 'id'>
  //   }
  //   events.push(event)
  // });

  // return events

  return snapshot.docs.map((eventDoc) => ({
    id: eventDoc.id,
    ...eventDoc.data(),
  } as EventFullDetails))
}

// export async function getEventByID(eventId: string): Promise<EventFullDetails | null> {
//   const eventDocRef = doc(db, 'events', eventId)

//   const eventSnap = await getDoc(eventDocRef)

//   if (!eventSnap.exists()) {
//     console.log(`Document with ID ${eventId} is not found.`);
//     return null
//   }

//   // const eventData = eventSnap.data() as Omit<EventFullDetails, 'id'>

//   return {
//     id: eventSnap.id,
//     ...eventSnap.data(),
//   } as EventFullDetails;
// }

export async function getEventByID(
  eventId: string
): Promise<EventFullDetails | null> {
  const eventRef = doc(db, 'events', eventId);
  const eventSnap = await getDoc(eventRef);

  if (!eventSnap.exists()) {
    return null;
  }

  const data = eventSnap.data();

  return {
    id: eventSnap.id,
    title: data.title,
    date: data.date,
    startTime: data.startTime,
    endTime: data.endTime,
    format: data.format,
    type: data.type,
    teacherId: data.teacherId,
    details: {
      about: data.details.about,
      price: data.details.price,
      information: data.details.information,
    },
  };
}