import React, { useState, useRef} from 'react';
import './App.css';
//import swal from 'sweetalert'
//import Crud from './components/crud'

//const newLazy = () => lazy('./components/');


function App(props) {

  // swal.fire(
  //   <p>welcome to shopping calculator</p>
  // )

  const choose = useRef(null)
  const priceT = useRef(0)

  const [total, setTotal] = useState(0);
  const [table, setTable] = useState([])
  const [val, setVal] = useState("")

 
  const Row = () =>
      <tr key={id}>
      <td><input type="text" className="name" /></td>
      <td><input type="text" className="quantity" /></td>
      <td><input ref={priceT} type="number" className="price" /></td>
      </tr>;

  const id = priceT.length;

  const Choose = () =>{
   setVal([...val, choose.current.value]);
  }

  // if(priceT.current === ''){
  //   return(
  //     setTable === false
  //   );
  // }

  return (
    //<Suspence fallback={<div>loading...</div>}>
    <React.Fragment>
      <div className="App">
          <h1 style={{width:'500px'}}>PRE-SHOPPPING GOODS CALCULATOR</h1>
          <label>Select your trading curency:</label><select ref={choose} style={{background:'yellowgreen', border:"0px solid yellow"}} onChange={Choose}>
              <option value='#'>.</option>
              <option value='#'>#</option>
              <option value='$'>$</option>
            </select>
          <p className="total"><b>Total Amount:&nbsp;  
            {val}&nbsp;
            <i className='amt'>{total}</i>
          </b></p>
          <h2>
            <table border ='4'>
              <tbody>
                <tr key={id}>
                  <th style={{width:205}}>Item Name &nbsp;&nbsp;&nbsp;</th>
                  <th style={{width:205}}>Item Quantity &nbsp;&nbsp;&nbsp;</th>
                  <th style={{width:83}}>Price  {val}&nbsp;&nbsp;</th>
                </tr>
                <tr key={id}>
                  <td><input type="text" className="name" /></td>
                  <td><input type="text" className="quantity" /></td>
                  <td><input ref={priceT} type="number" className="price" /></td>
                </tr>
                {table.length && table.map((el,i) => el(i))}
              </tbody>
            </table>
          </h2>
          <div>
            <p className="btns">
              <button className="btn" onClick={() =>{setTable([...table, Row]); setTotal(total + parseInt(priceT.current.value))}}>Add <br /> New</button>
            </p><hr />
          </div> 
         
      </div>
    </React.Fragment>
    //</Suspence>
  );
}

export default App;