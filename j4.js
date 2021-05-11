function inputFacit(){
    var initialWord=document.getElementById("inputTest").value;
    

    if(initialWord[0]=="P" && initialWord[1]=="y")
    {
        document.getElementById("outputTest").innerHTML = initialWord;

    }
    else
    {
        document.getElementById("outputTest").innerHTML = "Py"+initialWord.toLowerCase();
    }
}

    
  
    
    



