
import './App.css'
import heroImg from './assets/hero.png'
import Example01 from './components/Example01';
import Example02 from './components/Example02';
// 내부 컴포넌트
function MyButton(){
  return(
    <button>목록보기</button>
  )
}




function App() {
  const season = "가을";


  return (
    <div>
      {/* JSX에서는 Classname 속성 사용
        태그를 병렬로 사용x div태그로 감싸야함
      */}
      <h3 className="welcome">홈페이지 방문을 환영합니다.</h3>
      <section>
        {/* <p>현재 계절은 {season}입니다.</p> */}

        {/*이미지 넣기*/}
        {/* <img
          src={heroImg}
          alt="메인이미지"
          width={200}/> */}
       {/* <MyButton/> */}
        <Example01 />
        <Example02 />
      </section>
    </div>

  )
}

export default App
