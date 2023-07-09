import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  margin-top: 10rem;
  background: #fff;
  max-width: 55rem;
  width: 95%;
  border-radius: 5px;
  padding: 2rem 3rem;

  @media screen and (max-width: 280px) {
    padding: 2rem 0.5rem;
  }
`;

export const InputTask = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 3.5rem;
  padding-left: 1rem;
  width: 72%;
`;

export const Button = styled.button`
  background: #8052ec;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 25%;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #4f2ba3;
  }

  @media screen and (max-width: 280px) {
    font-size: 1.2rem;
  }
`;

export const Task = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => (props.isFinished ? "#e8ff8b" : "#e4e4e4")};

  li {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    min-height: 6rem;
    user-select: none;
  }

  span {
    width: 80%;
    text-align: center;
    word-wrap: break-word;
  }
`;
