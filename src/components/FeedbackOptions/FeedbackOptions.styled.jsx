import styled from 'styled-components';

export const Button = styled.button`
  font-size: 36px;
  font-weight: 700;
  display: inline-block;
  cursor: pointer;
  background-color: #fff;
  text-transform: uppercase;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 1px 10px;
  box-shadow: 5px 6px 4px #000;
  text-shadow: 2px 1px 2px #000;

  :not(:last-child) {
    margin-right: 15px;
  }

  &:hover {
    background-color: #801419;
    color: #fff;
    box-shadow: 0 2px 1px #3b0907, 0 5px 4px #801419, 0 11px 8px #801419,
      0 20px 15px #3b0907;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;

export const Buttons = styled.div`
  margin-bottom: 50px;
`;
