import styled from 'styled-components';

const ProfileStyles = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  padding: 2rem;
  border-top: 10px solid red;
  & > p {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 0;
    border-bottom: 1px solid ${props => props.theme.offWhite};
    span {
      padding: 1rem;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: white;
    font-size: 1.5rem;
    margin-top: 15px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
  }
`;
export default ProfileStyles;
