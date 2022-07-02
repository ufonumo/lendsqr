import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import UserDetails from "./pages/userDetails/userDetails";

function App() {
    const queryClient = new QueryClient();
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/users" element={<Dashboard />} />
                    <Route path="/userDetail/:id" element={<UserDetails />} />
                </Routes>
            </QueryClientProvider>
        </div>
    );
}

export default App;
