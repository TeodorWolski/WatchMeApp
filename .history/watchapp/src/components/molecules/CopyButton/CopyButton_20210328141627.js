import CopyIcon from 'assets/icons/copy.svg';

const StyledCopyButton = styled.button`
  height: 47px;
  width: 47px;
  border-radius: 50px;
  background: white url(${{ CopyIcon }}) no-repeat;
  background-position: 50%;
  position: absolute;
  display: block;
  background-size: 45%;
  top: 50%;
  transform: translateY(-50%);
  right: 100px;
  border: none;
  cursor: pointer;
`;
