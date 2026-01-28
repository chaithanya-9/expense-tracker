function HeroHeader() {
    return (
        <div className="dashboard-hero-header">
            <div className="title-div ">
                <input type="text" placeholder="Title" />
            </div>
            <div className="amount-div ">
                <input type="number" placeholder="Amount" min={0} />
            </div>
            <div className="type-div ">
                <input type="text" placeholder="Type" />
            </div>
            <div className="date-div ">
                <input type="date" placeholder="Date" />
            </div>
            <div className="add-div ">
                <button className="add-btn">
                    +
                </button>
            </div>
        </div>
    );
};

export default HeroHeader;