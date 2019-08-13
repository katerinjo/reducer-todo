import React from 'react';
import { Form, Field, withFormik } from 'formik';

const Basic = ({ touched, errors }) => {
  return (
    <Form>
      <div>
        <Field type='text' name='item' placeholder='item' />
        {touched.item && errors.item && <p>{errors.item}</p>}
      </div>
      <button type='submit'>submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues(props) {
    return {
      item: '',
      subFun: props.subFun
    };
  },

  handleSubmit(vals, { resetForm }) {
    subFun(vals.item);
    resetForm();
  }
})(Basic);