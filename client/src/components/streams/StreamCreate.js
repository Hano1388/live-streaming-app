import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    // return(
    //   <input
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //   />
    // );

    // Equivalent to the above return statement
    // return <input {...formProps.input} />
    // or we can destructure out input from formProps and just use input
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Create Stream</button>
      </form>
    );
  }
};

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
