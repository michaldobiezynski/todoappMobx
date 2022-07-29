import { observer } from "mobx-react";
import * as React from "react";
import { Row } from "reactstrap";
import ToDoModel from "./ToDoModel";

@observer
export default class ToDoList extends React.Component<
  { ToDos: ToDoModel[] },
  {}
> {
  render() {
    if (this.props.ToDos.length === 0) {
      return <div>Please add wishlist to get started</div>;
    }
    console.log("am I getting re-rendered?");

    return (
      <div>
        <h4>My wishlists</h4>

        <div className="todoList">
          <Row className="p-2">
            <div className="col-md-8">Name</div>
            <div className="col-md-2">Is Completed?</div>
          </Row>

          {this.props.ToDos.map((todo) => {
            return (
              <Row key={todo.id} className="p-1">
                <div className="todoItem col-md-8">{todo.title}</div>
                <div className="col-md-2 todoItem">
                  {todo.completed ? (
                    <svg
                      width="1.4em"
                      height="1.2em"
                      viewBox="0 0 16 16"
                      className="bi bi-check-circle-fill"
                      fill="green"
                      xmlns="http://www.w3.org/2000/svg"></svg>
                  ) : (
                    <svg
                      width="1.4em"
                      height="1.2em"
                      viewBox="0 0 16 16"
                      className="bi bi-x-circle-fill"
                      fill="#fc2222"
                      xmlns="http://www.w3.org/2000/svg"></svg>
                  )}
                </div>
              </Row>
            );
          })}
        </div>
      </div>
    );
  }
}
