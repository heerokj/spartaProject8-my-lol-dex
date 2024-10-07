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
    purchasable: number | boolean;
  };
  stats: {
    FlatMovementSpeedMod: number;
  };
};
