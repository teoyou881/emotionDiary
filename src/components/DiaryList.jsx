import React, {useEffect, useState} from 'react'
import Button from './Button.jsx';
import './DiaryList.css'
import DiaryItem from './DiaryItem.jsx';
import {useNavigate} from 'react-router-dom';

const DiaryList = ({data}) => {
  const filteredList = (data, filter) => {
    if (filter === 'latest') {
      return data.toSorted(
          (a, b) => Number(b.createdDate) - Number(a.createdDate));
    }
    return data.toSorted(
        (a, b) => Number(a.createdDate) - Number(b.createdDate));
  }

  const [filter, setFilter] = useState('latest');
    const onChangeSetFilter = (e) => {
      setFilter(e.target.value);
    }

  const nav = useNavigate();

  return (
      <div className="DiaryList">
        <div className="menu_bar">
          <select onChange={(onChangeSetFilter)} name="" id="">
            <option value="latest">latest</option>
            <option value="oldest">oldest</option>
          </select>
          <Button
              onClick={()=>(nav(`/diary/new`))}
              text={'create new diary'} type={'POSITIVE'}/>
        </div>
        <div className="diary_wrapper">
          {filteredList(data,filter)?.map((item) => (
              <DiaryItem key={item.id}{...item}/>
          ))}
        </div>
      </div>
  );
}
export default DiaryList
