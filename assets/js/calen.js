$('.calendar').calendar({
    mode: 'rangepicker'
});

$('.calendar').on('jqyc.changeYearToPrevious', function (event) {
    var currentYear = $(this).find('.jqyc-change-year').data('year');
    console.log(currentYear);
});

$('.calendar').on('jqyc.changeYearToNext', function (event) {
    var currentYear = $(this).find('.jqyc-next-year').data('year');
    console.log(currentYear);
});

$('.calendar').on('jqyc.dayChoose', function (event) {
    var choosenYear = $(this).data('year');
    var choosenMonth = $(this).data('month');
    var choosenDay = $(this).data('day-of-month');
    var date = new Date(choosenYear, choosenMonth, choosenDay);
    console.log(date);
});
$('.jqyc-day-12.jqyc-day-of-2-month,.jqyc-day-13.jqyc-day-of-2-month,.jqyc-day-14.jqyc-day-of-2-month,.jqyc-day-15.jqyc-day-of-2-month').addClass("active");
$('.jqyc-day-2.jqyc-day-of-4-month,.jqyc-day-5.jqyc-day-of-4-month,.jqyc-day-6.jqyc-day-of-4-month,.jqyc-day-7.jqyc-day-of-4-month').addClass("active");