import React from 'react';
import './App.css';
import { InputGroup, Input, InputGroupAddon } from 'reactstrap';

function App() {
  const mainHeader = () => {
      return (
        <div className='main-image d-flex justify-content-center align-items-center flex-column'>
            {/*overlay */}
            <div className="filter"> </div>
            <h1 className='display-2 text-center text-white mb-3' style={{zIndex: 1}}> 
               Biblioteca Google
            </h1>
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
