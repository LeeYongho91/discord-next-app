import { Hash } from 'lucide-react';
import React from 'react';
import MobileToggle from '../mobile-toggle';

interface ChannelIdPageProps {
  serverId: string;
  name: string;
  type: 'channel' | 'conversation';
  imageUrl?: string;
}

const ChatHeader = ({ serverId, name, type, imageUrl }: ChannelIdPageProps) => {
  return (
    <div
      className="text-md flex h-12 items-center border-b-2 border-neutral-200
    px-3 font-semibold dark:border-neutral-800"
    >
      <MobileToggle serverId={serverId} />
      {type === 'channel' && <Hash />}
      <p className="text-md font-semibold text-black dark:text-white">{name}</p>
    </div>
  );
};

export default ChatHeader;
