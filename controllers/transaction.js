//@desc Get all transaction
//@route GET /api/v1/transactions
//@access Public
exports.getTransactions= (req,res,next)=>{

res.send('GET transactions');


}

//@desc Add transaction
//@route POST /api/v1/transactions
//@access Public
exports.addTransactions= (req,res,next)=>{

    res.send('POST transactions');
    
    
    }

//@desc DELETE transaction
//@route DELETE /api/v1/transactions
//@access Public
exports.deleteTransaction= (req,res,next)=>{

    res.send('DELETE transactions');
    
    
    }