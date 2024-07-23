// 1-stdin.js
const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Prompt for user input
rl.question('', (name) => {
  // Display the name
  console.log(`Your name is: ${name}`);
  
  // Close the readline interface and display the closing message
  rl.on('close', () => {
    console.log('This important software is now closing');
  });

  rl.close(); // Close the readline interface
});
