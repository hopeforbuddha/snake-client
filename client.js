const net = require("net");
const stdin = process.stdin;
stdin.setEncoding('utf8');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    conn.setEncoding("utf8")
    console.log("connected")
    conn.write('Name: Poo')
    //setInterval(() => {
    //  conn.write("Move: up")
    //}, 100);
  })
  return conn;
};



module.exports = connect;