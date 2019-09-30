import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import FormFooter from './FormFooter';
import Alert from './Alert';


const Form = ({
  onSubmit,
  onChange,
  inputFields,
  buttonTitle,
  formTitle,
  margin,
  loading,
  formType,
  errors,
}) => (
  <Form.Container onSubmit={onSubmit}>
    <h3>{formTitle}</h3>
    {inputFields.map((field, key) => (
      <Input {...field} onChange={onChange} key={key} margin={margin} />
    ))}
    {
      loading
        ? <Loader type="ThreeDots" color="#5C6784" height={40} width={40} />
        : <Button title={buttonTitle} margin="0.5rem 0" type="submit" />
    }
    <Alert message={errors.join(' ')} />
    <FormFooter type={formType} />
  </Form.Container>
);

Form.Container = styled.form`
  margin: 0.5rem;
  border: solid 1px #333;
  padding: 0.5rem;
  text-align: center;
  border-radius: 5px;
`;

Form.defaultProps = {
  formTitle: 'Form',
  margin: '0.5rem 0',
  loading: false,
  formType: 'default',
  errors: [],
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  inputFields: PropTypes.array.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  formTitle: PropTypes.string,
  margin: PropTypes.string,
  loading: PropTypes.bool,
  formType: PropTypes.string,
  errors: PropTypes.array,
};

export default Form;
