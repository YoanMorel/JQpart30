var rightAnswer = 75;
var index = 0;
var answer;

$('#answer').click(function() {
  index++;
  answer = parseInt($('#answerField').val());
  if (answer < rightAnswer) {
    $('span').text('C\'est plus !').fadeIn(1000).fadeOut(1000);
    $('input').val('');
  } else if (answer > rightAnswer) {
    $('span').text('C\'est moins !').fadeIn(1000).fadeOut(1000);
    $('input').val('');
  } else if (!answer) {
    $('span').text('Il faut renseigner un nombre').fadeIn(1000).fadeOut(1000);
  } else {
    $('button').hide();
    $('span').text('Bravo ! Vous avez réussi au bout de ' + index + ' fois.').fadeIn(1000);
  }
});
