import { Version } from "@/types/Champion";

//const url = "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
// const url = new URL(
//   "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations"
// );
//url.search = new URLSearchParams(params).toString();

// Data Dragon API의 버전 정보 가져오기
export async function getAPIVersion() {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    const data: Version = await res.json();
    const newData: string = data[0];

    return newData;
  } catch (error) {
    console.error(error);
  }
}

//챔피언 목록 데이터 가져오기
export async function getChampionList() {
  try {
    const version = await getAPIVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 86400, //86400초
        },
      }
    );
    const data = await res.json(); //TODO - 타입적어주는게 낫나?

    return data;
  } catch (error) {
    console.error(error);
  }
}

//챔피언 상세 정보 불러오기
export async function fetchChampionDetail(id: string) {
  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/${id}.json`
    );
    const data = await res.json(); //TODO - 타입적어주는게 낫나?

    return data;
  } catch (error) {
    console.error(error);
  }
}

//아이템 목록 가져오기
export async function getItemList() {
  try {
    const version = await getAPIVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
      {
        cache: "force-cache", //SSG : force-cache 옵션 주기
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
