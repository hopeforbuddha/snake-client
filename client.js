const { IP, PORT, input, playerName } = require("./constants");
const net = require("net");




// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    conn.setEncoding("utf8")
    console.log("connected")
    conn.write(playerName)
  })
  return conn;
};


module.exports =  connect