import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  margin-top: 20vh;
`;

export const Text = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

export const Button = styled.button`
    min-width: fit-content;
    padding: 8px 16px;
    border: none;
    border-radius: 10px;
    background-color: #795548;
    color: #fff;
    outline: none;
    transition: background-color 0.4s ease;
    cursor: pointer;
    &:hover {
        background-color: burlywood;
    }
`;