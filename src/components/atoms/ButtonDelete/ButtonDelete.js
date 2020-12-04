import styled from 'styled-components';
import DeleteIcon from '../../../assets/icons/delete.svg';

const ButtonDelete = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 50px;
  border: none;
  background-color: ${({ theme }) => theme.red};
  background-image: url(${DeleteIcon});
  background-position: center;
  background-size: 12px;
  background-repeat: no-repeat;
  transition: all 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;

export default ButtonDelete;
