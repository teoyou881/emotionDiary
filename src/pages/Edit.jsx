import React, {useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import Header from '../components/Header.jsx';
import Button from '../components/Button.jsx';
import Editor from '../components/Editor.jsx';
import {DiaryActionsContext, DiaryContext} from '../App.jsx';
import {safeCompare} from '../util/safeCompare.js';

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

  // useParams 이용해서 id 얻고, diary 접근
  // item.id, params.id 가 타입이 달라서 diary가 없다고 나온다.
  // util 파일에 String 타입으로 감싸서 비교해주는 함수 만들고 호출
  const data = useContext(DiaryContext);

  const [curDiaryItem, setCurDiaryItem] = useState()
  useEffect(() => {
    const currentDiary = data.find(item => safeCompare(item.id, params.id));
    if(!currentDiary){
      window.alert('diary not found');
      nav('/', {replace: true});
    }
   setCurDiaryItem(currentDiary);
  }, [params.id]);

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
