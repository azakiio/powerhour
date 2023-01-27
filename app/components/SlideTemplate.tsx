import { slides } from "./Slides";

export default function SlideTemplate({ page, showCode }: Props) {
  return false ? (
    <div className="flex flex-col items-center flex-1 px-4">{slides[page].component}</div>
  ) : (
    <div className="prose">
      <pre>{slides[page].code}</pre>
    </div>
  );
}

type Props = {
  page: number;
  showCode: boolean;
};
