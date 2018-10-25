/*
   CIS 131 Web Dev II
   Chalk Assignment

   Author: Anthony Forte
   Date: 10/25/2018

   Filename: index.js
*/

const chalk = require('chalk');
const log = console.log;

log(chalk.black.bgGreen("Greetings mate, Its time for a short story") + chalk.red("!"));
log(chalk.blue("There once was two men deeply in love for over 14 years."));
log(chalk.red.underline("When the laws changed and allowed their love to be recognized, they had a magical wedding."));
log(chalk.magenta("Married, successful, and living a life full of love, they couldn’t imagine wanting more from life."));
log(chalk.yellow("To their surprise, a special gift would come along ") + chalk.underline.bold.blue("a baby boy!"));
log(chalk.white("He would turn their world upside down and bring a ton of love to the family."));
log(chalk.green.underline("And in the end") + chalk.green("... They all will grow up to be happy and healthy!"));

