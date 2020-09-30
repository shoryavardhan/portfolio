import React from "react";
// import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";
import { StyledButton } from "/home/khanna/Desktop/Productive/SelfProjects/Portfolio/Portfolio (Main)/src/components/Button/Button.styled.js";
import { StyledForm } from "./Form.styled";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      company: "",
      email: "",
      message: "",
      error: "",
      thankyou: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  isValidEmail(email) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }

  isValidMobile(mobileno) {
    return /^[6-9]\d{9}$/.test(mobileno);
  }

  validateField(field, value) {
    if (value.length <= 0) {
      return (
        <div className="alert alert-danger">
          <span className="text-capitalize">{field}</span> is required field.
        </div>
      );
    } else {
      if (field == "email") {
        if (!this.isValidEmail(value))
          return <div className="alert alert-danger">Invalid Email.</div>;
      } else if (field == "mobile") {
        if (!this.isValidMobile(value))
          return (
            <div className="alert alert-danger">Invalid Mobile Number.</div>
          );
      } else {
        return "";
      }
    }
  }

  handleBlur(event) {
    this.setState({
      error: this.validateField(event.target.name, event.target.value),
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    this.setState({
      thankyou: true,
    });

    event.preventDefault();
  }

  render() {
    if (!this.state.thankyou) {
      return (
        <StyledForm>
          <div className="container">
            <div className="text-center">{this.props.title}</div>
            <div className="card-body">
              {this.state.error}

              <form
                onSubmit={this.handleSubmit}
                encType="multipart/form-data"
                autoComplete="off"
              >
                <div className="ele">
                  <input
                    name="name"
                    type="text"
                    className=" eleS"
                    placeholder="Name *"
                    value={this.state.name}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required="required"
                  />
                </div>
                <div className=" ele">
                  <input
                    name="email"
                    type="email"
                    className="eleS"
                    placeholder="Email *"
                    value={this.state.email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required="required"
                  />
                </div>
                <div className=" ele text">
                  <textarea
                    name="message"
                    type="text"
                    className="eleS eleText"
                    placeholder="How can I help ? * "
                    value={this.state.message}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required="required"
                  />
                </div>
                <p className="text-center contact">
                  <StyledButton>
                    <input
                      type="submit"
                      className="button"
                      value="Submit Now"
                    />
                  </StyledButton>
                </p>
              </form>
            </div>
          </div>
        </StyledForm>
      );
    }

    if (this.state.thankyou) {
      return (
        <StyledForm>
          <div>
            <p className="thankyou">
              " Thank for your message, {this.state.name.split(" ", 1)}. I will
              contact you soon."
            </p>
          </div>
        </StyledForm>
      );
    }
  }
}

ReactDOM.render(<Form title="Get In Touch" />, document.getElementById("root"));

export default Form;
