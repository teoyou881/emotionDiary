import './App.css'
import Home from './pages/Home.jsx';
import New from './pages/New.jsx';
import Diary from './pages/Diary.jsx';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import Notfound from './pages/Notfound.jsx';
import Button from './components/Button.jsx';
import Header from './components/Header.jsx';

// 1. "/" : Home
// 2. "/new" : New
// 3. "/diary" : Diary
function App() {

  let nav = useNavigate();

  const onClickButton = () => {
    nav('/new')
  };
  return (
      <>
        <Header title={'감정일기장'}
                leftChild={<Button text="<"/>}
                rightChild={<Button text=">" />}/>
        <Button text={'버튼'} onClick={() => (
            console.log('=>(App.jsx:25) ')
        )}
        /><Button text={'버튼'} onClick={() => (
          console.log('=>(App.jsx:25) ')
      )} type={'POSITIVE'}
      /><Button text={'버튼'} onClick={() => (
          console.log('=>(App.jsx:25) ')
      )} type={'NEGATIVE'}
      />
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
  );
}

export default App
