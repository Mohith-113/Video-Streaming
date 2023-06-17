import React from 'react'
import Slider from '../Components/Slider'
import LatestMve from '../Components/EnglishMve'
import FavMve from '../Components/TeluguMve'

export default function Home() {
  return (
    <div>
      <Slider/>
      <LatestMve/>
      <FavMve/>
    </div>
  )
}
