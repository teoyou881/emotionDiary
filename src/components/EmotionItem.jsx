import React from 'react'
import './EmotionItem.css'
import {getEmotionImage} from '../util/get-emotion-image.js';

const EmotionItem = ({emotionId,emotionName, isSelected}) => {
  return (
      <div className={`EmotionItem ${
          isSelected ? `EmotionItem_on_${emotionId}` : ''}`}>
        <img className="emotion_img" src={getEmotionImage(emotionId)} alt=""/>
        <div className="emotion_name">{emotionName}</div>
      </div>
  )
}
export default EmotionItem
