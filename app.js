const EventEmmiter = require("events");
const eventEmmiter = new EventEmmiter();

eventEmmiter.on("event", (n1, n2) => {
  console.log(n1 + n2);
});

eventEmmiter.emit("event", 12, 1233);
