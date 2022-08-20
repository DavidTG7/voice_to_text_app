import styled from 'styled-components';

export const MainWrapper = styled.main`
  margin: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const Instruction = styled.h2`
  padding: 1rem;
  text-align: center;
  font-weight: 400;
`;

export const ActionButton = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
`;

export const Text = styled.p`
  margin: 1rem;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 1rem;
  width: 90%;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const RecordingMessage = styled.p`
  
`;