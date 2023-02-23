import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Buttons/Button';
import {
  UserSearchList,
  UserSearchInfo,
  UserImage,
  UserInfoContainer,
  UserName,
  UserId,
  UserChatItem,
  UserChatInfo,
  UserChatImg,
  UserChatName,
  UserChatContent,
  UserChatDate,
} from './user.style';

export const UserSearch = (props) => {
  return (
    <UserSearchList onClick={props.click}>
      <UserImage src={props.picture} alt="유저 프로필 이미지" />
      <UserInfoContainer>
        <UserName>{props.name}</UserName>
        <UserId>{props.id}</UserId>
      </UserInfoContainer>
    </UserSearchList>
  );
};

export const UserFollow = (props) => {
  const { picture, name, id, button } = props;
  const myAccountName = localStorage.getItem('accountname');
  const [isFollow, setIsFollow] = useState(button);
  let navigate = useNavigate();

  const url = "https://mandarin.api.weniv.co.kr";
  const token = localStorage.getItem("token");

  // 유저 클릭 시 해당 유저의 프로필 페이지로 이동
  const moveUserProfile = () => {
    if (id === myAccountName) {
      navigate(`/myProfile`);
    } else if (id !== myAccountName) {
      navigate(`/yourProfile?id=${id}`);
    }
  };

  // 팔로우 or 언팔로우
  const handleClick = async () => {
    if (isFollow === false) {
        const init = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
        };
        
        try {
            await fetch(`${url}/profile/${id}/follow`, init);
            setIsFollow((isFollow) => !isFollow);
        } catch (err) {
            console.error("err", err);
        }
    } else {
        const init = {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
        };

        try {
            await fetch(`${url}/profile/${id}/unfollow`, init);
            setIsFollow((isFollow) => !isFollow);
        } catch (err) {
            console.error("err", err);
        }
    }
  };

  return (
    <UserSearchList>
      <UserSearchInfo onClick={moveUserProfile}>
        <UserImage src={picture} />
        <UserInfoContainer className="userInfo">
          <UserName className="userName">{name}</UserName>
          <UserId className="userId">{id}</UserId>
        </UserInfoContainer>
      </UserSearchInfo>
      <div>
        <Button
          className={isFollow ? 'button sm active' : 'button sm'}
          onClick={handleClick}
        >
          {isFollow ? '취소' : '팔로우'}
        </Button>
      </div>
    </UserSearchList>
  );
};

export const UserChatList = (props) => {
  return (
    <UserChatItem onClick={props.onClick}>
      <UserChatImg src={props.picture} />
      <UserChatInfo>
        <UserChatName>{props.name}</UserChatName>
        <UserChatContent>{props.chat}</UserChatContent>
      </UserChatInfo>
      <UserChatDate>2020.10.25</UserChatDate>
    </UserChatItem>
  );
};
