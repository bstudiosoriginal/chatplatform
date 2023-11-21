import { useState } from "react"
import ChatFieldComponent from "./ChatFieldComponent"

// interface ChatItem {
//   message_type: string
//   side: string
//   text: string
//   price: number
//   img: Array<string>

// }
 
const ChatComponent = () => {
  const [chatItems, _] = useState([
           {message_type: 'text', side: 'left', text: "That sounds great. I'd be happy with that.", img: [], number: 0},
           {message_type: 'text', side: 'left', text: "Could you send over some pictures of your dog, please?", img: [], number: 0},
           {message_type: 'img', side: 'right', text: "", img: ["/chatplatform/dog-image-1.jpg", "/chatplatform/dog-image-2.jpg", "/chatplatform/dog-image-3.jpg"], number: 0},
           {message_type: 'text', side: 'right', text: "Here are a few pictures. She's a happy girl!", img: [], number: 0},
           {message_type: 'text', side: 'right', text: "Can you make it?", img: [], number: 0},
           {message_type: 'text', side: 'left', text: "She looks so happy! The time we discussed works. How long shall I take her out for?", img: [], number: 0},
           {message_type: 'price', side: 'left', text: "30 minute walk", img: [], number: 29},
           {message_type: 'price', side: 'left', text: "1 hour walk", img: [], number: 49},
        ]
      )
  // setChatItems()

  const generateChatItems = () => {
    return chatItems.map((item, index)=>
      <div key={index} className={(item.message_type=="text"?"chatbubbletext": item.message_type=="img"?"chatbubbleimg": "chatbubblespecial")+ " "+ item.side}>
        {
        (item.message_type == "text")?
        <p>
          {item.text}
        </p>
        :(item.message_type == 'img')?
        item.img.map((item, key)=>{
        return <img key={key} alt={"img"+key.toString()} src={item}></img>}
        )
        :
        <>
          <div className="circle"></div>
          <p>{item.text}</p>
          <h1>${item.number.toString()}</h1>
        </>}
      </div>
    )
  }

  return (
    <div className="chatscreencontainer">
      <div className="chatsectionbg">
      </div>
      <div className="chatphonecontainer">
        <div className="internalchatcontainer">
          <div className="topcover">
            <div className="notch"></div>
            <div className="topprofile">
              <div className='backbutton'></div>
              <div className='profilepicture'>
                <img alt='profile image' src="/chatplatform/avatar.jpg"></img>
              </div>
              <div className='profilename'>
                <h1>Samuel Green</h1>
                <p>Available to Walk</p>
              </div>
              <div className='threedots'></div>
            </div>
          </div>
          <div className="chatBox">
            {generateChatItems()}
          </div>
          <ChatFieldComponent/>
        </div>
      </div>
    </div>
  )

}

export default ChatComponent
