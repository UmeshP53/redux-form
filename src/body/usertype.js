import React from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form';
import $ from 'jquery/dist/jquery';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');

const validate = values => {
    const errors = {};
    if(!values.typeOfReason) {
        errors.typeOfReason = 'Required';
    }
    return errors;
};

const SelectReason = ({
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

let openAcc;

const dataAttrsAdder = (elem) => {
    let dataAttrs = {
        'data-toggle': 'collapse',
        'data-target': '#collapseOne2'
    };

    return $(ReactDOM.findDOMNode(elem)).attr(dataAttrs);
}

const openLocation = (values) => {
    
};

let UserType = ({ handleSubmit, submitting }) => {
    return(
        <form onSubmit={handleSubmit(openLocation)} className="bs-form">
            {/*<div className="form-group row">
                <label className="col-sm-2 col-form-label">Type of User</label>
                <Field name="typeOfUser" component="select" className="col-sm-10 form-control">
                    <option />
                    <option value="existing">Existing User</option>
                    <option value="new">New User</option>
                </Field>
            </div>*/}
            <Field name="typeOfReason" component={SelectReason} type="select" label="Reason">
                <option />
                <option value="sales">Sales</option>
                <option value="issue">Issue with present</option>
            </Field>
            <div className="bs-aligner text-center">
                <button
                    ref={(op) => { openAcc = op; }}
                    className="btn bs-continue"
                    type="submit"
                    data-toggle="collapse"
                    data-target="#collapseOne2"
                    disabled={submitting}>CONTINUE
                </button>
            </div>
        </form>
    );
};

UserType = reduxForm({
    form: 'usertype',
    validate
})(UserType);

export default UserType;
