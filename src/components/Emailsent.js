
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiMessageAltError } from "react-icons/bi";

import "../App.css"

export default function Emailsent() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title"><BiMessageAltError
          style={{fontSize:"8rem"}}
          ></BiMessageAltError></h3>
          <div className="form-group mt-3">
          <h4>Your email has not been verified.</h4>
          <p>Send a verification code to example@name.com</p>
          
          </div>
          
          <div className="d-grid gap-2 mt-5" style={{paddingLeft:"4%", paddingRight:"4%"}}>
         
            <button type="submit" className="btn btn-primary" to="/emailverified" href="/emailverified">
            Send verification Mail
            </button>
           
          </div>
          <Link className=" text-right mt-2" style={{textDecoration: "none"}} to="/emailverified">
            <div style={{marginTop:"1.5rem" }}>Skip for now  
            <AiOutlineRight style={{paddingLeft:"2%", fontSize:"2rem"}}></AiOutlineRight>
            </div>
          </Link>
        </div>
      </form>
    </div>
  )
  }