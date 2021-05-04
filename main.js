function insrt(num) {
    $('.kalkulayar').val($('.kalkulayar').val() + num);
}
function eql() {
    $('.kalkulayar').val(eval($('.kalkulayar').val()))
}
function C() {
    $('.kalkulayar').val('');
}
function del() {
    valueLayar = $('.kalkulayar').val();
    $('.kalkulayar').val(valueLayar.substring(0, valueLayar.length - 1));
}