import React from 'react'
import { useState } from 'react'

function CounterRow() {
    const [count, setCount]=useState(0);
    const [tour, setTour]=useState([]);
    const [day, setDay]=useState([]);
  return (
    <div>
    <div>`Adım: {count} Tur: {tour} Günde: {day}`</div>
    Console.log("Satır1")
    <button onClick={setCount(count+1)}>Sayıcı</button>
    <button onClick={setTour([...tour, count])}>Tur Tamamla</button>
    <button onClick={setDay([...day, tour])}>Gün Bitir</button>
    </div>
    
  )
}

export default CounterRow