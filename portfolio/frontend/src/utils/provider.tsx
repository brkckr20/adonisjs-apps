"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function Providers({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default Providers;
