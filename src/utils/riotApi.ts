import { Rotation } from "@/types/Rotation";
import { getChampionList } from "./serverApi";

// 챔피언 로테이션 데이터 가져오기
export async function getChampionRotation() {
  try {
    const response = await fetch("/api/rotation"); //클라이언트 측에서 Next.js의 API 엔드포인트에 요청을 보내는 방법
    const data = await response.json();
    const freeChampionIds = data.freeChampionIds;

    //챔피언 목록
    const resCham = await getChampionList();
    const dataCham = resCham.data;
    const champions: Rotation[] = Object.values(dataCham);
    console.log("champions===>", champions);

    //로테이션에 포함한 챔피언 목록
    const selectedCampions = champions.filter((champion) =>
      freeChampionIds.includes(Number(champion.key))
    );
    // console.log("selectedCampions===>", selectedCampions);
    // console.log("selectedCampions.length", selectedCampions.length);
    return selectedCampions;
  } catch (error) {
    console.error(error);
  }

  //TODO -
  // try {
  //   //로테이션
  //   const resRo = await GET(); //Next.js API 핸들러 함수 (GET)를 직접 호출
  //   const data = await resRo.json();
  //   const rotation = data.data.freeChampionIds;
  //   //console.log("rotation===>", rotation);

  //   //챔피언 목록
  //   const resCham = await getChampionList();
  //   const dataCham = resCham.data;
  //   const champions = Object.values(dataCham);
  //   //console.log("champions===>", champions);
  //   //로테이션에 포함한 챔피언 목록
  //   const selectedCampions = champions.filter((champion) =>
  //     rotation.includes(Number(champion.key))
  //   );
  //   //console.log("selectedCampions===>", selectedCampions);
  //   console.log("selectedCampions.length", selectedCampions.length);
  //   return selectedCampions;
  // } catch (error) {
  //   console.error(error);
  //   return []; // 오류발생시 빈배열 반환
  // }
}
