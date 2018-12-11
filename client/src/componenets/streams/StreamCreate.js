import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderInput({ input }) {
    // ... taking all props and putting it onto the input
    // onChange, value props, etc.
    return <input {...input} />;
  }

  render() {
    return (
      <form>
        <Field name='title' component={this.renderInput} />
        <Field name='description' component={this.renderInput} />
      </form>
    );
  }
}

// reduxForm is similar to the connect function
export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
