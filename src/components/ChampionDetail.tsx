import { Champion } from "@/types/Champion";
import { getAPIVersion } from "@/utils/serverApi";
import Image from "next/image";

type Props = {
  champion: {
    data: object;
  };
};

const ChampionDetail = async ({ champion }: Props) => {
  const version = await getAPIVersion();
  const cham = champion.data;
  const chamData: Champion[] = Object.values(cham);
  const data: Champion = chamData[0];

  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl my-4">{data.name}</h1>
        <h2 className="font-bold text-xl my-4">{data.title}</h2>
      </div>

      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data.image.full}`}
        alt="Picture of the author"
        width={250}
        height={250}
      />
      <p className="my-8">{data.lore}</p>

      <div>
        <h3 className="font-bold text-xl my-2">스탯</h3>
        <ul>
          <li>공격력 : {data.info.attack}</li>
          <li>방어력 : {data.info.defense}</li>
          <li>마법력 : {data.info.magic}</li>
          <li>난이도 : {data.info.difficulty}</li>
        </ul>
      </div>
    </div>
  );
};

export default ChampionDetail;
