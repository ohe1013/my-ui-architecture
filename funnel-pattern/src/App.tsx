import { Register } from "~to-be/pages/funnel/register";
import "./App.css";
import { RegisterRoutes } from "~as-is/pages/index";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
    return (
        <>
            <Router>
                <Register />
            </Router>
            {/* <RegisterRoutes /> */}
        </>
    );
}

export default App;
