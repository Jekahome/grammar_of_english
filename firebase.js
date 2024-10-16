// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfZVAvR8bDfk3E0MCzmTxhNGonV3lJkB8",
    authDomain: "grammar-of-english.firebaseapp.com",
    projectId: "grammar-of-english",
    storageBucket: "grammar-of-english.appspot.com",
    messagingSenderId: "691355325894",
    appId: "1:691355325894:web:51edad1e0e76361f30cec7",
    measurementId: "G-78LYTLBM7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Инициализация Firestore
const db = getFirestore(app);

//const auth = firebase.auth();
const auth = getAuth(app);

export let currentUser = null;

export function getCurrentUser() {
    return currentUser; // Возвращаем текущее значение currentUser
}

// Функция регистрации
export async function signUp(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        currentUser = userCredential.user;
        console.log('User signed up:', currentUser);
        return currentUser;
    } catch (error) {
        console.error('Error signing up:', error);
        throw error; // Передаем ошибку дальше
    }
}

// Функция входа
export async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        currentUser = userCredential.user;
        console.log('User signed in:', currentUser);
        return currentUser;
    } catch (error) {
        console.error('Error signing in:', error);
        throw error; // Передаем ошибку дальше
    }
}



// Функция выхода из аккаунта
export async function logOut() {
    try {
        await signOut(auth);
        console.log("User signed out");
    } catch (error) {
        console.error("Sign out error: ", error);
    }
}





// Функция для проверки авторизации и модификации страницы
function checkAuthAndModifyPage() {
    const leftBlock = document.querySelector('.left-block');  // Селектор для вашего блока
    if (!leftBlock) {
        console.error("Element with class 'left-block' not found.");
        return;
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Пользователь авторизован, показываем приветствие и кнопку выхода
            leftBlock.innerHTML = `
                <p>Welcome, ${user.email.split('@')[0]}</p>
                <button id="logout-btn">Log Out</button>
            `;

            // Добавляем событие для кнопки выхода
            document.getElementById('logout-btn').addEventListener('click', () => {
                logOut();
            });
            currentUser = user;
        } else {
            currentUser = null;
            // Пользователь не авторизован, показываем форму регистрации и входа
            leftBlock.innerHTML = `
                <input type="email" id="email-input" placeholder="Email">
                <input type="password" id="password-input" placeholder="Password">
                <button id="sign-up-btn">Register</button>
                <button id="sign-in-btn">Sign In</button>
            `;

            const signInBtn = document.getElementById('sign-in-btn');
            signInBtn.style.pointerEvents = 'auto';

            // Добавляем события для регистрации и входа
            document.getElementById('sign-up-btn').addEventListener('click', () => {
                const email = document.getElementById('email-input').value;
                const password = document.getElementById('password-input').value;
                signUp(email, password);
            });

            document.getElementById('sign-in-btn').addEventListener('click', () => {
                alert('Hi');
                const email = document.getElementById('email-input').value;
                const password = document.getElementById('password-input').value;
                signIn(email, password);
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    checkAuthAndModifyPage();
});

//----------------------------------------------------------------------------------

// Функция для сохранения результатов упражнений
/*
const userId = "user123";  // Например, ID пользователя
const results = { score: 85, completedAt: new Date() };

saveExerciseResults(userId, results);
*/
async function saveExerciseResults(userId, results) {
    const db = getFirestore();  // Получение экземпляра Firestore
    try {
        await setDoc(doc(db, 'exerciseResults', userId), {
            results: results
        });
        console.log('Results saved successfully');
    } catch (error) {
        console.error('Error saving results:', error);
    }
}

// Функция для получения результатов упражнений
/*
const userId = "user123";

getExerciseResults(userId);
*/
async function getExerciseResults(userId) {
    const db = getFirestore();  // Получение экземпляра Firestore
    try {
        const docRef = doc(db, 'exerciseResults', userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log('Results:', docSnap.data().results);
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        console.error('Error getting document:', error);
    }
}
