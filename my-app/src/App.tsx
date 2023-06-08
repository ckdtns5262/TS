import React,{useState} from 'react';
import './App.css';
import Store from './Store'
import {Address, Restaurant} from './model/restaurant'
import BestMenu from './BestMenu';

let data : Restaurant = {
  name : '이식당',
  category : 'western',
  address : {
    city : 'Busan',
    detail : 'somewhere',
    zipCode : 23241242
  },
 menu : [{name : "rose pasta", price : 2000, category : 'PASTA'}, {name : "hamburger", price : 3000, category : 'HAMBURGER'}]
}

const App:React.FC = () => {

  const [myrestaurant, setMyRestaurant] = useState<Restaurant>(data)
  const changeAddress = (address:Address)=>{
    setMyRestaurant({...myrestaurant, address:address})
  }
  const showBestMenuName = (name : string)=>{
    return name
  }

  return (
    <div className="App"> 
      <Store info={myrestaurant} changeAddress={changeAddress}/>
      <BestMenu name="불고기피자" category="피자"  showBestMenuName={showBestMenuName}/>
    </div>
  );
}

export default App;
