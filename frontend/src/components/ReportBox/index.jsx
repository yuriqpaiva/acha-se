import {
  Binoculars,
  CalendarBlank,
  DotsThree,
  EnvelopeSimple,
  Mailbox,
  X,
} from '@phosphor-icons/react';
import * as Styled from './styles';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { http } from '../../api/server';
import dayjs from 'dayjs';
import { objectCategories } from '../../constants/objects-categories';
import toast from 'react-hot-toast';

export function ReportBox({ suspended = false }) {
  const [isMailListOpen, setIsMailListOpen] = useState(false);
  const mailListRef = useRef(null);
  const wsRef = useRef(null);
  const queryClient = useQueryClient();

  const updateReportsCache = useCallback(
    (newReport) => {
      queryClient.setQueryData(['reports'], (old) => {
        if (!old) return [newReport];
        const exists = old.some((report) => report.id === newReport.id);

        if (exists) return old;
        toast('Novo item reportado', { icon: '🔍', duration: 6000 });
        return [newReport, ...old];
      });
    },
    [queryClient],
  );

  // WebSocket connection setup
  useEffect(() => {
    const connectWebSocket = () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('No authentication token found');
        return;
      }

      const ws = new WebSocket(
        `ws://localhost:4000/report-lost-item/listen?token=${token}`,
      );
      wsRef.current = ws;

      ws.onmessage = (event) => {
        try {
          const newReport = JSON.parse(event.data);
          if (newReport.id) {
            updateReportsCache(newReport);
          }
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error);
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      ws.onclose = (event) => {
        console.log('WebSocket disconnected:', event.reason);
        if (event.code !== 1008) {
          setTimeout(connectWebSocket, 5000);
        }
      };
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [updateReportsCache]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mailListRef.current && !mailListRef.current.contains(event.target)) {
        setIsMailListOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggleMailList = () => {
    setIsMailListOpen((prev) => !prev);
  };

  const { data: lostItem, isLoading } = useQuery({
    queryKey: ['reports'],
    queryFn: async () => {
      const response = await http.get('/report-lost-item');
      return response.data;
    },
    refetchOnWindowFocus: false,
  });

  const count = lostItem?.length || 0;

  return (
    <Styled.Container>
      <Styled.ReportBoxButton
        suspended={suspended}
        onClick={handleToggleMailList}
      >
        <Mailbox size={24} weight="bold" />
        {!isLoading && <Styled.Notification>{count}</Styled.Notification>}
      </Styled.ReportBoxButton>

      <Styled.MailList ref={mailListRef} isOpen={isMailListOpen}>
        <Styled.CloseMailListButton onClick={() => setIsMailListOpen(false)}>
          <X size={24} weight="bold" />
        </Styled.CloseMailListButton>

        <Styled.MailListInner>
          <h3>
            <Binoculars size={24} weight="bold" />
            Itens reportados
          </h3>
          <ul>
            {lostItem?.map((item, index) => (
              <MailListItem key={item.id} item={item} index={index} />
            ))}
          </ul>
        </Styled.MailListInner>
      </Styled.MailList>
    </Styled.Container>
  );
}

function MailListItem({ item, index }) {
  const objectCategory = objectCategories.find(
    (category) => category.key === item.category,
  );

  return (
    <Styled.MailListItem isFirst={index === 0}>
      <div className="texts">
        <strong>
          <objectCategory.icon size={16} weight="bold" />
          {objectCategory.name}
        </strong>

        <span>
          <CalendarBlank size={16} weight="bold" />
          {dayjs(item.createdAt).format('DD/MM/YYYY [às] HH:mm')}
        </span>
        <span>
          <EnvelopeSimple size={16} weight="bold" />
          {item.email}
        </span>
      </div>
      <button>
        <DotsThree size={24} weight="bold" />
      </button>
    </Styled.MailListItem>
  );
}
