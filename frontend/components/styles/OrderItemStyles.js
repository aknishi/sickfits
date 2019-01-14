import styled from 'styled-components';

const OrderItemStyles = styled.li`
  box-shadow: ${props => props.theme.bs};
  list-style: none;
  padding: 2rem;
  border: 1px solid ${props => props.theme.offWhite};
  h2 {
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  .images {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(6, 1fr);
    justify-items: start;
    margin-top: 1rem;
    img {
      height: 150px;
      object-fit: contain;
      width: 100%;
    }
  }
  .order-meta {
    display: grid;
    grid-template-columns: 4fr 1fr;
    display: grid;
    grid-gap: 1rem;
    /* text-align: center; */
    & > * {
      margin: 0;
      /* background: rgba(0, 0, 0, 0.03); */
    }

    p {
      margin: 0;
      font-size: 1.4rem;
      font-weight: normal;
    }
    h4 {
      text-align: right;
      font-size: 1.4rem;
    }
  }

`;

export default OrderItemStyles;
