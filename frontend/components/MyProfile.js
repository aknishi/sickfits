import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import User from './User';
import ProfileStyles from './styles/ProfileStyles';

const StyledButton = styled.a`
  padding: 0.5rem 1rem;
  background: ${props => props.theme.red};
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`;

class MyProfile extends React.Component {
  constructor(props) {
    super(props)
  };

  adminPermissionsButton = (isAdmin) => {
    if(isAdmin) {
      return (
        <Link href="/permissions">
          <StyledButton>Manage Users Permissions</StyledButton>
        </Link>
      )
    }
  };

  render() {
    console.log(this.props);
    let isAdmin = false;
    return(
      <User>
        {({ data: { me } }) => {
          if(me.permissions.includes("ADMIN")) {
            isAdmin = true;
          }
          return (
            <ProfileStyles>
              <p>
                <span>Name: </span>
                <span>{me.name}</span>
              </p>
              <p>
                <span>Email: </span>
                <span>{me.email}</span>
              </p>
              {this.adminPermissionsButton(isAdmin)}
            </ProfileStyles>
          )
        }}
      </User>
    )
  }
};


export default MyProfile;

