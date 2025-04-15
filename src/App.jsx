import './App.css'
import Home from './pages/Home.jsx';
import New from './pages/New.jsx';
import Diary from './pages/Diary.jsx';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import Notfound from './pages/Notfound.jsx';

import {getEmotionImage} from './util/get-emotion-image.js';

// 1. "/" : Home
// 2. "/new" : New
// 3. "/diary" : Diary
function App() {

  let nav = useNavigate();

  const onClickButton = () => {
    nav("/new")
  };
  return (
      <>
        <img src={getEmotionImage(1)} alt=""/>
        <img src={getEmotionImage(2)} alt=""/>
        <img src={getEmotionImage(3)} alt=""/>
        <img src={getEmotionImage(4)} alt=""/>
        <img src={getEmotionImage(5)} alt=""/>
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/new'}>New</Link>
          <Link to={'/diary'}>Diary</Link>
        </div>
        <button onClick={onClickButton}> go to new page</button>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/new'} element={<New/>}></Route>
          <Route path={'/diary/:id'} element={<Diary/>}></Route>
          <Route path="*" element={<Notfound/>}></Route>
        </Routes>
      </>
  )
}

export default App
