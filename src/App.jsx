import React from 'react';
import './App.css';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

function App() {
  const mainHeader = () => {
      return (
        <div className='main-image d-flex justify-content-center align-items-center flex-column'>
            {/*overlay */}
            <div className='filter'> </div>
            <h1 className='display-2 text-center text-white mb-3' 
                style={{zIndex: 2}}
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
