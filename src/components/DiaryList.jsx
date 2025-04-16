import React from 'react'
import Button from './Button.jsx';
import './DiaryList.css'
import DiaryItem from './DiaryItem.jsx';

const DiaryList = () => {
  return (
      <div className="DiaryList">
        <div className="menu_bar">
          <select name="" id="">
            <option value="latest">latest</option>
            <option value="oldest">oldest</option>
          </select>
          <Button text={'create new diary'} type={'POSITIVE'}/>
        </div>
        <div className="diary_wrapper">
          <DiaryItem/>
          <DiaryItem/>
          <DiaryItem/>
        </div>
      </div>
  );
}
export default DiaryList
