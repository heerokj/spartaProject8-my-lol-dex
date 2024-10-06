import ItemCard from "@/components/ItemCard";
import React from "react";

const itemPage = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-4">아이템 목록</h1>
      <ItemCard />
    </div>
  );
};

export default itemPage;
