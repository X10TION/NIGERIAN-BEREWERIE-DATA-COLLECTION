
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
    if(inputVal == "Yola-spac 01" || inputVal == "Yola-spac 01" || inputVal == "Yola-spac 01" ){
        
        window.location.href = 'Record.html';
    }
    else
    {
        alert("Sorry Incorrect Passcode....contact the Admin");
    }
}
