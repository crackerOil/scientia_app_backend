import RssFeedListener from "./app_modules/rss_feed.js";


var feedListener = new RssFeedListener("https://scientia.ro/?format=feed&type=rss", 60000); // 60s interval between requests
feedListener.start();