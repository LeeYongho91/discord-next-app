import { redirect } from 'next/navigation';
import { NavigationAction } from '@/components/navigation/navigation-action';
import currentProfile from '@/lib/current-profile';
import { db } from '@/lib/db';

const navigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect('/');
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  console.log(servers);

  return (
    <div className="flex h-full w-full flex-col items-center space-y-4 py-3 text-primary dark:bg-[#1E1F22]">
      <NavigationAction />
    </div>
  );
};

export default navigationSidebar;
