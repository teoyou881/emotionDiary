import './App.css'
import Home from './pages/Home.jsx';
import New from './pages/New.jsx';
import Diary from './pages/Diary.jsx';
import {Route, Routes} from 'react-router-dom';
import Notfound from './pages/Notfound.jsx';
import Edit from './pages/Edit.jsx';
import {createContext, useReducer, useRef} from 'react';

const mockData = [
  {
    id        :1,
    createdDate:new Date('2025-04-16').getTime(),
    emotionId :1,
    content   :'first',
  },
  {
    id        :2,
    createdDate:new Date('2025-03-16').getTime(),
    emotionId :2,
    content   :'second',
  },
  {
    id        :3,
    createdDate:new Date('2025-04-10').getTime(),
    emotionId :3,
    content   :'second',
  },
]

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
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

export const DiaryContext = createContext();
export const DiaryActionsContext = createContext();

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
        <DiaryContext.Provider value={data}>
          <DiaryActionsContext.Provider
              value={{
                onCreate, onUpdate, onDelete,
              }}>
            <Routes>
              <Route path={'/'} element={<Home/>}></Route>
              <Route path={'/new'} element={<New/>}></Route>
              <Route path={'/diary/:id'} element={<Diary/>}></Route>
              <Route path={'/edit/:id'} element={<Edit/>}></Route>
              <Route path="*" element={<Notfound/>}></Route>
            </Routes>
          </DiaryActionsContext.Provider>
        </DiaryContext.Provider>
      </>
  );
}

export default App
