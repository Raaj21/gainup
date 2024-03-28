import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounceyLine = keyframes`
  0% {
    transform: translateX(0.5vh) scaleX(2);
  }
  50% {
    transform: translateX(0) scaleX(0.5);
  }
  to {
    transform: scaleX(1);
  }
`;

const Root = styled.div`
  --font: black;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  font-family: "Miltonian", cursive;
`;

const Title = styled.h1`
  color: var(--font);
  font-size: 3rem;
  position: relative;

  &:before {
    width: 50%;
    height: 0.3rem;
    position: absolute;
    background: var(--font);
    content: "";
    left: 0;
    bottom: -0.5rem;
    border-radius: 0.3rem;
    transform-origin: left center;
  }

  &.underline--bounce:before {
    animation: ${bounceyLine} 1s ease-in-out infinite alternate;
  }
`;

const YourComponent = () => {
  return (
    <Root>
      <Container>
        <Title className="underline underline--bounce">FlatSteve</Title>
      </Container>
    </Root>
  );
}

export default YourComponent;
