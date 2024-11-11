import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ReportBoxButton = styled.button`
  position: relative;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 10px;
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primary};

  ${({ suspended }) =>
    suspended &&
    css`
      position: absolute;
      top: 32px;
      right: 32px;

      @media (max-width: 920px) {
        display: none;
      }
    `}
`;

export const Notification = styled.div`
  position: absolute;
  top: -12px;
  right: -12px;
  background-color: ${({ theme }) => theme.colors.danger};

  color: white;
  padding: 4px;
  border-radius: 99999px;
  height: 24px;
  min-width: 24px;

  font-size: 12px;
  font-weight: 600;
`;

export const MailList = styled.nav`
  z-index: 9999;

  position: absolute;
  top: ${({ suspended }) => (suspended ? '64px' : '40px')};
  right: ${({ suspended }) => (suspended ? '32px' : '6px')};
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  background-color: white;
  padding: 16px 0 16px 16px;

  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  transition: all 0.15s ease-in-out;
`;

export const MailListInner = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};

    svg {
      vertical-align: middle;
      margin-right: 6px;
    }
  }

  ul {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    list-style: none;
    overflow-y: auto;
    max-height: 320px;
    min-height: 320px;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary}40;
      border-radius: 4px;

      &:hover {
        background: ${({ theme }) => theme.colors.primary}80;
      }
    }
  }
`;

export const MailListItem = styled.li`
  padding: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  margin-right: 16px;

  ${({ isFirst }) => isFirst && 'border-top: none;'}

  .texts {
    display: flex;
    flex-direction: column;
    gap: 6px;

    strong {
      width: 180px;
      display: block;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      svg {
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 6px;
        vertical-align: middle;
      }
    }

    span {
      display: block;
      font-size: 14px;
      width: 180px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      svg {
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 6px;
        vertical-align: middle;
      }
    }
  }

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;

    border-radius: 9999px;
    background-color: #f3f4f6;
  }
`;

export const CloseMailListButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  cursor: pointer;
`;

export const ItemModalContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    display: flex;
    align-items: center;
    gap: 6px;

    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 12px;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};

    svg {
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 6px;
    }
  }

  .field {
    font-size: 1rem;
    font-weight: 400;

    display: flex;
    align-items: center;
    gap: 6px;

    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ReportModalItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  strong {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const Separator = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
  margin: 12px 0;
`;

export const ImageItem = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.border};
`;

export const NotProvidedImageItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  padding: 32px;
  border: 2px dashed ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  text-align: center;
  font-weight: 400;

  span {
    font-size: 0.875rem;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ModalButton = styled.button`
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 6px;
`;

export const NotifyUserButton = styled(ModalButton)`
  background: ${({ theme }) => theme.colors.success}26;
  color: #166534;
`;

export const DeleteReportButton = styled(ModalButton)`
  background: ${({ theme }) => theme.colors.danger}26;
  color: #c53030;
`;
