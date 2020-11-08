const shell = require("shelljs");

shell.cp("-R", ".env", "dist/.env");
