import eomotion1 from './../assets/emotion1.png';
import eomotion2 from './../assets/emotion2.png';
import eomotion3 from './../assets/emotion3.png';
import eomotion4 from './../assets/emotion4.png';
import eomotion5 from './../assets/emotion5.png';

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return eomotion1;
    case 2:
      return eomotion2;
    case 3:
      return eomotion3;
    case 4:
      return eomotion4;
    case 5:
      return eomotion5;
    default:
      return null;
  }
}