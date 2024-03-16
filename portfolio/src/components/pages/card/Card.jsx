import React from "react";
import Detail from "../detail/Detail";
import "./style.css"


function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt="screenshot"/>
      </div>
      <div className="content">
        <ul>
        <li>
            <strong>Project Title:</strong>{props.title}
          </li>
          <li>
            <strong>Project Link:</strong><Detail detailurl={props.project} />
          </li>
          <li>
            <strong>Github Link:</strong><Detail detailurl={props.github} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
