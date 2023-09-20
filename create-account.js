function createAccount(pin = "1234", amount = 0) {
  const pinNumber = pin;
  let bankAmount = amount;
  return {
    checkBalance: () => {
      if (typeof pin === "number" && pin === pinNumber) {
        return amount;
      }
      return "Invalid PIN";
    },
    deposit: () => {
      const amount = checkBalance();
      if (typeof amount === "number") {
        bankAmount = bankAmount + amount;
        return `Succesfully deposited $${amount}. Current balance: $${bankAmount}.`;
      } else return "Invalid PIN";
    },
    withdraw: () => {
      const amount = checkBalance();
      if (typeof amount === "number") {
        let newBalance = bankAmount - amount;
        if (newBalance >= 0)
          return `Succesfully withdrew  $${amount}. Current balance: $${bankAmount}.`;
        else if (newBalance < 0)
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      } else return "Invalid PIN";
    },
  };
}

let account = createAccount("1234", 100);

account.checkBalance("oops");
// "Invalid PIN."

account.deposit("1234", 250);
// "Succesfully deposited $250. Current balance: $350."

account.withdraw("1234", 300);
// "Succesfully withdrew $300. Current balance: $50."

account.withdraw("1234", 10);
// "Withdrawal amount exceeds account balance. Transaction cancelled."

account.changePin("1234", "5678");
// "PIN successfully changed!"

module.exports = { createAccount };
