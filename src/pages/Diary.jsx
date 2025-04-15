import React from 'react'
import {useParams} from 'react-router-dom';

const Diary = () => {
  let params = useParams();
  console.log(params);
  return (
      <>{params.id} diary!</>
  );
}
export default Diary

