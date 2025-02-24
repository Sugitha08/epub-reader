import React from 'react'
import "./Footer.css"

function Footer({LoginStatus}) {
  const footerContent = ()=>{
    if(LoginStatus?.Role === "Publisher"){
      return <div>
        Publisher
      </div>
    }else if(LoginStatus?.Role === "User"){
      return <div>
        User
      </div>
    }else{
      return<div>
        Footer
      </div>
    }
  }
  return (
    <div className="footer">
      {footerContent()}
    </div>
  )
}

export default Footer
