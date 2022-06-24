import React, { Component } from "react";
import { Header, Section, Navbar } from "./components";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getTodoList: window.localStorage.getItem("items")
        ? JSON.parse(window.localStorage.getItem("items"))
        : [],
      todoValue: "",
      currentId: "",
      currentValue: "",
      editing: false,
    };
  }

  addValue = (e) => {
    if (e.target.value.length > 40) return;
    this.setState({ todoValue: e.target.value });
  };

  editValue = (e) => {
    if (e.target.value.length > 40) return;
    this.setState({ currentValue: e.target.value });
  };

  useLocalStorage(item) {
    window.localStorage.setItem("items", JSON.stringify(item));
  }

  onAdd(e) {
    e.preventDefault();
    const todoItem = {
      todo: this.state.todoValue,
      id: uuidv4(),
      done: false,
    };
    if (this.state.todoValue !== "") {
      this.setState({ getTodoList: this.state.getTodoList.concat(todoItem) });
      const updatedItems = [...this.state.getTodoList, todoItem];
      this.useLocalStorage(updatedItems);
      this.setState({ todoValue: "" });
    }
  }

  onEdit(e) {
    e.preventDefault();
    this.editData(this.state.currentId, this.state.currentValue);
    this.setState({ editing: false });
  }

  onDelete(itemId) {
    const deletedItem = [...this.state.getTodoList].filter(
      (id) => id.id !== itemId,
    );
    this.setState({
      getTodoList: deletedItem,
    });
    this.useLocalStorage(deletedItem);
  }

  onCheck = (todoItem) => {
    const checkedItem = this.state.getTodoList.map((item) =>
      item.id === todoItem.id ? { ...item, done: !item.done } : item,
    );
    this.setState({
      getTodoList: checkedItem,
    });
    this.useLocalStorage(checkedItem);
  };

  editData(id, newValue) {
    // eslint-disable-next-line array-callback-return
    this.state.getTodoList.map((todo) => {
      if (todo.id === id) {
        todo.todo = newValue;
        this.useLocalStorage(this.state.getTodoList);
      }
    });
  }

  onRequestEdit(todo) {
    this.setState({ editing: true });
    this.setState({ currentId: todo.id });
    this.setState({ currentValue: todo.todo });
  }

  render() {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-red-50 font-semibold">
        <div
          style={{ width: "500px", height: "800px" }}
          className="flex flex-col justify-between items-center bg-gray-200 p-4 rounded-xl"
        >
          <Header />
          <section style={{ height: "622px" }} className="w-full">
            {this.state.getTodoList.map((item) => (
              <Section
                key={item.id}
                todoItem={item}
                onCheck={this.onCheck}
                onRequestEdit={this.onRequestEdit.bind(this)}
                onDelete={this.onDelete.bind(this)}
              />
            ))}
          </section>
          <Navbar
            todoValue={this.state.todoValue}
            currentValue={this.state.currentValue}
            editing={this.state.editing}
            addValue={this.addValue}
            editValue={this.editValue}
            onAdd={this.onAdd.bind(this)}
            onEdit={this.onEdit.bind(this)}
          />
        </div>
      </div>
    );
  }
}
