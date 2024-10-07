import { Rotation } from "@/types/Rotation";
import { getChampionList } from "./serverApi";

//챔피언 로테이션 데이터 가져오기
export async function getChampionRotation() {
  try {
    const response = await fetch("/api/rotation");
    const data = await response.json();
    //const freeChampionIds: number[] = data.freeChampionIds;

    // freeChampionIds가 제대로 존재하는지 확인
    const freeChampionIds = data.freeChampionIds || [];
    if (!Array.isArray(freeChampionIds)) {
      throw new Error("freeChampionIds is not an array");
    }

    //챔피언 목록
    const resCham = await getChampionList();
    const dataCham = resCham.data;
    const champions: Rotation[] = Object.values(dataCham);

    //로테이션에 포함한 챔피언 목록
    const selectedCampions = champions.filter((champion) =>
      freeChampionIds.includes(Number(champion.key))
    );
    return selectedCampions;
  } catch (error) {
    console.error(error);
  }
}
