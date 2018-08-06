import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import Footer from './footer/footer';
import $ from 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/main.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer/index';
import UserType from './body/usertype';
import LocationMap from './body/location';
import CustomerInfo from './body/customerinfo';
import ConfirmationMap from './body/confirmation';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel, faUserEdit, faCalendarCheck, faLocationArrow, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel, faUserEdit, faCalendarCheck, faLocationArrow, faCheckCircle);

const store = createStore(rootReducer);

class BuildUser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Header />
                <div className="accordion container" id="accordionExample">
                    <Provider store={store}>
                        <div className="card">
                            <div className="card-header bs-card-header-clr" id="headingOne">
                                <h5 className="mb-0">
                                    <p>APPOINTMENT</p>
                                    <FontAwesomeIcon className="bs-icon" icon="calendar-check" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" />
                                </h5>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <UserType />
                                </div>
                            </div>
                        </div>
                    </Provider>
                    <Provider store={store}>
                        <div className="card">
                            <div className="card-header bs-card-header-clr" id="headingOne2">
                                <h5 className="mb-0">
                                    <p>LOCATION</p>
                                    <FontAwesomeIcon className="bs-icon" icon="location-arrow" data-toggle="collapse" data-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2" />
                                </h5>
                            </div>

                            <div id="collapseOne2" className="collapse" aria-labelledby="headingOne2" data-parent="#accordionExample">
                                <div className="card-body">
                                    <LocationMap />
                                </div>
                            </div>
                        </div>
                    </Provider>
                    <Provider store={store}>
                        <div className="card">
                            <div className="card-header bs-card-header-clr" id="headingOne3">
                                <h5 className="mb-0">
                                    <p>CUSTOMER INFORMATION</p>
                                    <FontAwesomeIcon className="bs-icon" icon="user-edit" data-toggle="collapse" data-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3" />
                                </h5>
                            </div>

                            <div id="collapseOne3" className="collapse" aria-labelledby="headingOne3" data-parent="#accordionExample">
                                <div className="card-body">
                                    <CustomerInfo />
                                </div>
                            </div>
                        </div>
                    </Provider>
                    <Provider store={store}>
                        <div className="card">
                            <div className="card-header bs-card-header-clr" id="headingOne4">
                                <h5 className="mb-0">
                                    <p>CONFIRMATION</p>
                                    <FontAwesomeIcon className="bs-icon" icon="check-circle" data-toggle="collapse" data-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4" />
                                </h5>
                            </div>

                            <div id="collapseOne4" className="collapse" aria-labelledby="headingOne4" data-parent="#accordionExample">
                                <div className="card-body">
                                    <ConfirmationMap />
                                </div>
                            </div>
                        </div>
                    </Provider>
                </div>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<BuildUser />, document.getElementById('index'));
