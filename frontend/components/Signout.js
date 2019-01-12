import React, { Component } from 'react';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

function routeToLogin() {
  Router.push({
    pathname: '/signin',
  });
};

const Signout = props => (
  <Mutation
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={[
      { query: CURRENT_USER_QUERY}
    ]}
  >
    {
      (signout) => (
      <button
        onClick={async () => {
        await signout();
        routeToLogin();
        }}
      >
      Sign Out
      </button>
      )
    }
  </Mutation>
);

export default Signout;