const shell = require("shelljs");

// Copy the correct linux sqlite3 file
shell.cp("-R", "assets/node_modules/sqlite3/lib/binding/napi-v3-linux-x64/node_sqlite3.node", "node_modules/sqlite3/lib/binding/napi-v3-linux-x64/node_sqlite3.node");
