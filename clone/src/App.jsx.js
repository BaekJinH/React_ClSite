import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState(["남자", "여자 옷", "test"]);
  let [like, likeRender] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  // App 이라는 컴포넌트에 head state가 필요없다면 굳이 여기 컴포넌트가 아닌 필요로 하는 모달 컴포넌트에 만들어줘도 된다.
  let [head, setHead] = useState(0);
  let [input, setInput] = useState("");

  // let [data , c ] = useState('2023-07-01') ;
  // function changeTitle ( ) {
  // 	let newArray = [...title] ;
  // 	newArray[0] = '여자 추천'
  // 	b(newArray)
  // }

  return (
    <div className="App">
      <nav className="blackNav">
        <h4> React </h4>{" "}
      </nav>{" "}
      <button
        onClick={() => {
          let sortArray = [...title];
          sortArray.sort();
          setTitle(sortArray);
        }}
      >
        {" "}
        가나다 정렬{" "}
      </button>
      {/* 반복되는 것을 컴포넌트로 만들기 */}{" "}
      {/* <Title></Title>
							<Date></Date>
							<DetailText></DetailText> */}{" "}
      {/* <div className="list">
							<h4 onClick={() => { modal === false ? setModal(true) : setModal(false) }} > { title[0] } </h4>
							<p> { data } </p>
							<span onClick={ () => { likeRender(like + 1) } } > { like } </span>
							<br />
							<button onClick={ changeTitle } >클릭</button>
						</div>
						<div className="list">
							<h4> { title[1] } </h4>
							<p> { data } </p>
							<span> { like } </span>
						</div>
						<div className="list">
							<h4> { title[2] } </h4>
							<p> { data } </p>
							<span> { like } </span>
						</div> */}
      {title.map(function (el, idx) {
        return (
          <div className="list" key={idx}>
            <h4
              onClick={() => {
                setModal(true);
                setHead(idx);
                // modal === false ? setModal(true) : setModal(false)
              }}
            >
              {" "}
              {title[idx]}{" "}
              <span
                onClick={(e) => {
                  // 각각 state변경 함수에 Array 구조임 그렇기 때문에 기존 구조는 놔두고 새 구조를 만드는 스프레드 연산자(카피본이 필요함)
                  e.stopPropagation();
                  let copy = [...like];
                  copy[idx] = copy[idx] + 1;
                  likeRender(copy);
                }}
              >
                {" "}
                {like[idx]}{" "}
              </span>{" "}
            </h4>{" "}
            <p> 2 월 11 일 </p>
            <br />
          </div>
        );
      })}
      <input
        type="text"
        onInput={(e) => {
          setInput(e.target.value);
          console.log(e.target.value);
        }}
      />{" "}
      <button
        onClick={() => {
          if (input) {
            setTitle((prevTitle) => [...prevTitle, input]);
          }
          setInput("");
          // let copy = [...title] ;
          // copy.push(setInput([])) ;
          // setTitle(copy)
          // console.log(title)
        }}
      >
        {" "}
        글 생성{" "}
      </button>
      <button
        onClick={() => {
          setHead(0);
        }}
      >
        {" "}
        글제목0{" "}
      </button>{" "}
      <button
        onClick={() => {
          setHead(1);
        }}
      >
        {" "}
        글제목1{" "}
      </button>{" "}
      <button
        onClick={() => {
          setHead(2);
        }}
      >
        {" "}
        글제목2{" "}
      </button>
      {modal === true ? (
        <Modal head={head} title={title} setTitle={setTitle} />
      ) : null}{" "}
    </div>
  );
}

// let Modal = () => {
// 	return (

// 	)
// }

// props 전송 부모 -> 자식만 가능
function Modal(props) {
  return (
    <>
      <div
        className="modal"
        style={{
          background: props.color,
        }}
      >
        <h4> {props.title[props.head]} </h4> <p> 날짜 </p> <p> 내용 </p>{" "}
        {/* 버튼 클릭 시 1번 글 제목 변경 */}{" "}
        <button
          onClick={() => {
            props.setTitle(["여자코트 추천", "여자 옷", "test"]);
          }}
        >
          {" "}
          글 수정{" "}
        </button>{" "}
      </div>{" "}
      <div> </div>{" "}
    </>
  );
}

export default App;
