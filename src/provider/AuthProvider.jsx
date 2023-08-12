import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext()
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]= useState(true)

    const createUser = (email,password)=>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoading(false)
        return signOut(auth)
    }
        
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
            console.log('logged isn user inside auth state change ', loggedUser);
            setUser(loggedUser)
            setLoading(false)
            
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;