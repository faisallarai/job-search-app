import React, { useContext, useState } from 'react'

import loading from '../images/loading.png'
import ImageContext from '../contexts/image'

const Image = () => {

    const [isVisible, setIsVisible] = useState(false)
    const { src, alt, width, height } = useContext(ImageContext)

    const changeVisibility = () => {
        setIsVisible(true)
    }

    return (
        <>
            {/* isVisible is false by default display inline */}
            <img src={loading} 
                alt={alt} 
                width={width} 
                height={height} 
                style={{ display: isVisible ? 'none' : 'inline'}} 
            />
            {/* isVisible is true after the loads display inline */}
            <img 
                src={src} 
                alt={alt} 
                width={width} 
                height={height} 
                onLoad={changeVisibility} 
                style={{ display: isVisible ? 'inline' : 'none'}} 
            />
        </>
    )
}

export default Image