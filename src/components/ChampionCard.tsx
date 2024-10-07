import { Champion } from "@/types/Champion";
import { getAPIVersion, getChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChampionCard = async () => {
  const version = await getAPIVersion();
  const data = await getChampionList();
  const chamData = data.data;
  const championData: Champion[] = Object.values(chamData);

  return (
    <div className="grid grid-cols-6 gap-4">
      {championData?.map((champion) => (
        <Link href={`/champions/${champion.id}`} key={champion.id}>
          <div
            key={champion.id}
            className="border-2 border-[#363e50ba] p-4 rounded-md flex flex-col items-center"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <h2 className="font-bold text-lg pt-2">{champion.name}</h2>
            <p>{champion.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChampionCard;
