import React from "react";
import { useEffect, createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { auth } from "../../firebaseConfig";
const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    // Signup function
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    // Login function
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    // logout function
    function logout() {
        return auth.signOut();
    }

    // Password reset function
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    // update email
    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }
    // update password
    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
