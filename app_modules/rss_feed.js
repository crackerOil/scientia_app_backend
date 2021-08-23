
import Parser from "rss-parser";
import NotificationManager from "./notification_manager.js";


class RssFeedListener extends Parser {
    constructor (url, interval) {
        super();
        this.url = url;
        this.interval = interval;
        this.lastUpdate = null;

        this.notificationManager = new NotificationManager();
    }

    start() {
        setInterval(async () => {
            console.log("Updating feed...");
            this.parseURL(this.url)
                .then((feed) => {
                    if (this.lastUpdate == null || this.lastUpdate != feed.items[0].title) {
                        this.lastUpdate = feed.items[0].title;
    
                        this.notificationManager.sendNotification(this.lastUpdate);
                    }
                })
                .catch((error) => {
                    console.log('Error updating feed:', error);
                });
        }, this.interval);
    }
}

export default RssFeedListener