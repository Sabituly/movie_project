import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return <div>
    <Book name={'JS for'} year={2019} price={1300}/>
    <Book name={'JS for dummies'} year={2020} price={1800}/>
    <Book name={'JS for people'} year={2021} price={1900}/>

  </div>;
}

const Book = (props:any) => {
  // return React.createElement('div', {}, [
  //     React.createElement('h2', {}, props.name),
  //     React.createElement('p', {}, props.year),
  //     React.createElement('p', {}, props.price)
  // ])

   return <div>
        <h2>{props.name}</h2>
        {/*{} это jsx синтаксис */}
        <p>{props.year}</p>
        <p>{props.price}</p>
    </div>
}

export default App;
