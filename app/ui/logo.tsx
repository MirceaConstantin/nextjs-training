import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <BuildingOfficeIcon className="h-12 w-12" />
      <p className="text-[24px]">SoloByte </p>
    </div>
  );
}
