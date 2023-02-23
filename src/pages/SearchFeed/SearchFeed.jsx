import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchNav } from "../../components/Navbar/Navbar";
import { UserSearch } from "../../components/User/User";
import {
  SearchFeedSection,
  SearchFeedMain,
  SearchList,
} from "./searchFeed.style";

const SearchFeed = () => {
  let navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const url = "https://mandarin.api.weniv.co.kr";
  const token = localStorage.getItem("token");

  useEffect(() => {
    searchUser();
  }, [keyword]);

  const searchUser = async () => {
    const init = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
    };

    try {
        const resUserSearch = await fetch(`${url}/user/searchuser/?keyword=${keyword}`, init);
        const resUserSearchJson = await resUserSearch.json();
        if (keyword) {
            setSearchResult(resUserSearchJson);
        } else {
            setSearchResult([]);
        }
    } catch (err) {
        console.error("err", err);
    }
  }

  return (
    <SearchFeedSection>
      <SearchNav keyword={keyword} setKeyword={setKeyword} />
      <SearchFeedMain>
        <SearchList>
            {searchResult.map ? searchResult.map((item, index) => {
                return (
                    <UserSearch
                        key={index}
                        click={() => {navigate(`/yourProfile?id=${item.accountname}`)}}
                        picture={item.image}
                        name={item.username}
                        id={item.accountname}
                    />
                )
            }) : ""
            }
        </SearchList>
      </SearchFeedMain>
    </SearchFeedSection>
  );
};

export default SearchFeed;
