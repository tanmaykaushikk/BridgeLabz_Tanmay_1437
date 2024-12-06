class bankAccount {
  #balance; // private property deonated with #.

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;   // accessing encapsulated data
  }
}


const account = new bankAccount('Virat',1000);
account.deposit(1000);
console.log(account.getBalance());