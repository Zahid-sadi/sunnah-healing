import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export  const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] =useState()

    const [loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUser = (userInfo)=>{
        updateUser(auth.currentUser, userInfo)
    }

    const logOut =()=>{
        setLoading(true)
     return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const contextInfo ={
        createUser,
        updateUser,
        loginUser,
        logOut,
        loading,
        user
    }
    
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;