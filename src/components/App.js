// create your App component here
import React, { useEffect, useState } from "react"


function App(){
const [isLoaded, setisLoaded] = useState(false)
const [image, setImage] = useState(null)

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((data) => {
            setImage(data.message)
            console.log(data)
            setisLoaded(true)
        })
}, [])

if(!isLoaded) return(
    <p>Loading...</p>
)

    return(
        <>
        <p>Random Dog</p>
        <img src={image} alt="A Random Dog" />
        </>
    )
}



export default App