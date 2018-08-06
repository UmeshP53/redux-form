import React from 'react';
import { Field, reduxForm } from 'redux-form';
import showResults from './showResults';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');

const validate = values => {
    const errors = {};
    if(!values.zipcode) {
        errors.zipcode = 'Required';
    }
    if(!values.appointment) {
        errors.appointment = 'Required';
    }
    return errors;
};

const SelectField = ({
    input,
    label,
    type,
    meta: {touched, error},
    children
}) => (
    <div className="form-group row">
        <label className="col-sm-2 col-form-label">{label}</label>
        <select {...input} placeholder={label} type={type} className="col-sm-10 form-control">
            {children}
        </select>
        {touched && (error && <span className="bs-error">{error}</span>)}
    </div>
);

let LocationMap = ({ handleSubmit, submitting }) => {
    return(
        <form onSubmit={handleSubmit(showResults)} className="bs-form">
            <Field name="zipcode" component={SelectField} type="select" label="ZIPCODE">
                <option />
                <option value="121212">A</option>
                <option value="121212">B</option>
                <option value="121212">C</option>
                <option value="121212">D</option>
            </Field>
            <div className="form-group row">
                <label htmlFor="appointment" className="col-sm-2 col-form-label">Appointment Type</label>
                <label className="form-control col-sm-2 bs-radio">
                    <Field name="appointment" component="input" type="radio" value="call" />{' '}
                    By Call
                </label>
                <label className="form-control col-sm-2 bs-radio">
                    <Field name="appointment" component="input" type="radio" value="online" />{' '}
                    Online
                </label>
            </div>
            <div className="bs-aligner text-center">
                <button
                    className="btn bs-continue"
                    type="submit"
                    disabled={submitting}
                    data-toggle="collapse"
                    data-target="#collapseOne3"
                    >
                    CONTINUE
                </button>
            </div>
        </form>
    );
};

LocationMap = reduxForm({
    form: 'location',
    validate
})(LocationMap);

export default LocationMap;
