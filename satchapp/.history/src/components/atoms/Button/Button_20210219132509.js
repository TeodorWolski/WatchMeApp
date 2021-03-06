import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32+15px;
  width: 220px;
  font-size: 16px;
  background: hsl(275, 81%, 69%);
  border-radius: 50px;
  border: none;
  font-family: Montserrat;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
