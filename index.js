
// Task 1: Print numbers from 1 to 100 with conditions
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("amazon");
  } else if (i % 3 === 0) {
    console.log("google");
  } else if (i % 5 === 0) {
    console.log("facebook");
  } else {
    console.log(i);
  }
}
