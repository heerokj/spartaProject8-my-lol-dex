import ChampionDetail from "@/components/ChampionDetail";
import { Champion } from "@/types/Champion";
import { Metadata } from "next";
import { fetchChampionDetail } from "@/utils/serverApi";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

//동적 메타데이터
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const data: Champion = await fetchChampionDetail(id);
  return {
    title: data.name,
    description: data.title,
  };
}

const championDetailPage = async ({ params }: Props) => {
  const id = params.id;
  const data = await fetchChampionDetail(id);
  return (
    <div>
      <ChampionDetail champion={data} />
    </div>
  );
};
export default championDetailPage;
