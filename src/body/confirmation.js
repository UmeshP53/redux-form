import React from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form';
import $ from 'jquery/dist/jquery';
import Modal from './../components/modal';

const required = value => (value || typeof value === 'number' ? undefined : 'Please Check the authorization');

const validate = values => {
    const errors = {};
    if(!values.surecheck) {
        errors.zipcode = 'Required';
    }
    return errors;
};

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div className="form-group form-check">
        <input {...input} type={type} className="form-check-input" />{' '}
        <label className="form-check-label bs-radio">
            I authorize Bose to call or text me about my appointment & services.
        </label>
        {touched &&
            ((error && <span className="bs-error">{error}</span>) || (warning && <span>{warning}</span>))
        }
    </div>
);

let modalOpen;

const submitData = (values) => {
    $(ReactDOM.findDOMNode(modalOpen)).modal();
};

let ConfirmationMap = ({ handleSubmit, submitting }) => {
    return(
        <form onSubmit={handleSubmit(submitData)} className="bs-form">
            <div className="form-group row">
                <p className="bs-appointment-msg">Your appointment is confirmed for this date and this time.</p>
            </div>
            <Field name="surecheck"
                component={renderField}
                type="checkbox"
                validate={[required]}
                value="surecheck"
            />
            <div className="bs-aligner text-center">
                <button className="btn bs-continue" type="submit" disabled={submitting}>CONTINUE</button>
                <Modal ref={(modal) => { modalOpen = modal; }} />
            </div>
        </form>
    );
};

ConfirmationMap = reduxForm({
    form: 'confirmation',
    validate
})(ConfirmationMap);

export default ConfirmationMap;
