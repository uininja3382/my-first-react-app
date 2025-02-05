// 1sec = 1000ms 2 secs = 2000milliseconds

/*const fetchData = (url, callback) => {
  setTimeout(() => {
    const data = { name: "Madhu", age: 30 };
    callback(data);
  }, 5000);
};

console.log("Data is pending");
fetchData("somerurl", (result) => {
  console.log("Data recived", result);
});
console.log("Continue with other tasks");
*/
//Promises
console.log("Data is pending");
const fetchDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Madhu" };
      if (data) {
        resolve(data);
      } else {
        const error = new Error("There is an error happened");
        reject(error);
      }
    }, 3000);
  });
};

fetchDataPromise()
  .then((data) => {
    console.log("Data received", data);
  })
  .catch((error) => console.log(error));
console.log("Continue with other tasks");


// async and await very very important
