function StatCircle({ label, value, strokeColor, color, percentage = 0 }) {
    const radius = 100;
    const strokeWidth = 18;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="stat-circle">
            <svg width="300" height="300">
                <circle
                    cx="150"
                    cy="150"
                    r={radius}
                    stroke="#c4c4c4"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <circle
                    cx="150"
                    cy="150"
                    r={radius}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="butt"
                    transform="rotate(-90 150 150)"
                />
            </svg>
            <div className="stat-circle-text">
                <p className="label-text">{label}</p>
                <p className="value-text" style={color = { color }}>{value}</p>
            </div>
        </div >
    );
};

export default StatCircle;
