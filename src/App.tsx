import { Outlet } from "react-router-dom";
import { Header } from "./components/header/header";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header></Header>
        <Outlet></Outlet>
      </QueryClientProvider>
    </>
  );
}

export default App;
