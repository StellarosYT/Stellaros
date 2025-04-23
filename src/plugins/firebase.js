import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBVHAGWsdzmC265vdTYF7FEPaMBa3vGuGI",
  authDomain: "stellaros-cdaae.firebaseapp.com",
  projectId: "stellaros-cdaae",
  storageBucket: "stellaros-cdaae.firebasestorage.app",
  messagingSenderId: "203220925754",
  appId: "1:203220925754:web:90600a61b182174a85a403",
  measurementId: "G-GRRXRMNSTK"
};

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAnalytics = getAnalytics(firebaseApp)
export const firebasePerformance = getPerformance(firebaseApp)

export default function (app) {
  app.use(VueFire, firebaseApp)
}