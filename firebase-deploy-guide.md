# Firebase Functions Deployment Guide

## 1. Install the Firebase CLI
```bash
npm install -g firebase-tools
```

## 2. Log in to Firebase
```bash
firebase login
```

## 3. Initialize a Firebase project
```bash
firebase init functions
```
Select an existing project or create a new one.

## 4. Configure your email password
```bash
firebase functions:config:set email.password="your-qq-email-app-password"
```

## 5. Install dependencies
```bash
cd functions
npm install
```

## 6. Local testing
```bash
firebase emulators:start
```

## 7. Deploy to Firebase
```bash
firebase deploy --only functions
```

## 8. Update the frontend code
After deployment, retrieve the actual function URL and update `functionUrl` in `src/views/Aboutus.vue`:
```javascript
const functionUrl = 'https://us-central1-YOUR-PROJECT-ID.cloudfunctions.net/sendContactEmail'



