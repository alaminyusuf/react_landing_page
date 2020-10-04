import React from 'react';
import styled from 'styled-components';
const FormComponent = () => {
  return (
    <Form>
      <label htmlFor='email'>Email:</label>
      <input type='text' />
      <input type='submit' value='Connect' />
    </Form>
  );
};

const Form = styled.form`
  z-index: 5;
  label {
    display: block;
  }
`;

export default FormComponent;
