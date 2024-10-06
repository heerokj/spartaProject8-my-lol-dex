// export type Data = {
//   type: string;
//   format: string;
//   version: string;
//   data: object;
// };

export type Champion = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
};

export type Version = string[];
