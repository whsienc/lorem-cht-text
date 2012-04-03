
jQuery(document).ready(function($) {

  function getRandomInt (min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function checkPrime(n) {
    var isPrim = true;
    for(var i=2; i<n; i++){
      if(n % i == 0) {
	isPrim = false;
	break;
      }
    }
    return isPrim;
  }

  function randomMark() {
    marks = ['（', '）', '，', '。', '！', '～', '...', '--', 'Yo'];
    return marks[getRandomInt(0, 8)];
  }

  function randomlorem(s, from, end) {
    result = '';

    for(i=1; i<=s; i++) {
      mm = getRandomInt(from, end);
      for(j=0; j<from; j++) {
	result = result + randomChar();
      }
      for(j=from; j<mm; j++) {
	result = result + randomChar();
      }
    }
    return result;
  }

  function randomChar() {
    if ( checkPrime(getRandomInt(1, 23427)) )
      return randomMark();
    else
      return unescape('%u' + getRandomInt(19968, 40869).toString(16) + '');
  }

  var lorem = $('[class*="lorem"]');

  $.each(lorem, function(){
    var match = $(this).attr('class').match(/lorem(?:\((\d+)(?:,(\d+)(?:[,-](\d+))?\))?)?/);
    if (!match[1]) {
      $(this).text(randomlorem(1, 10, 20));
    } else if (match[1] && !match[2]) {
      $(this).text(randomlorem(match[1], 10, 20));
    } else if (match[1] && match[2] && !match[3]) {
      $(this).text(randomlorem(match[1], match[2], match[2] + 3));
    } else if (match[1] && match[2] && match[3]) {
      $(this).text(randomlorem(match[1], match[2], match[3]));
    }
  });

});//19968 ~ 40869
