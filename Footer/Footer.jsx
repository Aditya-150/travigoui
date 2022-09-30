import React from 'react'
import './Footer.css'

const Footer = () => {
    return(
        <div className="Footer_Container">
            <div className="wra">
                <div className="Logo_column">
            <img src="travigoLogo.svg" alt="logo"/>
            <p>loresdbfa sdhkfblashdbf skdhfbskbdf</p>           
                </div>
                
                <div className="About_column">
                <ul>
                    <li className="text-black text-1xl font-bold">About</li><br />
                    <li>Thing1</li>
                    <li>Thing2</li>
                    <li>Thing3</li>
                    <li>Thing4</li>
                </ul>
                </div>
                <div className="Company_column">
                <ul>
                    <li className="text-black text-1xl font-bold">Company</li><br />
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li>
                </ul>
                </div>
                <div className="Support_column">
                <ul>
                    <li className="text-black text-1xl font-bold">Support</li><br />
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li>
                </ul>
                </div>
                <div className="Get_In_Touch_column">
                <ul>
                    <li className="text-black text-1xl font-bold">Get In Touch</li><br />
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li>
                    <li>Thing</li>
                </ul>
                </div>
            </div>    
        </div>
    )
}

export default Footer