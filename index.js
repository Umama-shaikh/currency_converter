#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "choose from currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "choose to currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount."
    }
]);
let fromCurrency = currency[user_answer.from];
let toCurrency = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromCurrency; //USD base currency //
let convertedAmount = (baseAmount * toCurrency).toFixed(2);
console.log(convertedAmount);
