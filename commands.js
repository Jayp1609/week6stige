const fs = require("fs");
const file = "notes.json";
const chalk = require('chalk');

const readFile = fileName => {
    return JSON.parse(fs.readFileSync(fileName)); 
};

const writeFile = (fileName, content) => {

    fs.writeFileSync(fileName, JSON.stringify(content));
    
};

const add = (title, body) => {
  let notes = readFile(file);

  let index = notes.findIndex(x => x.title == title);
   
  if (index == -1)
    {
      notes.push({title, body});
      console.log(chalk.black.bgGreen("New note created!"));
    }
  else
   {
     console.log(chalk.black.bgRed("Title is alreay taken!!"));
   }
  writeFile(file, notes);
};

const remove = title => {
  let notes = readFile(file);

  const filteredList = notes.filter(x => x.title != title);

   writeFile(file, filteredList);
   console.log(chalk.black.bgRed("Note removed!"));
};

const list = () => {
  let notes = readFile(file);
  let size = notes.length;
   
  console.log(chalk.black.bgYellow("Your Notes:"));

  for(i=0;i<size;i++)
  {
    console.log(notes[i].title);
  }  
};

const read = title => {
  let notes = readFile(file);
  
  console.log(chalk.black.bgBlue("List:"))
  let index = notes.findIndex(x => x.title == title);

  if (index !== -1) 
   {
    console.log(notes[index].body);
   } 
  else
   {
    console.log("not found");
   }
};

module.exports = {add,remove, list, read};