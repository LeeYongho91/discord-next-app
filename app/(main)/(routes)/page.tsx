import { UserButton } from '@clerk/nextjs';

export default function Home() {
  console.log(`test`);
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
