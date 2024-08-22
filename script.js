function processTopUp() {
    const amount = document.getElementById('amount').value;
    const payment = document.getElementById('payment').value;
    const result = document.getElementById('result');

    if (!amount || !payment) {
        result.innerHTML = '<p style="color: red;">Semua field harus diisi!</p>';
        return;
    }

    const amountText = `Rp${parseInt(amount).toLocaleString()}`;
    const paymentText = payment === 'credit_card' ? 'Kartu Kredit' : 'E-Wallet';

    result.innerHTML = `<p>Top-Up sebesar ${amountText} dengan metode ${paymentText} sedang diproses.</p>`;
    
    // Simulate form submission
    setTimeout(() => {
        result.innerHTML = `<p>Top-Up sebesar ${amountText} berhasil diproses!</p>`;
    }, 2000);
}
