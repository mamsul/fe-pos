import { PosLogo } from '../assets';

export default function AppTitle() {
  return (
    <div className="flex items-center gap-3 overflow-hidden">
      <img src={PosLogo} alt="pos logo" className="w-12" />
      <span className="text-2xl font-extrabold">POS.</span>
    </div>
  );
}
