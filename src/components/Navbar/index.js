import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPencil } from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        {!this.props.editing ? (
          <form onSubmit={this.props.onAdd}>
            <input
              type="text"
              placeholder="Enter new target!"
              value={this.props.todoValue}
              onChange={(e) => this.props.addValue(e)}
            />
            <button type="submit" className="submit-add bg-slate-800">
              <FontAwesomeIcon className="add" icon={faPlus} />
            </button>
          </form>
        ) : (
          <form onSubmit={this.props.onEdit}>
            <input
              type="text"
              placeholder="Edit target!"
              value={this.props.currentValue}
              onChange={(e) => this.props.editValue(e)}
            />
            <button type="submit" className="submit-edit bg-slate-800">
              <FontAwesomeIcon className="edit" icon={faPencil} />
            </button>
          </form>
        )}
      </nav>
    );
  }
}
