import app from "./app";
import { Config } from "./config";

const startServer = () => {
    const PORT = Config.PORT;

    try {
        // eslint-disable-next-line no-console, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        process.exit(1);
    }
};

startServer();
