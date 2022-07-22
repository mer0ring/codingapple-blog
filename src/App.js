/* eslint-disable */ // warning 끄기

import { useState } from 'react';
import './App.css';

function App() {

  let [articleName, setArticleName] = useState(
    ['남자코트 추천', '강남 우동 맛집', '파이썬 독학']
  );
  let [title, setTitle] = useState(0);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [userInput, setUserInput] = useState('');

  const articleNameChange = () => {
    let copyArticleName = [...articleName];
    copyArticleName[0] = '여자코트 추천';
    setArticleName(copyArticleName);
  }

  const arraySort = () => {
    let copyArticleName = [...articleName];
    setArticleName(copyArticleName.sort());
  }

  const modalStatusChange = () => {
    setModal(!modal);
  }

  const arrayInput = () => {
    let copyArticleName = [...articleName];
    copyArticleName.unshift(userInput);
    setArticleName(copyArticleName);
  }

  return (
    <div className="App">
      <header className="black-nav">
        <h4>ReactBlog</h4>
      </header>
      
      <button onClick={articleNameChange}>제목변경</button>
      <button onClick={arraySort}>가나다 정렬</button>
      
      {
        articleName.map((arrData, i) => {
          return (
            <article 
              className="list" 
              onClick={() => {modalStatusChange(); setTitle(i);}} 
              key={i}
            >
              <h4>{arrData} 
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}>😘</span>
                {like[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...articleName];
                let copySlice = copy.slice(i, 1);
                setArticleName(copySlice); // 여기 하다 말았음
              }}>글삭제</button>
            </article>
          );
        })
      }

      <input onChange={(e) => {
        setUserInput(e.target.value);
      }}/>
      <button onClick={arrayInput}>글추가</button>
      
      {
        modal ? <Modal articleName={articleName} articleNameChange={articleNameChange} title={title} /> : null
      }      

    </div>
  );
}

const Modal = (props) => {
  
  return (
    <div className="modal">      
      <h4>{props.articleName[props.title]}</h4>
      <p>date</p>
      <p>details</p>
      <button onClick={props.articleNameChange}>글수정</button>
    </div>
  );
}

export default App;
