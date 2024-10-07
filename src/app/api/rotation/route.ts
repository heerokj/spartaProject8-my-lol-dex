import { NextResponse } from "next/server";

//챔피언 로테이션 정보 : 렌더링 방식: CSR
export async function GET() {
  try {
    const res = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "Content-Type": "application/json",
          "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY!,
        },
      }
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
