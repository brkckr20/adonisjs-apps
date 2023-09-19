import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";

/* custom imports */
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
