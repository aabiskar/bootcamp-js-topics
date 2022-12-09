function makePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Completed");
    }, 2000);
  });
}

(function callPromise() {
  makePromise().then((data) => console.log("voila!!==>",data));
  console.log("You will get promise output in 2 seconds")
})();
