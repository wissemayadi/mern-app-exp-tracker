import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas} from "../utils/format";
const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    const amount = transactions.map(transaction=>transaction.amount)
    const total = amount.reduce((acc,item)=>(acc+=item),0).toFixed(2)
    return (
        <>
           <h4>YOUR BALANCE</h4> 
           <h1 id="balance">${numberWithCommas(total)}</h1>
        </>
    )
}

export default Balance
