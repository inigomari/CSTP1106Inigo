click1 = function() {
  var imgSrc = jQuery(this).attr('src');
  jQuery('#main').attr('src', imgSrc);
}

view = function() {
  jQuery('.imageStyle').on('click', click1)
}

jQuery(document).ready(setup)
