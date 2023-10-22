import './moneymanager.css'
const Moneymanager=(props)=>{
    const{balance,income,expenses}=props
    return(
        <div className='container2'>
            <div className='middleone'>
                <div class="first">
                    <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" className='mimage' alt="balance"/>
                </div>
                <div className='two'>
                    <h3>Your Balance</h3>
                    <h5>RS {balance}</h5>
                </div>
            </div>
            <div className='middletwo'>
                <div class="first">
                    <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" className='mimage' alt="income"/>
                </div>
                <div className='two'>
                    <h3>Your Income</h3>
                    <h5>RS {income}</h5>
                </div>
            </div>
            <div className='middlethree'>
                <div class="first">
                    <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" className='mimage' alt="expenses"/>
                </div>
                <div className='two'>
                    <h3>Your Expenses</h3>
                    <h5>RS {expenses}</h5>
                </div>
            </div>
        </div>
    )
}
export default Moneymanager