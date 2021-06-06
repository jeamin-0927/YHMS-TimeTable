//console.log('메인페이지 js 로딩 시작');
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
var mmmm;
if (month < 10) {
    mmmm = '0' + month;
}
else {
    mmmm = month;
}
var dddd;
if (date < 10) {
    dddd = '0' + date;
}
else {
    dddd = date;
}
document.getElementsByName('date')[0].value = year + '-' + mmmm + '-' + dddd;
//console.log(year + '-' + month + '-' + date);

var sigan = [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']];

if (getCookie('timeset') != null) {
    var cookie = getCookie('timeset').split('|');
    var start = [];
    var end = [];
    var j = 0;
    for (var i = 1; i <= 14; i = i + 2) {
        start[j] = cookie[i];
        end[j] = cookie[i + 1];
        j = j + 1;
    }
    var startn, endn, startn1, startn2, endn1, endn2;
    for (var i = 0; i < 7; i++) {
        startn1 = Math.floor(start[i] / 100);
        startn2 = start[i] % 100;
        if (startn1 < 10) {
            startn1 = '0' + String(startn1);
            //console.log(1);
        }
        if (startn2 < 10) {
            startn2 = '0' + String(startn2);
            //console.log(1);
        }

        endn1 = Math.floor(end[i] / 100);
        endn2 = end[i] % 100;
        if (endn1 < 10) {
            endn1 = '0' + String(endn1);
            //console.log(1);
        }
        if (endn2 < 10) {
            endn2 = '0' + String(endn2);
            //console.log(1);
        }
        
        startn = startn1 + ':' + startn2;
        endn = endn1 + ':' + endn2;
        document.getElementsByName('start')[i].value = startn;
        document.getElementsByName('end')[i].value = endn;
        //console.log(startn, endn, start[i], end[i]);
    }
}
function getTime() {
    var p = '';
    for (var i = 0; i < 7; i++) {
        sigan[i + 1][0] = document.getElementsByName('start')[i].value;
        sigan[i + 1][1] = document.getElementsByName('end')[i].value;
        sigan[i + 1][0] = Number(sigan[i + 1][0].replace(/:/g, ''));
        sigan[i + 1][1] = Number(sigan[i + 1][1].replace(/:/g, ''));
        p = p + '|' + sigan[i + 1][0] + '|' + sigan[i + 1][1]
    }
    sigan[0][1] = sigan[1][0] - 10;
    if (sigan[0][1] % 100 >= 60) {
        sigan[0][1] = sigan[0][1] - 40;
    }
    deleteCookie('timeset');
    setCookie('timeset', p, 1000);
}
getTime();
//console.log(sigan);

function siangchange() {
    getTime();
}

function whenIsNow() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ttmm = (hours * 100) + minutes;
    for (var i = 1; i <= 7; i++) {
        if (ttmm >= sigan[i - 1][1] && ttmm < sigan[i][1]) {
            return i;
        }
    }
}
//console.log('asdfasdfasdfasdfasdf', whenIsNow());

function colorRest() {
    for (var i = 0; i < 7; i++) {
        document.getElementsByName('timetableDIV')[i].style.backgroundColor = '#FFF';
        document.getElementsByName('timetableDIV')[i].style.color = 'rgb(71, 111, 222)';
    }
}

function colorchang() {
    colorRest();
    var i = whenIsNow() - 1;
    try {
        document.getElementsByName('timetableDIV')[i].style.color = '#FFF';
        document.getElementsByName('timetableDIV')[i].style.backgroundColor = 'rgb(71, 111, 222)';
    } catch {

    }
}

setInterval(colorchang, 1000);

var audioFile;
function stop_all_audio() {
    if (audioFile != undefined) {
        audioFile.pause();
    }

}
function play_audio(a) {
    stop_all_audio();
    audioFile = new Audio(a + '.mp3');
    audioFile.play();
}
function chaim() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var sec = now.getSeconds();
    if (sec != 0) {
        return;
    }
    var ttmm = (hours * 100) + minutes;
    for (var i = 1; i <= 7; i++) {
        if (ttmm == sigan[i][0]) {
            play_audio('start');
            return;
        }
        if (ttmm == sigan[i][1]) {
            play_audio('end');
            return;
        }
    }
}

var chm, chmn = 0;
function startChaim() {
    var elc = document.getElementById('onoff');
    if (chmn == 0) {
        //console.log('on');
        chaim();
        chm = setInterval(chaim, 1000);
        elc.value = '시종 끄기';
        elc.style.color = '#fff';
        elc.style.backgroundColor = 'rgb(71, 111, 222)';
        chmn = 1;
    }
    else if (chmn == 1) {
        //console.log('off');
        clearInterval(chm);
        elc.value = '시종 켜기';
        elc.style.backgroundColor = '#fff';
        elc.style.color = 'rgb(71, 111, 222)';
        chmn = 0;
        stop_all_audio();
    }
}

function whenchlcik() {
    document.getElementById('date').click();
}

