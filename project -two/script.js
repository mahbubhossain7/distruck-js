// const loginBtn = document.getElementById("login");
// loginBtn.addEventListener('click', function(){
//     const loginArea = document.getElementById("Top-area");
//     loginArea.style.display = "none";
//     const transactionArea = document.getElementById("transection-area");
//     transactionArea.style.display = "block";
// })

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("Top-area");
loginArea.style.display = "none";
const transactionArea = document.getElementById("transaction-area");
transactionArea.style.display = "block";
})


const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
   const depositInput = document.getElementById("depositAmount").value;
   const depositInputNumber = parseFloat(depositInput);
   const currentDeposit = document.getElementById("currentDeposit");
   currentDeposit.innerText = depositInputNumber;
})