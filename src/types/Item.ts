//아이템의 가격 정보, 스탯 정보도 포함
export type Item = {
  name: string;
  plaintext: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    total: number;
    sell: number;
    purchasable: number | boolean; //판매할때 | 안할때(false)
  };
  stats: {
    FlatMovementSpeedMod: number;
  };
};
