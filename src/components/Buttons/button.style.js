import styled from "styled-components";

export const Btn = styled.button`
  border: none;
  cursor: pointer;
  background: #3e7c17;
  color: #ffffff;

  &:hover {
    background: #125c13;
  }

  &.active {
    background: #ffffff;
    color: #767676;
    border: 1px solid #dbdbdb;
  }

  &.active:hover {
    background-color: #ffffff;
    color: #3e7c17;
  }

  &.disabled {
    cursor: default;
    background: #e8e1d9;
    pointer-events: none;
  }

  &.sm {
    height: 28px;
    width: 56px;
    border-radius: 26px;
    font-size: 12px;
    font-weight: 400;
  }
  
  &.ms {
    height: 32px;
    width: 90px;
    border-radius: 32px;
    font-size: 14px;
    font-weight: 500;
  }

  &.md {
    height: 34px;
    width: 120px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 500;
  }

  &.lg {
    height: 44px;
    width: 322px;
    border-radius: 44px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
`