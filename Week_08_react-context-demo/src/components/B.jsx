import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext"
import { useTest } from "../store/TestStore"
function B() {

  //zustand store
  const x=useTest(state=>state.x)//{x:10}
  const incrementX=useTest(state=>state.incrementX)
  const incrementValueBy=useTest(state=>state.incrementXBYValue)

  let {counter1,changeCounter1} = useContext(CounterContext)
  console.log("Counter B is rendered")
  return (
    <div className="text-center shadow-2xl p-10">
      <p className="text-3xl">Component B</p>
      <p className="text-2xl mt-10">Counter 1: {counter1}</p>
      <p className="text-2xl mt-10">x: {x}</p>
      <button onClick={incrementX} className="bg-blue-500 text-white px-4 py-2 mt-5 rounded">Increment X</button>
      <button onClick={() => incrementValueBy(5)} className="bg-blue-500 text-white px-4 py-2 mt-5 rounded ml-5">Increment X by 5</button>
      <button onClick={changeCounter1} className="bg-blue-500 text-white px-4 py-2 mt-5 rounded">Change Counter 2</button>
    </div>
  )
}

export default B