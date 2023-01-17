import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./server";
import { createContext } from "./context";
import { logger } from "../logger";

const PORT = process.env.SERVICE_BORUM_PORT || 4001;
const ALLOWED_ORIGINS = []; // Configure allowed origins when starting from this template

const app = express();

app.use(
  cors({
    // origin: ALLOWED_ORIGINS,    // ALL ORIGINS ARE ALLOWED
    origin: [process.env.VITE_WEB_BORUM_PORT || "http://localhost:3001"],
    methods: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(PORT, () => {
  logger.log(`Server listening on port ${PORT}`);
});
