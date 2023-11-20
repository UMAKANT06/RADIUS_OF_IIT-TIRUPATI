import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { authenticated } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;