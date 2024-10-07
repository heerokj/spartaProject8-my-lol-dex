"use client";
import { Rotation } from "@/types/Rotation";
import { getChampionRotation } from "@/utils/riotApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const RotationCard = () => {
  //useEffect와 useState를 활용 & 훅의 타입을 지정
  //제네릭 타입을 사용하여 useState의 상태 타입을 명시
  //로딩 상태, 에러 상태를 처리
  const [isLoading, setIsLoading] = useState(false);
  const [rotation, setRotation] = useState<Rotation[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await getChampionRotation(); //: Rotation[]하면 오류.. getChampionRotation() 함수가 반환하는 값이 실제로 Rotation[] 타입임이 보장되지 않음 => 그럼..?함수 return 값에?
      //console.log("data", data);
      //[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, ]
      // {version: '14.19.1', id: 'Bard', key: '432', name: '바드', title: '영겁의 수호자', …}

      setRotation(data as Rotation[]); //TODO - data:Rotation[]
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <>Loading</>;

  console.log("rotation===>", rotation);

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
