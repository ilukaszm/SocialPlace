import styled from 'styled-components';

const Button = styled.button`
  width: 130px;
  height: 36px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.red};
  border: none;
  font-family: 'Montserrat', sans-serif;
  color: white;

  :hover {
    background-color: ${({ theme }) => theme.darkRed};
  }
`;

export default Button;
