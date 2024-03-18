'use client'

import { useState } from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import AddGap from "./AddGap";

const RecentArticles = () => {

  const [tabContent, setTabContent  ] = useState('lat');

  function handleTabContent (topic: string) {
    setTabContent(topic)
  }

  return (
    <div className="flex flex-col items-start">
      <h1 className={`font-semibold text-xl inline-block mt-5`}>
        Recent Articles
      </h1>

      <AddGap vertical="3"/>

      <ButtonGroup radius="sm" variant="flat">
        <Button color={tabContent === 'lat' ? 'primary' : 'default'} onClick={() => handleTabContent('lat')}>Latest</Button>
        <Button color={tabContent === 'prog' ? 'success' : 'default'} onClick={() => handleTabContent('prog')}>Programming</Button>
        <Button color={tabContent === 'tut' ? 'warning' : 'default'} onClick={() => handleTabContent('tut')}>Tutorials</Button>
      </ButtonGroup>

      <AddGap vertical="1"/>

      {
        tabContent === 'lat' ?
        <div className="p-2 rounded-xl w-full">
          <p>latest</p>
        </div>:

        tabContent === 'prog' ?
        <div className="p-2 rounded-xl w-full">
          <p>programming</p>
        </div>:

        <div className="p-2 rounded-xl w-full">
          <p>tutorials</p>
        </div>
      }

    </div>
  )
}

export default RecentArticles;