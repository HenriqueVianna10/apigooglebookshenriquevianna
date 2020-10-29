import React from 'react';
import './App.css';
import { InputGroup, Input, InputGroupAddon, Button, FormGroup, Label } from 'reactstrap';

function App() {
  const mainHeader = () => {
      return (
        <div className='main-image d-flex justify-content-center align-items-center flex-column'>
            {/*overlay */}
            <div className='filter'></div>
            <h1 className='display-2 text-center text-white mb-3'
                style={{ zIndex: 2 }}
            > 
               Biblioteca Google
            </h1>
            <div style={ { width: '60%', zIndex: 2 }}>
              <InputGroup size='lg' className='mb-3'>
                <input placeholder='Procurar Livro'/>
              </InputGroup>
              <InputGroupAddon addonType='append'>
                  <Button color='secondary'>
                    <i className='fas fa-search'></i>
                  </Button>
              </InputGroupAddon>
              <div className='d-flex text-white justify-content-center' > 
                <FormGroup className='ml-5'>
                    <Label for='maxResults'>Quantidade Máxima de Retornos</Label>
                    <input type='number' id='maxResults' placeholder='Quantidade Máxima de Retornos' />
                </FormGroup>
              </div>
            </div>
        </div>
      );
  }

  return (
    <div >
      {mainHeader()}
    </div>
  );
}

export default App;
