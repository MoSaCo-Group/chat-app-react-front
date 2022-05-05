/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React from 'react'
import './Testimonials.css'
import Ticker from 'react-ticker'
// {/* <div className="quote"></div>
// <div className="person"></div> */}
const MoveStuffAround = () => (
  <Ticker move='true' speed='20' direction='toLeft'>
    {() => (
        <div className='amalia'>
      <span className='quote'>Im Alexander Beers and this is my favorite Chat App</span>
      <span className='person'>Alexander Beers</span>
      <span className='quote'>I dont know if this works or not because they [MoSaCo Group] blocked me from using ReChat
      </span>
      <span className='person'>Vladimir Putin</span>
      <span className='quote'>So totally hot. Like totally.</span>
      <span className='person'>Paris Hilton</span>
      <span className='quote'>I love ice cream and one day you will to with the help of our fellow allies</span>
      <span className='person'>Joe Biden</span>
      <span className='quote'>When I first used this app I called my hubby and said daddy listen dump 50 thousand dollars into MoSaCo Group and keep your diamond tungsten hands on it for a long time because theyre better than Facebook</span>
      <span className='person'>Geraldine Weiss</span>
      <span className='quote'>Youre gonna love this site. Youre gonna cry, youre gonna laugh, youre gonna enjoy it. And its big. Like really big. China called me. They loved it. The EU loves it. If you dont love it I dont know what to tell you</span>
      <span className='person'>Donald Trump</span>
      </div>
    )}
  </Ticker>
)

export default MoveStuffAround
