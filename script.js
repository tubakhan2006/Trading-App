document.getElementById("tradeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const stock = document.getElementById("stock").value;
    const amount = document.getElementById("amount").value;

    if (!amount || amount <= 0) {
        document.getElementById("tradeMessage").innerText = "Please enter a valid amount.";
        return;
    }

    let stockName = '';
    switch(stock) {
        case 'btc':
            stockName = 'Bitcoin';
            break;
        case 'eth':
            stockName = 'Ethereum';
            break;
        case 'aapl':
            stockName = 'Apple';
            break;
        case 'googl':
            stockName = 'Google';
            break;
    }

    document.getElementById("tradeMessage").innerText = `Successfully placed a trade for ${amount} shares of ${stockName}.`;
});
