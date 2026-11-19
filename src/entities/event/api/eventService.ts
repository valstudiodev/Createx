import { collection, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore";
import { Event, EventFullDetails } from "../model/event-types";
import db from "@/shared/config/firebase/firebase-config";

type EventDocument = Omit<Event, 'id' | 'isLatest'> & {
  isLatest?: boolean;
}

export async function getEvents(): Promise<EventFullDetails[]> {
  const eventsCollection = collection(db, 'events')
  const snapshot = await getDocs(eventsCollection)

  return snapshot.docs.map((eventDoc) => ({
    id: eventDoc.id,
    ...eventDoc.data(),
  } as EventFullDetails))
}

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

export async function getLatestEvents(): Promise<Event[]> {
  const eventsCollection = collection(db, 'events')

  const eventQuery = query(
    eventsCollection,
    orderBy('date', 'desc'),
    limit(3)
  )

  const snapshot = await getDocs(eventQuery)

  return snapshot.docs.map(doc => {
    const data = doc.data() as EventDocument

    return {
      ...data,
      id: doc.id,
      isLatest: data.isLatest ?? false
    }
  })
}