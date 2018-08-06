import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import showResults from './showResults';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div className="form-group row">
        <label className="col-sm-2 col-form-label">{label}</label>
        <input {...input} placeholder={label} type={type} className="col-sm-10 form-control" />
        {touched &&
            ((error && <span className="bs-error">{error}</span>) || (warning && <span>{warning}</span>))
        }
    </div>
);

let CustomerInfo = ({ handleSubmit, submitting }) => {
    return(
        <form onSubmit={handleSubmit(showResults)} className="bs-form">
            <Field
                name="firstName"
                component={renderField}
                type="text"
                label="First Name"
                validate={[required]}
                warn={alphaNumeric}
            />
            <Field
                name="lastName"
                component={renderField}
                type="text"
                label="Last Name"
                validate={[required]}
                warn={alphaNumeric}
            />
            <Field
                name="address"
                component={renderField}
                type="text"
                label="Address"
                validate={[required]}
            />
            <Field
                name="phone"
                component={renderField}
                type="number"
                label="Mobile Number"
                validate={[required, phoneNumber]}
            />
            <Field
                name="typeOfUser"
                component={renderField}
                type="email"
                label="Email"
                validate={[required, email]}
            />
            <div className="bs-aligner text-center">
                <button
                    className="btn bs-continue"
                    type="submit"
                    disabled={submitting}
                    data-toggle="collapse"
                    data-target="#collapseOne4"
                    >CONTINUE
                </button>
            </div>
        </form>
    );
};

CustomerInfo = reduxForm({
    form: 'customerinfo'
})(CustomerInfo);

export default CustomerInfo;
