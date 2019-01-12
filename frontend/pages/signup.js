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
  }
`;

const SignupPage = props => (
  <>
    <Signup />
    <StyledParagraph>
      <span>Already Have An Account? </span>
      <span>
        Login
        <Link href="/signin">
          <a> here</a>
        </Link>
      </span>
    </StyledParagraph>
  </>
);

export default SignupPage
