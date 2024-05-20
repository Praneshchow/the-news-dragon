import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // creating new user in Firebase. 
    const createUser = (email, password) => {
        setLoading(true);           // when no user. 
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signin.
    const signIn = (email, password) => {
        setLoading(true);          // when no user. 
        return signInWithEmailAndPassword(auth, email, password);
    } 
    
    // sign out.
    const logOut = () => {
        setLoading(true);
        return signOut(auth);          // when no user. 
    }

    // It mainly a observer. If a user login in our site, the state will be change. 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer ', loggedUser);
            setUser(loggedUser);
            setLoading(false);          // when user exist. 
        })

        // when it is done the it returns unsubscribe() function call. 
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn, 
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;