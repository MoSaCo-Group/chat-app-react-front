// import React from 'react'
// import io from 'socket.io-client'
// import Button from 'react-bootstrap/Button'

// const socket = io('http://localhost:4741')

// class ChatRoomComponent extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       messages: [],
//       newMessage: ''
//     }
//   }

//   componentDidMount () {
//     socket.on('chat', (message) => {
//       console.log('connected')
//     })
//   }

//   componentWillUnmount () {
//     socket.close()
//   }

//   handleSubmit (event) {
//     // event.preventDefault()
//     socket.emit('chat', {
//       message: 'chat'
//     })
//   }

//   render () {
//     return (
//       <div>
//         hello
//         <Button onClick={this.handleSubmit}>submit</Button>
//       </div>
//     )
//   }
// }

// export default ChatRoomComponenta
