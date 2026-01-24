import { Link } from "react-router-dom";
import "../css/landingPage.css";
import "../css/index.css";


function LandingPage() {
    return (
        <div className="hero">
            <div className="landingPage-title-div">
                <p>SAVE SOME</p>
            </div>

            <Link to="/dashboard" className="btn get-started-btn">
                Get Started
            </Link>
        </div>)
}

export default LandingPage;