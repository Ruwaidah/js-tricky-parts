function curriedAdd(total = 0) {
  return function addNext(num) {
    if (!num) return total;
    total += num;
    return addNext;
  };
}

let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

console.log(firstAdder()); // 0
console.log(secondAdder(1)(2)()); // 3
console.log(thirdAdder(2)(8)(5)(1)()); // 16

module.exports = { curriedAdd };
