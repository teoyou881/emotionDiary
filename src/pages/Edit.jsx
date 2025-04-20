import React, {useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import Header from '../components/Header.jsx';
import Button from '../components/Button.jsx';
import Editor from '../components/Editor.jsx';
import {DiaryActionsContext, DiaryContext} from '../App.jsx';
import {safeCompare} from '../util/safeCompare.js';
import UseDiary from '../hooks/useDiary.jsx';
import useDiary from '../hooks/useDiary.jsx';

const Edit = () => {

  const params = useParams();
  const nav = useNavigate();
  const actionContext = useContext(DiaryActionsContext)

  const onClickDelete=()=>{
    if(window.confirm('Do you really want to delete your diary? Your diary will never be recovered.')){
      actionContext.onDelete(params.id);
      nav('/', {replace: true});
    }
  }

  const curDiaryItem = useDiary(params.id);

  const onSubmit = (input) => {
    actionContext.onUpdate(params.id, input.createdDate.getTime(), input.emotionId , input.content);
    nav('/', {replace: true});
  }

  return (
      <div>
        <Header title={'edit diary'}
                leftChild={<Button text={'back'} type={'back'}
                                   onClick={() => {nav(-1)}}
                    // onClick={() => {history.back()}}
                />}
                rightChild={<Button onClick={onClickDelete} text={'delete'} type={'NEGATIVE'}/>}
        />
        <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
      </div>
  )
}
export default Edit
