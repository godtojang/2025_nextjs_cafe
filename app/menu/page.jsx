// 'use client';
import Banner from '@/components/menu/Banner';
import { API } from '@/constants/apis';
import Panel from '@/components/menu/Panel/Panel';
// import { useState } from 'react';

const Page = async () => {
  const responses = await Promise.all(API.map((url) => fetch(url)));
  const [coffees, beers, wines] = await Promise.all(
    responses.map((res) => res.json())
  );
  const filteredBeers = beers.filter(
    (v) => v.name && v.price && v.rating && v.image
  );

  // const [selected, setSelected] = useState('커피');

  return (
    <>
      <Banner />
      <Panel coffees={coffees} wines={wines} beers={filteredBeers} />
    </>
  );
};

export default Page;
