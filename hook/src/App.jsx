import './App.css'
import Clock from './components/Clock'
import Counter from './components/Counter'
import Drinks from './components/Drinks'
import InputValue from './components/InputValue'
import User from './components/User'
import SignUp from './users/SignUp'
import Signln from './users/Signln'


function App() {

  return (
    <>
      <div className='app'>
        {/* <h2>리엑트 상태 관리</h2> */}
        {/* <Counter /> */}
        {/* <InputValue /> */}
        {/* <Drinks /> */}
        {/* <Clock />  */}
        {/* <User /> */}
        {/* <SignUp /> */}
        <Signln />
      </div>
    </>
  )
}

export default App
