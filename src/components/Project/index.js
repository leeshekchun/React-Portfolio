import React from "react";

function Project(props) {
    return (
        <div class={props.class}>
        <a href={props.link}>
          <img
            src={props.img}
            className="my-2"
            style={{ width: "30%" }}
            alt="cover"
          />

          <div class={props.text}>
            <h3>{props.title}</h3>
          </div>
        </a>
      </div>
    )
}
export default Project;