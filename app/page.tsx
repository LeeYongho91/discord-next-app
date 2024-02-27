import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  const state = true;

  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Hello Discord Clone</p>
      <Button className={cn('bg-indigo-500', state && 'bg-red-500')}>
        Click me
      </Button>
      <Button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"></Button>
      <div className="sm:justify-between">
        <span>1</span>
        <span>2</span>
      </div>
    </div>
  );
}
