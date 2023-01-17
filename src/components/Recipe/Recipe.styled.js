import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 8px;
`;

export const IngoContainer = styled.div`
  display: inline-flex;
  padding: 8px;
  align-items: center;
  gap: 15px;
  border: 2px solid red;
  border-radius: 5px;
`;

export const RecipeName = styled.h2`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[4]}px;
`;
