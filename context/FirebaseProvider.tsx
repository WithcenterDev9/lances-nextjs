"use client";

import { Context, createContext, useContext, useEffect, useState } from "react";
import { initializeApp, FirebaseApp, getApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDzV1yzHo_RPQsfRX-oyQTNHYtJ3ZMYzbc",
    authDomain: "flutter-forum-test.firebaseapp.com",
    projectId: "flutter-forum-test",
    storageBucket: "flutter-forum-test.firebasestorage.app",
    messagingSenderId: "174143505010",
    appId: "1:174143505010:web:a0b2758aa0c7785944f8eb",
    measurementId: "G-XB2CKB7LJW"
};

// we need to create a context for our firebase app
const FirebaseContext: Context<FirebaseApp | null> = createContext<FirebaseApp | null>(null);

// provider
export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
    const [firebaseApp, setFirebaseApp] = useState<FirebaseApp | null>(null);


    useEffect(() => {
        setFirebaseApp(initializeApp(firebaseConfig));
        console.log("Firebase initialized", getApp().name);
    }, []);

    return (
        <FirebaseContext.Provider value={firebaseApp || null}>
            {children}
        </FirebaseContext.Provider>
    );
}

// custom hook to use firebase
// this will throw an error if the context is not available
export const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return context;
}



