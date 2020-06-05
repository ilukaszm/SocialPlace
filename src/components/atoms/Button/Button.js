import styled from 'styled-components';

const Button = styled.button`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 36px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.red};
  border: none;
  font-family: 'Montserrat', sans-serif;
  color: white;
  text-decoration: none;

  :hover {
    background-color: ${({ theme }) => theme.darkRed};
  }
`;

export default Button;
