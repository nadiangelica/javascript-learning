//Challenge 1 of Fundemantals 2      a >= 2*b     >= means 'at least' //
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
let Dolphinsaverage1 = calcAverage(44, 23, 71)
let KoalasAverage1 = calcAverage(65, 54, 49)

function CheckWinner(Dolphinsaverage, KoalasAverage) {

   if (Dolphinsaverage >= 2 * KoalasAverage) {
      console.log(`Dolphins win ${Dolphinsaverage} vs ${KoalasAverage}`)
      return
   }
   else if (KoalasAverage >= 2 * Dolphinsaverage) {
      console.log(`Koalas win ${KoalasAverage} vs ${Dolphinsaverage}`)
      return
   }
   else { console.log(' No one wins') }
}

console.log(CheckWinner(Dolphinsaverage1, KoalasAverage1))

Dolphinsaverage1 = calcAverage(85, 54, 41)
KoalasAverage1 = calcAverage(23, 34, 27)
console.log(CheckWinner(Dolphinsaverage1, KoalasAverage1))