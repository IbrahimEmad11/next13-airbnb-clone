'use client';

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiWindmill, 
        GiBoatFishing,
        GiCastle,
        GiForestCamp,
        GiCactus,
        GiTreehouse,
        GiBarn,  
        GiIsland,
        GiFarmer,
        GiGrapes, 
        GiCaveEntrance, 
        GiPalmTree,
         GiMountainCave,
        GiMonumentValley,  
        GiPineTree,
        GiTreasureMap} from "react-icons/gi";
import { MdOutlineVilla, MdOutlineTerrain } from "react-icons/md";
import { FaSkiing, FaDog , FaSpa, FaLeaf,FaShip, FaPaw, FaCity, FaHome, FaCaravan } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'Find stunning stays steps away from pristine beaches.',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'Experience the charm of stays near historic windmills.',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'Discover sleek, contemporary homes with stylish interiors.',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'Unwind in peaceful homes surrounded by rolling hills.',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'Enjoy refreshing stays with private or shared pools.',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'Escape to exclusive island getaways with stunning views.',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'Relax by tranquil lakes with serene waterfront properties.',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'Stay close to slopes for thrilling winter adventures.',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'Feel like royalty with stays in historic castles.',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'Immerse yourself in nature with unique camping stays.',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'Enjoy serene desert getaways with stunning vistas.',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'Indulge in luxury with exclusive, high-end properties.',
  },
  {
    label: 'Urban',
    icon: FaCity,
    description: 'Immerse yourself in vibrant urban hubs and cityscapes.',
  },
  {
    label: 'Tropical',
    icon: GiPalmTree,
    description: 'Stay in lush tropical paradises with warm climates.',
  },
  {
    label: 'Historic Homes',
    icon: GiMonumentValley,
    description: 'Discover stays steeped in history and character.',
  },
  {
    label: 'Mountains',
    icon: GiMountainCave,
    description: 'Enjoy breathtaking views and adventures in mountain stays.',
  },
  {
    label: 'Farmstay',
    icon: GiFarmer,
    description: 'Reconnect with nature with serene farmstay accommodations.',
  },
  {
    label: 'Eco',
    icon: FaLeaf,
    description: 'Stay in eco-friendly properties designed with sustainability in mind.',
  },
  {
    label: 'Vineyards',
    icon: GiGrapes,
    description: 'Experience the charm of vineyard retreats and wine country stays.',
  },
  {
    label: 'Boats',
    icon: FaShip,
    description: 'Stay aboard unique boat accommodations for a one-of-a-kind experience.',
  },
  {
    label: 'Treehouses',
    icon: GiTreehouse,
    description: 'Live your childhood dream in enchanting treehouse stays.',
  },
  {
    label: 'Wellness',
    icon: FaSpa,
    description: 'Rejuvenate your mind and body at wellness-focused retreats.',
  },
  {
    label: 'Pet-Friendly',
    icon: FaDog,
    description: 'Bring your furry friends along to pet-friendly properties.',
  },
  {
    label: 'Tiny Homes',
    icon: FaHome,
    description: 'Experience minimalist living in cozy, unique tiny homes.',
  },
  {
    label: 'RV Stays',
    icon: FaCaravan,
    description: 'Enjoy mobile living in fully-equipped RV accommodations.',
  },
  {
    label: 'Unique Stays',
    icon: GiTreasureMap,
    description: 'Discover extraordinary properties like yurts and igloos.',
  },
];
