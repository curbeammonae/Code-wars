//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.



function getGrade (s1, s2, s3) {
    var avg = (s1 + s2 + s3)/3;
    switch(true) {
      case (avg >= 90):
        return 'A';
      case ( avg >= 80):
        return 'B';
      case ( avg >= 70):
        return 'C';
      case ( avg >= 60):
        return 'D'; 
      default:
        return 'F';   
    }
   }