import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="box-content w-full h-14 flex justify-between items-center bg-white cursor-default rounded-xl">
        <span className="w-3/6 font-semibold flex justify-center">
          Todo List
        </span>
        <span className="font-semibold">|</span>
        <span className="w-3/6 font-semibold flex justify-center">Done</span>
      </header>
    );
  }
}
