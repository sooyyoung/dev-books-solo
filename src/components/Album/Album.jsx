import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostWrapper } from "./album.style";

function Album(props) {
  let navigate = useNavigate();
  const [album, setAlbum] = useState([]);
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
    const userpost = async () => {
      const userpostPath = `/post/${accountName}/userpost`;

      try {
        const res = await fetch(url + userpostPath, init);
        const json = await res.json();
        setAlbum(json.post);
      } catch (err) {
        console.error(err);
      }
    };
    userpost();
  }, []);

  return (
    <div className="album">
      <PostWrapper>
        {album.map((item, index) => {
          return (
            <img
              key={index}
              src={item.image.split(",")[0]}
              alt=""
              onClick={() => {
                navigate("/singlePost", {
                  state: {
                    postId: item.id,
                  },
                });
              }}
            />
          );
        })}
      </PostWrapper>
    </div>
  );
}

export default Album;
