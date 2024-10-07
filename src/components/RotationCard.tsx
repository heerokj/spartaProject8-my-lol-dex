"use client";
import { Rotation } from "@/types/Rotation";
import { getChampionRotation } from "@/utils/riotApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const RotationCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rotation, setRotation] = useState<Rotation[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await getChampionRotation();
      setRotation(data as Rotation[]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <>Loading</>;

  return (
    <div className="grid grid-cols-6 gap-4">
      {rotation?.map((champion) => (
        <Link href={`/champions/${champion.id}`} key={champion.id}>
          <div
            key={champion.id}
            className="border-2 border-[#363e50ba] p-4 rounded-md flex flex-col items-center"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`}
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

export default RotationCard;
