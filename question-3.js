import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const path = `${__dirname}/Logs`;

const NUMBEROFFile = 10;

function addFiles() {
  fs.mkdir(path, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("New directory successfully created.");
    }
  });

  for (let i = 0; i < NUMBEROFFile; i++) {
    let fileName = `log${i}.txt`;
    let filePath = `${path}/${fileName}`;
    let buffer = new Buffer.from(fileName);

    fs.open(filePath, "a", function (err, fd) {
      if (err) {
        console.log("Cant open file");
      } else {
        fs.write(fd, buffer, (err, writtenbytes) => {
          if (err) {
            console.log("Cant write to file");
          } else {
            console.log(fileName);
          }
        });
      }
    });
  }
}

function removeFiles() {
  for (let i = 0; i < NUMBEROFFile; i++) {
    let fileName = `log${i}.txt`;
    let filePath = `${path}/${fileName}`;
    fs.unlink(filePath, (err) => {
      if (err) {
        throw err;
      }

      console.log(`delete files...${fileName}.`);
    });
  }
}

// addFiles();
removeFiles();
