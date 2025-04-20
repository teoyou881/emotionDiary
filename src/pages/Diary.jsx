import React from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import Header from '../components/Header.jsx';
import Button from '../components/Button.jsx';
import Viewer from '../components/Viewer.jsx';
import useDiary from '../hooks/useDiary.jsx';
import {getStringedDate} from '../util/get-stringed-data.js';

const Diary = () => {
  let params = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);
  if (!curDiaryItem) {
    return <div>data loading...</div>
  }

  const {content, emotionId, createdDate} = curDiaryItem;
  console.log(createdDate);


  const title = getStringedDate(new Date(createdDate));

  return (
      <div>
        <Header
            title={`${title} diary`}
            leftChild={
              <Button onClick={() => nav(-1)} text={'back'}/>
            }
            rightChild={
              <Button
                  onClick={() => nav(`/edit/${params.id}`)}
                  text={'edit'}
              />
            }
        />
        <Viewer content={content} emotionId={emotionId}/>
      </div>
  );
}
export default Diary

