import styled from 'styled-components';

const ButtonLogin = styled.button`
  width: 360px;
  height: 60px;
  color: white;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: ${({ theme }) => theme.regular};
  border: none;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position-x: 20px;
  background-position-y: center;
  background-color: ${({ theme }) => theme.darkBlue};
`;

export default ButtonLogin;
