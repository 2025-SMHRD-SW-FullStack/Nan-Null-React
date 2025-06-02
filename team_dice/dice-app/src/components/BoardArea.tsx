import Board from "./Board";
import type { Player } from "./DiceGame";

type Props = {
  players: Player[];
};
export default function BoardArea({ players }: Props) {
  const com = players.find((b) => b.name === "com");
  const user = players.find((b) => b.name === "user");

  return (
    <div className="flex gap-x-5">
      <Board player={com}></Board>
      <Board player={user}></Board>
    </div>
  );
}
