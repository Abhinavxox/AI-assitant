import React, { useState, useRef, useEffect } from "react";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const handleMessageSend = () => {
    const userMessage = inputRef.current.value;
    const newMessages = [
      ...messages,
      { text: userMessage, sender: "user" },
      { text: "Hi", sender: "bot" }, // Bot's response
    ];
    setMessages(newMessages);
    inputRef.current.value = "";
  };

  // Automatically scroll to the bottom of the messages when a new message is added.
  useEffect(() => {
    if (messages.length > 0) {
      const messageContainer = document.getElementById("message-container");
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div
        id="message-container"
        className="flex-grow bg-gray-100 p-4 overflow-y-auto"
      >
        <div className="space-y-4">
          {messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender} />
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
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
        isBot ? "bg-gray-200 ml-2" : "bg-blue-500 text-white mr-2"
      }`}
    >
      {text}
    </div>
  );
};

export default Chatbox;
