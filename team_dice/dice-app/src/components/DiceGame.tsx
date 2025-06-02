import { useState } from "react";
import BoardArea from "./BoardArea";
import ButtonArea from "./ButtonArea";

export type Player = {
  name: string;
  imageUrl: string;
  number: number;
  score: number;
};

export default function DiceGame() {
  const [players, setPlayers] = useState<Player[]>([
    {
      name: "com",
      imageUrl:
        "https://i.namu.wiki/i/OY2bJFfowVBTACwy9IhlGelartYQwNIpxr3mFK_tMWooD9Zk-SV29KztS04U_E8lvq_dc57iO2wELyzpJqIi-Q.webp",
      number: 0,
      score: 0,
    },
    {
      name: "user",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7ZX9YdJPNu0NINUxh7Yq3K9GK_zFH4IqjoKwV49mAoY1IXObJv6PoBnK8Qil7J-aYMEKvMD4vYDMjNQLoJvCecg",
      number: 0,
      score: 0,
    },
  ]);

  return (
    <div className="m-4 flex flex-col items-center space-y-5 rounded-md border-2 border-black p-3 py-10">
      <h1 className="text-[3rem]">주사위 게임</h1>
      <ButtonArea players={players} setPlayers={setPlayers} />
      <BoardArea players={players} />
    </div>
  );
}
