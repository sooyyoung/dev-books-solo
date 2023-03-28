# 📚 데브북스 리팩토링
![182052011-0678ee06-f49a-4888-92d6-d76d95a7b644](https://user-images.githubusercontent.com/103087604/228109923-928a03fa-8562-4d8b-940a-6dadac9b2832.png)

**데브북스(dev-books)는 IT 개발자들을 위한 중고책 거래 마켓입니다.** <br>
자신의 스토어에 판매하고 있는 상품을 등록하여 홍보할 수 있는 SNS입니다. <br>
상품을 등록하지 않아도 일상을 공유하며 즐거운 SNS 활동을 할 수 있습니다. <br>
글과 사진과 함께 게시물을 작성하여 자신의 일상을 공유할 수 있습니다. <br>
다른 사용자를 팔로우하면 유저가 올린 게시물을 홈 피드에서 소식을 확인할 수도 있습니다. <br>
피드를 구경하다가 마음에 드는 게시물을 발견했다면 '좋아요'를 누르거나 댓글을 달 수도 있습니다. <br><br>
팀 프로젝트를 리팩토링하여 수정 보완 및 추가 기능을 개발했습니다. <br>
🔗 <a href="https://github.com/NationwideTeam/dev-books">Team Project Repository</a>

<br>

## ⚙️ 개발 환경 및 배포 URL
- Front: React
- Back: 제공된 REST API
- Design: [Figma](https://www.figma.com/file/maNC6XnmZaSJ8Ep2y0EtDj/Dev-Books?node-id=0%3A1)
- 배포 URL: [dev-books.app](https://devbooks-sns.netlify.app/)
- `ID`: devbooks@mail.com
  <br> 
  `Password`: devbooks

<br>

## 💻 역할 분담
### 👩🏻‍💻 조수영

`v1.0`
- 회원가입, 로그인 
    - 유효성 검사
- 유저 프로필 
    - 유저 정보, 판매중인 상품, 게시글 표시
    - 게시글을 목록형, 앨범형으로 선택하여 보기
- 프로필 수정
    - 기존 프로필 정보가 입력되어 있도록 구현
- 팔로워, 팔로잉 목록
    - 팔로우 상태에 따라 버튼 변화

`v1.1`
- 유저 검색
    - 텍스트를 입력하면 해당되는 사용자 이름, 계정 표시
- 유저 팔로우, 언팔로우
    - 버튼만 변화(v1.0) → 기능 추가

<br>

## 💡 구현 기능

|Splash|회원가입|로그인|
|---|---|---|
| <img src="https://user-images.githubusercontent.com/103087604/227885666-f4a96cae-5ab1-4e35-854c-5843d87ea3f8.gif" width=""/> | <img src="https://user-images.githubusercontent.com/103087604/227886058-0eb1a52d-04ef-4666-a7a5-bc0089e01837.gif" width=""/> | <img src="https://user-images.githubusercontent.com/103087604/227886331-e4beb5d7-04b5-4d9d-b1ed-65229abc64a8.gif" width=""/> |


|홈화면|계정 검색|채팅|
|---|---|---|
| <img src="https://user-images.githubusercontent.com/103087604/227886431-a6999906-f4df-4f61-972a-03a1e0376d18.gif" width=""/> | <img src="https://user-images.githubusercontent.com/103087604/227886611-239389d0-d405-401d-9100-be1c5bba93e5.gif" width=""/> | <img src="https://user-images.githubusercontent.com/103087604/227886733-4b6f8b7c-1f4b-4f86-b07b-77550e5f102d.gif" width=""/> |


|유저 프로필|팔로우, 언팔로우|프로필 수정|       
|---|---|---|
|<img src="https://user-images.githubusercontent.com/103087604/227887704-e1a6cc75-4926-4885-aede-13bced2cec3a.gif" width=""/> | <img src="https://user-images.githubusercontent.com/103087604/227887875-d950c709-6278-4f56-af07-d85bf48775c0.gif" width=""/> | <img src="https://user-images.githubusercontent.com/103087604/227888150-3aa25cdf-2f11-4f1d-a18b-dba5c6dda15d.gif" width=""/> |

|상품 등록|상품 수정|상품 삭제|
|---|---|---|
| <img src="https://user-images.githubusercontent.com/103087604/227889083-d5b5acd4-30eb-4ab4-a7fc-6065c78f9da7.gif" width=""/> | <img src="https://user-images.githubusercontent.com/103087604/227889336-7ecb5ddb-90b6-4d45-a231-d9230e59fec7.gif" width=""/> | <img src="https://user-images.githubusercontent.com/103087604/227889500-0f49f4b8-fc2f-459a-a688-eb77e8673be7.gif" width=""/> |

|게시글 등록|게시글 수정|게시글 댓글|
|---|---|---|
| <img src="https://user-images.githubusercontent.com/103087604/227889617-3af54f3e-0bff-44ed-a343-3b3f65e8f60b.gif" width=""/> | <img src="https://user-images.githubusercontent.com/103087604/227889795-7278a83a-252c-40de-884a-63c282c40606.gif" width=""/> | <img src="https://user-images.githubusercontent.com/103087604/227890036-94900d89-a903-4d5d-91f9-40a8b552cb10.gif" width=""/> | 


<br>