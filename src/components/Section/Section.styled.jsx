import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.17;
  color: #fff;
  margin-bottom: 50px;
  text-shadow: 5px 6px 4px #000;

  &:hover {
    color: #801419;
    text-shadow: 0 2px 1px #3b0907, 0 5px 4px #801419, 0 11px 8px #801419,
      0 20px 15px #3b0907;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;
