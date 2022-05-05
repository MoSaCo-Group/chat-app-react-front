/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import React from 'react'
import './Testimonials.css'
import Ticker from 'react-ticker'
// {/* <div className="quote"></div>
// <div className="person"></div> */}
const MoveStuffAround = () => (
	<Ticker move='false' speed='5' direction='toLeft'>
		{() => (
			<div className='amalia'>
				&nbsp;&nbsp;&nbsp;
				<span className='quote'>
					Im Alexander Beers and this is my favorite Chat App&nbsp;
				Alexander Beers&nbsp;
					I dont know if this works or not because they [MoSaCo Group] blocked
					me from using ReChat&nbsp;
				Vladimir Putin&nbsp;So totally hot. Like totally.&nbsp;Paris Hilton&nbsp;
					I love ice cream and one day you will to with the help of our fellow
					allies&nbsp;
				Joe Biden&nbsp;
					When I first used this app I called my hubby and said daddy listen
					dump 50 thousand dollars into MoSaCo Group and keep your diamond
					tungsten hands on it for a long time because theyre better than
					Facebook&nbsp;
				Geraldine Weiss&nbsp;
					Youre gonna love this site. Youre gonna cry, youre gonna laugh, youre
					gonna enjoy it. And its big. Like really big. China called me. They
					loved it. The EU loves it. If you dont love it I dont know what to
					tell you&nbsp;
				Donald Trump&nbsp;</span>
			</div>
		)}
	</Ticker>
)

export default MoveStuffAround
