// "use client";
// import { Rotation } from "@/types/Rotation";
// import { getChampionRotation } from "@/utils/riotApi";
// import React, { useEffect, useState } from "react";

const RotationCard = () => {
  //useEffect와 useState를 활용 & 훅의 타입을 지정
  //제네릭 타입을 사용하여 useState의 상태 타입을 명시
  //로딩 상태, 에러 상태를 처리
  // const [isLoading, setIsLoading] = useState(false);
  // const [rotation, setRotation] = useState<Rotation[]>([]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetchData = async () => {
  //     const { data } = await getChampionRotation();
  //     setRotation(data);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // if (isLoading) return <>Loading</>;

  // console.log("rotation===>", rotation);

  return <div>RotationCard</div>;
};

export default RotationCard;
