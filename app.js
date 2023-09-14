#! /usr/bin/env node
import inquirer from "inquirer";
import { sum } from "./functions.js";
import { sub } from "./functions.js";
import showBanner from "node-banner";
import gradient from "gradient-string";
let answers = [
    {
        name: "num1",
        type: "number",
        message: gradient.rainbow("Enter first number:"),
        validate: (OnlyNumber) => {
            if (isNaN(OnlyNumber)) {
                return "Please type a number only:";
            }
            return true;
        }
    },
    { name: "num2",
        type: "number",
        message: gradient.summer("Enter second number:"),
        validate: (OnlyNumber) => {
            if (isNaN(OnlyNumber)) {
                return "Please type a number only:";
            }
            return true;
        }
    },
    {
        name: "operation",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: gradient.rainbow("Select your option"),
    },
];
let anwser = [
    {
        name: "again",
        type: "confirm",
        message: "Do you want to play again"
    }
];
(async () => {
    await showBanner('Calculator', 'This is simple calculator for kids', "red", "yellow");
})();
async function calculator() {
    let condition = true;
    while (condition) {
        let { num1, num2, operation } = await inquirer.prompt(answers);
        if (operation === "addition") {
            console.log("The sum of two numbers:", sum(num1, num2));
        }
        else if (operation === "subtraction") {
            console.log("The difference of two numbers is:", sub(num1, num2));
        }
        if (operation === "multiplication") {
            console.log(`The aws of two numbers = ${num1 * num2}`);
        }
        else if (operation === "division") {
            console.log(`The aws of two numbers is = ${num1 / num2}`);
        }
        let { again } = await inquirer.prompt(anwser);
        condition = again;
    }
}
setTimeout(() => {
    calculator();
}, 1000);
