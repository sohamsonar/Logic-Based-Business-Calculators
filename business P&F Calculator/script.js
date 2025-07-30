document.getElementById("calculate-btn").addEventListener("click", function () {
    document.getElementById("contact-popup").style.display = "flex";
});

document.getElementById("close-popup-btn").addEventListener("click", function () {
    document.getElementById("contact-popup").style.display = "none";
});

document.getElementById("submit-details-btn").addEventListener("click", function () {
    let whatsapp = document.getElementById("whatsapp").value;
    let email = document.getElementById("email").value;

    if (whatsapp && email) {
        document.getElementById("contact-popup").style.display = "none";

        let businessName = document.getElementById("business-name").value;
        let startAmount = parseFloat(document.getElementById("start-amount").value) || 0;
        let monthlySales = parseFloat(document.getElementById("monthly-sales").value) || 0;
        let staffSalaries = parseFloat(document.getElementById("staff-salaries").value) || 0;
        let otherExpenses = parseFloat(document.getElementById("other-expenses").value) || 0;
        let personalExpenses = parseFloat(document.getElementById("personal-expenses").value) || 0;
        let operatingExpenses = parseFloat(document.getElementById("operating-expenses").value) || 0;
        let grossMarginPercent = parseFloat(document.getElementById("gross-margin").value) || 0;
        let taxes = parseFloat(document.getElementById("taxes").value) || 0;
        let otherIncome = parseFloat(document.getElementById("other-income").value) || 0;
        let businessStartYear = parseInt(document.getElementById("business-start-year").value);
        let businessStartMonth = parseInt(document.getElementById("business-start-month").value) || 1;
        let currentDate = new Date();
        let businessStartDate = new Date(businessStartYear, businessStartMonth - 1, 1);

        let grossProfit = monthlySales * (grossMarginPercent / 100);
        let totalMonthlyExpenses = staffSalaries + otherExpenses + personalExpenses + operatingExpenses + taxes;
        let monthlyNetProfit = grossProfit - totalMonthlyExpenses + otherIncome;
        let monthsSinceStart = Math.floor((currentDate - businessStartDate) / (1000 * 60 * 60 * 24 * 30));
        let totalProfitSinceStart = monthlyNetProfit * monthsSinceStart;
        let estimatedBankBalance = startAmount + totalProfitSinceStart;

        document.getElementById("results").style.display = "block";
        document.getElementById("business-name-result").innerText = businessName;
        document.getElementById("total-expenses").innerText = "Total Monthly Expenses: ₹ " + totalMonthlyExpenses.toFixed(2);
        document.getElementById("gross-profit").innerText = "Gross Profit: ₹ " + grossProfit.toFixed(2);
        document.getElementById("net-profit").innerText = "Monthly Net Profit: ₹ " + monthlyNetProfit.toFixed(2);
        document.getElementById("estimated-bank-balance").innerText = "Estimated Bank Balance: ₹ " + estimatedBankBalance.toFixed(2);
        document.getElementById("profit-since-start").innerText = "Profit Since Start: ₹ " + totalProfitSinceStart.toFixed(2);
        document.getElementById("monthly-profit").innerText = "Monthly Profit: ₹ " + monthlyNetProfit.toFixed(2);

        alert("Thank you! You can now see your detailed summary.");
    } else {
        alert("Please fill in both WhatsApp number and email address.");
    }
});
