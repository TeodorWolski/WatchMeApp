import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  border: 2px solid black;
`;

const StyledHeading = styled(Heading)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
  grid-row: 2;
  display: block;
  padding: 20px;
`;

const Home = () => (
  <StyledWrapper>
    <UserTemplate pageType="home">
      <StyledHeading>Welcome to SatchApp!</StyledHeading>
      <StyledParagraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim non reprehenderit impedit
        quod repellat possimus atque nobis inventore debitis, vero magni id accusantium iste, rem
        doloremque nemo porro rerum eligendi! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Enim non reprehenderit impedit quod repellat possimus atque nobis inventore debitis,
        vero magni id accusantium iste, rem doloremque nemo porro rerum eligendi! Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Enim non reprehenderit impedit quod repellat possimus
        atque nobis inventore debitis, vero magni id accusantium iste, rem doloremque nemo porro
        rerum eligendi!
      </StyledParagraph>
    </UserTemplate>
  </StyledWrapper>
);

export default Home;
