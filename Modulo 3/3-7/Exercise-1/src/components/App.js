import React from "react";
import "../stylesheets/App.scss";
import Form from "./Form";
import Preview from "./Preview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
      age: "A",
      genre: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAge = this.handleAge.bind(this);
  }

  handleChange(input, value) {
    this.setState({ [input]: value });
  }
  handleAge(input, value) {
    this.setState({ [input]: value });
  }

  render() {
    return (
      <div className="content">
        <Form
          handleChange={this.handleChange}
          handleAge={this.handleAge}
          age={this.state.age}
        />
        <Preview
          name={this.state.name}
          description={this.state.description}
          language={this.state.language}
          age={this.state.age}
          genre={this.state.genre}
        />
      </div>
    );
  }
}
export default App;
