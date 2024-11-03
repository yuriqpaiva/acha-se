import React from 'react';
import * as RawDialog from '@radix-ui/react-dialog';
import * as Styled from './styles';
import { X } from '@phosphor-icons/react';

const Dialog = ({ trigger, content, maxWidth = '80%', maxHeight = '85vh' }) => (
  <RawDialog.Root>
    <RawDialog.Trigger asChild>{trigger}</RawDialog.Trigger>
    <RawDialog.Portal>
      <Styled.DialogOverlay />
      <Styled.DialogContent maxWidth={maxWidth} maxHeight={maxHeight}>
        {content}
        <RawDialog.Close asChild>
          <Styled.IconButton aria-label="Close">
            <X size={24} weight="bold" />
          </Styled.IconButton>
        </RawDialog.Close>
      </Styled.DialogContent>
    </RawDialog.Portal>
  </RawDialog.Root>
);

export default Dialog;
