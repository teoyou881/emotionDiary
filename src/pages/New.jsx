import React, {useContext} from 'react'
import Header from '../components/Header.jsx';
import Button from '../components/Button.jsx';
import Editor from '../components/Editor.jsx';
import {useNavigate} from 'react-router-dom';
import {DiaryActionsContext} from '../App.jsx';

const New = () => {

  const nav = useNavigate();
  const {onCreate} = useContext(DiaryActionsContext)
const onSubmit = (input) => {
  onCreate(input.createdDate.getTime(), input.emotionId , input.content);
  nav('/', {replace: true});
}
  
  return (
      <div>
        <Header title={'create new diary'}
        leftChild={<Button text={'back'} type={'back'}
        onClick={() => {nav(-1)}}
            // onClick={() => {history.back()}}
        />}
        />
        <Editor onSubmit={onSubmit}/>
      </div>
  )
}
export default New
