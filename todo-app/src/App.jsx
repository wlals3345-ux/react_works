import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([ // useState 증가,감소, 초기화 시킬 수 있음
    { id: 1, text: '운동 하기', completed: false},
    { id: 2, text: '노래 듣기', completed: false},
  ])
  const [inputValue, setInputValue] = useState('')
  
  console.log(todos.length); //2

  //입력값 변경 핸들러
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value)

  }

  // 할 일 추가
  const handleAppTodo = () => {
    if(inputValue.trim() !== ''){
      // 새로운 할 일 객체 생성
      const newTodo = {
        id : todos.lengh +1,
        text : inputValue,
        completed : false,

      }
      // 새로운 할 일을 기존 할 일 목록에 추가
      setTodos([...todos, newTodo])
      setInputValue('') // 입력 필드 초기화
    }

  }


 // 할 일 삭제
  const handleDelteTodo = (id) => {
    /* 해당 id를 가진 할 일을 삭제
        todos 배열을 필터링하여 id가 일치하지 않는 할 일만 남김*/
      setTodos(todos.filter((todo) => todo.id !== id))
    }

  return (
    <>
    <div className = "container">
      <h2>Todo List</h2>
      


      

    </div>
    </>
  )
}

export default App
