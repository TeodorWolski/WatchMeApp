import styled from 'styled-components';

const SocialMediaButton = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.home};
  background-image: url(${({ icon }) => icon});
  background-position: 10%;
`;

export default SocialMediaButton;
