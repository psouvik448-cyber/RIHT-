# RIHT Lead Management

A responsive lead tracker hosted on GitHub Pages with Firebase Authentication + Cloud Firestore live sync.

## Free services
- GitHub Pages: static app hosting.
- Firebase Spark plan: Authentication + Cloud Firestore within free quotas. Google may change quotas; monitor Firebase usage and billing. Do not upgrade to Blaze if you want to keep this project free.

## 1. Create Firebase project
1. Open https://console.firebase.google.com/ and sign in with your Google account.
2. Click **Add project**. Name it `riht-lead-management`. You can disable Google Analytics.
3. In Project Overview, click the Web icon `</>` to register a web app. Name it `RIHT Lead Management`.
4. Copy the Firebase configuration object shown after registration.

## 2. Enable login
1. Firebase Console → Build → Authentication → Get started.
2. Sign-in method → Email/Password → Enable → Save.

## 3. Create database
1. Firebase Console → Build → Firestore Database → Create database.
2. Choose **Production mode** and a nearby India-supported location if offered. Database location cannot be changed later.
3. After it is created, open the **Rules** tab and replace the rules with the contents of `firestore.rules` in this folder. Click **Publish**.
4. These rules restrict each signed-in account to its own `users/{uid}/leads` records. Never use public test rules.

## 4. Add Firebase config to the app
1. Open `lead-management/index.html` in GitHub.
2. Find `const firebaseConfig = {`.
3. Replace all `PASTE_...` values with the exact values from your Firebase Web App config. Keep the quotes and commas.
4. Commit the change.

The web app config/API key is intended to be present in a browser app; security comes from Authentication and Firestore Rules. Never put a service-account private key in this file.

## 5. Open the app
After GitHub Pages is enabled for the repository (Settings → Pages → Deploy from a branch → main → /(root)), open:
https://psouvik448-cyber.github.io/RIHT-/lead-management/

The first time, use **নতুন অ্যাকাউন্ট তৈরি করুন** with your own email and a strong password. Then log in on your other devices using the same account. Leads sync live.

## Features
- Add, edit and delete leads
- Name / phone / course search and status filter
- New / Interested / Follow-up / Admitted / Not Interested statuses
- Follow-up date and notes
- Dashboard counts and CSV export
- Click-to-call and responsive mobile layout

## Important
- Firebase Spark is free within its published quotas, not unlimited or a lifetime guarantee. Keep an eye on usage and billing; do not add a paid billing account.
- This app currently supports one account's own private lead list per login. Do not share your login password.
- If you want only one administrator account, do not distribute the app's signup URL publicly. A person who creates their own account can only see their own separate data under these rules.
