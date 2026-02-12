import {useNavigate } from "react-router";
import "./backButton.css";

export const BackButton = () => {
   const navigate = useNavigate();
   return( 

     <div className="aboutActions">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="aboutBackBtn"
          >
          VOLVER
        </button>
      </div>
        )
        }