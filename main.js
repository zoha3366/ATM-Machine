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
        let withdraw = await inquirer.prompt([
            {
                name: "withdrawMethod",
                messege: "select one option:",
                type: "list",
                choices: ["fast cash", "enter amount"],
            },
        ]);
        if (withdraw.withdrawMethod === "enter amount") {
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
        if (withdraw.withdrawMethod === "fast cash") {
            let fastCash = await inquirer.prompt([{
                    name: "fastCash",
                    message: "Select Amount",
                    type: "list",
                    choices: ["100", "500", "1000", "10000", "30000"]
                }]);
            if (fastCash.fastCash > myBalance) {
                console.log("insufficient balance");
            }
            else {
                myBalance -= fastCash.fastCash;
                console.log("withdrawn successfully");
                console.log(`your remaining balance is ${myBalance}`);
            }
        }
    }
    else if (operation.operation === "Check available balance") {
        console.log(`Your Available Balance is ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect Try Again!");
}
