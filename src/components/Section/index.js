import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./section.scss";

export default class Section extends Component {
  render() {
    return (
      <div className="header-container">
        <span
          className={
            "font-semibold " + (this.props.todoItem.done && "line-through")
          }
        >
          {this.props.todoItem.todo}
        </span>
        <input
          type="checkbox"
          checked={this.props.todoItem.done}
          onChange={() => this.props.onCheck(this.props.todoItem)}
        />
        <div
          className={"toggle-action " + (this.props.todoItem.done && "active")}
        >
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
