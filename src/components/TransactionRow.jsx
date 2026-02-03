function TransactionRow({ title, type, date, amount }) {
    return (
        <div className="table-row">
            <div>{title}</div>
            <div>{type}</div>
            <div>{date}</div>
            <div className={type === "Expense" ? "amount-expense" : "amount-income"}>{amount}</div>
            <div>
                <button className="delete-btn">del</button>
            </div>
        </div>
    );
};

export default TransactionRow;