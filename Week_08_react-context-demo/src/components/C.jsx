import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext"
import {useTest} from "../store/TestStore.js"
function C() {

  //get state from zustand store
  // const x=useTest(state=>state.x)//{x:10}
  // console.log(useTest())
  let y=useTest(state=>state.y)
  let incrementY=useTest(state=>state.incrementY)
  
  
  let {counter1,changeCounter1} = useContext(CounterContext)
  console.log("Counter C is rendered")
  return (
    <div className="text-center shadow-2xl p-10">
      <p className="text-3xl">Component C</p>
      <p className="text-2xl mt-10">Counter 1: {counter1}</p>
      <p className="text-2xl mt-10">y: {y}</p>
      <button onClick={incrementY} className="bg-blue-500 text-white px-4 py-2 mt-5 rounded">Increment Y</button>

      <button onClick={changeCounter1} className="bg-blue-500 text-white px-4 py-2 mt-5 rounded">Change Counter 3</button>
    </div>
  )
}

export default C