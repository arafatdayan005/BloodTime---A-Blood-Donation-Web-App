import { Server } from "http";
import app from "./app";

const port = 5000;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log("Blood Donation Server is running on port ", port);
  });

  const exitHandler = () => {
    if (server) {
      server.close();
    }
    process.exit(1);
  };
  process.on("uncaughtException", (error) => {
    exitHandler();
  });

  process.on("unhandledRejection", (error) => {
    exitHandler();
  });
}

main();
