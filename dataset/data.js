document.write('<input type="text" id="hak" style="width: 25px; padding-right: 5px;" placeholder="학년" /><a>&nbsp;학년&nbsp;&nbsp;</a><input type="text" id="ban" style="width: 25px; padding-right: 5px;" placeholder="반" /><a>&nbsp;반&nbsp;&nbsp;</a><br /><br>');


document.write('<a>시간표 세팅<a/><br />');
function print_time(howMany, day) {
    document.write('<a>' + day + '요일 :&nbsp;</a>');
    for (var i = 1; i <= howMany; i++) {
        document.write('<input type="text" name="time" style="width: 80px; padding-right: 5px;" placeholder="' + i + '교시" /><a>&nbsp;</a>');
    }
    document.write('<br>');
}
print_time(6, '월');
print_time(7, '화');
print_time(6, '수');
print_time(7, '목');
print_time(6, '금');
document.write('<textarea style="margin-top: 10px; width: 570px; height: 200px; display: none;" id="timet"></textarea><br><br>');

function timec() {
    var sd = document.getElementsByName('time');
    var time = 'var sigan = [' + '\n' +
        '                ["휴교"],' + '\n' +
        '                ["' + sd[0].value + '", "' + sd[1].value + '", "' + sd[2].value + '", "' + sd[3].value + '", "' + sd[4].value + '", "' + sd[5].value + '"], //월' + '\n' +
        '                ["' + sd[6].value + '", "' + sd[7].value + '", "' + sd[8].value + '", "' + sd[9].value + '", "' + sd[10].value + '", "' + sd[11].value + '", "' + sd[12].value + '"],//화' + '\n' +
        '                ["' + sd[13].value + '", "' + sd[14].value + '", "' + sd[15].value + '", "' + sd[16].value + '", "' + sd[17].value + '", "' + sd[18].value + '"], //수' + '\n' +
        '                ["' + sd[19].value + '", "' + sd[20].value + '", "' + sd[21].value + '", "' + sd[22].value + '", "' + sd[23].value + '", "' + sd[24].value + '", "' + sd[25].value + '"],//목' + '\n' +
        '                ["' + sd[26].value + '", "' + sd[27].value + '", "' + sd[28].value + '", "' + sd[29].value + '", "' + sd[30].value + '", "' + sd[31].value + '"], //금' + '\n' +
        '                ["휴교"]\n' + '];\n\n'
        ;
    document.getElementById('timet').value = time;
    try {
        change_allt();
    } catch { }
}
timec();



document.write('<a>팀즈 연결 세팅<a/><br /><div id="teams"></div>')
document.getElementById('teams').innerHTML = document.getElementById('teams').innerHTML + '<input type="text" style="width: 80px;" name="teamsT" placeholder="과목"/><a>&nbsp;:&nbsp;</a ><input type="text" style="width: 180px;" name="temasL" placeholder="URL"/><a>&nbsp;</a><input type="button" onclick="print_teams();" value="+" /><br />';
print_teams(); print_teams(); print_teams(); print_teams();
function print_teams() {
    var name = document.getElementsByName('teamsT');
    var link = document.getElementsByName('temasL');
    var ns = [], ls = [];
    for (var i = 0; i < name.length; i++) {
        ns[i] = name[i].value;
        ls[i] = link[i].value;
        //console.log(ns[i].value, ls[i].value);
    }
    document.getElementById('teams').innerHTML = document.getElementById('teams').innerHTML + '<input type="text" style="width: 80px;" name="teamsT" placeholder="과목"/><a>&nbsp;:&nbsp;</a ><input type="text" style="width: 180px;" name="temasL" placeholder="URL"/><a>&nbsp;</a><input type="button" onclick="print_teams();" value="+" /><br />';
    for (var i = 0; i < ns.length; i++) {
        document.getElementsByName('teamsT')[i].value = ns[i];
        document.getElementsByName('temasL')[i].value = ls[i];
        //console.log(name[i].value, link[i].value);
    }
}
document.write('<textarea style="margin-top: 10px; width: 570px; height: 200px; display: none;" id="teamst"></textarea><br>');
function teamsc() {
    var name = document.getElementsByName('teamsT');
    var link = document.getElementsByName('temasL');
    var temas = 'var url = {\n';
    for (var i = 0; i < name.length - 1; i++) {
        temas = temas + '                "' + name[i].value + '" : "' + link[i].value + '",\n';
    }
    var i = name.length - 1;
    temas = temas + '                "' + name[i].value + '" : "' + link[i].value + '"\n';
    document.getElementById('teamst').value = temas + '};\n\n';
    change_allt();
}
teamsc();

document.write('<textarea style="margin-top: 10px; width: 570px; height: 200px;" id="allt"></textarea><br><input type="button" onclick="change();" value="바꾸기 / 복사하기" style="margin-top: 10px; " /><a>&nbsp;</a><input type="button" onclick="location.reload();" value="초기화" style="margin-top: 10px; " /><br /><br>');
function change_allt() {
    try {
        var sp = '//' + document.getElementById('hak').value + '학년 ' + document.getElementById('ban').value + '반\n\n';
        document.getElementById('allt').value = sp + document.getElementById('timet').value + document.getElementById('teamst').value;
    }
    catch { }
}
change_allt();

function change() {
    timec();
    teamsc();
    change_allt();
    copy_to_clipboard();
}
function copy_to_clipboard() {
    var copyText = document.getElementById("allt");
    copyText.select();
    document.execCommand("Copy");
}