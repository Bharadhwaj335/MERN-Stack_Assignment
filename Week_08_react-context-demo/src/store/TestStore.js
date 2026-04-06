import {create} from 'zustand'

//create store
export const useTest=create((set)=>({
    //state
    x:10,
    y:10,
    user:{
        name:"Brad",
        age:21
    },
    //functions to modify the state
    incrementX:()=>set((state)=>({x: state.x +1})),
    decrementX:()=>set((state)=>({x:state.x -1})),
    incrementY:()=>set((state)=>({y: state.y +1})),
    decrementY:()=>set((state)=>({y:state.y -1})),
    incrementXBYValue:(v)=>set((state)=>({x: state.x + v})),
    updateUsers:()=>set((state)=>({ user:{...state.user,} }))
}))