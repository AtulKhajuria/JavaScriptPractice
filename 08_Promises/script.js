const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (!true) resolve();
    else reject("Error:Something went wrong");
  }, 1000);
});
promiseOne
  .then(function () {
    console.log("PromiseConsumed");
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Either promise is resolved or rejected");
  });

// ***************************

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!true) {
      console.log("Async task is completed");
      resolve({ username: "Atul", password: "123" });
    } else {
      reject("Promise 2 Rejected");
    }
  }, 1000);
});

promiseTwo
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// ****************************

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("This is the promise three");
    resolve({ userName: "JS", password: "1234" });
  }, 1000);
});

const promiseThreeConsumed = async function () {
  const response = await promiseThree;
  console.log(response);
};

promiseThreeConsumed();

// **********************

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      console.log("Promise four resolved here");
      resolve({ userName: "Python", password: "12345" });
    } else {
      reject("Promise four rejected");
    }
  }, 1000);
});

const promiseFourConsumed = async () => {
  try {
    const response = await promiseFour;
    console.log(response);
    console.log(response.userName);
  } catch (error) {
    console.log(error);
  }
};

promiseFourConsumed();

// *******************

fetch("https://randomuser.me/api/")
  .then((response) => console.log(typeof response))
  .catch((error) => console.log(error));

//   *********************

const getusers = async function () {
  try {
    const response = await fetch("https://randomuser.me/api/");
    console.log(response);
  } catch (error) {
    console.log("E", error);
  }
};

getusers();
