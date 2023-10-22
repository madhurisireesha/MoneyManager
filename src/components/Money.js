import './money.css'
const Money=(props)=>{
    const{details,onDelete}=props
    const{title,amount,ttype,id}=details
    const clickDelete=()=>{
        onDelete(id)
    }
    return(
        <div className='moneycontainer'>
            <table>
                <tr>
                    <td>{title}</td>
                    <td>{amount}</td>
                    <td>{ttype}</td>
                    <button onClick={clickDelete}><img src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" alt="delete" className='dusti'/></button>
                </tr>
                
            </table>
            <hr/>
        </div>
    )
}
export default Money