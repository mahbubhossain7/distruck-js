
// login area event handler:

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
loginArea.style.display = "none";
const transactionArea = document.getElementById("transaction-area");
transactionArea.style.display = "block";
})

//Transaction area event handler:

//deposit button event handler:
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
   const depositNumber = getInputNumber("depositAmount");
   updateAmount("currentBalance", depositNumber);
   updateAmount("currentDeposit", depositNumber);
   document.getElementById("depositAmount").value = "";
})

 // withdraw btn Event handler:
 const withdrawBtn = document.getElementById("addWithdraw");
 withdrawBtn.addEventListener("click", function(){
       const withdrawNumber = getInputNumber("withdrawAmount");
      updateAmount("currentWithdraw", withdrawNumber);
      document.getElementById("withdrawAmount").value = "";
      updateAmount("currentBalance", -1 * withdrawNumber);

 })

 function getInputNumber(id){
   const Amount = document.getElementById(id).value;
   const amountNumber = parseFloat(Amount);
   return amountNumber;
 }
 
 function updateAmount  (id , depositNumber){
   const current = document.getElementById(id).innerText;
   const currentNumber = parseFloat(current);
   const totalAmount = depositNumber + currentNumber;
   document.getElementById(id).innerText = totalAmount;
}