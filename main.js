#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 2323;
console.log("WELCOME TO ATM");
let pinAnswer = await inquirer.prompt([
    {
        message: "Enter your pin number:",
        type: "number",
        name: "Pin",
    },
]);
if (pinAnswer.Pin === myPin) {
    console.log("correct pin code!");
    let operation = await inquirer.prompt([
        {
            name: "operation",
            messege: "Please select one option",
            type: "list",
            choices: ["Withdraw", "Check available balance"],
        },
    ]);
    if (operation.operation === "Withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amount.amount >= myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amount.amount;
            console.log(`Your Availble Balance is ${myBalance}`);
        }
    }
    else if (operation.operation === "Check available balance") {
        console.log(`Your Available Balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code TRY AGAIN");
}
