import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

const HACKATHONS = 'Hackathons'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()
export const analytics = firebase.analytics;

const fireDb = {
  subscribeToCollection: (hackathon, collection, callback) => {
    let ref
    if (collection.toUpperCase() === 'FAQ') {
      ref = db.collection('FAQ').where('hackathonIDs', 'array-contains', hackathon)
    } else {
      ref = db.collection(HACKATHONS).doc(hackathon).collection(collection)
    }
    return ref.onSnapshot(snapshot => {
      const data = []
      snapshot.forEach(doc => {
        data.push(doc.data())
      })
      callback(data)
    })
  },
  getCollection: async (hackathon, collection) => {
    let ref
    let data
    if (collection.toUpperCase() === 'FAQ') {
      ref = db.collection('FAQ').where('hackathonIDs', 'array-contains', hackathon)
    } else {
      ref = db.collection(HACKATHONS).doc(hackathon).collection(collection)
    }
    data = await ref.get()
    data = data.docs.map(doc => doc.data())
    return data
  },
  getWebsiteData: async hackathon => {
    const ref = db.collection(HACKATHONS).doc(hackathon)
    const data = await ref.get()
    return data.data()
  },
  getHackathonData: async () => {
    const ref = db.collection('InternalWebsites').doc('Portal')
    const data = await ref.get()
    return data.data()
  },
}

export default fireDb
