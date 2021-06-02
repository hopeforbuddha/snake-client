const IP = "135.23.222.131";
const PORT = 50542;
const input = process.argv.slice(2)
const playerName = `Name: ${input}`
const net = require("net");

module.exports = {
  IP,
  PORT,
  input,
  playerName,
  net
  };