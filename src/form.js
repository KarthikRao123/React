import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
    this.state = { empty: "" };
    this.state = { property: "" };
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ data: event.target.value });
    event.preventDefault();
  }

  optionSelected(value) {
    this.setState({ property: value.target.name });
  }

  render() {
    return (
      <div>
        <form>
          {" "}
          <div className="radio">
            <label>
              <input
                type="checkbox"
                name="date"
                checked={this.state.property === "date"}
                onChange={this.optionSelected.bind(this)}
              />
              Date{" "}
            </label>
          </div>
          <br />
          <div className="radio">
            <label>
              <input
                type="checkbox"
                name="text"
                checked={this.state.property === "text"}
                onChange={this.optionSelected.bind(this)}
              />
              Text{" "}
            </label>
          </div>
          <br />
          <label>{this.state.data}</label>
          <br />
          <input type={this.state.property} onChange={this.handleChange} />
          <p>{this.state.data}</p>
        </form>
      </div>
    );
  }
}
export default Form;
