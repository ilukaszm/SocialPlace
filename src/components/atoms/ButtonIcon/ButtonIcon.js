import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center;

  ${({ second }) =>
    second &&
    css`
      background-color: ${({ theme }) => theme.red};
    `}
`;

export default ButtonIcon;
