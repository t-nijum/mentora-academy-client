import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    // console.log(user, loading);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

    const logout = () => {
        return signOut(auth);
    }
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }
    // Forget Password
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const modifyUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        });
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)

        })
        return () => {
            unsubscribe();

        }
    }, [])
    const authData = {
        user,
        setUser,
        createUser,
        logout,
        loginUser,
        loading,
        setLoading,
        updateUser,
        forgetPassword,
        modifyUser,
        signInWithGoogle,
    }
    return <AuthContext value={authData}>{children}</AuthContext>;

};

export default AuthProvider;