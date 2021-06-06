var agent = navigator.userAgent.toLowerCase();
if (window.navigator.userAgent.match(/MSIE|Internet Explorer|Trident/i)) {
    // IE!!
    alert("YHMS 타임 테이블은 인터넷 익스플로러 브라우저에서는 지원되지 않습니다. 최신 브라우저를 사용해 주세요.");
    window.location = "microsoft-edge:" + window.location.href;
}