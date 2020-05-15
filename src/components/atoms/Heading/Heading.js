import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ small }) => (small ? '18px' : '48px')};
`;

export default Heading;
