import './App.css'
import Home from './pages/Home.jsx';
import New from './pages/New.jsx';
import Diary from './pages/Diary.jsx';
import {Link, Route, Routes} from 'react-router-dom';
import Notfound from './pages/Notfound.jsx';
import Button from './components/Button.jsx';
import Header from './components/Header.jsx';
import Edit from './pages/Edit.jsx';
import {useReducer, useRef} from 'react';

const mockData = [
  {
    id        :1,
    createDate:new Date().getTime(),
    emotionId :1,
    content   :'first',
  },
  {
    id        :2,
    createDate:new Date().getTime(),
    emotionId :2,
    content   :'second',
  },
]

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state, ];
    case 'UPDATE':
      return state.map(item =>
          String(item.id) === String(action.data.id) ? action.data : item,
      )
    case 'DELETE':
      return state.filter(item => String(item.id) !== String(action.data));
    default:
      return state;
  }
}

function App() {

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // create new diary
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type:'CREATE',
      data:{
        id:idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    })
  }

  // edit 
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type:'UPDATE',
      data:{
        id,
        createDate,
        emotionId,
        content,
      },
    })
  };
  
  const onDelete = (id) => {
    dispatch({
      type:'DELETE',
      data:id,
    });
  }

  return (
      <>

        <button onClick={()=>{
          onCreate(new Date().getTime(), 1, 'test');
        }}>create test</button>

        <button onClick={()=>{
          onUpdate(1, new Date().getTime(), 1, 'update');
        }}>update test</button>

        <button onClick={()=>{
          onDelete(1);
        }}>delete test</button>
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/new'}>New</Link>
          <Link to={'/diary'}>Diary</Link>
          <Link to={'/edit'}>Edit</Link>

        </div>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/new'} element={<New/>}></Route>
          <Route path={'/diary/:id'} element={<Diary/>}></Route>
          <Route path={'/edit/:id'} element={<Edit/>}></Route>
          <Route path="*" element={<Notfound/>}></Route>
        </Routes>
      </>
  );
}

export default App
