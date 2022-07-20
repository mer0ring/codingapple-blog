/* eslint-disable */ // warning 끄기

import { useState } from 'react';
import './App.css';

function App() {

  let [articleName, setArticleName] = useState(
    ['남자코트 추천', '강남 우동 맛집', '파이썬 독학']
  );
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

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
            <article className="list" onClick={modalStatusChange} key={i}>
              <h4>{arrData} 
                <span onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}>😘</span>
                {like[i]}
              </h4>
              <p>2월 17일 발행</p>
            </article>
          );
        })
      }
      
      {
        modal ? <Modal articleName={articleName} /> : null
      }      

    </div>
  );
}

/* 
  1. props.articleName 으로 전달받은 글 제목을 제각각 모달에 표기
  2. 글 수정 기능 완료시키기
*/

const Modal = (props) => {
  
  const { articleName } = props.articleName;
  
  return (
    <div className="modal">
      <h4>{}</h4>
      <p>date</p>
      <p>details</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
