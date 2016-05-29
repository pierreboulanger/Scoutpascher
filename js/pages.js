// Smooth-scroll
function scrollToElement (selector) {
  $('html, body').animate({
    scrollTop: $(selector).offset().top
  }, 1000);
};

$(document).on('click', 'a.link-details', function (e) {
  e.preventDefault();
  scrollToElement($(this).attr('href'));
});