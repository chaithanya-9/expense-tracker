import TransactionRow from "./TransactionRow";

function TransactionTable() {

    const transactions = [
        {
            id: 1,
            title: "Salary",
            type: "Income",
            date: "02-01-2026",
            amount: 15000,
        },
        {
            id: 2,
            title: "Rent",
            type: "Expense",
            date: "20-01-2026",
            amount: 9000,
        },
    ];

    return (
        <div className="transaction-table">
            <div className="table-header">
                <div>Title</div>
                <div>Type</div>
                <div>Date</div>
                <div>Amount</div>
                <div>Action</div>
            </div>
            {transactions.map((txn) => (
                <TransactionRow
                    id={txn.id}
                    title={txn.title}
                    type={txn.type}
                    date={txn.date}
                    amount={txn.amount}
                />
            ))}
        </div>
    );
};

export default TransactionTable;