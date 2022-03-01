import styled from 'styled-components';

export const BriefWrapper = styled.div`
  font-size: 30px;
  margin: 30px 65px;
  padding: 50px 10px 0 10px;
  text-align: justified;
  @media (max-width: 1400px) {
    padding: 50px 10px 0 10px;
  }
  @media (max-width: 1200px) {
    padding: 40px 10px 0 10px;
  }
  @media (max-width: 990px) {
    padding: 30px 10px 0 10px;
  }
  @media (max-width: 575px) {
    padding: 20px 25px 0 25px;
  }
`;