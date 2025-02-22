function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    // Handle non-array input
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Argument must be an array'));
    }

    const results = [];
    let completed = 0;
    
    // Handle empty array
    if (promises.length === 0) {
      return resolve(results);
    }

    promises.forEach((promise, index) => {
      // Handle non-promise values
      Promise.resolve(promise)
        .then(result => {
          results[index] = result;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(error => {
          // If any promise rejects, immediately reject the main promise
          reject(error);
        });
    });
  });
}

// Example usage:
const p1 = Promise.resolve(1);
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 1000));
const p3 = Promise.reject('Error!');

// Test successful case
promiseAll([p1, p2])
  .then(results => console.log('Success:', results))
  .catch(error => console.log('Error:', error));

// Test error case
promiseAll([p1, p2, p3])
  .then(results => console.log('Success:', results))
  .catch(error => console.log('Error:', error));
