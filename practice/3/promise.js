/**
 * filename: A-1891139-1-3.js
 * 분반: B
 * 학번: 1891139
 * 이름: 김도연
 * 문제: 1-3
 */

const fs = require("fs").promises;
const constants = require("fs").constants;
const path = require("path");

const folderName = "homework1";
const filename1 = "work1.txt";
const filename2 = "homework1.txt";
const buffer = Buffer.from([
  0x47, 0x6f, 0x6f, 0x64, 0x20, 0x6a, 0x6f, 0x62, 0x21,
]);

fs.access(`./${folderName}`, constants.F_OK | constants.W_OK | constants.R_OK)
  .then((data) => {
    console.log(`${folderName} folder already exist.\n`);
  })
  .catch((err) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.log(`${folderName} folder not exist.`);
        fs.mkdir(`./${folderName}`)

          .then((data) => {
            console.log(`${folderName} folder created.\n`);
            return fs.open(`./${folderName + path.sep + filename1}`, "w");
          })
          .then((data) => {
            console.log(
              `${folderName + path.sep + filename1} file (${
                data.fd
              }) is available.\n`
            );
          })
          .then((data) => {
            fs.rename(
              `./${folderName + path.sep + filename1}`,
              `./${folderName + path.sep + filename2}`
            );
            console.log(
              `${filename1} was changed to ${filename2} at .${
                path.sep + folderName
              }\n`
            );
          })
          .then((data) => {
            fs.writeFile(`./${folderName + path.sep + filename2}`, buffer);
            console.log(`${filename2} written.\n`);
          })
          //   .then((data) => {
          //     const data1 = fs.readFile(`./${folderName + path.sep + filename2}`);
          //     console.log(data1);
          //     console.log(`${filename2}: ${data1.toString()}`);
          //   });
          .then((data) => {
            return fs.readFile(`./${folderName + path.sep + filename2}`);
          })
          .then((data) => {
            console.log(`${filename2}: ${data.toString()}`);
          });
      }
    }
  });
