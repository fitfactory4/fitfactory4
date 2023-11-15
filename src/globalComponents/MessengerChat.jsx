import { FacebookProvider, CustomChat } from "react-facebook";

export const MessengerChat = () => {
  return (
    <FacebookProvider appId="1347466015868386" chatSupport>
      <CustomChat pageId="154307281100408" minimized="true" />
    </FacebookProvider>
  );
};
