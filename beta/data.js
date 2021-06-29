//console.log('데이터 js 로딩 시작');
//데이터 나이스 연계 api
function getJSON(link) {
    var dt;
    $.ajax({
        url: link,
        async: false,
        type: "POST",
        data: '',
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            dt = data;
        }

    });
    return dt;
}
function getJagaSchoolCode(name) {
    var linkFull = 'https://api.winsub.kr/school/?key=$2y$10$7nJuPnYaEFEAz.1IuMmWjevZwmP/DKXZD0X/gt21.XDla/Hjy/CJy&name=' + name;
    var gson = getJSON(linkFull);
    console.log(gson);
}


var linkKeyType = '?KEY=3105e38da12c40d6ae84b15a5cfb85b4&Type=json&';
function getSchoolCode(eduCode, schoolName) {
    var linkMain = 'https://open.neis.go.kr/hub/schoolInfo';
    var linkParm = 'ATPT_OFCDC_SC_CODE=' + eduCode + '&SCHUL_NM=' + schoolName;
    var linkFull = linkMain + linkKeyType + linkParm;
    //console.log(linkFull);
    var gson = getJSON(linkFull);
    try {
        return gson.schoolInfo[1].row[0]['SD_SCHUL_CODE'];
    } catch {
        return 'error';
    }

}
function getSchoolKind(eduCode, schoolName) {
    var linkMain = 'https://open.neis.go.kr/hub/schoolInfo';
    var linkParm = 'ATPT_OFCDC_SC_CODE=' + eduCode + '&SCHUL_NM=' + schoolName;
    var linkFull = linkMain + linkKeyType + linkParm;
    //console.log(linkFull);
    var gson = getJSON(linkFull);
    try {
        if (gson.schoolInfo[1].row[0]['SCHUL_KND_SC_NM'] == '초등학교') return 1;
        else if (gson.schoolInfo[1].row[0]['SCHUL_KND_SC_NM'] == '중학교') return 2;
        else if (gson.schoolInfo[1].row[0]['SCHUL_KND_SC_NM'] == '고등학교') return 3;
    } catch {
        return 'error';
    }

}
function getMealServiceDietInfo(eduCode, schoolCode, date, when) {
    //when: 
    //      1 아침
    //      2 점심
    //      3 저녁

    var linkMain = 'https://open.neis.go.kr/hub/mealServiceDietInfo';
    var linkParm = 'ATPT_OFCDC_SC_CODE=' + eduCode + '&SD_SCHUL_CODE=' + schoolCode + '&MLSV_YMD=' + date + '&MMEAL_SC_CODE=' + when;
    var linkFull = linkMain + linkKeyType + linkParm;
    //console.log(linkFull);
    var gson = getJSON(linkFull);
    try {
        var vsgs = gson.mealServiceDietInfo[1].row[0]['DDISH_NM'];
        vsgs = vsgs.replace(/1/gi, '');
        vsgs = vsgs.replace(/2/gi, '');
        vsgs = vsgs.replace(/3/gi, '');
        vsgs = vsgs.replace(/4/gi, '');
        vsgs = vsgs.replace(/5/gi, '');
        vsgs = vsgs.replace(/6/gi, '');
        vsgs = vsgs.replace(/7/gi, '');
        vsgs = vsgs.replace(/8/gi, '');
        vsgs = vsgs.replace(/9/gi, '');
        vsgs = vsgs.replace(/0/gi, '');
        vsgs = vsgs.replace(/\//g, ' ');
        vsgs = vsgs.replace(/\./g, '');
        return vsgs;
    } catch {
        return 'error';
    }

}
function getSchoolSchedule(eduCode, schoolCode, date) {
    var linkMain = 'https://open.neis.go.kr/hub/SchoolSchedule';
    var linkParm = 'ATPT_OFCDC_SC_CODE=' + eduCode + '&SD_SCHUL_CODE=' + schoolCode + '&AA_YMD=' + date;
    var linkFull = linkMain + linkKeyType + linkParm;
    //console.log(linkFull);
    var gson = getJSON(linkFull);
    try {
        return gson.SchoolSchedule[1].row[0]['EVENT_NM'];
    } catch {
        return 'error';
    }
}
function getTimeTable(eduCode, schoolCode, schoolGrade, grade, classNum, perio, date) {
    //schoolGrade:
    //      1 초
    //      2 중
    //      3 고
    var linkGrad = ['', 'https://open.neis.go.kr/hub/elsTimetable', 'https://open.neis.go.kr/hub/misTimetable', 'https://open.neis.go.kr/hub/hisTimetable'];
    var linkMain = linkGrad[schoolGrade];
    var linkParm = 'ATPT_OFCDC_SC_CODE=' + eduCode + '&SD_SCHUL_CODE=' + schoolCode + '&ALL_TI_YMD=' + date + '&GRADE=' + grade + '&CLASS_NM=' + classNum;
    var linkFull = linkMain + linkKeyType + linkParm;
    //console.log(linkFull);
    var gson = getJSON(linkFull);
    try {
        if (schoolGrade == 1) {
            return gson.elsTimetable[1].row[perio - 1]['ITRT_CNTNT'].replace(/-/gi, '');
        }
        else if (schoolGrade == 2) {
            return gson.misTimetable[1].row[perio - 1]['ITRT_CNTNT'].replace(/-/gi, '');
        }
        else if (schoolGrade == 3) {
            return gson.hisTimetable[1].row[perio - 1]['ITRT_CNTNT'].replace(/-/gi, '');
        }
        return 'error';
    } catch {
        return 'error';
    }
}
//쿠키관련 스크립트
function setCookie(name, value, exp) {
    //console.log('set cookie' , name);
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}
function getCookie(name) {
    //console.log('get cookie' , name);
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
}
function deleteCookie(name) {
    //console.log('del cookie' , name);
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
// setCookie(쿠키이름, 쿠키값, 만료일)


//console.log(getSchoolKind('J10', '디지털미디어'));
//console.log(getMealServiceDietInfo(eduCode, schoolCode, date, '2'));
//console.log(getSchoolSchedule(eduCode, schoolCode, date));
//console.log(getTimeTable(eduCode, schoolCode, schoolGrade, grade, classNum, 1, date));

//console.log('데이터 js 로딩 완료');
