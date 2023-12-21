import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import toast from "react-hot-toast";
import { app } from "../Firebase/Firebase.config";




export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const handleUpdateprofile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {

        toast.success('You have been logged out.')
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {


            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false)


        });
        return () => {
            return unsubscribe;
        }

    }, [user])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin,
        handleUpdateprofile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;