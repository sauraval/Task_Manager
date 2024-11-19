import './App.css'
import Addtodo from './Components/Addtodo'
import TodoList from './Components/TodoList'


function App() {

  return (
    <>
      <div className=' w-full bg-zinc-900 min-h-screen' style={{textAlign:'center'}}>
        <div className=' container mx-auto flex flex-col p-16 justify-center items-center max-w-5xl' >
          <h1 className=' text-white text-3xl font-bold pb-8'>My Tasks</h1>
          <Addtodo />
          <TodoList />
        </div>
      </div>

    </>
  )
}

export default App