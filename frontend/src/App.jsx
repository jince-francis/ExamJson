import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-dark'>
      <Card style={{ width: '24rem' }}>
      <Card.Body>
        <Card.Title className='text-center'>INVENTORY</Card.Title>
        <input type="text" className='form-control m-2' placeholder='name'/>
        <input type="text" className='form-control m-2' placeholder='price'/>
        <input type="text" className='form-control m-2' placeholder='stock'/>
        <input type="text" className='form-control m-2' placeholder='description'/>
        <div className='d-flex justify-content-center'>
        <Button variant="primary">add</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default App