import React from 'react'
import {useParams} from 'react-router-dom';

const Edit = () => {

  const params = useParams();

  return (
      <>{params.id} !!!</>
  )
}
export default Edit
