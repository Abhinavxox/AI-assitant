import React, { useState } from "react";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSend = () => {
    const newMessages = [...messages, { text: "hi", sender: "bot" }];
    setMessages(newMessages);
  };

  return (
    <div className="flex flex-col">
      <div className="flex-grow bg-gray-100 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender} />
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow border p-2 rounded"
          />
          <button
            onClick={handleMessageSend}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const Message = ({ text, sender }) => {
  const isBot = sender === "bot";

  return (
    <div
      className={`p-2 rounded ${
        isBot ? "bg-gray-200" : "bg-blue-500 text-white"
      } ${isBot ? "ml-2" : "mr-2"}`}
    >
      {text}
    </div>
  );
};

export default Chatbox;
