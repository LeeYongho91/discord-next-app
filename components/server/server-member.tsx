'use client';

import { Member, MemberRole, Profile, Server } from '@prisma/client';
import { ShieldAlert, ShieldCheck } from 'lucide-react';
import React from 'react';

interface ServerMemberProps {
  member: Member & { profile: Profile };
  server: Server;
}

const roleIconMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: (
    <ShieldCheck className="ml-2 h-4 w-4 text-indigo-500" />
  ),
  [MemberRole.ADMIN]: <ShieldAlert className="ml-2 h-4 w-4 text-indigo-500" />,
};

const serverMember = ({ member, server }: ServerMemberProps) => {
  return <div>server-member</div>;
};

export default serverMember;
