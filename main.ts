
import inquirer from "inquirer"
const currency: any = {
    USD: 1,//BASE CURRRENCY
    EUR: 0.94,
    GBP: 0.43,
    IND: 74.90,
    PKR: 280
}

let answers = await inquirer.prompt([{
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: [`USD`, `EUR`, `GBP`, `IND`, `PKR`]

}, {
    name: "to",
    message: "Enter to currency",
    type: "list",
    choices: [`USD`, `EUR`, `GBP`, `IND`, `PKR`]

}, {
    name: "amount",
    message: "Enter your amount",
    type: "number"
}

])
let fromamount = currency[answers.from] 
let toamount = currency[answers.to]
let amount = answers.amount
let baseAmount = amount / fromamount
let convertedAmount = baseAmount * toamount
console.log(convertedAmount)
