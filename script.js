670f7866c19f64e85390901351a4a4492d9990c2
console.log("Pi Network bağış sistemi test amaçlı çalışıyor!");
const donateBtn = document.getElementById("donateBtn");
const status = document.getElementById("status");

donateBtn.addEventListener("click", () => {
  const amount = document.getElementById("amount").value;
  if(amount && amount > 0){
    status.style.color = "green";
    status.textContent = `Tebrikler! ${amount} Pi bağışınız kaydedildi (test).`;
  } else {
    status.style.color = "red";
    status.textContent = "Lütfen geçerli bir bağış miktarı girin!";
  }
});
