import "rsuite/dist/rsuite.min.css";
import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import PublicRoute from "./components/PublicRoute";
import { ProfileContextProvider } from "./context/profile-context";

const App = () => {
  return (
    <ProfileContextProvider>
    <Routes>
      <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
    </Routes>
    </ProfileContextProvider>
  );
};

export default App;
