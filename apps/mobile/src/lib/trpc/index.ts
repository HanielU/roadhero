import type { AppRouter } from "@packages/api";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://192.168.0.225:5000/trpc",
    }),
  ],
});
