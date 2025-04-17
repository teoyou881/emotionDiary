import React from 'react'
import Header from '../components/Header.jsx';
import Button from '../components/Button.jsx';
import Editor from '../components/Editor.jsx';
import {useNavigate} from 'react-router-dom';

const New = () => {

  const nav = useNavigate();

  return (
      <div>
        <Header title={'create new diary'}
        leftChild={<Button text={'back'} type={'back'}
        onClick={() => {nav(-1)}}
            // onClick={() => {history.back()}}
        />}
        />
        <Editor/>
      </div>
  )
}
export default New
