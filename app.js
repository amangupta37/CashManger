let billAmount = 0;
let paidAmount = 0;
const paybackCashAmount = [];

const bill = document.getElementById("bill");
const paid = document.getElementById("paid");

const createTable = (paybackStats) => {
  paybackStats.map((cash) => {
    let tdElement = document.getElementById(cash.currency);
    tdElement.innerHTML = cash.currencyReturn;
  });
  document.getElementById("show").style.display = "block";
};

const CashReturn = (amountLeft) => {
  const cashAvailable = [2000, 500, 100, 20, 10, 5, 1];

  let amountToreturn = amountLeft;
  let countCash;

  cashAvailable.forEach((cashValue) => {
    countCash = 0;
    while (amountToreturn >= cashValue) {
      amountToreturn = amountToreturn - cashValue;
      countCash += 1;
    }
    const returnCash = {
      currency: cashValue,
      currencyReturn: countCash,
    };
    paybackCashAmount.push(returnCash);
  });
  document.getElementById("amount").innerHTML = `Rs ${amountLeft}/-`;
  document.getElementById("payback").style.display = "grid";
  createTable(paybackCashAmount);
};

const CalculateBill = (billA, paidA) => {
  customerBill = parseInt(billA);
  customerPaid = parseInt(paidA);

  if (customerBill > customerPaid) {
    return alert("bill is more than paid");
  }
  ReturnAmount = customerPaid - customerBill;

  CashReturn(ReturnAmount);
};

bill.addEventListener("input", (e) => {
  const value = e.target.value;
  billAmount = value;
});

paid.addEventListener("input", (e) => {
  const val = e.target.value;
  paidAmount = val;
});

const submit = document.getElementById("btn");

submit.addEventListener("click", () => {
  if (billAmount === 0 || paidAmount === 0) {
    return alert("enter amount");
  }
  CalculateBill(billAmount, paidAmount);
});
