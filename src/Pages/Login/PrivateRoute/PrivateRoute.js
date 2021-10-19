import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} =useAuth();
    if(isLoading){
        return <ProgressBar className="w-25 mx-auto" animated now={75} />
    }
    
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/register",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;