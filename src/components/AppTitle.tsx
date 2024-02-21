import { PosLogo } from '../assets';

export default function AppTitle() {
  return (
    <div className="flex items-center gap-3 overflow-hidden">
      <div className="w-7 lg:w-12">
        <img
          src={PosLogo}
          alt="pos logo"
          width="100%"
          height="100%"
          rel="preload"
          loading="eager"
        />
      </div>
      <span className="text-base font-extrabold lg:text-2xl">POS.</span>
    </div>
  );
}
