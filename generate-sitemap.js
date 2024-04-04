const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

// Define the hostname of your website
const hostname = "https://www.lovepet.rs";

// Define the URLs of your website
const urls = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "weekly", priority: 0.8 },
  { url: "/services", changefreq: "weekly", priority: 0.8 },
  // Add more URLs as needed
];

// Create a writable stream to store the sitemap
const writeStream = createWriteStream("sitemap.xml");

// Create a new sitemap stream
const sitemapStream = new SitemapStream({ hostname });

// Add URLs to the sitemap
urls.forEach((url) => {
  sitemapStream.write(url);
});

// End the stream
sitemapStream.end();

// Wait for the stream to finish and write the sitemap to the file
streamToPromise(sitemapStream)
  .then((data) => {
    writeStream.write(data);
    writeStream.end();
    console.log("Sitemap generated successfully.");
  })
  .catch((error) => {
    console.error("Error generating sitemap:", error);
  });
