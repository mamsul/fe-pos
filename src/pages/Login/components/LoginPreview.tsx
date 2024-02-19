import { LoginPreviewAnimation } from '../../../assets';

export default function LoginPreview() {
  return (
    <div className="mx-auto h-auto w-[90%] lg:w-[65%]">
      <img
        src={LoginPreviewAnimation}
        alt="login preview 1"
        className="h-full w-full"
      />
    </div>
  );
}
