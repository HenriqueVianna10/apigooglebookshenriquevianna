import React, { useState } from 'react';
import './App.css';
import { InputGroup, Input, InputGroupAddon, Button, FormGroup, Label } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    if (maxResults > 40 || maxResults < 1) {
      toast.error('O resultado deve estar entre 1 e 40');


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
                <input 
                          placeholder='Procurar Livro'
                          value={query}
                          onChange={e => setQuery(e.target.value)}
                />
              </InputGroup>
              <InputGroupAddon addonType='append'>
                  <Button color='secondary'>
                    <i className='fas fa-search'></i>
                  </Button>
              </InputGroupAddon>
              <div className='d-flex text-white justify-content-center' > 
                <FormGroup className='ml-5'>
                          <Label for='maxResults'>Quantidade Máxima de Retornos</Label>
                          <input type='number' 
                          id='maxResults' 
                          placeholder='Quantidade Máxima de Retornos' 
                          value={maxResults}
                          onChange={e => setMaxResults(e.target.value)}
                          />
                </FormGroup>

                <FormGroup className='ml-5'>
                    <Label for='startIndex'>Indice Inicial</Label>
                    <input type='number' 
                           id='startIndex'
                           placeholder='Indice Inicial' 
                           value={startIndex}
                           onChange={e => setStartIndex(e.target.value)}
                           />
                </FormGroup>
              </div>
            </div>
        </div>
      );
  }

  return (
    <div className='w-100 h-100'>
      {mainHeader()}
      <ToastContainer />
    </div>
  );
}

export default App;

