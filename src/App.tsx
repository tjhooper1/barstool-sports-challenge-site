import { QueryClient, QueryClientProvider } from "react-query";
import MlbPage from "./pages/mlbPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MlbPage />
    </QueryClientProvider>
  );
}

export default App;
