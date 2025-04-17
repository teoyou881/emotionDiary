import React, {useState} from 'react'
import './Editor.css'
import EmotionItem from './EmotionItem.jsx';
import Button from './Button.jsx';

const emotionList = [
  {emotionId:1, emotionName:'best'},
  {emotionId:2, emotionName:'good'},
  {emotionId:3, emotionName:'normal'},
  {emotionId:4, emotionName:'bad'},
  {emotionId:5, emotionName:'worst'},
]

// value in input tag can't understand new Date();
// should convert it to String
const getStringedDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (month < 10) return `${year}-0${month}-${day}`;
  if (day < 10) return (
      `${year}-${month}-0${day}`
  )
  return `${year}-${month}-${day}`;
}

const Editor = () => {
  const [input, setInput] = useState({
    createdDate:new Date(),
    emotionId  :3,
    content    :'',
  })

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]:new Date(e.target.value),
    })
  }

  const [emotionId, setEmotionId] = useState(1);

  const onMouseOver = (e) => {
    const emotionItem = e.target.closest('.emotion_item'); // EmotionItem의 div를 가져옴

    if (emotionItem) {
      const index = Array.from(emotionItem.parentNode.children).
          indexOf(emotionItem) + 1; // 부모의 자식 노드들에서 현재 요소의 순서 확인
      console.log(`Hovered over emotion item #${index}`);
    }
  };

  return (
      <div
          className="Editor">
        <section className="date_section">
          <h4>Today is</h4>
          <input
              name="createdDate"
              type="date"
              value={getStringedDate(input.createdDate)}
              onChange={onChangeInput}/>
        </section>
        <section className="emotion_section">
          <h4>Today's emotion</h4>
          <div className="emotion_list_wrapper">
            {emotionList.map(emotion => (
                //  <EmotionItem key={emotion.id} emotionId={emotion.id} emotionName={emotion.name}/>
                <EmotionItem
                    key={emotion.id}
                    {...emotion}
                    isSelected={emotion.emotionId === emotionId}/>
            ))}

            {/* ### 배열 + `map`을 사용하는 것의 장점
             1. **유지보수성**
             - 데이터가 변경될 때 코드를 수정하지 않고 배열 데이터만 업데이트하면 됩니다
             - 아이템이 추가/제거될 때 JSX 코드를 직접 편집할 필요가 없습니다

             2. **코드 간결성**
             - 반복되는 요소를 작성하는 대신 짧은 코드로 많은 요소를 렌더링할 수 있습니다
             - 중복 코드가 제거되어 코드 양이 줄어듭니다

             3. **동적 데이터 처리**
             - API나 상태에서 받아온 데이터를 쉽게 렌더링할 수 있습니다
             - 데이터 변경 시 자동으로 UI가 업데이트됩니다

             4. **확장성**
             - 아이템 수가 많아져도 코드가 복잡해지지 않습니다
             - 예: 5개, 10개, 100개 아이템도 동일한 로직으로 처리 가능

             5. **일관성 유지**
             - 모든 아이템은 동일한 방식으로 생성되므로 일관된 스타일과 동작을 보장합니다
             - 한 컴포넌트의 속성을 변경하면 모든 아이템에 적용됩니다

             6. **디버깅 용이성**
             - 문제가 발생하면 컴포넌트 로직 하나만 수정하면 모든 아이템에 적용됩니다
             - 각 아이템에 `key` 속성을 부여하여 React의 최적화된 렌더링을 활용할 수 있습니다

             7. **데이터와 표현의 분리**
             - 프로그래밍적 원칙인 "관심사의 분리"를 따르는 방식입니다
             - 데이터 모델과 UI 표현이 명확히 분리됩니다
             */}
            {/*
             <EmotionItem emotionId={1} emotionName={"gooood"}/>
             <EmotionItem emotionId={1} emotionName={"gooood"}/>
             <EmotionItem emotionId={1} emotionName={"gooood"}/>
             <EmotionItem emotionId={1} emotionName={"gooood"}/>
             <EmotionItem emotionId={1} emotionName={"gooood"}/>
             */}
          </div>
        </section>
        <section className="content_section">
          <h4>Today's diary</h4>
          <textarea placeholder={'how was today?'}></textarea>
        </section>
        <section className="button_section">
          <Button text={'cancel'}/>
          <Button text={'save'} type={'POSITIVE'}/>
        </section>
      </div>
  )
}
export default Editor
