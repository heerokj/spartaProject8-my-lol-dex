import { NextResponse } from "next/server";

//챔피언 로테이션 정보 : 렌더링 방식: CSR
export async function GET() {
  //
  //TODO - 질문
  // "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY!, 이런식으로 넣어주면 401오류 => 헤더에 안들어감
  //TODO - 질문
  // const secretToken = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  // console.log("secretToken", secretToken); //===> undefined
  //TODO - 질문
  //RIOT_API_KEY

  // const secretToken = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  // if (!secretToken) {
  //   return NextResponse.json({ error: "API key가 없습니다." }, { status: 500 });
  // }

  try {
    const res = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        // credentials: "include",
        // method: "GET",
        mode: "no-cors", //TODO - 질문 CORS오류로 넣어줌 : 관련 오류를 무시하기 위한 설정이지만, 이 경우 fetch가 성공적으로 동작하더라도 응답 데이터를 제대로 받을 수 없다 (?)
        headers: {
          "Content-Type": "application/json",
          "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY!,
        },
      }
    );
    const data = await res.json();
    console.log("data===>", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
