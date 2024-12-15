import { useState } from 'react';
import './index.css';

function AlertBox({alertBox})
{
    
    return(<>
       <div className='alertcontainer'>
             <h1>Are you sure you want add item to cart</h1>
             <div className='alertbtns'>
                <button onClick={()=>alertBox(true)}>Yes</button>
                <button onClick={()=>alertBox(false)}>No</button>
             </div>
       </div>
     </>
    )
}

export default AlertBox;