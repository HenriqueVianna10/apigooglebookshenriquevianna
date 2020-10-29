import React, { useState } from 'react';
import './App.css';
import { InputGroup, Input, InputGroupAddon, Button, FormGroup, Label, Spinner } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import BookCard from './BookCard.jsx';

function App() {
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const handleSubmit = () => {
    setLoading(true);
    if (maxResults > 40 || maxResults < 1) {
      toast.error('O resultado deve estar entre 1 e 40');
    } else {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
        )
        .then(res => {
          if (startIndex >= res.data.totalItems || startIndex < 1) {
            toast.error(
              `O valor máximo de resultados deve estar entre 1 e ${res.data.totalItems}`
            );
          } else {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
            }
          }
        })
        .catch(err => {
          setLoading(true);
          console.log(err.response);
        });
    }
  };


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
                  <Button color='secondary' onClick={handleSubmit}>
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

  const handleCards = () => {
    if (loading) {
      return (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      );
    } else {
      const items = cards.map((item, i) => {
        let thumbnail = '';
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        return (
          <div className='col-lg-4 mb-3' key={item.id}>
            <BookCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              description={item.volumeInfo.description}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
            />
          </div>
        );
      });

  return (
    <div className='container my-5'>
      <div className='row'>{items}</div>
    </div>
  );
}
};
return (
<div className='w-100 h-100'>
  {mainHeader()}
  {handleCards()}
  <ToastContainer />
</div>
);
}

export default App;

