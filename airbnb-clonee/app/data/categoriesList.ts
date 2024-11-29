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
        GiMonumentValley  } from "react-icons/gi";
import { MdOutlineVilla, MdOutlineTerrain } from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { FaSkiing, FaDog , FaSpa, FaLeaf,FaShip, FaPaw, FaCity } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

export const categories = [
    {
      label: 'Beach',
      icon: TbBeach,
      description: 'Experience serene properties close to breathtaking beaches!',
    },
    {
      label: 'Windmills',
      icon: GiWindmill,
      description: 'Stay near iconic windmills and enjoy the countryside charm!',
    },
    {
      label: 'Modern',
      icon: MdOutlineVilla,
      description: 'Enjoy contemporary and luxurious modern living spaces!',
    },
    {
      label: 'Countryside',
      icon: TbMountain,
      description: 'Relax in tranquil properties nestled in the countryside!',
    },
    {
      label: 'Pools',
      icon: TbPool,
      description: 'Dive into properties with private or shared pool access!',
    },
    {
      label: 'Islands',
      icon: GiIsland,
      description: 'Stay on picturesque islands with stunning water views!',
    },
    {
      label: 'Lake',
      icon: GiBoatFishing,
      description: 'Discover properties close to peaceful lakes for a perfect retreat!',
    },
    {
      label: 'Skiing',
      icon: FaSkiing,
      description: 'Stay near slopes for exciting skiing and snow activities!',
    },
    {
      label: 'Castles',
      icon: GiCastle,
      description: 'Feel royal with properties in or near historic castles!',
    },
    {
      label: 'Camping',
      icon: GiForestCamp,
      description: 'Experience the thrill of camping amidst nature!',
    },
    {
      label: 'Arctic',
      icon: BsSnow,
      description: 'Explore properties in frosty arctic regions for a unique experience!',
    },
    {
      label: 'Cave',
      icon: GiCaveEntrance,
      description: 'Stay in extraordinary properties located in or near caves!',
    },
    {
      label: 'Desert',
      icon: GiCactus,
      description: 'Enjoy a unique desert getaway with scenic views!',
    },
    {
      label: 'Barns',
      icon: GiBarn,
      description: 'Experience rustic charm in barn-style properties!',
    },
    {
      label: 'Lux',
      icon: IoDiamond,
      description: 'Indulge in ultimate luxury with exclusive properties!',
    },
    {
      label: 'Urban',
      icon: FaCity,
      description: 'Immerse yourself in the vibrant life of urban properties in bustling cities!',
    },
    {
      label: 'Tropical',
      icon: GiPalmTree,
      description: 'Relax in tropical paradises surrounded by lush greenery and warm climates!',
    },
    {
      label: 'Historical',
      icon: GiMonumentValley,
      description: 'Stay in properties steeped in history and cultural significance!',
    },
    {
      label: 'Mountains',
      icon: GiMountainCave,
      description: 'Enjoy breathtaking views and adventures in mountain properties!',
    },
    {
      label: 'Farmstay',
      icon: GiFarmer,
      description: 'Reconnect with nature at serene farmstay accommodations!',
    },
    {
      label: 'Eco',
      icon: FaLeaf,
      description: 'Stay in eco-friendly properties designed with sustainability in mind!',
    },
    {
      label: 'Vineyards',
      icon: GiGrapes,
      description: 'Experience the charm of vineyards and wine country retreats!',
    },
    {
      label: 'Boats',
      icon: FaShip,
      description: 'Stay aboard unique boat accommodations for a one-of-a-kind experience!',
    },
    {
      label: 'Treehouses',
      icon: GiTreehouse,
      description: 'Live your childhood dream in enchanting treehouse properties!',
    },
    {
      label: 'Jungle',
      icon: FaPaw,
      description: 'Stay amidst lush jungles and explore vibrant wildlife nearby!',
    },
    {
      label: 'Hills',
      icon: MdOutlineTerrain,
      description: 'Escape to charming hilltop properties with panoramic views!',
    },
    {
      label: 'Wellness',
      icon: FaSpa,
      description: 'Rejuvenate your mind and body at wellness-focused retreats!',
    },
    {
      label: 'Pet-friendly',
      icon: FaDog,
      description: 'Bring your furry friends along to pet-friendly properties!',
    },  
  ];