import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Profile from './MyProfile';
import styled from 'styled-components';

const StyledError = styled.h3`
  width: 400px;
  margin: auto;
  text-align: center;
  padding-bottom: 20px;
  color: red;
`;

const OnlyAdmin = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>
      if (!data.me.permissions.includes("ADMIN")) {
        return (
          <div>
            <StyledError>
              You can't Access that page
            </StyledError>
            <Profile />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default OnlyAdmin;