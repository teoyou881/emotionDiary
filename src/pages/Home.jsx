import React, {useContext, useState} from 'react'
import Header from '../components/Header.jsx';
import Button from '../components/Button.jsx';
import DiaryList from '../components/DiaryList.jsx';
import {DiaryContext} from '../App.jsx';

const getMonthlyData = (pivotDate, data) => {

  const beginTime = new Date(
      pivotDate.getFullYear(),
      pivotDate.getMonth(),
      1, 0, 0, 0,
  ).getTime()
  const endTime = new Date(
      pivotDate.getFullYear(),
      pivotDate.getMonth() + 1,
      0, 23, 59, 59,
  ).getTime()

  return data.filter(
      (item) => beginTime <= item.createdDate && item.createdDate <= endTime);
}

const Home = () => {
  // const [params, setParams] = useSearchParams();

  const data = useContext(DiaryContext);

  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  }

  return (
      <div>
        <Header
            title={`${new Intl.DateTimeFormat(
                'en-CA', {month:'short'}).format(pivotDate)} 
                ${pivotDate.getFullYear()} `}
            leftChild={<Button onClick={onDecreaseMonth} text={'<'}/>}
            rightChild={<Button onClick={onIncreaseMonth} text={'>'}/>}
        />
        <DiaryList data = {monthlyData}/>
      </div>
  );
}
export default Home
