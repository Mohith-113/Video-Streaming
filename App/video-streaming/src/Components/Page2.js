import React from 'react'
import './Blocks.css'
import a from './Icons/1.svg'
import b from './Icons/2.svg'
import v1 from './Episodes/bpage2.mp4'

// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Episode from './Episode.js'

//import c from './Icons/3.jpg'


// module.exports = function (api) {
//   return {
//     plugins: ['macros'],
//   }
// }
// module.exports = {
//   'fontawesome-svg-core': {
//     'license': 'free'
//   }
// }

function Page2() {
  return (
    <section class="sec1">
    <div class="div3">
      <a><img src={"https://images.hindustantimes.com/tech/img/2023/04/20/960x540/The_Family_Man_1681978724517_1681978736803.png"}/></a>
      <br/>
    </div>
    <div class="div4">
    <div class="div5">
      <p class="para1">Premium</p>
      <p class="para1">U/A</p>
    </div>
        <h class="hd1">The Family Man</h>
        <p class="para2"><b>2021 • 1 Season<br/>Comedy • Drama • Action</b></p>
        <p class="para3">Shiva and his journalist friends make money unethically in Madanapally by publishing false news stories and colluding with local politicians who control the town. Will they choose to stand up for the people of Madanapally, or will their greed and corruption lead them down a dark path? Watch to find out.</p>
        <a class="b1" href="">Play Trailer</a>
        <a class="b2" href=""><img src={a}/>Start Watching</a>
        <br/><br/><br/>
        <a class="s1" href=""><img src={b} width="25px;"/></a>
        <br/><p1>Share</p1>
        <div class="div6">
          <a href="">Episodes</a>
          <a href="">Cast</a>
          <a href="">Details</a>
        </div>
        <hr/>
        <div class="div7">
        <video controls><source src={v1} type={'video/mp4'}/></video>
        <div class="div8">
        <p>1.Page2</p>
        <p2>Episode 1 | 00:00:03</p2>
        <p>Unheard web series page.</p>
        </div>
        </div>
    </div>
    </section>
  )
}
export default Page2

{/* <BrowserRouter>
  <Routes>
  <Route path="/episodes" element={<Episode/>}/>

  </Routes>
</BrowserRouter> */}
//      <p class="para1">16+</p>
// • Political Drama • Violence
// As India became a nation, the citizens of Hyderabad witnessed the largest human struggle to break the chains of bondage. It,s time to listen to their voices.