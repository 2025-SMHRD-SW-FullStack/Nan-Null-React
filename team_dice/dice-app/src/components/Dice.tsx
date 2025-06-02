import { cn } from "../utils/cn";

type Props = {
  number: number;
};

export default function Dice({ number }: Props) {
  if (number < 0 || number > 6) {
    return <h1>에러</h1>;
  }

  if (number === 0) {
    return null;
  }

  const imageClass = cn("w-[5rem] h-[5rem]");
  return (
    <img
      src={`src/assets/img/dice${number}.png`}
      alt={`dice${number}`}
      className={imageClass}
    />
  );
}