function resethagi() {
    var i = 0, interval = 45, rest = 10;

    i = 0;
    document.getElementsByName('start')[i].value = '09:00';
    document.getElementsByName('end')[i].value = '09:45';

    i = 1;
    document.getElementsByName('start')[i].value = '09:55';
    document.getElementsByName('end')[i].value = '10:40';

    i = 2;
    document.getElementsByName('start')[i].value = '10:50';
    document.getElementsByName('end')[i].value = '11:35';

    i = 3;
    document.getElementsByName('start')[i].value = '11:45';
    document.getElementsByName('end')[i].value = '12:30';

    i = 4;
    document.getElementsByName('start')[i].value = '13:25';
    document.getElementsByName('end')[i].value = '14:10';

    i = 5;
    document.getElementsByName('start')[i].value = '14:20';
    document.getElementsByName('end')[i].value = '15:05';

    i = 6;
    document.getElementsByName('start')[i].value = '15:15';
    document.getElementsByName('end')[i].value = '16:00';


    getTime();
}

var howMany = 0;
var eduCode;
var schoolName;
var schoolCode;
var schoolGrade;
var grade;
var classNum;
if (getCookie('ttv2') != null) {
    var cookie = getCookie('ttv2').split('|');
    eduCode = cookie[0];
    schoolName = cookie[1];
    grade = cookie[2];
    classNum = cookie[3];
    schoolCode = cookie[4];
    document.getElementById('wh').value = eduCode;
    document.getElementById('scn').value = schoolName;
    document.getElementById('hak').value = grade;
    document.getElementById('ban').value = classNum;
}

function change(eduCode, schoolCode, schoolGrade, grade, classNum, date) {
    for (var i = 0; i < 7; i++) {
        var time = getTimeTable(eduCode, schoolCode, schoolGrade, grade, classNum, i + 1, date);
        if (time == 'error' || time == '토요휴업일') time = '없음';
        //console.log(time);
        document.getElementsByName('timetable')[i].innerHTML = time;
    }
    for (var i = 0; i < 3; i++) {
        var meal = getMealServiceDietInfo(eduCode, schoolCode, date, i + 1);
        if (meal == 'error') meal = '급식 정보가 없습니다.';
        //console.log(meal);
        document.getElementsByName('mealInfo')[i].innerHTML = meal;
    }
    var schedule = getSchoolSchedule(eduCode, schoolCode, date);
    if (schedule == 'error') schedule = '오늘은 특별한 학사일정이 없습니다.';
    //console.log(schedule);
    document.getElementsByName('schedule')[0].innerHTML = schedule;
}
function changing() {
    //console.log('asdf');
    
    grade = document.getElementById('hak').value;
    classNum = document.getElementById('ban').value;
    
    if (getCookie('ttv2') != null) {
        var cookie = getCookie('ttv2').split('|');
        schoolName = cookie[1];
    }
    else {
        schoolName = 'nul';
    }
    eduCode = document.getElementById('wh').value;
    if (schoolName != document.getElementById('scn').value) {
        schoolCode = getSchoolCode(eduCode, document.getElementById('scn').value);
    }
    else {
        document.title = schoolName + ' 타임테이블';
    }

    schoolName = document.getElementById('scn').value;
    schoolGrade = getSchoolKind(eduCode, schoolName);
    if (eduCode != 'nul' && schoolName != '' && grade != '' && classNum != '') {
        var cookie = eduCode + '|' + schoolName + '|' + grade + '|' + classNum + '|' + schoolCode;
        deleteCookie('ttv2');
        setCookie('ttv2', cookie, 1000);
    }

    if (howMany != 0) {
        if (schoolCode == 'error' || schoolGrade == 'error') {
            alert("학교명에 오류가 있습니다.");
            return 0;
        }
        if (grade == "") {
            alert("학년을 입력해 주세요.");
            return 0;
        }
        if (classNum == "") {
            alert("학반을 입력해 주세요.");
            return 0;
        }
        var e = document.getElementById('wh');
        var selectSelected = e.options[e.selectedIndex].text;
        document.title = schoolName + ' 타임테이블';
        var dyy = document.getElementById('date').value.split('-');
        alert(' ' + dyy[0] + '년 ' + dyy[1] + '월 ' + dyy[2] + '일\n' + selectSelected + ' ' + schoolName + ' ' + grade + '학년' + ' ' + classNum + '반으로 이동합니다.');
        
    }
    if (schoolName != "") {
        var e = document.getElementById('wh');
        var selectSelected = e.options[e.selectedIndex].text;
        var dt = document.getElementsByName('date')[0].value.split('-');
        document.getElementsByName('timeSet')[0].innerHTML = selectSelected + ' ' + schoolName + ' ' + grade + '학년' + ' ' + classNum + '반 ';
        document.getElementsByName('timeSet')[1].innerHTML = dt[1] + '월 ' + dt[2] + '일 ';
        document.getElementsByName('timeSet')[2].innerHTML = dt[1] + '월 ' + dt[2] + '일 ';
    }
    
    
    //console.log('change');
    var date = document.getElementsByName('date')[0].value.replace(/-/g, '');

    //console.log(cookie);
    change(eduCode, schoolCode, schoolGrade, grade, classNum, date);
    //console.log(date);

    howMany = howMany + 1;
}
function ifEnter() {
    if (window.event.keyCode == 13) {
        changing();
    }
}
changing();
//console.log('메인페이지 js 로딩 완료');