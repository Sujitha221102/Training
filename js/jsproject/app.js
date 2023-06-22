import { addExpenses , expenses} from "./modules/expensesMod.js"
import { displayList} from "./modules/ulmod.js"

let expensesForm = document.getElementById("expenses_form");
let expensesList= document.getElementById("expenses_list");
fetch('./components/expenses_form.html').then((response) => response.text())
    .then((html) => {
        expensesForm.innerHTML = html
    })

fetch('./components/expenses_list.html').then((response) => response.text())
    .then((html) => {
        expensesList.innerHTML = html
    })

let form = document.getElementById("expenses_form")
form.addEventListener("submit", (event) => {
    try {
        event.preventDefault();
        let expenseName = document.getElementById("expenseName").value
        let expenseAmt = document.getElementById("expenseAmt").value
        if (expenseName && expenseAmt) {
            addExpenses(expenseName, expenseAmt)
            console.log("expenses", expenses)
            displayList()
        }
        document.getElementById("expenseName").value="";
        
    } catch (error) {
        alert(`App Error: ${error.message}`)
    }
})