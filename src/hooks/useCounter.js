import { useEffect, useState } from "react";

export function useCounter (){
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(prev => prev +1)
    }

    const decrement = () =>{
        setCount(prev => prev -1)
        console.log(count)
        localStorage.setItem('count', `${count}`)
        console.log(count)
    }

    useEffect(() =>{
        localStorage.setItem('count', `${count}`)
    },[count])

    
    return[count,increment,decrement]
}