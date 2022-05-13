// import React, { Component } from 'react'
// import { Card } from 'react-bootstrap'
// import { indexChat } from './../../api/chat'
// // import {
// //   initiateSocketConnection,
// //   disconnectSocket,
// //   listenForChatMessage
// // } from './SocketWorker'

// class MessageIndex extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       messages: []
//     }
//   }

//   componentDidMount () {
//     console.log('in Index - component did mount')

//     const { user, msgAlert } = this.props

//     indexChat(user)
//       .then((res) => this.setState({ messages: res.data.chat }))
//       .then(() => console.log(this.state.messages))
//       .then(() => {
//         msgAlert({
//           heading: 'Chat created',
//           message: 'Chat sent!',
//           variant: 'success'
//         })
//       })
//       .catch((error) => {
//         msgAlert({
//           heading: 'Chat creation failed',
//           message: 'Chat creation error: ' + error.message,
//           variant: 'danger'
//         })
//       })
//   }

//   render () {
//     const { messages } = this.state

//     let messagesJSX
//     if (!messages) {
//       messagesJSX = 'Loading...'
//     } else {
//       messagesJSX = messages.map(message => (
//         // id for each chat message
//         <div key={message._id}>
//           {message.body}
//         </div>))
//     }
//     return (
//       <>
//         <Card className='messageDisplay'>
//           <Card.Header>Message</Card.Header>
//           <Card.Body>
//             {messagesJSX}
//           </Card.Body>
//         </Card>
//       </>
//     )
//   }
// }

// export default MessageIndex
