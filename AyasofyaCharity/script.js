function sendDonation() {
  const name = document.getElementById("donorName").value;
  const amount = document.getElementById("donationAmount").value;
  const message = document.getElementById("donationMessage").value;

  if (!name || !amount) {
    alert("Lütfen adınızı ve bağış miktarınızı girin 🙏");
    return;
  }

  // Gerçek Pi işlemi ileride Pi SDK ile yapılacak, şimdilik simülasyon
  document.getElementById("successMessage").classList.remove("hidden");
  document.getElementById("successMessage").innerText =
    `Teşekkürler ${name}! ${amount} Pi bağışınız kaydedildi. 💜`;

  // Formu temizle
  document.getElementById("donorName").value = "";
  document.getElementById("donationAmount").value = "";
  document.getElementById("donationMessage").value = "";
}
