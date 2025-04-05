// const fs = require("fs");
const puppeteer = require("puppeteer");

// const dir = "./_site/docs";
// const title = "Brad CV";

async function downloadPdfFromUrl(url, outputPath) {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: "new",
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.pdf({ path: outputPath, printBackground: true, format: "A4" });
  // const pdf = await page.pdf({
  //   path: "_site/docs/bradcvpuppeteer.pdf",
  //   printBackground: true,
  //   format: "A4",
  //   margin: {
  //     top: "0.5in",
  //     right: "0.5in",
  //     bottom: "0.5in",
  //     left: "0.5in",
  //   },
  // });
  await browser.close();
}
const targetUrl = "http://localhost:4321/";
const outputFile = "downloaded_page.pdf";

downloadPdfFromUrl(targetUrl, outputFile)
  .then(() => console.log(`PDF downloaded successfully at: ${outputFile}`))
  .catch((error) => console.error("Error:", error));

// if (!fs.existsSync(dir)) {
//   fs.mkdirSync(dir);
// }
// fs.readFile(pdfOut, "binary", function (err, stringFromFile) {
//   if (err) throw err;
//   // console.log(myRegex.test(stringFromFile));
//   // console.log(stringFromFile);
//   let changedFile = stringFromFile.replace(myRegex, "$1");
//   fs.writeFile(pdfOut, changedFile, "binary", function (err) {
//     if (err) throw err;
//   });
// });
