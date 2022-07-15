function calculate() {
    var myage = document.getElementById("age").value;
  
    var firstYears = 2;
  
    firstYears *= 10.5;
  
    var laterYears = myage - 2;
  
    laterYears *= 4;
  
    var myAgeInDogYears = firstYears + laterYears;
  
    var ans = document.getElementById("exact_age");
  
    ans.textContent = " Your Age in Dog Year is " + myAgeInDogYears;
  }
  