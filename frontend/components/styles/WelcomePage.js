import styled from 'styled-components';

const WelcomePage = styled.div`
  background-image: url("static/clothes.jpg");
  background-size: cover;
  height: calc(100vh - 14rem);
  width: 100vw;
  position: absolute;
  top: 14rem;
  left: 0;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  & > * {
    box-sizing: content-box;
  }

  .slider {
    position: absolute;
    height: 20vh;
    width: 25rem;
    display: flex;
    align-items: center;
    background: ${props => props.theme.red};
    transform: skew(-3deg);
    color: white;
    font-weight: 500;
    font-size: 4rem;
    line-height: 1.5;
    transition: width 1s;
    box-shadow: .2rem .2rem 1.5rem ${props => props.theme.black};
    padding: 0 4rem;
    cursor: pointer;

    h2 {
      transition: all .3s;
    }

    p {
      width: 30rem;
      opacity: 0;
      font-size: 1.8rem;
      transition: transform 1s;
      transition-delay: .2s;
    }

    &:hover {
      width: 45rem;
    }

    &:hover p {
      opacity: 1;
    }

    &:hover h2 {
      line-height: 1;
      border-bottom: 2px solid white;
    }
  }

  .left-section {
    top: 5rem;
    left: -1.2rem;
    justify-content: flex-end;

    p {
      transform: translateX(-30vw);
    }

    &:hover p {
      transform: translateX(0);
    }
  }

  .right-section {
    bottom: 5rem;
    right: -1.2rem;
    justify-content: flex-start;

    p {
      transform: translateX(30vw);
    }

    &:hover p {
      transform: translateX(4rem);
    }
  }
`;

export default WelcomePage;
