'use client';

import { Member } from '@prisma/client';

interface ChatMessagesProps {
  name: string;
  member: Member;
  chatId: string;
  apiUrl: string;
  socketUrl: string;
  socketQuery: Record<string, string>;
  paramKey: 'channelId' | 'conversationId';
  paramValue: string;
  type: 'channel' | 'conversation';
}

import React from 'react';
import ChatWelcome from './chat-welcome';

const ChatMessages = ({
  name,
  member,
  chatId,
  apiUrl,
  socketUrl,
  socketQuery,
  paramKey,
  paramValue,
  type,
}: ChatMessagesProps) => {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto py-4">
      <div className="flex-1"></div>
      <ChatWelcome type={type} name={name} />
    </div>
  );
};

export default ChatMessages;
