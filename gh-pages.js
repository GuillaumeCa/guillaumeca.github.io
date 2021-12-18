const ghpages = require("gh-pages");

console.log("Publishing exported site to gh-pages...");
ghpages.publish("out", (err) => {
  if (err) {
    console.error("Error when publishing site", err);
    return;
  }

  console.log("Site published successfully");
});
