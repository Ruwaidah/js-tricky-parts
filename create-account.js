function createAccount(pin = "1234", amount = 0) {
  let pinNumber = pin;
  let bankAmount = amount;
  return {
    checkBalance: (p, a) => {
      if (p === pinNumber) {
        return amount;
      }
      return "Invalid PIN";
    },
    deposit: (p, a) => {
      if (p === pinNumber) {
        bankAmount = bankAmount + a;
        return `Succesfully deposited $${a}. Current balance: $${bankAmount}.`;
      } else return "Invalid PIN";
    },
    withdraw: (p, a) => {
      if (pinNumber === p) {
        let newBalance = bankAmount - a;
        if (newBalance >= 0) {
          bankAmount = newBalance;
          return `Succesfully withdrew  $${a}. Current balance: $${bankAmount}.`;
        } else if (newBalance < 0)
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      } else return "Invalid PIN";
    },
    changePin: (oldPin, newPin) => {
      if (pinNumber === oldPin) {
        pinNumber = newPin;
        return "PIN successfully changed!";
      } else return "Invalid PIN";
    },
  };
}

let account = createAccount("1234", 100);

console.log(account.checkBalance("oops"));
// "Invalid PIN."

console.log(account.deposit("1234", 250));
// "Succesfully deposited $250. Current balance: $350."

console.log(account.withdraw("1234", 300));
// "Succesfully withdrew $300. Current balance: $50."

console.log(account.withdraw("1234", 10));
// "Withdrawal amount exceeds account balance. Transaction cancelled."

console.log(account.changePin("1234", "5678"));
// "PIN successfully changed!"

console.log(account.deposit("1234", 250));

module.exports = { createAccount };
