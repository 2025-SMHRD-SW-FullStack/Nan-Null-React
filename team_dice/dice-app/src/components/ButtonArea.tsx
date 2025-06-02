import { type Dispatch } from "react";
import type { Player } from "./DiceGame";
import { cn } from "../utils/cn";

type Props = {
  players: Player[];
  setPlayers: Dispatch<React.SetStateAction<Player[]>>;
};

export default function ButtonArea({ players, setPlayers }: Props) {
  const reset = () => {
    const newPlayers: Player[] = players.map(
      (data): Player => ({ ...data, number: 0, score: 0 }),
    );
    setPlayers(newPlayers);
  };

  const throwDice = () => {
    const randomNums = players.map(({ name }) => ({
      name: name,
      number: Math.floor(Math.random() * 6 + 1),
    }));
    const isSameNumber = randomNums.every(
      (num, _, arr) => arr[0].number === num.number,
    );

    console.log(isSameNumber);

    if (isSameNumber) {
      alert("비겼습니다!");
      return;
    }

    const maxNumber = Math.max(...randomNums.map((player) => player.number));

    const winners = randomNums.filter((player) => player.number === maxNumber);
    const newPlayers = players.map((data, i): Player => {
      const { number } = randomNums[i];

      const isWinner = winners.some((winner) => winner.name === data.name);

      if (isWinner)
        return {
          ...data,
          number,
          score: data.score + 1,
        };

      return {
        ...data,
        number,
      };
    });

    setPlayers(newPlayers);
  };

  const buttonClasses = cn("px-4 py-2", "border border-black rounded-lg");

  return (
    <div className="flex gap-x-2">
      <button className={buttonClasses} onClick={throwDice}>
        던지기
      </button>
      <button className={buttonClasses} onClick={reset}>
        RESET
      </button>
    </div>
  );
}
