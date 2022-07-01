import React, {useRef, useEffect, useState} from 'react'
// import Clouds from 'vanta/dist/vanta.clouds.min'
// import * as THREE from 'three'
import './WelcomeScreen.css'

const WelcomeScreen = ({children}) => {

    const myRefDiv = useRef(null)
    // const [vanta, setVanta] = useState(0)

    // useEffect(() => {
    //     if (!vanta) {
    //         setVanta( Clouds({
    //             THREE,
    //             el: myRefDiv.current
    //         }))
    //     }
    //     console.log('test');
    //     return()=> {
    //         if (vanta) {
    //             vanta.destroy()
    //             console.log('libera recursos');
    //         }
    //     }
       
    // }, [vanta])

  return (
    <div className='full' ref={myRefDiv}>
        {children}
    </div>
  )
}


export default WelcomeScreen