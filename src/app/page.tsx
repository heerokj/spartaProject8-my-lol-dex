import Image from "next/image";
import Link from "next/link";
import profilePic1 from "../public/assets/Teemo_0.jpg";
import profilePic2 from "../public/assets/Ahri_0.jpg";
import profilePic3 from "../public/assets/Caitlyn_0.jpg";

export default function Home() {
  return (
    <div className="my-[40px]">
      <div className="text-center">
        <h1 className="font-bold text-3xl">리그 오브 레전드 정보 앱</h1>
        <p className="mt-4 text-gray-500">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>
      <div className="mt-[40px] flex flex-col items-center text-center">
        <div className="mb-[40px]">
          <Link href="/champions">
            <Image
              src={profilePic1}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <h3 className="mt-4">챔피언 목록 보기</h3>
          </Link>
        </div>
        <div className="mb-[40px]">
          <Link href="/rotation">
            <Image
              src={profilePic2}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <h3 className="mt-4">금주 로테이션 확인</h3>
          </Link>
        </div>
        <div>
          <Link href="/items">
            <Image
              src={profilePic3}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <h3 className="mt-4">아이템 목록 보기</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
