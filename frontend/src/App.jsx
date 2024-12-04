import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addInventory, getvideo } from './services/allApi';

const App = () => {

  const [values,setValues] = useState({
    name:"",
    category:"",
    price:"",
    stock:"",
    description:""
  })
  // Function to fetch data
  const fetchData = async () => {
    const result = await getvideo()
    console.log(result.data)
    
  }
  console.log(values);
  const handleAddItem = async() =>{
    const result = await addInventory(values)
    console.log(result);
    
  }
  
  // useEffect to call fetchData when the component mounts
  useEffect(() => {
    fetchData()
  }, [values]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title className="text-center">INVENTORY</Card.Title>
          <input type="text" className="form-control m-2" placeholder="name" value={values.name} onChange={(e)=>{setValues({...values,name:e.target.value})}}/>
          <input type="text" className="form-control m-2" placeholder="category"  value={values.category} onChange={(e)=>{setValues({...values,category:e.target.value})}} />
          <input type="text" className="form-control m-2" placeholder="price"  value={values.price} onChange={(e)=>{setValues({...values,price:e.target.value})}} />
          <input type="text" className="form-control m-2" placeholder="stock"  value={values.stock} onChange={(e)=>{setValues({...values,stock:e.target.value})}} />
          <input type="text" className="form-control m-2" placeholder="description" value={values.description} onChange={(e)=>{setValues({...values,description:e.target.value})}} />
          <div className="d-flex justify-content-center">
            <Button variant="primary" onClick={handleAddItem} type='button'>add</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
