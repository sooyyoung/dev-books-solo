import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TabMenu from "../../components/TabMenu/TabMenu";
import { CommonNav } from "../../components/Navbar/Navbar";
import { UserFollow } from "../../components/User/User";
import { Follow, FollowWrap, FollowUser, Tabmenu } from "./followers.style";

export const Followers = () => {
  const location = useLocation();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    followerList();
  }, []);

  // 나를 팔로우한 사용자 목록 확인
  const followerList = async () => {
    const url = "https://mandarin.api.weniv.co.kr";
    const accountName = location.search.split("=")[1];
    const followerCount = location.state;
    const token = localStorage.getItem("token");

    const init = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };

    try {
      const resUserFollower = await fetch(
        `${url}/profile/${accountName}/follower?limit=${followerCount}`,
        init
      );
      const resUserFollowerJson = await resUserFollower.json();
      setFollowers(resUserFollowerJson);
    } catch (err) {
      console.error("error", err);
    }
  };

  return (
    <Follow>
      <CommonNav title="Followers" />
      <FollowWrap>
        <FollowUser>
            {followers.map((item, index) => {
            return (
                <UserFollow
                key={index}
                picture={item.image}
                name={item.username}
                id={item.accountname}
                button={item.isfollow}
                />
            );
            })}
        </FollowUser>
      </FollowWrap>
      <Tabmenu>
        <TabMenu />
      </Tabmenu>
    </Follow>
  );
};

export default Followers;
