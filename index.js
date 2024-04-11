import inquirer from "inquirer";
let todos = []; //shopper[]
let condition = true;
while (condition) {
    let todosQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what would you like to add in your todos?",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "would you like to add more in your todos?",
            default: "true",
        },
    ]);
    todosQuestion.push(todosQuestion.firstQuestion);
    console.log(todos);
    //The loop is running on the base of this veriable condition.
    condition = todosQuestion.secondQuestion;
}
;
