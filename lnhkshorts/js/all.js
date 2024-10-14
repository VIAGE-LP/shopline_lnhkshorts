$(document).ready(function () {
    // 立即訂購btn動態
    $('a[href="#buy"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        }, 900);
    });

    // 日本的modal
    $('.modal-open-button').click(function () {
        $('#modal-wrap').css('position', 'absolute');
    });

    // 日本的modal自動抓取月份最後一天
    var nowDate = new Date();
    var year = nowDate.getFullYear()
    var month = nowDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    var lastDay = new Date(`${year}`, `${month}`, 0);
    var day = lastDay.getDate();
    day = day < 10 ? '0' + day : day;
    $('#lastday').text(`${month}/${day}`);

    //活動辦法彈跳視窗
    // $(".anniversary_2").hide();
    // $('.anniversary_1').click(function (e) {
    //     e.preventDefault();
    //     $(".anniversary_2").toggle();;
    // });
    // $('.anniversary_2').click(function (e) {
    //     e.preventDefault();
    //     $(".anniversary_2").hide();
    // });
});
