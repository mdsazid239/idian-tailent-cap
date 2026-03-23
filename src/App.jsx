import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Verification from "./components/Verification";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Terms from "./components/Terms";
import GoldenVoice from "./components/GoldenVoice";
import TalentPage from "./components/TalentPage";
import ReferralPage from "./components/ReferralPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/terms" element={<Terms />} />
      <Route path="/golden-voice" element={<GoldenVoice />} />
      <Route path="/talent" element={<TalentPage />} />
      <Route path="/referral" element={<ReferralPage />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;