import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import Link from 'next/link';
import Router from 'next/router';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import styled from 'styled-components';

const StyledSignin = styled.div`
  width: 400px;
  margin: auto;
`;

function routeToHome() {
  Router.push({
    pathname: '/',
  });
};

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String! ) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class Signin extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
        {(signin, { error, loading }) => {
          return (
            <StyledSignin>
              <Form
                method="post"
                onSubmit={async(e) => {
                  e.preventDefault();
                  await signin();
                  this.setState({ name: '', email: '', password: '' });
                  routeToHome();
                }}
              >
                <fieldset disabled={loading} aria-busy={loading}>
                  <h2>Sign into your account</h2>
                  <Error error={error} />
                  <label htmlFor="email">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      value={this.state.email}
                      onChange={this.saveToState}
                    />
                  </label>
                  <label htmlFor="password">
                    Password
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.saveToState}
                    />
                  </label>
                  <button type="submit">
                    Log In
                    </button>
                </fieldset>
              </Form>
            </StyledSignin>
          )
        }}
      </Mutation >
    )
  }
}

export default Signin;