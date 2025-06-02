import Dice from "./Dice";
import type { Player } from "./DiceGame";

type Props = {
  player: Player | undefined;
};

export default function Board({ player }: Props) {
  if (!player) {
    return (
      <>
        <h1>데이터가 없습니다.</h1>
      </>
    );
  }

  const { imageUrl: image, name, number, score } = player;

  return (
    <div className="space-y-2">
      <h4 className="text-[1.4rem] font-bold">{name}</h4>
      <img className="h-[15rem] rounded-md" src={image} alt={name} />
      <div className="flex flex-col items-center">
        <Dice number={number} />
        <p>현재 점수는?</p>
        <p className="h-[5rem]">{score}</p>
      </div>
    </div>
  );
}
