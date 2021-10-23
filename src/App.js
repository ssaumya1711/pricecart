import logo from './logo.svg';
import './App.css';
import Card from './card';
import Footer from './footer';
import Header from './header';
import Navbar from './navbar';
import { useState } from 'react';
function App() {
  const [items,setItems] = useState([
    {
      id:1,
      type:"Fancy Product",
      price:[40.00,80.00],
      count: 0 //To provide indication of stock. Here only 1 item is considered for each item
    },
    {
      id:2,
      type:"Special Item",
      price:[20.00,18.00],
      count: 0
    },
    {
      id:3,
      type:"Sale Item",
      price:[50.00, 25.00],
      count: 0
    },
    {
      id:4,
      type:"Popular Item",
      price:[40.00],
       count: 0
    },
    {
      id:5,
      type:"Sale Item",
      price:[50.00,25.00],
       count: 0
    },
    {
      id:6,
      type:"Fancy Product",
      price:[120.00,280.00],
       count: 0
    },
    {
      id:7,
      type:"Special Item",
      price:[20.00,18.00],
       count: 0
    },
    {
      id:8,
      type:"Popular Item",
      price:[40.00],
       count: 0
    }
  ]);
  const [total,setTotal] = useState(0)
  let addtocart = (id) => {
    let item = items.find(obj => obj.id == id);
    item.count = 1;
    if(item.type == "Popular Item")
     setTotal(total + item.price[0]);
    else
     setTotal(total + item.price[1]);
  };
  let removeitem = (id) => {
    let result = window.confirm("Are you sure do you want to remove?");
    if(result){
      let itemIndex = items.findIndex(obj => obj.id == id);
      items[itemIndex].count = 0;
      if(items[itemIndex].type == "Popular Item")
       setTotal(total - items[itemIndex].price[0])
      else
       setTotal(total - items[itemIndex].price[1])//haven't added view options functionality for fancy product hence only max of the two price added and removed
    }
  }
  return (
    <div>
        <Navbar sum={total}/>     
        <Header/>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                      items.map((obj) => {
                        return <Card data = {obj} addcart={addtocart} delcart={removeitem}/>
                      })
                    }
                </div>
            </div>
            <h1>Total-${total}</h1>
        </section>
        <Footer/>

    </div>
  );
}

export default App;
