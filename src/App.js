import Moneymanager from './components/Moneymanager'
import Money from './components/Money'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
const transactionList=[{
    objectID:'Income',
    displayText:'Income'
},
{
    objectID:'Expenses',
    displayText:'Expenses'
}]
class App extends Component{
    state={
        title:'',
        amount:'',
        ttype:transactionList[0].objectID,
        id:uuidv4(),
        list1:[]
    }
    onDelete=(id)=>{
        const{list1}=this.state
       const list2= list1.filter((details)=>(details.id!==id))
        this.setState({
            list1:list2
        })
            
        
    }
    addTitle=(event)=>{
        this.setState({
            title:event.target.value
        })
    }
    addAmount=(event)=>{
        this.setState({
            amount:event.target.value
        })
    }
    addType=(event)=>{
        this.setState({
            ttype:event.target.value
        })
       
    }
    addTransaction=(event)=>{
        event.preventDefault()
        const{title,amount,ttype,list1}=this.state
        console.log(ttype)
        const newtr={
            title:title,
            amount:parseInt(amount),
            id:uuidv4(),
            ttype:ttype
        }
        this.setState((prevState)=>({
            list1:[...prevState.list1,newtr]
        }))
        return list1
    }
    getBalance=()=>{
        let balanceamount=0;
        let expensesamount=0;
        let incomeamount=0;
        const{list1}=this.state
        list1.map((details)=>{
            if(details.ttype===transactionList[0].objectID)
            {
                incomeamount+=details.amount
            }
            else{
                expensesamount+=details.amount
            }
            
        })
        balanceamount=incomeamount-expensesamount
        return balanceamount
    }
    getIncome=()=>{
        let incomeamount=0
        const{list1}=this.state
        list1.map((details)=>{
            if(details.ttype===transactionList[0].objectID)
            {
                incomeamount+=details.amount
            }
        })
        return incomeamount
    }
    getExpenses=()=>{
        let expensesamount=0
        const{list1}=this.state
        list1.map((details)=>{
            if(details.ttype===transactionList[1].objectID){
                expensesamount+=details.amount
            }
        })
        return expensesamount
    }
    render(){
        const{list1}=this.state
        const balance=this.getBalance()
        const income=this.getIncome()
        const expenses=this.getExpenses()
        return(
            <div className='entirecontainer'>
                <div className='top'>
                    <h1>Hi Richard</h1>
                    <h3>Welcome to your Moneymanager</h3>
                </div>
                <div className='middle'>
                    <Moneymanager balance={balance} income={income} expenses={expenses}/>
                </div>
                <div className='bottom'>
                    <div className='bottomfirst'>
                        
                        <form className='formcontainer' onSubmit={this.addTransaction}>
                        <h2>Add Transcation</h2>
                        Title<input type="text" onChange={this.addTitle}/>
                        Amount<input type="text" onChange={this.addAmount}/>
                        Type<select onChange={this.addType}>
                            <option value="Income">Income</option>
                            <option value="Expenses">Expenses</option>
                        </select>
                        <button type="submit" className='addbutton'>Add</button>
                        </form>
                    </div>
                    <div className='bottomsecond'>
                        <h3>History</h3>
                        <table className='head'>
                            <tr>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Type</th></tr>
                        </table>
                        <hr/>
                        {list1.map((details)=>(
                            <Money details={details} onDelete={this.onDelete}/>
                        ))}
                    </div>
                </div>
            </div>

        )
    }
}
export default App