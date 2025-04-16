import React from 'react'
import {getEmotionImage} from '../util/get-emotion-image.js';
import Button from './Button.jsx';
import './DiaryItem.css'



const DiaryItem = () => {
  const emotionId = 5;
  return (
      <div className="DiaryItem">
        <div className={`img_section img_section_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt=""/>
        </div>
        <div className="info_section">
          <div className="created_date">
            {new Date().toLocaleDateString()}
          </div>
          <div className="content">
            content
          </div>
        </div>
        <div className="button_section">
          <Button text={'edit'}/>
        </div>
      </div>
  );
}
export default DiaryItem
