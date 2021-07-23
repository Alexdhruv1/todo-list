import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        bottom: "0vh",
        width: "100%"
    }

    return (

        <div className="bg-dark text-light py-1.6" style={footerStyle}>
            <p className="text-center" >
            Copyright &copy; Dhruv Saini 2021
            </p>
        </div>
    )
}
