import React from 'react'
import Slider from '../components/Slider'
import LatestMve from '../components/EnglishMve'
import FavMve from '../components/TeluguMve'

export default function Home() {
  return (
    <div>
      <Slider/>
      <LatestMve/>
      <FavMve/>
    </div>
  )
}
