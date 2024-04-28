import moduleName from '@/lib/db';

const findConversation = async () => {
  return await db.conversation.findFirst({});
};
