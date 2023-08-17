import React, { useState, useRef, useEffect } from "react";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [responseIndex, setResponseIndex] = useState(0); // Index of the response array
  const inputRef = useRef(null);

  const responseArray = [
    // Define your array of response components here
    <ResponseComponent1 />,
    <ResponseComponent2 />,
    // Add more response components as needed
  ];

  const handleMessageSend = () => {
    const userMessage = inputRef.current.value;
    const newMessages = [...messages, { text: userMessage, sender: "user" }];
    setMessages(newMessages);
    setInputDisabled(true);
    inputRef.current.value = "";

    setTimeout(() => {
      if (responseIndex < responseArray.length) {
        const botResponse = responseArray[responseIndex];
        const updatedMessages = [
          ...newMessages,
          { component: botResponse, sender: "bot" },
        ];
        setMessages(updatedMessages);
        setResponseIndex(responseIndex + 1); // Move to the next response index
      }
      setInputDisabled(false);
    }, 2000); // Wait for 2 seconds before sending the bot response
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
            <Message key={index} message={message} />
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
            disabled={inputDisabled}
          />
          <button
            onClick={handleMessageSend}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={inputDisabled}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const Message = ({ message }) => {
  const isBot = message.sender === "bot";

  return (
    <div className={`flex ${isBot ? "ml-auto" : ""} items-center`}>
      {isBot && (
        <img
          src="https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg"
          alt="Bot"
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      <div
        className={`p-2 rounded ${
          isBot ? "bg-gray-200 ml-2" : "bg-blue-500 text-white mr-2"
        }`}
      >
        {message.component ? message.component : message.text}
      </div>
    </div>
  );
};

// Define your response component examples here
const ResponseComponent1 = () => (
  <div>
    <p>Hello there! </p>
  </div>
);

const ResponseComponent2 = () => (
  <div>
    <p>
      Sure, the latest iPhone model is iPhone 14 and Samsung Note is Samsung
      Note 20 these are the specs available for both the phones:
    </p>
    <img src="/images/response2.jpeg" alt="Image 2" />
    <p>
      The price of the iPhone is $1,199 for the base variant. On the other hand,
      the Samsung Note 20 starts at $999 for its base model.
    </p>
    <br />
    <p>As for the color options:</p>
    <br />

    <p>
      iPhone 14 is available in Midnight, Starlight, Rose, Sunset Gold, and
      Alpine Green.
    </p>
    <br />

    <p>
      Samsung Note 20 comes in Mystic Black, Mystic Bronze, Mystic Green, and
      Mystic Gray.
    </p>
    <br />

    <p>
      There are no deals available for both the phones right now but OnePlushas
      some exciting deals, would you like to see their phone in this price
      range?
    </p>
  </div>
);

export default Chatbox;
