import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';
import styled from 'styled-components';

const StyledError = styled.h3`
  width: 400px;
  margin: auto;
  text-align: center;
  padding-bottom: 20px;
  color: red;
`;

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({data, loading}) => {
      if(loading) return <p>Loading...</p>
      if(!data.me) {
        return (
          <div>
            <StyledError>
              Please Sign In before continuing
            </StyledError>
            <Signin />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;