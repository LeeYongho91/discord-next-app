'use client';

import { ServerWithMemberWithProfiles } from '@/types';
import { MemberRole } from '@prisma/client';

interface ServerHeaderProps {
  server: ServerWithMemberWithProfiles;
  role?: MemberRole;
}

export const ServerHeader = ({ server, role }: ServerHeaderProps) => {
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;
  console.log(server, role);
  return <div>Server Header!</div>;
};
