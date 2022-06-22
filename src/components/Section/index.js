import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "react-daisyui";
import "./section.scss";

export default class Section extends Component {
  render() {
    return (
      <div className="header-container">
        <span className="font-semibold">{this.props.todoItem.todo}</span>
        <Checkbox size="lg" />
        <div className="toggle-action">
          <FontAwesomeIcon
            className="edit"
            icon={faPencil}
            onClick={() => this.props.onRequestEdit(this.props.todoItem)}
          />
          <FontAwesomeIcon
            className="delete"
            icon={faTrash}
            onClick={() => this.props.onDelete(this.props.todoItem.id)}
          />
        </div>
      </div>
    );
  }
}
