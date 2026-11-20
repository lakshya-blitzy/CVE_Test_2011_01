const { exec } = require('child_process');
const fs = require('fs');

function runCommand(userInput) {
  exec('echo ' + userInput);
}

function readUserFile(userPath) {
  return fs.readFileSync('/app/data/' + userPath, 'utf8');
}

module.exports = { runCommand, readUserFile };
