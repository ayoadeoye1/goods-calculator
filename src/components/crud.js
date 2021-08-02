import React, { useState, useRef } from 'react';
import './Crud.css';

function Crud(){
     const [row, setRow] = useState([])

    const name = useRef(null);
    const quantity = useRef(null);
    const price = useRef(null);


    const newRow = () => console.log(<p>
                <h3>{name.current.value}</h3>
                <h3>{quantity.current.value}</h3>
                <h3>{price.current.value}</h3>
            </p>);

    return ( 
        <div>
            <center><h1>React <b>CRUD</b> App</h1></center>
            <h2 >
                <tr><b>
                    <td style={{padding:20}}>Name</td>
                    <td>Quantity</td><td style={{padding:20}}>Price</td>
                </b></tr>
            </h2>
            <h2>
                <input ref={name} type="text" />
                <input ref={quantity} type="text" />
                <input ref={price} type="number" />
                <button onClick={() =>{setRow([...row, newRow])}}>Add</button>
            </h2>
            <h2>
                {row.lenght && row.map((el, i) => el(i))}
            </h2>
        </div>
     );
}
 
export default Crud;