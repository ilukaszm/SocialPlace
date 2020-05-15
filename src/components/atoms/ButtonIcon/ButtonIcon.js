import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center;
`;

export default ButtonIcon;
