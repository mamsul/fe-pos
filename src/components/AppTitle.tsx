import { PosLogo } from '../assets';

type AppTitleProps = {
  showText?: boolean;
};

export default function AppTitle({ showText = true }: AppTitleProps) {
  return (
    <div className="flex items-center gap-3">
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
      {showText && (
        <span className="text-base font-extrabold lg:text-2xl">POS.</span>
      )}
    </div>
  );
}
