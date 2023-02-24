import { useEffect, useState } from "react"

export default function SetIntervalTwo() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((previousCounter) =>  previousCounter + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, [])

    return(
        <>
            Counter: {counter}
        </>
    )
}