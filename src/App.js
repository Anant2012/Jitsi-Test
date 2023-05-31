import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

function App() {
  return (
    <div>
      <>
        <JitsiMeeting
          roomName="ChatNepal"
          configOverwrite={{
            startWithAudioMuted: true,
            disableModeratorIndicator: true,
            startScreenSharing: true,
            enableEmailInStats: false,
            prejoinPageEnabled: false,
          }}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          }}
          userInfo={{
            displayName: "AMAN",
          }}
          getIFrameRef={(node) => (node.style.height = "500px")}
        />
      </>
    </div>
  );
}

export default App;
