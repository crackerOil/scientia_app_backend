import admin from "firebase-admin";
import serviceAccount from "../credentials/fcm_credentials.js";


class NotificationManager {
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    }

    sendNotification(articleTitle) {
        let message = {
            notification: {
                title: 'Articol nou',
                body: articleTitle
            },
            topic: 'Notifications'
        };

        admin.messaging().send(message)
            .then((response) => {
                console.log('Successfully sent message:', response);
            })
            .catch((error) => {
                console.log('Error sending message:', error);
            });
    }
}

export default NotificationManager

