import { useContext, useEffect, useRef, useState } from "react"
import { CounterContext } from "../contexts/CounterContext.js"
import { UserContext } from "../contexts/UserContext.js"

function A() {

  let inputRef=useRef(null)
  let {counter1,changeCounter1,changeCounter2} = useContext(CounterContext)
  let {user,changeUser}=useContext(UserContext)

  const [formName, setFormName] = useState(user.name)
  const [formEmail, setFormEmail] = useState(user.email)

  useEffect(() => {
    inputRef.current?.focus()
    console.log("Component A is rendered")
  }, [])

  useEffect(() => {
    setFormName(user.name)
    setFormEmail(user.email)
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    changeUser({...user, name: formName, email: formEmail})
  }
  return (
    <div className="text-center shadow-2xl p-10">
      <p className="text-3xl">Component A</p>
      <p className="text-2xl mt-10">Counter 1: {counter1}</p>
      <button onClick={changeCounter1} className="bg-blue-500 text-white px-4 py-2 mt-5 rounded">Change Counter 1</button>
      <button onClick={changeCounter2} className="bg-blue-500 text-white px-4 py-2 mt-5 rounded ml-5">Change Counter 2</button>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" value={formName} onChange={(e) => setFormName(e.target.value)} className="border-2 mt-5 p-1"/>
        <input type="text" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} className="border-2 mt-5 p-1" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-3 rounded ml-3">Save</button>
      </form>
      <div className="mt-4 text-left">
        <p className="font-semibold">User Name: {user.name}</p>
        <p className="font-semibold">User Email: {user.email}</p>
      </div>
    </div>
  )
}

export default A