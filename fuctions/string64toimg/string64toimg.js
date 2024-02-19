const fs = require("fs");
const path = require("path");

async function base64ToImage(base64String, outputFileName) {
  const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, "");
  const buffer =await Buffer.from(base64Data, "base64");

  await fs.writeFileSync(outputFileName, buffer, { encoding: "base64" });

  console.log(`Image saved as ${outputFileName}`);
}

// Example usage
const base64String = ""
const outputFileName = "hellow.jpg";

base64ToImage(base64String, outputFileName);
