const pty = require("node-pty");
import os from "os";
class NodePty {
  private term;
  constructor() {
    const shell = process.env[os.platform() === "win32" ? "COMSPEC" : "SHELL"];
    console.log(process.env);
    this.term = pty.spawn(shell, [], {
      name: "xterm-color",
      cols: 80,
      rows: 30,
      //   cwd: process.env.HOMEPATH,
      env: process.env,
    });
  }

  write(data: any) {
    this.term.write(data);
  }

  onData(callback: any) {
    this.term.onData((data: any) => {
      callback(data);
    });
  }
}

export default NodePty;
