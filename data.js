//데이터 스크립트
var yn = 0;
function data(val, hak, ban, day, time) {
    // val == 1 이면 시간표
    // val == 2 이면 URL
    // val == 3 이면 URL 길이
    if (hak == 1 && ban == 1) {
        //1학년 1반
        var sigan = [
                       ["휴교"],
                       ["수2", "사회", "국2", "영어", "예체", "예체"], //월
                       ["국2", "체육", "수1", "과1", "음악", "스포츠", "사회"],//화
                       ["체육", "기가", "영어", "국1", "도덕", "창체"], //수
                       ["기가", "과2", "체육", "진로", "수1", "주제", "주제"],//목
                       ["창주", "국1", "음악", "정보", "과1", "사회"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 1 && ban == 2) {
        //1학년 2반
        var sigan = [
                       ["휴교"],
                       ["국2", "음악", "사회", "과1", "예체", "예체"], //월
                       ["체육", "국1", "기가", "과2", "영어", "스포츠", "정보"],//화
                       ["수1", "체육", "창주", "도덕", "사회", "창체"], //수
                       ["음악", "국2", "수1", "체육", "영어", "주제", "주제"],//목
                       ["수2", "사회", "과1", "진로", "기가", "국1"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 1 && ban == 3) {
        //1학년 3반
        var sigan = [
                       ["휴교"],
                       ["기가", "국2", "영어", "수1", "예체", "예체"], //월
                       ["사회", "영어", "과1", "음악", "수2", "스포츠", "국1"],//화
                       ["창주", "수1", "사회", "기가", "체육", "창체"], //수
                       ["진로", "국1", "과2", "체육", "사회", "주제", "주제"],//목
                       ["체육", "과1", "도덕", "국2", "음악", "정보"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 1 && ban == 4) {
        //1학년 4반
        var sigan = [
                       ["휴교"],
                       ["수1", "기가", "과1", "음악", "예체", "예체"], //월
                       ["진로", "사회", "국1", "수2", "정보", "스포츠", "영어"],//화
                       ["체육", "과1", "국2", "창주", "음악", "창체"], //수
                       ["체육", "사회", "기가", "국1", "과2", "주제", "주제"],//목
                       ["도덕", "수1", "사회", "국2", "영어", "체육"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 1 && ban == 5) {
        //1학년 5반
        var sigan = [
                       ["휴교"],
                       ["국1", "진로", "체육", "기가", "예체", "예체"], //월
                       ["도덕", "과1", "정보", "수1", "국1", "사회", "스포츠"],//화
                       ["사회", "국2", "과2", "음악", "수1", "창체"], //수
                       ["영어", "과1", "수2", "사회", "체육", "주제", "주제"],//목
                       ["기가", "음악", "영어", "체육", "국2", "창주"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "조종례" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 1 && ban == 6) {
        //1학년 6반
        var sigan = [
                       ["휴교"],
                       ["음악", "수1", "사회", "국2", "예체", "예체"], //월
                       ["수1", "체육", "과1", "영어", "기가", "사회", "스포츠"],//화
                       ["창주", "도덕", "국2", "사회", "진로", "창체"], //수
                       ["국1", "체육", "음악", "영어", "과2", "주제", "주제"],//목
                       ["정보", "기가", "체육", "과1", "국1", "수2"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "조종례" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 1 && ban == 7) {
        //1학년 7반
        var sigan = [
                       ["휴교"],
                       ["영어", "체육", "국2", "음악", "예체", "예체"], //월
                       ["정보", "기가", "체육", "사회", "과1", "수1", "스포츠"],//화
                       ["국2", "체육", "창주", "수2", "기가", "창체"], //수
                       ["사회", "수1", "음악", "과2", "국1", "주제", "주제"],//목
                       ["진로", "과1", "국1", "도덕", "사회", "영어"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "조종례" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
                   
   
    if (hak == 2 && ban == 1) {
        //2학년 1반
        var sigan = [
                       ["휴교"],
                       ["역사", "수학", "체육", "영3", "도2", "과2"], //월
                       ["역사", "체2", "영3", "스포츠", "국1", "기가", "과1"],//화
                       ["도1", "수학", "영2", "과1", "국2", "창체"], //수
                       ["체육", "미술", "국2", "한문", "역사", "과3", "수학"],//목
                       ["국1", "영1", "기가", "도1", "수학", "음악"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 2 && ban == 2) {
        //2학년 2반
        var sigan = [
                       ["휴교"],
                       ["과2", "체육", "영2", "기가", "수학", "도1"], //월
                       ["체육", "음악", "과1", "스포츠", "역사", "국2", "수학"],//화
                       ["영3", "국1", "역사", "미술", "한문", "창체"], //수
                       ["과1", "영3", "과3", "국1", "수학", "체2", "도2"],//목
                       ["국2", "기가", "수학", "역사", "영1", "도1"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 2 && ban == 3) {
        //2학년 3반
        var sigan = [
                       ["휴교"],
                       ["도2", "과3", "기가", "수학", "체육", "영3"], //월
                       ["영1", "수학", "국1", "스포츠", "도1", "과1", "역사"],//화
                       ["수학", "국2", "기가", "영3", "체2", "창체"], //수
                       ["과2", "수학", "역사", "영2", "음악", "한문", "국2"],//목
                       ["도1", "미술", "체육", "과1", "국1", "역사"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 2 && ban == 4) {
        //2학년 4반
        var sigan = [
                       ["휴교"],
                       ["과1", "역사", "국1", "도2", "과3", "영2"], //월
                       ["수학", "도1", "영1", "스포츠", "기가", "한문", "국1"],//화
                       ["체육", "음악", "수학", "과2", "역사", "창체"], //수
                       ["도1", "역사", "과1", "체육", "국2", "수학", "영3"],//목
                       ["수학", "체2", "미술", "국2", "기가", "영3"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 2 && ban == 5) {
        //2학년 5반
        var sigan = [
                       ["휴교"],
                       ["기가", "수학", "영3", "과3", "도1", "국1"], //월
                       ["음악", "과1", "국2", "역사", "스포츠", "영3", "수학"],//화
                       ["영2", "체2", "도1", "국1", "수학", "창체"], //수
                       ["미술", "수학", "체육", "과2", "도2", "역사", "영1"],//목
                       ["체육", "과1", "역사", "한문", "국2", "기가"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 2 && ban == 6) {
        //2학년 6반
        var sigan = [
                       ["휴교"],
                       ["과3", "한문", "도1", "역사", "수학", "체2"], //월
                       ["영3", "국1", "체육", "수학", "스포츠", "과2", "기가"],//화
                       ["과1", "역사", "미술", "영2", "국1", "창체"], //수
                       ["국2", "도2", "수학", "기가", "영3", "음악", "체육"],//목
                       ["역사", "국2", "도1", "수학", "과1", "영1"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 2 && ban == 7) {
        //2학년 7반
        var sigan = [
                       ["휴교"],
                       ["영3", "도2", "국2", "수학", "과1", "음악"], //월
                       ["한문", "수학", "체2", "국2", "스포츠", "도1", "과3"],//화
                       ["국1", "영3", "과1", "기가", "역사", "창체"], //수
                       ["영2", "체1", "과2", "도1", "수학", "미술", "역사"],//목
                       ["역사", "국1", "영1", "체1", "기가", "수학"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 2 && ban == 8) {
        //2학년 8반
        var sigan = [
                       ["휴교"],
                       ["수학", "도1", "과1", "영1", "국1", "미술"], //월
                       ["국2", "역사", "기가", "영3", "스포츠", "수학", "음악"],//화
                       ["역사", "수학", "국2", "도1", "체육", "창체"], //수
                       ["기가", "국1", "도2", "과1", "과3", "영2", "체2"],//목
                       ["체육", "한문", "수학", "역사", "영3", "과2"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
                                
    if (hak == 3 && ban == 1) {
        //3학년 1반
        var sigan = [
                       ["휴교"],
                       ["미술", "과학1", "수학", "과학2", "사회", "영어1"], //월
                       ["수학", "체육", "가정", "국어1", "과탐", "영어3", "과학1"],//화
                       ["기술", "국어1", "스포츠", "역사", "과학2", "창체"], //수
                       ["한문", "체육", "사회", "국어2", "역사", "음악", "영어1"],//목
                       ["영어2", "국어2", "미술", "체육", "수학", "기술"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "조종례" : "https://teams.microsoft.com/l/team/19%3a9c043ca8c7b94d3a88b141d3fbbd0e5f%40thread.tacv2/conversations?groupId=eab83088-a954-49b4-ac82-f60978436307&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "영어1" : "https://teams.microsoft.com/l/team/19%3a39fb258332e9491a9e29f1c0e1237d0b%40thread.tacv2/conversations?groupId=2d74460e-0f78-430b-941d-0f6973d47134&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "영어2" : "https://teams.microsoft.com/l/team/19%3a7aa3c762a24e4f29b8f5d81fff4fbc18%40thread.tacv2/conversations?groupId=99ca7771-1c6e-4917-a702-2b04c708fe66&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "영어3" : "https://teams.microsoft.com/l/team/19%3aa6dfebd2f45a4ea2a8f090e1f1b2fff3%40thread.tacv2/conversations?groupId=fdd7d0ca-1711-4dc3-9563-083f9a14000c&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "기술" : "",
                       "가정" : "https://teams.microsoft.com/l/team/19%3ad7e92638dc2b46e9853c347c0c507914%40thread.tacv2/conversations?groupId=05109278-cb3f-4f76-8799-76b006891e39&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "역사" : "https://teams.microsoft.com/l/team/19%3a9b5f888719a64f2ba384c36618774b08%40thread.tacv2/conversations?groupId=eb19fc19-610c-43a7-91c8-51d679db906f&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "국어1" : "https://teams.microsoft.com/l/team/19%3ada3f19a5854247bc91c8ee319324ab41%40thread.tacv2/conversations?groupId=aa5b4976-838e-4f6a-9b3c-b0f10da09021&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "국어2" : "https://teams.microsoft.com/l/team/19%3a0c14ed94250041f7b3f9765bebf70b89%40thread.tacv2/conversations?groupId=f2fe8cab-5d42-4e36-b943-54316ea8d059&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "수학" : "https://teams.microsoft.com/l/team/19%3adafd8d8ec598441f9989bcae83359df8%40thread.tacv2/conversations?groupId=3fd2ba4f-423e-4727-8154-dd1b27f3864d&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "과학1" : "https://teams.microsoft.com/l/team/19%3a7e7b03a8687a425fb6ae8753babf1e26%40thread.tacv2/conversations?groupId=b13fb2f3-9844-412d-b1fd-bd0b74c87eac&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "과학2" : "https://teams.microsoft.com/l/team/19%3a99df1142e90e4aea90f7f667d708a00f%40thread.tacv2/conversations?groupId=78bc81f8-82ad-4910-a510-7ec1d1ed445b&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "한문" : "https://teams.microsoft.com/l/team/19%3a83fba9be23b24e9cb9a45a0437496b4d%40thread.tacv2/conversations?groupId=0153b033-cf65-45da-8b0a-5c3b939e883a&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "체육" : "https://teams.microsoft.com/l/team/19%3a2d8582e6419c45b7804807289db12daa%40thread.tacv2/conversations?groupId=ddeaddda-69f0-4489-8125-88389b1d30bb&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "미술" : "https://teams.microsoft.com/l/team/19%3aPA8MUMzWzMsmuC_zCqLHR04vthwJIl_7Xt2WaJYYBQo1%40thread.tacv2/conversations?groupId=6ec919f4-a962-4c62-b4e5-01ad95f2290e&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "음악" : "https://teams.microsoft.com/l/team/19%3aa060f6dc80514ab8835fc489958d2ca0%40thread.tacv2/conversations?groupId=778fcbab-e7c6-403e-88b1-74577389c72c&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "사회" : "https://teams.microsoft.com/l/team/19%3af9f9650e7f284e31bf44521c218e3956%40thread.tacv2/conversations?groupId=b37d7cd6-b975-4975-bce6-2c1b1a79a817&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "역사" : "https://teams.microsoft.com/l/team/19%3a9b5f888719a64f2ba384c36618774b08%40thread.tacv2/conversations?groupId=eb19fc19-610c-43a7-91c8-51d679db906f&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "과탐" : "https://teams.microsoft.com/l/team/19%3a66d39b7ffebd49d9be6e8c173d3ff67c%40thread.tacv2/conversations?groupId=eb42d5fe-bae4-43c8-98e6-86bd273a29c2&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319"
         };
    
    }
    if (hak == 3 && ban == 2) {
        //3학년 2반
        var sigan = [
                       ["휴교"],
                       ["영1", "미술", "국2", "기술", "역사", "과2"], //월
                       ["가정", "과1", "체육", "사회", "영3", "과탐", "국2"],//화
                       ["한문", "음악", "스포츠", "수학", "영2", "창체"], //수
                       ["체육", "역사", "수학", "영1", "사회", "기술", "국1"],//목
                       ["국1", "체육", "과2", "미술", "과1", "수학"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "조종례" : "https://teams.microsoft.com/l/team/19%3a065d4accecde4f2aa741dc9525e97f7b%40thread.tacv2/conversations?groupId=40d968ea-afea-465d-8c3b-8412125f12bf&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "국1" : "https://teams.microsoft.com/l/team/19%3a89f5f20fb6d647e7ad5e0b064bd9a438%40thread.tacv2/conversations?groupId=2b4f59e9-5009-405e-ad0d-cdd19de62a9a&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "국2" : "https://teams.microsoft.com/l/team/19%3a6439e3e96ee048c5969c8704f70acbd6%40thread.tacv2/conversations?groupId=03167390-5562-480a-8d5e-64e85de5a1ca&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "수학" : "https://teams.microsoft.com/l/team/19%3ab884ea66cb904d998337bbd05a7950a2%40thread.tacv2/conversations?groupId=7e14d005-c742-4158-b722-dfed6b3e24bf&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "사회" : "https://teams.microsoft.com/l/team/19%3a0f78964e94af4fb899847711f10b9580%40thread.tacv2/conversations?groupId=0573b072-4439-48fd-907e-40c0a05053e2&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "과1" : "https://teams.microsoft.com/l/team/19%3a57a40377ca3f48db9140049a2f4a4c0a%40thread.tacv2/conversations?groupId=1e8d96fb-8925-40f2-bd63-74e9dc92ce9e&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "과2" : "https://teams.microsoft.com/l/team/19%3aba1abd25d585421aaa3c693b3abfe1df%40thread.tacv2/conversations?groupId=b0ef53a1-99eb-47e4-a436-c1ed1de1366c&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "영1" : "https://teams.microsoft.com/l/team/19%3a9cc6173dddb147db8e7fcdba029187b4%40thread.tacv2/conversations?groupId=27b5feb6-98ab-4c4e-b1c6-2769a3ec1506&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "영2" : "https://teams.microsoft.com/l/team/19%3a74906629ae19401e812ff3cf0137c78d%40thread.tacv2/conversations?groupId=c957fac1-2dcb-496d-b970-eb406c5e71c3&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "영3" : "https://teams.microsoft.com/l/team/19%3aaa57430ad01a47568ddbb2e261920158%40thread.tacv2/conversations?groupId=43ea6c6f-542a-4a14-ab3c-04c1ce17e154&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "역사" : "https://teams.microsoft.com/l/team/19%3aa6ffcf18b1e94801b35a8220985d783f%40thread.tacv2/conversations?groupId=3fdedc43-7d82-4ae8-854a-4e87645ded1e&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "한문" : "https://teams.microsoft.com/l/team/19%3a962cb3ebe8474e4d808ab4748d4ecc5e%40thread.tacv2/conversations?groupId=59a7d940-ce98-4ae5-96e2-9255c2d88501&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "과탐" : "https://teams.microsoft.com/l/team/19%3a694565de165c4f62a272e7eaa24efa7a%40thread.tacv2/conversations?groupId=ec84c89b-8bba-4463-b5b1-1d4a62129ff6&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "기술" : "https://teams.microsoft.com/l/team/19%3a2ahFp_rHqSYyF3zFYda8qZRewAAEZAaFGo953RjfpfI1%40thread.tacv2/conversations?groupId=fa473e4a-7ecf-46fb-b3c7-1cc401884eb9&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "가정" : "https://teams.microsoft.com/l/team/19%3af654879415184a12ab25b79bd5445aa4%40thread.tacv2/conversations?groupId=8ee87cb3-eeba-4c94-9d91-78450c9a03b2&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "체육" : "https://teams.microsoft.com/l/team/19%3ac7aa9a8cd4844e2fa56986d023fb8a02%40thread.tacv2/conversations?groupId=a0aeece5-e53b-41c7-a830-6c3d1417cbc7&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "음악" : "https://teams.microsoft.com/l/team/19%3afab82c1922f9434e95040110864c73c9%40thread.tacv2/conversations?groupId=916d6ea4-59bb-483e-89ca-46c7a563b58f&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "미술" : "https://teams.microsoft.com/l/team/19%3aTLBwiXz-j5oA_r73KdUvvHIwH5I2Ka3t5rUpnAstTe41%40thread.tacv2/conversations?groupId=a186c525-27e2-4e8c-bd57-ca2e6fbd025e&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319"
         };
    
    }
    if (hak == 3 && ban == 3) {
        //3학년 3반
        var sigan = [
                       ["휴교"],
                       ["국2", "기술", "체육", "영1", "미술", "역사"], //월
                       ["영1", "과탐", "한문", "수학", "과2", "국1", "역사"],//화
                       ["사회", "수학", "스포츠", "과1", "국2", "창체"], //수
                       ["가정", "영2", "기술", "음악", "수학", "과2", "체육"],//목
                       ["미술", "국1", "과1", "사회", "체육", "영3"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 3 && ban == 4) {
        //3학년 4반
        var sigan = [
                       ["휴교"],
                       ["음악", "과2", "한문", "미술", "국2", "사회"], //월
                       ["체육", "국2", "과탐", "과1", "기술", "영1", "수학"],//화
                       ["과2", "영2", "스포츠", "가정", "체육", "창체"], //수
                       ["과1", "영1", "역사", "국1", "체육", "수학", "기술"],//목
                       ["사회", "역사", "수학", "영3", "국1", "미술"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "조종례" : "https://teams.microsoft.com/l/team/19%3ae47b5a67777d4df19ef3e5aff8a85921%40thread.tacv2/conversations?groupId=e61d0b2d-d66d-45cf-a9f2-9330da53269e&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "음악" : "https://teams.microsoft.com/l/team/19%3a073daa7af9ce4d5f9176bf5f44f8e902%40thread.tacv2/conversations?groupId=c402b2ba-e8cf-42b2-aff9-ac03591a38e0&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "과2" : "https://teams.microsoft.com/l/team/19%3a39a0b014f024448fbbc734d5c4bcc7c2%40thread.tacv2/conversations?groupId=42a00ab9-fd43-455d-b972-0cdfb029b5e2&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "한문" : "https://teams.microsoft.com/l/team/19%3a0d9bb666f1784606b79ebcaa9351e6cb%40thread.tacv2/conversations?groupId=c6bcc51e-5aaf-48f1-b157-46af2bdccb88&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "미술" : "https://teams.microsoft.com/l/team/19%3aYnNJaUsVbctsfbTo2EvCYqAI7cp0SilvF_vrFq4_jWo1%40thread.tacv2/conversations?groupId=e207b5a8-6c05-460e-922b-b2e92edf9024&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "국2" : "https://teams.microsoft.com/l/team/19%3a0fcd403023934cc4b266a2c0a253d719%40thread.tacv2/conversations?groupId=e0ac226c-bf06-48ff-8d7c-212749583901&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "사회" : "https://teams.microsoft.com/l/team/19%3aa5cb32fbf2174ec2b91ce073c72e4981%40thread.tacv2/conversations?groupId=53367689-054a-4dc0-9a8f-bb9ac0c8bb2a&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "체육" : "https://teams.microsoft.com/l/team/19%3a3adb106873164005902d814248f92275%40thread.tacv2/conversations?groupId=99731193-1f4f-43c0-a9f5-3ea20a9cb939&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "과탐" : "https://teams.microsoft.com/l/team/19%3a8fdb2d2bdfe9433fb2d6c5272fe3ea12%40thread.tacv2/conversations?groupId=e955c462-92e5-4a3c-ae80-b1fbf57c60dc&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "과1" : "https://teams.microsoft.com/l/team/19%3a21c5ae8b6aa9461e8b41166c22186db2%40thread.tacv2/conversations?groupId=ec731105-3602-4bb1-b4d1-344f3348a9b2&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "영1" : "https://teams.microsoft.com/l/team/19%3a60e45597f85c42ce99bee83b6e56141a%40thread.tacv2/conversations?groupId=ec5efb94-85e0-4da2-81d3-2e229fb5cfef&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "수학" : "https://teams.microsoft.com/l/team/19%3a8660850a29704145b6491fd7d59e250a%40thread.tacv2/conversations?groupId=45e25bc4-7b94-4310-86d6-0f5c0a542118&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "영2" : "https://teams.microsoft.com/l/team/19%3a2d2ec8df60104b619c4a6b1274ec1c12%40thread.tacv2/conversations?groupId=339975b9-c0d2-41af-9b58-07e2c35d6b07&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "가정" : "https://teams.microsoft.com/l/team/19%3a6643437c93cb43b2bfd4d27d11aea87a%40thread.tacv2/conversations?groupId=4d674b24-9f4d-4d53-8eb0-af9fd5b77b91&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "역사" : "https://teams.microsoft.com/l/team/19%3a4f989053370844e5a3d98344f99fa001%40thread.tacv2/conversations?groupId=2ea4b701-b488-4c70-be2b-616e77347f05&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "영3" : "https://teams.microsoft.com/l/team/19%3a60e45597f85c42ce99bee83b6e56141a%40thread.tacv2/conversations?groupId=ec5efb94-85e0-4da2-81d3-2e229fb5cfef&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "국1" : "https://teams.microsoft.com/l/team/19%3a337abf3ec3b24e388258095ed0f09466%40thread.tacv2/conversations?groupId=19157625-0db0-468a-adb7-cbe24dfcad5b&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319"
         };
    
    }
    if (hak == 3 && ban == 5) {
        //3학년 5반
        var sigan = [
                       ["휴교"],
                       ["체육", "사회", "미술", "수학", "국1", "가정"], //월
                       ["과1", "기술", "영1", "국2", "역사", "과탐", "과2"],//화
                       ["음악", "체육", "국1", "스포츠", "영3", "창체"], //수
                       ["국2", "수학", "영2", "체육", "미술", "역사", "한문"],//목
                       ["수학", "기술", "영1", "과2", "사회", "과1"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "조종례" : "https://teams.microsoft.com/l/team/19%3a2ce7ae4c94b94155bdce62079b0a10fe%40thread.tacv2/conversations?groupId=b6ed5f2d-a1a9-45c2-8633-ea6bee740c1c&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "국1" : "https://teams.microsoft.com/l/team/19%3af502b3de0bba44b193503bbdf16b6380%40thread.tacv2/conversations?groupId=c35e1a89-9b49-4075-a025-89edbb888808&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "국2" : "https://teams.microsoft.com/l/team/19%3a232ab74b95b04749b8e04fc3729e197b%40thread.tacv2/conversations?groupId=b74b474a-e65e-4f29-b075-c5b8d159af2f&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "수학" : "https://teams.microsoft.com/l/team/19%3aOI96aknykQ187vj9fDRa20_qZh0HvQw0wyoFZ1VOl8U1%40thread.tacv2/conversations?groupId=5e14a575-d2c5-4062-9b0e-a35ff16a724f&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "사회" : "https://teams.microsoft.com/l/team/19%3ad1b85b951190459c974eeb258466259b%40thread.tacv2/conversations?groupId=52988a4a-70da-40b0-ab2a-a6faa40667f2&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "역사" : "https://teams.microsoft.com/l/team/19%3a43b4febd959e4243bc6668c43fa9481b%40thread.tacv2/conversations?groupId=2e810ebb-ac2f-4514-bef6-ca2b5c1b1294&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "과1" : "https://teams.microsoft.com/l/team/19%3a330266978650491b8182d86cc707f05a%40thread.tacv2/conversations?groupId=fb581542-ac35-4852-99a9-665997062c98&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "과2" : "https://teams.microsoft.com/l/team/19%3a85b188fed15b42b1989f858a7c1ca7f1%40thread.tacv2/conversations?groupId=a756f45e-668c-4471-be4a-189893b3c173&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "과탐" : "https://teams.microsoft.com/l/team/19%3a7ecd5a9609834e309d76af543bc5db93%40thread.tacv2/conversations?groupId=9d3f71c4-233b-40d2-ba84-37e0ab700a20&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "가정" : "https://teams.microsoft.com/l/team/19%3a0fbc6b6ea1f74611a1753614ae371568%40thread.tacv2/conversations?groupId=abdd31d7-a490-40f6-946c-bf8bf4b5f98d&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "기술" : "https://teams.microsoft.com/l/team/19%3afcc2de37fa1e4a31ab925c63e9990457%40thread.tacv2/conversations?groupId=403c6146-6006-48c9-a1f6-6122af41b50d&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "영1" : "https://teams.microsoft.com/l/team/19%3a6a69aee39e5c425c84b91670e5208fa7%40thread.tacv2/conversations?groupId=819e8051-b571-43c5-95fe-99075a70ba74&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "영2" : "https://teams.microsoft.com/l/team/19%3a14a57830d2c44e5f96f9314deba54fbf%40thread.tacv2/conversations?groupId=878f8c00-1ea3-4591-9bfa-71300b25fea4&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "영3" : "https://teams.microsoft.com/l/team/19%3a6a69aee39e5c425c84b91670e5208fa7%40thread.tacv2/conversations?groupId=819e8051-b571-43c5-95fe-99075a70ba74&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "체육" : "https://teams.microsoft.com/l/team/19%3a94f3f46b49184e2ab1cce2b993352913%40thread.tacv2/conversations?groupId=cde9fbcc-72a6-4cd2-8eec-397ff4215699&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "미술" : "https://teams.microsoft.com/l/team/19%3a6a69aee39e5c425c84b91670e5208fa7%40thread.tacv2/conversations?groupId=819e8051-b571-43c5-95fe-99075a70ba74&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
                       "한문" : "https://teams.microsoft.com/l/team/19%3aa2321052ea154b7d8489dc0826195959%40thread.tacv2/conversations?groupId=2b028492-4f42-4455-aa03-28dc2fccf170&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319"
         };
    
    }
    if (hak == 3 && ban == 6) {
        //3학년 6반
        var sigan = [
                       ["휴교"],
                       ["과2", "영1", "역사", "미술", "과1", "수학"], //월
                       ["역사", "사회", "체육", "한문", "수학", "국2", "과탐"],//화
                       ["수학", "기술", "영3", "스포츠", "국1", "창체"], //수
                       ["영1", "과1", "국2", "가정", "체육", "사회", "음악"],//목
                       ["과2", "영2", "기술", "국1", "미술", "체육"], //금
                       ["휴교"]
         ];
    
       var url = {
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : "",
                       "" : ""
         };
    
    }
    if (hak == 3 && ban == 7) {
        //3학년 7반
        var sigan = [
                       ["휴교"],
                       ["미술", "역사", "과1", "체육", "수학", "국2"], //월
                       ["체육", "과2", "국1", "과탐", "영1", "기술", "사회"],//화
                       ["미술", "영3", "한문", "스포츠", "음악", "창체"], //수
                       ["사회", "가정", "체육", "기술", "영1", "국1", "수학"],//목
                       ["국2", "과1", "영2", "수학", "역사", "과2"], //금
                       ["휴교"]
         ];
    
         var url = {
            "조종례" : "https://teams.microsoft.com/l/team/19%3a76ee947f01fb4aaf8534023b55e747d5%40thread.tacv2/conversations?groupId=797d6fb7-10d5-48e0-b261-7aea62d1330b&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "체육" : "https://teams.microsoft.com/l/team/19%3afd6d9f9a93604e00ae2e8a92fefd25c9%40thread.tacv2/conversations?groupId=f5f4426d-0cc5-49a9-acbc-7523b5d49720&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "가정" : "https://teams.microsoft.com/l/team/19%3a3cd87935e77a4725bf6310c95e3d2f2d%40thread.tacv2/conversations?groupId=d3de4e80-9014-41ed-a80a-15600f7017ed&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "국1" : "https://teams.microsoft.com/l/team/19%3a3d1f249252024c919d89004ff361d408%40thread.tacv2/conversations?groupId=014803d2-a8a0-490c-93e4-98a55c3447db&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "국2" : "https://teams.microsoft.com/l/team/19%3a79b55ae6cd5748a1b810684022d1de9b%40thread.tacv2/conversations?groupId=a70d37cc-48d1-4199-a2f0-a6954a994b6e&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "영2" : "https://teams.microsoft.com/l/team/19%3a7d6745f13fc84d9d96bcbb853054871f%40thread.tacv2/conversations?groupId=aa6af451-ae6a-4514-9448-d63a254b7806&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "기술" : "https://teams.microsoft.com/l/team/19%3a30a20ddfa5cd4fc7b98caa18c5efbe50%40thread.tacv2/conversations?groupId=eb4374de-02f9-42b9-ae6f-73d2c04fa2bf&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "음악" : "https://teams.microsoft.com/l/team/19%3a13bd8b94ad5f4dd480827ff32e85aec7%40thread.tacv2/conversations?groupId=1040f40a-35ea-4d20-8f0a-86cc279b0cb7&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "과2" : "https://teams.microsoft.com/l/team/19%3a2a9bb35d22d24f94b72775caf6be843a%40thread.tacv2/conversations?groupId=7a0eb1b1-5ca1-4aac-926c-b75e4640d93e&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "영1" : "https://teams.microsoft.com/l/team/19%3a51a7c83e82654879a2745bfe3929f5e6%40thread.tacv2/conversations?groupId=c1e5760f-a7e7-48d8-85ca-8686a594fd0d&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "영3" : "https://teams.microsoft.com/l/team/19%3a51a7c83e82654879a2745bfe3929f5e6%40thread.tacv2/conversations?groupId=c1e5760f-a7e7-48d8-85ca-8686a594fd0d&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "과1" : "https://teams.microsoft.com/l/team/19%3a2bb9bc6478264b73ad6b93718ed446a5%40thread.tacv2/conversations?groupId=7965163a-cc38-42de-b585-ca7da339d306&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "사회" : "https://teams.microsoft.com/l/team/19%3ad28308d2b8494b1fa81a848838d067a6%40thread.tacv2/conversations?groupId=96852265-62d1-4958-aeee-a8e43e928fee&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "역사" : "https://teams.microsoft.com/l/team/19%3abf4abe68c8f2419cafc7602f407d4b4d%40thread.tacv2/conversations?groupId=4359437d-b962-40d1-add7-6a4d3e9c7f47&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "한문" : "https://teams.microsoft.com/l/team/19%3aefc35282538340f9a01e1f788f45947e%40thread.tacv2/conversations?groupId=cce95324-8fc9-49ef-961b-8ab518cb031d&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "과탐" : "https://teams.microsoft.com/l/team/19%3ajtibjuwT6sBgVv90FmMKDGe3gcRiVgDqivNZy7GiJK01%40thread.tacv2/conversations?groupId=2eaa7e38-09b1-4304-9016-bc895050317d&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "수학" : "https://teams.microsoft.com/l/team/19%3aL29jUmzldMBEKmJunFuFsVxAoHEukj9reZQzoXZsAcg1%40thread.tacv2/conversations?groupId=41ac2337-ecbd-43f4-920e-4856120a700a&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319",
            "미술" : "https://teams.microsoft.com/l/team/19%3ajtibjuwT6sBgVv90FmMKDGe3gcRiVgDqivNZy7GiJK01%40thread.tacv2/conversations?groupId=2eaa7e38-09b1-4304-9016-bc895050317d&tenantId=fa32bef0-f732-4dd0-be62-c9c2b1977319"
        };
    
    }
                    




    if (val == 1) {
        if (sigan == undefined) {
            if (url == undefined && sigan == undefined) {
                if (yn == 1) {
                    document.getElementById('bod').style.display = 'none';
                    return '데이터 없음';
                }
                else {
                    document.getElementById('bod').style.display = 'none';
                    alert(hak + '학년 ' + ban + '반 데이터가 없습니다.');
                    history.back();
                    yn = 1;
                    return '데이터 없음';
                }
            }
            return '데이터 없음';
        }
        if (sigan[day][time - 1] == undefined) {
            return '없음';
        }
        return sigan[day][time - 1];
    }
    if (val == 2) {
        return url[day];
    }
    if (val == 3) {
        if (url == undefined || url[""] == "") {
            return 'nodata';
        }
        return url.length;
    }
}

//쿠키관련 스크립트
function setCookie(name, value, exp) {
    //alert('set' + name);
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}
function getCookie(name) {
    //alert('get' + name);
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
}
function deleteCookie(name) {
    //alert('del' + name);
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
// setCookie(쿠키이름, 쿠키값, 만료일)
function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
}

//자가진단 스크립트
var jaga = getCookie('jaga');
var auto = false;
function fill_bk() {
    if (jaga != null) {
        jaga = jaga.split('|');
        document.getElementById('name').value = jaga[0];
        document.getElementById('birth').value = jaga[1];
        document.getElementById('pw').value = jaga[2];
        document.getElementById('q').value = jaga[4];
        var sp = jaga[3];
        if (sp == 0) {
            auto = false;
        }
        if (sp == 1) {
            auto = true;

        }
        document.getElementById('auto').checked = auto;
    }
}
fill_bk();
function clk() {
    var ds = document.getElementById('auto').checked;
    if (ds) {
        document.getElementById('auto').checked = false;
    }
    else {
        document.getElementById('auto').checked = true;
    }
    auto_check();
}
function auto_check() {
    auto = document.getElementById('auto').checked;
    var name = document.getElementById('name').value;
    var birth = document.getElementById('birth').value;
    var pw = document.getElementById('pw').value;
    var q = document.getElementById('q').value;
    var sp;
    if (auto == false) sp = 0;
    if (auto == true) sp = 1;
    var coki = name + '|' + birth + '|' + pw + '|' + sp + '|' + q;
    deleteCookie('jaga');
    setCookie('jaga', coki, 1000);
}
if (auto) {
    jagajindan();
}
function jagajindan() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var toda = String(year) + String(month) + String(date);
    var start = 5;
    if (hours < start) {
        alert(start + '시 이후에 자가진단을 해주세욥');
    }
    else if (getCookie('dojaga') != toda) {
        var name = document.getElementById('name').value;
        var birth = document.getElementById('birth').value;
        var pw = document.getElementById('pw').value;
        if (name == '' || birth == '' || pw == '') {
            alert('사용자 설정에서 자가진단 사용자 설정을 해 주세요.');
        }
        else {
            deleteCookie('dojaga');
            setCookie('dojaga', toda, 1000);
            auto_check();
            var link = "https://api.winsub.kr/jaga/?org=C100000623&name=" + name + "&birth=" + birth + "&area=busan&pw=" + pw + "&key=$2y$10$7nJuPnYaEFEAz.1IuMmWjevZwmP/DKXZD0X/gt21.XDla/Hjy/CJy";
            document.getElementById('rcb').src = link;

            alert(month + '월 ' + date + '일 ' + hours + '시 ' + minutes + '분 자동 자가진단을 완료했습니다.');
        }
    }
    else{
        alert('이미 오늘 자가진단을 하였습니다.');
    }
}

//문서 스크립트
document.title = 'YHMS 타임테이블';
console.log("메이드 바이 잼민");
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var hours = now.getHours();
var minutes = now.getMinutes();


var day = now.getDay();
var s1, s2, s3, s4, s5, s6, s7 = '없음';


var ds = getParam('d')
if (ds != '') {
    var bs = Number(ds);
    if (bs > 6) bs = bs % 7;
    day = Number(bs);
}

function redo(){
    setCookie("regoto", "789456", 10000);
    
    console.log(getCookie("regoto"));
    location.href = './';
}

var hakneun = getParam('g');
var hakban = getParam('b');
var tit = hakneun + '-' + hakban + ' YHMS 타임테이블';
console.log(tit + ' Loading');
document.getElementById('db').innerHTML = tit;
document.title = tit;


function sigan(day, time) {
    return data(1, hakneun, hakban, day, time);
}
var audioFile;
document.getElementById('vol').value = getCookie('vol');
function chang_vol() {
    var vds = document.getElementById('vol').value;

    var vd = document.getElementById('vd');
    if (vd != undefined) {
        vd.volume = vds / 140;
    }
    if (audioFile != undefined) {
        audioFile.volume = vds / 100;
    }
    document.getElementById('vv').innerHTML = vds;
    deleteCookie('vol');
    setCookie('vol', vds, 1000);
}
chang_vol();
function vshow() {
    play_audio('dd.mp3');
    var sh = document.getElementById("vdiv");
    if (sh.style.display == 'block') {
        sh.style.display = 'none';
        var vd = document.getElementById('vd');
        vd.pause();
    }
    else {
        stop_all_audio();
        sh.style.display = 'block';
        var vd = document.getElementById('vd');
        document.documentElement.scrollTop = document.body.scrollHeight;
        vd.play();
    }

}
var last_audio = 0;
function test_sound() {
    var ran = Math.floor(Math.random() * 10);
    if (Number(last_audio) == Number(ran)) {
        test_sound;
    }
    if (ran == 1) play_audio('beforestart.mp3');
    else if (ran == 2) play_audio('end.mp3');
    else if (ran == 3) play_audio('final.mp3');
    else if (ran == 4) play_audio('gostart.mp3');
    else if (ran == 5) play_audio('start.mp3');
    else if (ran == 6) play_audio('study.mp3');
    else {
        test_sound();
    }
}
function show(vid) {
    play_audio('dd.mp3');
    var sh = document.getElementById(vid);
    if (sh.style.display == 'block' || sh.style.display == 'inline-block') {
        sh.style.display = 'none';
        stop_all_audio();
        play_audio('dd.mp3');
    }
    else {
        sh.style.display = 'inline-block';
        
    }
}
function stop_all_audio() {
    if (audioFile != undefined) {
        audioFile.pause();
    }
    var sh = document.getElementById("vdiv");
    if (sh != undefined) {
        sh.style.display = 'none';
    }
    var vd = document.getElementById('vd');
    if (vd != undefined) {
        vd.pause();
    }

}
function play_audio(a) {
    stop_all_audio();
    audioFile = new Audio('files/audio/' + a);
    audioFile.volume = document.getElementById('vol').value / 100;
    audioFile.play();
}
function geturl(gamok) {
    if (data(3, hakneun, hakban, 0, 0) == 'nodata') {
        alert("현재 " + hakneun + "학년 " + hakban + "반 팀즈 연결은 데이터가 없어 지원되지 않습니다.");
        return 'nodata';
    }
    return data(2, hakneun, hakban, gamok, 0);
}
var win;
function jaga() {
    play_audio('dd.mp3');
    if (win != undefined) {
        win.close();
    }
    win = window.open('https://hcs.eduro.go.kr/', '');
}
function teamsdok() {
    play_audio('dd.mp3');
    if (win != undefined) {
        win.close();
    }
    win = window.open('https://teams.microsoft.com/l/meetup-join/19%3a6fa96feb716b4223947891811a914b81%40thread.tacv2/1618487464436?context=%7b%22Tid%22%3a%22fa32bef0-f732-4dd0-be62-c9c2b1977319%22%2c%22Oid%22%3a%224f8ca732-f713-4769-8585-e15a54676785%22%7d', '');
}
function chats() {
    play_audio('dd.mp3');
    if (win != undefined) {
        win.close();
    }
    win = window.open('https://uchat.ch/YHMSTimeTable', '');
}
function wcls(a) {
    if (win != undefined) {
        win.close();
    }
    if (geturl(a) == 'nodata') {
        return;
    }

    win = window.open(geturl(a), '');
    /*
    setTimeout(function () {

    }, 50);
    */
}
function gotosu() {
    play_audio('dd.mp3');
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var day = now.getDay();
    
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ttmm = hours * 100 + minutes;



    if (ttmm >= setTime['조례']['끝'] && ttmm < setTime['1교시']['끝']) {
        copy(1);
        if (sigan(day, 1) == '스포츠') {
            alert("현재 스포츠 과목은 지원하지 않습니다.\n조종례 방으로 이동합니다.");

            wcls('조종례');

        }
        else {

            wcls(sigan(day, 1));
        }

        //1교시
    }
    else if (ttmm >= setTime['1교시']['끝'] && ttmm < setTime['2교시']['끝']) {
        copy(2);
        if (sigan(day, 2) == '스포츠') {
            alert("현재 스포츠 과목은 지원하지 않습니다.\n조종례 방으로 이동합니다.");

            wcls('조종례');

        }
        else {

            wcls(sigan(day, 2));

        }

        //2교시
    }
    else if (ttmm >= setTime['2교시']['끝'] && ttmm < setTime['3교시']['끝']) {
        copy(3);
        if (sigan(day, 3) == '스포츠') {
            alert("현재 스포츠 과목은 지원하지 않습니다.\n조종례 방으로 이동합니다.");

            wcls('조종례');

        }
        else {

            wcls(sigan(day, 3));

        }
        //3교시
    }
    else if (ttmm >= setTime['3교시']['끝'] && ttmm < setTime['4교시']['끝']) {
        copy(4);
        if (sigan(day, 4) == '스포츠') {
            alert("현재 스포츠 과목은 지원하지 않습니다.\n조종례 방으로 이동합니다.");

            wcls('조종례');

        }
        else {

            wcls(sigan(day, 4));

        }
        //4교시
    }
    else if (ttmm >= setTime['4교시']['끝'] && ttmm < setTime['5교시']['끝']) {
        copy(5);
        if (sigan(day, 5) == '스포츠') {
            alert("현재 스포츠 과목은 지원하지 않습니다.\n조종례 방으로 이동합니다.");

            wcls('조종례');

        }
        else {
            if (day == 3) {
                alert("현재 과목은 " + sigan(day, 5) + " 또는 " + sigan(day, 6) + "입니다. \n" + sigan(day, 5) + " 과목으로 이동합니다.");

                wcls(sigan(day, 5));

            }
            else {

                wcls(sigan(day, 5));

            }
        }

        //5교시
    }
    else if (ttmm >= setTime['5교시']['끝'] && ttmm < setTime['6교시']['끝']) {
        copy(6);
        if (sigan(day, 6) == '스포츠') {
            alert("현재 스포츠 과목은 지원하지 않습니다.\n조종례 방으로 이동합니다.");

            wcls('조종례');


        }
        else {
            if (day == 3) {
                copy(5);
                alert("현재 과목은 " + sigan(day, 5) + " 또는 " + sigan(day, 6) + "입니다. \n" + sigan(day, 5) + " 과목으로 이동합니다.");

                wcls(sigan(day, 5));

            }
            else {

                wcls(sigan(day, 6));

            }
        }
        //6교시
    }
    else if (ttmm >= setTime['6교시']['끝'] && ttmm < setTime['7교시']['끝']) {
        if (day == 2 || day == 4) {
            copy(7);
            if (sigan(day, 7) == '스포츠') {
                alert("현재 스포츠 과목은 지원하지 않습니다.\n조종례 방으로 이동합니다.");

                wcls('조종례');

            }

            else {

                wcls(sigan(day, 7));

            }

            //7교시
        }
        else {
            copy('종례');

            wcls('조종례');

            //조종례
        }

    }
    else if (ttmm < 850) {
        copy('조례');

        wcls('조종례');

        //조례
    }
    else {
        copy('종례');

        wcls('조종례');

        //조종례
    }
}



function tric(a){
    if(a == 1 || a == 3 || a == 5 || a == 7 || a == 8 || a == 10 || a == 12){
        return 31;
    }
    else if(a == 4 || a == 6 || a == 9 || a == 11){
        return 30;
    }
    else {
        if(year % 4 == 0) return 29;
        else return 28;
    }
}
function find_d(a){
    if(a == 0) return '일';
    else if(a == 1) return '월';
    else if(a == 2) return '화';
    else if(a == 3) return '수';
    else if(a == 4) return '목';
    else if(a == 5) return '금';
    else if(a == 6) return '토';
    
}



var dy = day;
var mt = month + 1;
var dt = date;
var yt = year;
too(0);
function to_day(){
    dy = day;
    mt = month + 1;
    dt = date;
    yt = year;
    too(0);
}
function too(a){
    play_audio('dd.mp3');
    dy = dy + a;
    dt = dt + a;
    
    
    if(dt <= 0){
        mt = mt - 1;
        dt = tric(mt);
    }
    else if(dt > tric(mt)){
        mt = mt + 1;
        dt = 1;
    }
    if(mt == 13) {
        mt = 1;
        yt = yt + 1;
    }
    else if(mt == 0){
        mt = 12;
        yt = yt - 1;
        dt = 31;
    }
    dat(yt, mt, dt);
    console.log(yt, mt, dt);
    if(mt < 10){
        document.getElementById('tomo_mon').innerHTML = '0' + mt;
    }
    else{
        document.getElementById('tomo_mon').innerHTML = mt;
    }
    
    if(dt < 10){
        document.getElementById('tomo_day').innerHTML = '0' + dt;
    }
    else{
        document.getElementById('tomo_day').innerHTML = dt;
    }
    

    if(dy == 7) dy = 0;
    else if(dy == -1) dy = 6;
    document.getElementById('tomo_date').innerHTML = find_d(dy);
    if (sigan(dy, 1) == '휴교') {
        var tag = 'm';
        document.getElementById('table' + tag).style.display = 'none';
        document.getElementById(tag + tag).innerHTML = '수업 없는 날!';
    }
    else {
        var tag = 'm';
        document.getElementById('table' + tag).style.display = 'inline-block';
        document.getElementById(tag + tag).innerHTML = '';
        for(var i = 1; i <= 7; i++){
            document.getElementById('ss' + i).innerHTML = sigan(dy, Number(i));
        }
        if (sigan(dy, 7) == '없음') {
            document.getElementById('m7').style.display = 'none';
            document.getElementById('m77').style.display = 'none';
        }
        else {
            document.getElementById('m7').style.display = 'block';
            document.getElementById('m77').style.display = 'block';
            document.getElementById('ss7').innerHTML = sigan(dy, 7);
        }
    }
}
var sp = 1;
function changse(){
    play_audio('dd.mp3');
    if(sp == 1){
        document.getElementById('haksi').style.display = 'none';
        document.getElementById('junsi').style.display = 'inline-block';
        sp = 2;
    }
    else if(sp == 2){
        document.getElementById('haksi').style.display = 'inline-block';
        document.getElementById('junsi').style.display = 'none';
        sp = 1;
    }
}
function copy(val) {
    play_audio('dd.mp3');
    var ymd = yt + ". " + mt + ". " + dt + ". ";
    var stuname = document.getElementById('q').value;
    var stuname = stuname + document.getElementById('name').value;
    if (stuname == '') {
        var asdfs = confirm('사용자 설정에서 학번이름을 설정해 주세요.');
        if (asdfs) {
            div_sh(5);
            show('setting');
        }
    }
    if (val == '조례' || val == '종례') {
        val = ymd + stuname + ' ' + val + ' 출석했습니다.';
    }
    else {

        val = ymd + stuname + ' ' + val + '교시 ' + sigan(dy, val) + ' 출석했습니다.';
    }

    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = val;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}


function allre() {
    for(var i = 1; i < 8; i++){
        changcolor(i, 'cornflowerblue');
    }
    document.getElementById('d1').style.color = 'cornflowerblue';
    document.getElementById('dd1').style.color = 'cornflowerblue';
    document.getElementById('ddd1').style.color = 'cornflowerblue';
    document.getElementById('dddd1').style.color = 'cornflowerblue';
}
function changcolor(object, color) {
    document.getElementById('ss' + object).style.color = color;
    document.getElementById('sss' + object).style.color = color;
    document.getElementById('ssss' + object).style.color = color;
}


/*
var setTime = {
    "등교": {
        "시작": 0825,
        "끝": 0830
    },
    "조례": {
        "시작": 0840,
        "끝": 0850
    },
    "1교시": {
        "시작": 0900,
        "끝": 0945
    },
    "2교시": {
        "시작": 0955,
        "끝": 1040
    },
    "3교시": {
        "시작": 1050,
        "끝": 1135
    },
    "4교시": {
        "시작": 1145,
        "끝": 1230
    },    
    "5교시": {
        "시작": 1325,
        "끝": 1410
    }, 
    "6교시": {
        "시작": 1420,
        "끝": 1505
    }, 
    "7교시": {
        "시작": 1515,
        "끝": 1600
    }
};
*/
var setTime = {
    "등교": {
        "시작": 0825,
        "끝": 0830
    },
    "조례": {
        "시작": 0840,
        "끝": 0850
    },
    "1교시": {
        "시작": 0900,
        "끝": 0940
    },
    "2교시": {
        "시작": 0950,
        "끝": 1030
    },
    "3교시": {
        "시작": 1040,
        "끝": 1120
    },
    "4교시": {
        "시작": 1130,
        "끝": 1210
    },    
    "5교시": {
        "시작": 1300,
        "끝": 1340
    }, 
    "6교시": {
        "시작": 1350,
        "끝": 1430
    }, 
    "7교시": {
        "시작": 1440,
        "끝": 1520
    }
};


function ttsp(a, b) {
    var asddf = setTime[a][b];
    var sq = Number(asddf);
    var sco = Math.floor(sq / 100);
    var scq = sq % 100;

    if (scq < 10) {
        scq = String('0') + String(scq);
    }
    if (sco < 10) {
        sco = String('0') + String(sco);
    }
    if (sco >= 12) {
        sco = sco - 12;
        if (sco == 0) sco = 12;
        if (sco < 10) {
            sco = String('0') + String(sco);
        }
        console.log('asdf: ' + sco);

        if (sco == 0) {
            sco = String('00');
        }
        if (scq == 0) {
            scq = String('00');
        }
        return 'PM ' + String(sco) + ':' + String(scq);
    }
    if (scq < 10) {
        scq = String('0') + String(scq);
    }

    if (sco == 0) {
        sco = String('00');
    }
    if (scq == 0) {
        scq = String('00');
    }
    return 'AM ' + String(sco) + ':' + String(scq);
}
var ts = document.getElementsByName('start');
var tp = document.getElementsByName('end');
ts[0].innerHTML = ttsp('등교', '시작');
tp[0].innerHTML = ttsp('등교', '끝');
ts[1].innerHTML = ttsp('조례', '시작');
tp[1].innerHTML = ttsp('조례', '끝');
for (var i = 1; i <= 7; i++) {
    console.log(i);
    ts[Number(i + 1)].innerHTML = ttsp(i + '교시', '시작');
    tp[Number(i + 1)].innerHTML = ttsp(i + '교시', '끝');
    console.log(i + ': ' + Number(i - 1) + '교시 시작: ' + ts[Number(i)].innerHTML + ', 끝: ' + tp[Number(i)].innerHTML);
}

console.log(setTime['등교']['시작']);
function check() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var day = now.getDay();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ttmm = hours * 100 + minutes;
    if (ttmm >= setTime['등교']['시작'] && ttmm < setTime['등교']['끝']) {
        allre();
        document.getElementById('d1').style.color = 'red';
        document.getElementById('dd1').style.color = 'red';

    }
    if (ttmm >= setTime['조례']['시작'] && ttmm < setTime['조례']['끝']) {
        allre();
        document.getElementById('ddd1').style.color = 'red';
        document.getElementById('dddd1').style.color = 'red';
    }
    else if (ttmm >= setTime['조례']['끝'] && ttmm < setTime['1교시']['끝']) {
        allre();
        changcolor('1', 'red');
    }
    else if (ttmm >= setTime['1교시']['끝'] && ttmm < setTime['2교시']['끝']) {
        allre();
        changcolor('2', 'red');
    }
    else if (ttmm >= setTime['2교시']['끝'] && ttmm < setTime['3교시']['끝']) {
        allre();
        changcolor('3', 'red');
    }
    else if (ttmm >= setTime['3교시']['끝'] && ttmm < setTime['4교시']['끝']) {
        allre();
        changcolor('4', 'red');
    }
    else if (ttmm >= setTime['4교시']['끝'] && ttmm < setTime['5교시']['끝']) {
        allre();
        changcolor('5', 'red');
    }
    else if (ttmm >= setTime['5교시']['끝'] && ttmm < setTime['6교시']['끝']) {
        allre();
        changcolor('6', 'red');
    }
    else if (ttmm >= setTime['6교시']['끝'] && ttmm < setTime['7교시']['끝']) {
        allre();
        changcolor('7', 'red');
    }
    else {
        allre();
    }
}
check();
setInterval(check, 1000);
function chaim() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var day = now.getDay();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    if (seconds != 0) {
        return;
    }
    var ttmm = hours * 100 + minutes;
    if (ttmm == setTime['등교']['시작']) {
        play_audio('gostart.mp3');
    }
    if (ttmm == setTime['조례']['시작'] || ttmm == setTime['등교']['끝']) {
        play_audio('study.mp3');
    }
    if (ttmm == setTime['조례']['끝'] || ttmm == setTime['1교시']['끝'] || ttmm == setTime['2교시']['끝'] || ttmm == setTime['3교시']['끝'] || ttmm == setTime['4교시']['끝'] || ttmm == setTime['5교시']['끝']) {
        play_audio('end.mp3');
    }
    if (day == 2 || day == 4) {
        if (ttmm == setTime['6교시']['끝']) {
            play_audio('end.mp3');
        }
        if (ttmm == setTime['7교시']['시작']) {
            play_audio('start.mp3');
        }
        if (ttmm == setTime['7교시']['끝']) {
            play_audio('final.mp3');
        }
    }
    if (day == 1 || day == 3 || day == 5) {
        if (ttmm == setTime['6교시']['끝']) {
            play_audio('final.mp3');
        }
    }
    if (ttmm == setTime['1교시']['시작'] || ttmm == setTime['2교시']['시작'] || ttmm == setTime['3교시']['시작'] || ttmm == setTime['4교시']['시작'] || ttmm == setTime['5교시']['시작'] || ttmm == setTime['6교시']['시작']) {
        play_audio('start.mp3');
    }
    if (ttmm == setTime['1교시']['시작'] - 5) {
        play_audio('beforestart.mp3');
    }
}
var cked = 0, vvs;
document.getElementById('cked').innerHTML = "시종 끄기";
setTimeout("document.getElementById('cked').innerHTML = '시종 켜기';", 50);
function changck() {
    if (cked) {
        audioFile.pause();
        document.getElementById('cked').innerHTML = "시종 켜기";
        play_audio('dd.mp3');
        cked = 0;
        clearInterval(vvs);
    }
    else {
        document.getElementById('cked').innerHTML = "시종 끄기";
        play_audio('dd.mp3');
        cked = 1;
        chaim();
        vvs = setInterval(chaim, 1000);
    }
}
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 7; j++) {
        var s = Number(i) * 10 + Number(j);
        if (sigan(i, j) == '없음') {
            document.getElementById(s).innerHTML = '';
        }
        else {
            document.getElementById(s).innerHTML = sigan(i, j);
        }
    }
}
function oschat(){
    document.getElementById('chat').style.display = 'inline-block';
}