var documentHeight = $(document).height();
var windowHeight = $(window).height();

$('body').append('.text');

var $percentageIndicator = $('.text');

$(window).on('scroll', function() {
  var scrollTop = $(this).scrollTop();
  var percentage = scrollTop / (documentHeight - windowHeight) * 100;

  console.log(percentage + '%');

  $percentageIndicator.css({ width: percentage + '%' });
});

