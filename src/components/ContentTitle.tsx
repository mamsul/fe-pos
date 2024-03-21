type ContentTitleProps = {
  label: string;
};
export default function ContentTitle({ label }: ContentTitleProps) {
  return <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">{label}</h1>;
}
