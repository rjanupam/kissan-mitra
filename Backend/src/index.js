import { app } from "./app.js";
import { appconfig } from "./config/appconfig.js";
import { connectdb } from "./database/dbconnect.js";
import SocketIoServerConnection from "./socket.js";

(async () => {
  try {
    await connectdb();

    app.get("/", (_, res) => {
      res.status(200).json({
        status: "success",
      });
    });

    const appServer = app.listen(appconfig.PORT, () => {
      console.log(
        `Server started at http://localhost:${appconfig.PORT || 3030}/`
      );
    });

    SocketIoServerConnection(appServer);
  } catch (error) {
    console.log(error);
  }
})();
