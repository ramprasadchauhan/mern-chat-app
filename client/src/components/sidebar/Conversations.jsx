import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emogis";
import Conversation from "./Conversation";
const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("Conversations", conversations);
  return (
    <div>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loadind loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
