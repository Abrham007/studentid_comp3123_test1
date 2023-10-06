// <<<-------------------- The Hard Way ---------------------------->>>

// function lowerCaseWords(mixedArray) {
//   const newArray = [];
//   return new Promise((resolve, rejecte) => {
//     mixedArray.forEach((element) => {
//       if (typeof element === "string") {
//         newArray.push(element.toLowerCase());
//       }
//     });
//     resolve(newArray);
//   });
// }

// <<<-------------------- The Easy Way ---------------------------->>>

async function lowerCaseWords(mixedArray) {
  const newArray = mixedArray
    .filter((element) => typeof element === "string")
    .map((element) => element.toLowerCase());
  return newArray;
}

const mixedArray = ["PIZZA", 10, true, 25, false, "WINGS"];
lowerCaseWords(mixedArray).then((newArray) => console.log(newArray));
