import React from 'react';
import Link from 'next/link';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import RequestReset from '../components/RequestReset';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  width: 300px;
  margin: auto;
  padding-bottom: 20px;
  a {
    text-decoration: underline;
    cursor: pointer;
  }
`;

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRequestReset: false,
    }
  }
  toggleRequestReset = async () => {
    await this.setState({ showRequestReset: true})
  }

  render() {
    return (
      <>
        <Signin />
        <StyledParagraph>
          <span>Don't Have An Account? </span>
          <span>
            Sign Up
            <Link href="/signup">
              <a> here</a>
            </Link>
          </span>
        </StyledParagraph>
        <StyledParagraph>
          <span>Forgot Your Password? </span>
          <span>
            Click
              <a onClick={this.toggleRequestReset}> here</a>
          </span>
        </StyledParagraph>
        {this.state.showRequestReset && (
          <RequestReset />
        )}
      </>
    );
  };
};

export default SignupPage
