import React from 'react';
import style from './Title.css';

const Title = (props) => {
  return (
    <div className={style.Title}>
      <h1></h1>
      <p>Liczba zadań: {props.number}</p>
    </div>
  );
}

export default Title;
