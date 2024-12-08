import React, { useState } from 'react'

interface Props {
    initialValue: number
}

export const Counter = (props: Props) => {

    const [counter, setCounter] = useState(props.initialValue)

    return (
        <>
            <h1>Counter</h1>
            <h3>value: {counter}</h3>

            <button onClick={() => setCounter(prev => ++prev)} type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">+1</button>
            <button onClick={() => setCounter(prev => --prev)} type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">-1</button>

        </>
    )
}
