import styled from 'styled-components';

const Avatar = styled.div`
  margin-left: 10px;
  width: 55px;
  height: 55px;
  border-radius: 50px;
  background-image: url(${({ avatarURL }) => avatarURL});
  background-position: center;
  background-size: cover;
`;

export default Avatar;
