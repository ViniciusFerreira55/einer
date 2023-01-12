import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

// config this when you start using tRPC
import type { AppRouter } from "../../../server-template/src/server"; // import AppRoter type from server

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `${
        import.meta.env.SERVICE_BORUM_PORT || "http://localhost:4001"
      }/trpc`, // trpc server url,
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: "include",
        });
      },
    }),
  ],
});
