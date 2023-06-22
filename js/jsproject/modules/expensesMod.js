export const expenses = []

export const addExpenses = (expenseName, expenseAmt) => {
    try {
        let expenseObj = {
            expenseName,
            expenseAmt
        }

        expenses.push(expenseObj)
    } catch (error) {
        alert(`expenseModule error: ${error.message}`)
    }
} 