import HeroHeader from "./HeroHeader";
import StatCircle from "./StatCirlce";

function Hero() {
    return (
        <div className="dashboard-hero">
            <HeroHeader />
            <div className="stat-circle-div">
                <StatCircle
                    label="Total Income"
                    value={15000}
                    strokeColor="#c4c4c4"
                    color="#767676"
                    percentage={100}
                />
                <StatCircle
                    label="Total Expense"
                    value={9000}
                    strokeColor="#ff3b3b"
                    color="#ff3b3b"
                    percentage={60}
                />
                <StatCircle
                    label="Balance"
                    value={6000}
                    strokeColor="#10a64e"
                    color="#10a64e"
                    percentage={40}
                />
            </div>
        </div>
    );
};

export default Hero;