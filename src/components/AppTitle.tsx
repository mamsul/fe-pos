import { PosLogo } from '../assets';

export default function AppTitle() {
  return (
    <div className="flex items-center gap-3 overflow-hidden">
      <img src={PosLogo} alt="pos logo" className="w-7 lg:w-12" />
      <span className="text-base font-extrabold lg:text-2xl">POS.</span>
    </div>
  );
}
