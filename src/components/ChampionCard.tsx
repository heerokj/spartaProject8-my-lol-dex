import { Champion } from "@/types/Champion";
import { getAPIVersion, getChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChampionCard = async () => {
  const version = await getAPIVersion();
  const data = await getChampionList(); //ANCHOR -1 data의 값
  //console.log("data===>", data.type); //champion
  const chamData = data.data; //ANCHOR - 2 chamData의 값
  //console.log("chamData===>", chamData);
  const championData: Champion[] = Object.values(chamData);

  return (
    <div className="grid grid-cols-6 gap-4">
      {championData?.map((champion) => (
        <Link href={`/champions/${champion.id}`} key={champion.id}>
          <div
            key={champion.id}
            className="border-2 border-[#363e50ba] p-4 rounded-md flex flex-col items-center"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <h2 className="font-bold text-lg pt-2">{champion.name}</h2>
            <p>{champion.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChampionCard;

//지울예정
//ANCHOR - 1
//data===>
// {
//   type: 'champion',
//   format: 'standAloneComplex',
//   version: '14.19.1',
//   data: {
//     Zyra: {
//     version: '14.19.1',
//     id: 'Zyra',
//     key: '143',
//     name: '자이라',
//     title: '가시 덩굴의 복수',
//     blurb: '자이라는 고대의 어떤 마법 대재앙에서 태어났다. 자연의 분노가 그대로 형상화된 생명체이자 인간과 식물의 매혹적인 혼종이다. 자이라가 한 걸음 내디딜 때마다 발 밑에는 새로운 생명이 피어난다. 발로란의 수많은 필멸자를 자신의 씨앗에서 태어난 후손의 먹잇감 정도로 여기므로, 치명적인 위력의 가시를 날려 필멸자를 거침없이 사냥한다. 또 한 자이라는 발로란 여기저기에 식육 식물 군락을 만들어 놓는데, 이 군락은 주변의 다른 생명체를 모조리 휘감아 죽이며 세력을...',
//     info: [Object],
//     image: [Object],
//     tags: [Array],
//     partype: '마나',
//     stats: [Object]
//   },
//    Zoe: {
//    version: '14.19.1',
//    id: 'Zoe',
//    key: '142',
//    name: '조이',
//    title: '여명의 성위',
//    blurb: '상상력과 변화의 화신인 장난꾸러기 조이는 타곤의 우주 전령으로, 세계를 뒤흔드는 중요한 사건들을 알린다. 조이는 존재만으로도 현실 세계를 지배하는 불가사의한 수학 원리를 왜곡하고, 가끔은 아무런 악의나 노력 없이도 대재앙을 일으킨다. 이것이 그녀가 자신의 의무에 경쾌하고도 태연하게 임하는 이유일지도 모른다. 조이는 장난을 치고 인간들을 골탕 먹이는 등 즐겁게 보낼 시간이 많다. 그녀를 만나면 매우 즐겁고 삶을 긍정적으로 바라보게 될 수도 있지만...',
//    info: [Object],
//    image: [Object],
//    tags: [Array],
//    partype: '마나',
//    stats: [Object]
//   },
//  }
// }

//ANCHOR - 2
//{
// Zyra: {
//   version: '14.19.1',
//   id: 'Zyra',
//   key: '143',
//   name: '자이라',
//   title: '가시 덩굴의 복수',
//   blurb: '자이라는 고대의 어떤 마법 대재앙에서 태어났다. 자연의 분노가 그대로 형상화된 생명체이자 인간과 식물의 매혹적인 혼종이다. 자이라가 한 걸음 내디딜 때마다 발밑 에는 새로운 생명이 피어난다. 발로란의 수많은 필멸자를 자신의 씨앗에서 태어난 후손의 먹잇감 정도로 여기므로, 치명적인 위력의 가시를 날려 필멸자를 거침없이 사냥한다. 또한 자이라는 발로란 여기저기에 식육 식물 군락을 만들어 놓는데, 이 군락은 주변의 다른 생명체를 모조리 휘감아 죽이며 세력을...',
//   info: { attack: 4, defense: 3, magic: 8, difficulty: 7 },
//   image: {
//     full: 'Zyra.png',
//     sprite: 'champion5.png',
//     group: 'champion',
//     x: 336,
//     y: 48,
//     w: 48,
//     h: 48
//   },
//   tags: [ 'Mage', 'Support' ],
//   partype: '마나',
//   stats: {
//     hp: 574,
//     hpperlevel: 93,
//     mp: 418,
//     mpperlevel: 25,
//     movespeed: 340,
//     armor: 29,
//     armorperlevel: 4.2,
//     armorperlevel: 4.2,
//     spellblock: 30,
//     spellblock: 30,
//     spellblockperlevel: 1.3,
//     attackrange: 575,
//     hpregen: 5.5,
//     hpregenperlevel: 0.5,
//     mpregen: 7,
//     mpregenperlevel: 0.8,
//     crit: 0,
//     critperlevel: 0,
//     attackdamage: 53,
//     attackdamageperlevel: 3.2,
//     attackspeedperlevel: 2.11,
//     attackspeed: 0.681
//   }
// },
// Zoe:{
//   ...
// }
//  }
// }
