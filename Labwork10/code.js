function add() {
    x = parseInt(jQuery('#op1').val());
    y = parseInt(jQuery('#op2').val());

    z = x + y
    jQuery('#result').html(z);

    tmp = jQuery('#History').html()
    jQuery('#History').html(tmp + x + ' + ' + y + ' = ' + z + '<br>');
}

function sub() {
    x = parseInt(jQuery('#op1').val());
    y = parseInt(jQuery('#op2').val());

    z = x - y
    jQuery('#result').html(z);

    tmp = jQuery('#History').html()
    jQuery('#History').html(tmp + x + ' - ' + y + ' = ' + z + '<br>');
}

function mul() {
    x = parseInt(jQuery('#op1').val());
    y = parseInt(jQuery('#op2').val());

    z = x * y
    jQuery('#result').html(z);

    tmp = jQuery('#History').html()
    jQuery('#History').html(tmp + x + ' * ' + y + ' = ' + z + '<br>');
}

function div() {
    x = parseInt(jQuery('#op1').val());
    y = parseInt(jQuery('#op2').val());

    z = x / y
    jQuery('#result').html(z);

    tmp = jQuery('#History').html()
    jQuery('#History').html(tmp + x + ' / ' + y + ' = ' + z + '<br>');
}

// beSad = function() {
//   jQuery('img#face').attr('src', 'https://media.istockphoto.com/photos/young-worried-woman-looking-out-of-the-window-picture-id1277138645?b=1&k=20&m=1277138645&s=170667a&w=0&h=CpQ99As-ADDfbtPRb3DPaFrjGl3o_Uu-U-BoTCvE960=')
// }
//
// beHappy = function() {
//   jQuery('img#face').attr('src', 'https://media.istockphoto.com/photos/happiness-and-wellbeing-picture-id1283599879?b=1&k=20&m=1283599879&s=170667a&w=0&h=wH_r-liwEyB6jc7WBV3A2sK4iJPnM0co1ZGp5ARuJhY=')
//}

  show_ = function(){
    $('#History').attr('style', '');
  }
  hide_ = function(){
    jQuery('#History').attr('style', 'display:none');
  }
function setup() {
    jQuery('#trigger_the_add').click(add)
    jQuery('#trigger_the_sub').click(sub)
    jQuery('#trigger_the_mul').click(mul)
    jQuery('#trigger_the_div').click(div)

    // jQuery('#happy').click(beHappy)
    // jQuery('#sad').click(beSad)

    jQuery('#show').click(show_)
    jQuery('#hide').click(hide_)
    console.log(hi)

}

jQuery(document).ready(setup)
