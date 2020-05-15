import styled, { css } from 'styled-components';
import searchIco from '../../../assets/icons/search.svg';

const Input = styled.input`
  width: 200px;
  height: 40px;
  display: block;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.darkBlue};
  font-family: 'Montserrat', sans-serif;
  color: white;
  padding-left: 40px;
  border: 2px solid ${({ theme }) => theme.darkBlue};

  ::placeholder {
    color: white;
    text-transform: lowercase;
  }

  ${({ search }) =>
    search &&
    css`
      background-image: url(${searchIco});
      background-size: 23px;
      background-position: 1% center;
      background-repeat: no-repeat;
    `}
`;

export default Input;
