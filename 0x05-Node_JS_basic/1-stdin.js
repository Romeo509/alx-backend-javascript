// 1-stdin.js

// Display a welcome message and prompt the user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for 'readable' events on the standard input
process.stdin.on('readable', () => {
  // Read a chunk of data from the input stream
  const chunk = process.stdin.read();

  // If there is data, write it to standard output
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Listen for the 'end' event on the standard input
process.stdin.on('end', () => {
  // Display a closing message when the input stream ends
  process.stdout.write('This important software is now closing\n');
});
