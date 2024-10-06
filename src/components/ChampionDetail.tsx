import { Champion } from "@/types/Champion";
import { getAPIVersion } from "@/utils/serverApi";
import Image from "next/image";

type Props = {
  champion: {
    data: object;
  };
};

const ChampionDetail = async ({ champion }: Props) => {
  const version = await getAPIVersion();
  //console.log("champion===>", champion); //ANCHOR - 1
  const cham = champion.data;
  const chamData: Champion[] = Object.values(cham);
  const data: Champion = chamData[0];

  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl my-4">{data.name}</h1>
        <h2 className="font-bold text-xl my-4">{data.title}</h2>
      </div>

      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data.image.full}`}
        alt="Picture of the author"
        width={250}
        height={250}
      />
      <p className="my-8">{data.lore}</p>

      <div>
        <h3 className="font-bold text-xl my-2">스탯</h3>
        <ul>
          <li>공격력 : {data.info.attack}</li>
          <li>방어력 : {data.info.defense}</li>
          <li>마법력 : {data.info.magic}</li>
          <li>난이도 : {data.info.difficulty}</li>
        </ul>
      </div>
    </div>
  );
};

export default ChampionDetail;

//지울예정
//ANCHOR - 1
// champion===> {
//   type: 'champion',
//   format: 'standAloneComplex',
//   version: '14.19.1',
//   data: {
//     Aatrox: {
//       id: 'Aatrox',
//       key: '266',
//       name: '아트록스',
//       title: '다르킨의 검',
//       image: [Object],
//       skins: [Array],
//       lore: '한때는 공허에 맞서 싸웠던 슈리마의 명예로운 수호자 아트록스와 그의 종족은 결국 공허보다 위험한 존재가 되어 룬테라의 존속을 위협했지만, 교활한 필멸자의 마법 에 속아넘어가 패배하게 되었다. 수백 년에 걸친 봉인 끝에, 아트록스는 자신의 정기가 깃든 마법 무기를 휘두르는 어리석은 자들을 타락시키고 육신을 바꾸는 것으로 다시 한번 자 유의 길을 찾아내었다. 이제 이전의 잔혹한 모습을 닮은 육체를 차지한 아트록스는 세상의 종말과 오랫동안 기다려온 복수를 열망한다.',
//       blurb: '한때는 공허에 맞서 싸웠던 슈리마의 명예로운 수호자 아트록스와 그의 종족은 결국 공허보다 위험한 존재가 되어 룬테라의 존속을 위협했지만, 교활한 필멸자의 마법에 속아넘어가 패배하게 되었다. 수백 년에 걸친 봉인 끝에, 아트록스는 자신의 정기가 깃든 마법 무기를 휘두르는 어리석은 자들을 타락시키고 육신을 바꾸는 것으로 다시 한번 자 유의 길을 찾아내었다. 이제 이전의 잔혹한 모습을 닮은 육체를 차지한 아트록스는 세상의 종말과 오랫동안 기다려온 복수를...',
//       allytips: [Array],
//       enemytips: [Array],
//       tags: [Array],
//       partype: '피의 샘',
//       info: [Object],
//       stats: [Object],
//       spells: [Array],
//       passive: [Object],
//       recommended: []
//     }
//   }
// }
