/*
Since you love games of chance, you've decided to participate in a dice-rolling competition.
The competition involves rolling three 6-sided dice, and the results of each die are represented by the integers
a, b, and c respectively.  Scores are calculated according to the following rules:
    - If all 3 dice had the same value (a = b = c) then you earn 1000 * a.
    - if exactly 2 of them are the same, you earn 500 * x (where x is the value of the 2 equal dice).
    - if all of them are different, you earn 100 * min(a, b, c).
Given the values of a, b, and c, your task is to calculate and return your total score.
*/

function diceTotalScore(a, b, c){

}

/*
tests:
diceTotalScore(5, 5, 5)
diceTotalScore(3, 6, 3)
diceTotalScore(2, 6, 1)
*/