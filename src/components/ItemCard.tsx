import { Item } from "@/types/Item";
import { getAPIVersion, getItemList } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const ItemCard = async () => {
  const version = await getAPIVersion();
  const { data } = await getItemList();
  const itemData: Item[] = Object.values(data);

  return (
    <div className="grid grid-cols-6 gap-4">
      {itemData.map((item) => (
        <div
          key={item.image.full}
          className="border-2 border-[#363e50ba] p-4 rounded-md flex flex-col items-center"
        >
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <h2 className="font-bold text-lg pt-2">{item.name}</h2>
          <p>{item.plaintext}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
