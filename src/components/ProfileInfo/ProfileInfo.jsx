import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ProfileInfoContainer,
  ProfileWrapper,
  Follow,
  FollowText,
  ProfileImg,
  ProfileName,
  ProfileId,
  ProfileDecript,
} from "./profileInfo.style";

function ProfileInfo(props) {
  const [username, setUsername] = useState(null);
  const [accountname, setAccountname] = useState(null);
  const [intro, setIntro] = useState(null);
  const [userImg, setUserImg] = useState(null);
  const [following, setFollowing] = useState(null);
  const [follower, setFollower] = useState(null);

  const url = "https://mandarin.api.weniv.co.kr";
  const token = window.localStorage.getItem("token");
  const accountName = props.accountName;

  const init = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };

  useEffect(() => {
    profile();
  }, [props.isFollow]);

  // 프로필
  const profile = async () => {
    const profilePath = `/profile/${accountName}`;

    try {
      const res = await fetch(url + profilePath, init);
      const json = await res.json();
      setUsername(json.profile.username);
      setAccountname(json.profile.accountname);
      setIntro(json.profile.intro);
      setUserImg(json.profile.image);
      setFollowing(json.profile.followingCount);
      setFollower(json.profile.followerCount);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ProfileInfoContainer>
      <ProfileWrapper>
        <Follow>
          <Link
            to={{
              pathname: "/followers",
              search: `?id=${accountName}`,
            }}
            state={follower}
          >
            {follower}
          </Link>
          <FollowText>followers</FollowText>
        </Follow>
        <ProfileImg src={userImg} alt=""></ProfileImg>
        <Follow>
          <Link
            to={{
              pathname: "/followings",
              search: `?id=${accountName}`,
            }}
            state={following}
          >
            {following}
          </Link>
          <FollowText>followings</FollowText>
        </Follow>
      </ProfileWrapper>
      <ProfileName>{username}</ProfileName>
      <ProfileId>{`@` + accountname}</ProfileId>
      <ProfileDecript>{intro}</ProfileDecript>
    </ProfileInfoContainer>
  );
}

export default ProfileInfo;
