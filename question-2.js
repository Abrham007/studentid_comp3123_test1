function resolvedPromise() {
  return new Promise((resolve, rejecte) => {
    setTimeout(() => resolve({ message: "delayed success!" }), 500);
  });
}

function rejectedPromise() {
  return new Promise((resolve, rejecte) => {
    setTimeout(() => rejecte({ error: "delayed exception!" }), 500);
  });
}

resolvedPromise().then((message) => console.log(message));
rejectedPromise().catch((error) => console.log(error));
