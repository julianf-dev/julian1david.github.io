import React from 'react'
import '../styles/Logo.scss'

export function Logo(
    {
        src = src,
        alt = alt,
        className,
        srcSet
    }
) {
    return (
        <img src={src} alt={alt} className={[className].join(" ")}  srcSet={srcSet}/>
    )
}