import React from 'react'
import Header from '../components/Header.jsx';
import Button from '../components/Button.jsx';
import Editor from '../components/Editor.jsx';

const New = () => {
  return (
      <div>
        <Header title={'create new diary'}
        leftChild={<Button text={'back'} type={'back'} onClick={() => {history.back()}} />}
        />
        <Editor/>
      </div>
  )
}
export default New
