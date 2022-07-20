import React from "react";
import "./profileInfo.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function ProfileInfo() {
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [userImg, setUserImg] = useState("");
  const [following, setFollowing] = useState("");
  const [follower, setFollower] = useState("");

  const location = useLocation();
  const url = "https://mandarin.api.weniv.co.kr";
  const token = window.localStorage.getItem("token");
  // const accountName = window.localStorage.getItem("accountname");
  const accountName = checkAccountName();

  const init = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };

  useEffect(() => {
    profile();
    followingCount();
    followerCount();
  }, []);

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
    } catch (err) {
      console.error(err);
    }
  };

  // 팔로잉
  const followingCount = async () => {
    const followingPath = `/profile/${accountName}/following`;

    try {
      const res = await fetch(url + followingPath, init);
      const json = await res.json();
      setFollowing(json.length);
    } catch (err) {
      console.error(err);
    }
  };

  // 팔로워
  const followerCount = async () => {
    const followerPath = `/profile/${accountName}/follower`;

    try {
      const res = await fetch(url + followerPath, init);
      const json = await res.json();
      setFollower(json.length);
    } catch (err) {
      console.error(err);
    }
  };

  // accountName 체크
  const checkAccountName = () => {
    const accountName = location.search.split("id=")[1]
      ? location.search.split("id=")[1]
      : localStorage.getItem("accountname");
    return accountName;
  };

  return (
    <div className="profileInfo">
      <div className="profileWrapper">
        <div className="follower">
          <Link to="/followers">{follower}</Link>
          <p className="followText">followers</p>
        </div>
        <img src={userImg} className="profileImg" alt="" />
        <div className="followings">
          <Link to="/followings">{following}</Link>
          <p className="followText">followings</p>
        </div>
      </div>
      <p className="profileName">{username}</p>
      <p className="profileId">{`@` + accountname}</p>
      <p className="profileDecript">{intro}</p>
    </div>
  );
}

export default ProfileInfo;
