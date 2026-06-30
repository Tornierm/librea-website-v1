'use client';

import styled from 'styled-components';
import { StoreButtons } from './StoreButtons';
import { WaitlistForm } from './WaitlistForm';

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 400px;
`;

export function WaitlistCTA() {
  return (
    <Stack>
      <StoreButtons disabled fullWidth />
      <WaitlistForm />
    </Stack>
  );
}
