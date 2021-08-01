// callback functions
const fetchData = (userId, callback) => {
  setTimeout(() => {
    const fakeData = {
      id: userId,
      name: "george",
    };
    callback(fakeData);
  }, 300);
};

const cb = (data) => {
  console.log("here's your data", data);
};

fetchData(5, cb);

// promises
// new Promise(fn)
const fetchData2 = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Fetch failed");
      }
      const fakeData = {
        id: userId,
        name: "george",
      };
      resolve(fakeData);
    }, 300);
  });
};

// fetchData2(10)
//   .then((user) => {
//     return someohterPromise(user);
//   })
//   .then((user) => {
//     console.log("here's your data", user);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

fetchData2(10)
  .then((user) => {
    console.log("here's your data", user);
  })
  .catch((err) => {
    console.error(err);
  });

Promise.all([fetchData2(7), fetchData2(11)])
  .then((users) => {
    console.log("here's your data", users);
  })
  .catch((err) => {
    console.error(err);
  });

// async-await
// const fetchUser = async (userId) => {
//   const user = await fetchData2(userId);
//   console.log("here's your data", user);
// };

const fetchUser = async (userId) => {
  try {
    const user = await fetchData2(userId);
    console.log("here's your data", user);
  } catch (err) {
    console.error(err);
  }
};

fetchUser(100);
