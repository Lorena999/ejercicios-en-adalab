import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({
      text: ev.target.value,
    });
  }

  render() {
    return (
      <div className="input-text">
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default TextInput;
