import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BasicNav } from "../../components/Navbar/Navbar";
import { UserChatList } from "../../components/User/User";
import TabMenu from "../../components/TabMenu/TabMenu";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";
import Alert from "../../components/Alert/Alert";
import BasicProfile from "../../assets/basic-profile.svg";
import {
  ChatFeedSection,
  ChatFeedMain,
  ChatFeedList,
  TabMenuHome,
  ActiveChatPopup,
} from "./chatFeed.style";

const ChatFeed = () => {
  const [navModal, setNavModal] = useState(false);
  const [alert, setAlert] = useState(false);

  let navigate = useNavigate();

  // 로그아웃
  const handleLogout = () => {
    window.localStorage.removeItem("accountname");
    window.localStorage.removeItem("token");
    navigate("/");
  };

  // 설정 및 개인정보 버튼 누르면 myProfile로 이동
  const nextMyProfile = () => {
    navigate("/myProfile");
  };

  return (
    <ChatFeedSection>
      <BasicNav
        onClick={() => {
          setNavModal(true);
        }}
      />
      <ChatFeedMain>
        <ChatFeedList>
          <UserChatList
            picture={BasicProfile}
            name={"우당탕탕 코딩 꿈나무"}
            chat={"안녕하세요. 책 사고싶어요요요요요~^^"}
            onClick={() => {
              navigate("/chatRoom");
            }}
          />
          <UserChatList
            picture={BasicProfile}
            name={"제주코딩"}
            chat={"(광고) hello world !!! ..."}
          />
          <UserChatList
            picture={BasicProfile}
            name={"개발짱이될거야"}
            chat={"안녕하세염 책 팔렸나요? ..."}
          />
        </ChatFeedList>
        <TabMenuHome>
          <TabMenu />
        </TabMenuHome>
      </ChatFeedMain>
      <ActiveChatPopup
        isActive={navModal}
        onClick={() => {
          setNavModal(false);
        }}
      >
        <Modal>
          <ModalContent txt="설정 및 개인정보" onClick={nextMyProfile} />
          <ModalContent
            txt="로그아웃"
            onClick={() => {
              setAlert(true);
              setNavModal(false);
            }}
          />
        </Modal>
      </ActiveChatPopup>
      <ActiveChatPopup isActive={alert}>
        <Alert
          message="로그아웃하시겠어요?"
          cancel="취소"
          confirm="로그아웃"
          onClickCancel={() => {
            setAlert(false);
          }}
          onClickConfirm={handleLogout}
        />
      </ActiveChatPopup>
    </ChatFeedSection>
  );
};

export default ChatFeed;
