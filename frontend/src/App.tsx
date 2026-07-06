import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Eligibility from "./pages/Eligibility";
import Compare from "./pages/Compare";
import Application from "./pages/Application";
import Settings from "./pages/Settings";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/application" element={<Application />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;