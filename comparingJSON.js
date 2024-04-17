let obj1 = {name: "Person 1", age: 5};

let obj2 = {age: 5, name: "Person 1"};

let objEqual = false;

const obj1Keys = Object.keys(obj1).sort();
const obj2Keys = Object.keys(obj2).sort();

if (obj1Keys.length !== obj2Keys.length) {
  console.log(objEqual);
} else {
  const areEqual = obj1Keys.every((key, index) => {
    const objValue1 = obj1[key];
    const objValue2 = obj2[obj2Keys[index]];
    return objValue1 === objValue2;
  });
  if (areEqual) {
    objEqual = true;
    console.log(objEqual);
  } else {
    console.log(objEqual);
  }
}