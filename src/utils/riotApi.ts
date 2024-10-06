// 챔피언 로테이션 데이터 가져오기
export async function getChampionRotation() {
  const response = await fetch("/api/rotation"); //?api 레이어 사용방식?
  const data = await response.json();
  console.log("data", data);
  return data;
  // try {
  //   //로테이션
  //   const resRo = await GET();
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
