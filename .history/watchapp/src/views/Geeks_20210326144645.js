import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import styled from 'styled-components';
import MiniCard from 'components/molecules/MiniCard/MiniCard';

const StyledGrid = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 50px;
  top: 25%;
  left: 33%;
`;

const photoData = [
  {
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    link: 'https://pl.reactjs.org/',
  },
  {
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    link: 'https://www.javascript.com/',
  },
  {
    photo: 'https://avatars.githubusercontent.com/u/13142323?s=400&v=4',
    link: 'https://redux.js.org/',
  },
  {
    photo: 'https://cdn-images-1.medium.com/max/1200/1*y1fCsOVCYCTi1B9Q_0BOYg.png',
    link: 'https://styled-components.com/',
  },
  {
    photo:
      'https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png',
    link: 'https://formik.org/',
  },
  {
    photo:
      'https://yt3.ggpht.com/ytc/AAUvwnjOqSual8KFl4JkdqobEJPsqX70GGB3m22b2P1QQg=s900-c-k-c0x00ffffff-no-rj',
    link: 'https://storybook.js.org/',
  },
];

const Geeks = () => (
  <UserTemplate pageType="geeks">
    <StyledGrid>
      {photoData.map(({ photo, link }) => (
        <MiniCard photo={photo} href={link} />
      ))}
    </StyledGrid>
  </UserTemplate>
);

export default Geeks;
