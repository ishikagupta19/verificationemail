import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TiLocationArrowOutline } from "react-icons/ti";

export default function Emailverified() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">
            <TiLocationArrowOutline
              style={{ fontSize: "8rem", color:"blue" }}
            ></TiLocationArrowOutline>
          </h3>
          <div className="form-group mt-3">
            <h4>An email has been sent to you.</h4>
            <p
              style={{
                paddingRight: "4%",
                paddingLeft: "4%",
              }}
            >
              Check the email that's associated with your account for the
              verification code.
            </p>
            
          </div>
          
          <div
            className="d-grid gap-1 mt-5"
            style={{ paddingLeft: "4%", paddingRight: "4%" }}
          >
            <label 
            style={{
              display:"flex"
            }}>Verification Code</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Code"
            />
            <button
              type="submit"
              className="btn btn-primary"
              to="/emailsent"
              href="/emailsent"
            >
              Verify
            </button>
            <Link style={{  textDecoration: "none" }} to="/emailsent">
            <div >
              Send me another code
            </div>
          </Link>
          </div>
          <Link className="forgot-password text-right mt-2" to="/emailsent" style={{  textDecoration: "none" }}>
            <div style={{ marginTop: "1.5rem" }}>
              Skip for now
              <AiOutlineRight
                style={{ paddingLeft: "2%", fontSize: "2rem" }}
              ></AiOutlineRight>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
}
