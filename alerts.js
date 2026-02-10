// alerts.js

// Function to check for smart alerts in the expense tracker
function checkExpenseAlerts(expenses) {
    const alerts = [];
    const threshold = 1000; // set a threshold for alert

    // Check if total expenses exceed the threshold
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    if (totalExpenses > threshold) {
        alerts.push(`Warning: Your total expenses are above the threshold of ${threshold}! Current total: ${totalExpenses}`);
    }

    // Check for any single expense that exceeds a certain limit
    expenses.forEach(expense => {
        if (expense.amount > 500) {
            alerts.push(`Alert: Expense ${expense.description} exceeds the limit with amount: ${expense.amount}`);
        }
    });

    return alerts;
}

// Example usage:
// const expenses = [{description: 'Rent', amount: 1200}, {description: 'Groceries', amount: 300}];
// console.log(checkExpenseAlerts(expenses));
