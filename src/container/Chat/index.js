import classNames from "classnames/bind";
import styles from "./Chat.module.scss";
const cx = classNames.bind(styles);

function ChatOption() {
  return (
    <div className={cx("chat-wrapper")}>
      <div className={cx("chatbot-container")}>
        <img
          className="chat-gpt-icon"
          alt="chat-gpt-icon"
          src="https://salt.tikicdn.com/ts/ta/f8/a1/bf/95b4110dc1fba3d9b48dfc6c60be4a90.png"
          height="32"
          width="32"
        />
        <div className={cx("assistant")}>Trợ lý</div>
      </div>
      <div className={cx("chat-seperator")}></div>
      <div id="chat-platform" className={cx("chat-platform-container")}>
        <img
          src="https://salt.tikicdn.com/ts/ta/e1/5e/b4/2e33d86e11e2841a6a571de6084ff365.png"
          alt="chat-consumer"
          width="32"
          height="32"
        />
        <div className={cx("new-chat")}>Tin mới</div>
        <span data-total-unread-message="4">4</span>
      </div>
    </div>
  );
}

export default ChatOption;
