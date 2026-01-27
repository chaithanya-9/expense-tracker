import { Link } from "react-router-dom";
import "../css/landingPage.css";
import "../css/index.css";


function LandingPage() {
    return (
        <div className="landing-page-hero">
            <div className="landing-page-title-div">
                <p>SAVE SOME</p>
            </div>

            <Link to="/dashboard" className="btn get-started-btn">
                Get Started
            </Link>
        </div>);
};

export default LandingPage;