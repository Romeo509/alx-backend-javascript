// 1-stdin.js

// Write a prompt to the user
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Check if the input is from a terminal or piped
if (process.stdin.isTTY) {
  // Handle data input when running interactively
  process.stdin.on('data', (data) => {
    // Output the user's name
    process.stdout.write(`Your name is: ${data.toString()}`);
    // Exit the process after handling the input
    process.exit();
  });
} else {
  // Handle data input when input is piped in
  process.stdin.on('data', (data) => {
    // Output the user's name
    process.stdout.write(`Your name is: ${data.toString()}`);
    // Exit the process after handling the input
    process.exit();
  });

  // Handle process exit to display a closing message
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
