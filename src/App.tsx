import { Provider } from "mobx-react";
import * as React from "react";
import "./App.css";
import ToDoComponent from "./ToDo/ToDoComponent";
import ToDoStore from "./ToDo/ToDoStore";
import ToDoSummary from "./ToDo/ToDoSummary";

export default class App extends React.Component<{}, {}> {
  private todoStore: ToDoStore;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.todoStore = new ToDoStore();
  }

  componentDidMount() {
    this.todoStore.init();
  }

  render() {
    return (
      <div className="App">
        <h3>ToDo App using React and Mobx</h3>

        <Provider ToDoStore={this.todoStore}>
          <ToDoComponent />
          <ToDoSummary />
        </Provider>
      </div>
    );
  }
}
