import logo from "../assets/save-some-header-logo-2.png";
import "../css/dashboard.css";

function Header() {
    return (
        <div className="header">
            <div className="header-title-div">
                <p className="header-title">
                    SAVE SOME
                </p>
            </div>

            <div className="header-logo">
                <img src={logo} alt="not found" />
            </div>
        </div>

    );
};

export default Header;