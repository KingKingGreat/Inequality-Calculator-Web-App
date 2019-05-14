// Connect calcButton
var calcButton = document.getElementById("calcButton");

// Declare calcEquation function
function calcEquation() {
	// Connect parameters
	var val1 = parseInt(document.getElementById("val1").value);
	var val2 = parseInt(document.getElementById("val2").value);
	var inequalityVal = parseInt(document.getElementById("inequalityVal").value);
	var operator = document.getElementById("operator").value;
    var inequality = document.getElementById("inequality").value;
	var index = parseInt(document.getElementById("index").value);
	var indexName = document.getElementById("indexName").value;

	// Declare result
	var result;

	// Checker for null value
	if (!val1) {
		// Display error & return null
		document.getElementById("eText").textContent = "Please insert value on Value 1";
        return null;   
    } else if (!val2) {
    	// Display error & return null
    	document.getElementById("eText").textContent = "Please insert value on Value 2";
        return null;   
    } else if (!operator) {
    	// Display error & return null
    	document.getElementById("eText").textContent = "Please pick an value on Operator";
        return null;   
    } else if (!inequalityVal) {
    	// Display error & return null
    	document.getElementById("eText").textContent = "Please insert value on Inequality Value";
        return null;   
    } else if (!index) {
    	// Display error & return null
    	document.getElementById("eText").textContent = "Please insert value on Index";
        return null;   
    } else if (!indexName) {
    	// Display error & return null
    	document.getElementById("eText").textContent = "Please insert value on Index Name";
        return null;
    } else {
        // Clear resultText
        document.getElementById("rText").textContent = "";

        // Clear errorText
        document.getElementById("eText").textContent = "";

    	// Checker for operator
        if (operator === "plus") {
        	// Checker for index
            if (index === 1) {
            	// Checker for value
            	if (val2 > 0) {
            		// Set result value
            		result = (inequalityVal - Math.abs(val2)) / val1;
                    // Checker inequality
                    if (inequality === "big") {
                        if (val1 > 0) {
                            // Display Question
                            document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " + " + Math.abs(val2) + " > " + inequalityVal + "<br>";
                            // Display Result
                            document.getElementById("rText").innerHTML += "Result : " + indexName + " > " + result;
                        } else {
                            // Display Question
                            document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " + " + Math.abs(val2) + " < " + inequalityVal + "<br>";
                            // Display Result
                            document.getElementById("rText").innerHTML += "Result : " + indexName + " < " + result;
                        }
                    } else {
                        if (val1 > 0) {
                            // Display Question
                            document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " + " + Math.abs(val2) + " < " + inequalityVal + "<br>";    
                            // Display Result
                            document.getElementById("rText").innerHTML += "Result : " + indexName + " < " + result;
                        } else {
                            // Display Question
                            document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " + " + Math.abs(val2) + " > " + inequalityVal + "<br>";    
                            // Display Result
                            document.getElementById("rText").innerHTML += "Result : " + indexName + " > " + result;
                        }
                    }
            	} else {
            		// Set result value
            		result = (inequalityVal + Math.abs(val2)) / val1;
                    // Checker inequality
                    if (inequality === "big") {
                        if (val1 > 0) {
                            // Display Question
                            document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " + " + Math.abs(val2) + " > " + inequalityVal + "<br>";
                            // Display Result
                            document.getElementById("rText").innerHTML += "Result : " + indexName + " > " + result;
                        } else {
                            // Display Question
                            document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " + " + Math.abs(val2) + " < " + inequalityVal + "<br>";
                            // Display Result
                            document.getElementById("rText").innerHTML += "Result : " + indexName + " < " + result;
                        }
                    } else {
                        if (val1 > 0) {
                            // Display Question
                            document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " + " + Math.abs(val2) + " < " + inequalityVal + "<br>";
                            // Display Result
                            document.getElementById("rText").innerHTML += "Result : " + indexName + " < " + result;
                        } else {
                            // Display Question
                            document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " + " + Math.abs(val2) + " > " + inequalityVal + "<br>";
                            // Display Result
                            document.getElementById("rText").innerHTML += "Result : " + indexName + " > " + result;
                        }
                    }
            	}
            } else if (index === 2) {
            	// Checker for value
            	if (val1 > 0) {
            		// Set result value
            		result = (inequalityVal - val1) / Math.abs(val2);
                    // Checker inequality
                    if (inequality === "big") {
                        // Display Question
                        document.getElementById("rText").innerHTML = "Question : " + val1 + " + " + Math.abs(val2) + indexName + " > " + inequalityVal + "<br>";
                        // Display Result
                        document.getElementById("rText").innerHTML += "Result : " + indexName + " > " + result;
                    } else {
                        // Display Question
                        document.getElementById("rText").innerHTML = "Question : " + val1 + " + " + Math.abs(val2) + indexName + " < " + inequalityVal + "<br>";
                        // Display Result
                        document.getElementById("rText").innerHTML += "Result : " + indexName + " < " + result;
                    }   
            	} else {
            		// Set result value
            		result = (inequalityVal + Math.abs(val1)) / Math.abs(val2);
                    // Checker inequality
                    if (inequality === "big") {
                        // Display Question
                        document.getElementById("rText").innerHTML = "Question : " + val1 + " + " + Math.abs(val2) + indexName + " > " + inequalityVal + "<br>";
                        // Display Result
                        document.getElementById("rText").innerHTML += "Result : " + indexName + " > " + result;
                    } else {
                        // Display Question
                        document.getElementById("rText").innerHTML = "Question : " + val1 + " + " + Math.abs(val2) + indexName + " < " + inequalityVal + "<br>";
                        // Display Result
                        document.getElementById("rText").innerHTML += "Result : " + indexName + " < " + result;
                    }
            	}
            } else {
            	// Display error & return null
            	document.getElementById("eText").textContent = "Please choose an aviable index (1 & 2)";
            	return null;
            }
        } else if (operator === "min") {
        	// Checker for index
            if (index === 1) {
            	// Checker for value
            	if (val2 > 0) {
            		// Set result value
            		result = (inequalityVal - Math.abs(val2)) / val1;
                    // Checker inequality
                    if (inequality === "big") {
                        // Display Question
                        document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " - " + Math.abs(val2) + " < " + inequalityVal + "<br>";
                        // Display Result
                        document.getElementById("rText").innerHTML += "Result : " + indexName + " < " + result;
                    } else {
                        // Display Question
                        document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " - " + Math.abs(val2) + " > " + inequalityVal + "<br>";
                        // Display Result
                        document.getElementById("rText").innerHTML += "Result : " + indexName + " > " + result;
                    }
            	} else {
            		// Set result value
            		result = (inequalityVal + Math.abs(val2)) / val1;
                    // Checker inequality
                    if (inequality === "big") {
                        // Display Question
                        document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " - " + Math.abs(val2) + " < " + inequalityVal + "<br>";
                        // Display Result
                        document.getElementById("rText").innerHTML += "Result : " + indexName + " < " + result;
                    } else {
                        // Display Question
                        document.getElementById("rText").innerHTML = "Question : " + val1 + indexName + " - " + Math.abs(val2) + " > " + inequalityVal + "<br>";
                        // Display Result
                        document.getElementById("rText").innerHTML += "Result : " + indexName + " > " + result;
                    }
            	}
            } else if (index === 2) {
            	// Checker for value
            	if (val1 > 0) {
            		// Set result value
            		result = (inequalityVal - val1) / Math.abs(val2);
                    // Checker inequality
                    if (inequality === "big") {
                        // Display Question
                        document.getElementById("rText").innerHTML = "Question : " + val1 + " - " + Math.abs(val2) + indexName + " < " + inequalityVal + "<br>";
                        // Display Result
                        document.getElementById("rText").innerHTML += "Result : " + indexName + " < " + result;
                    } else {
                        // Display Question
                        document.getElementById("rText").innerHTML = "Question : " + val1 + " - " + Math.abs(val2) + indexName + " > " + inequalityVal + "<br>";
                        // Display Result
                        document.getElementById("rText").innerHTML += "Result : " + indexName + " > " + result;
                    }
            	} else {
            		// Set result value
            		result = (inequalityVal + Math.abs(val1)) / Math.abs(val2);
                    // Checker inequality
                    if (inequality === "big") {
                        // Display Question
                        document.getElementById("rText").innerHTML = "Question : " + val1 + " - " + Math.abs(val2) + indexName + " < " + inequalityVal + "<br>";
                        // Display Result
                        document.getElementById("rText").innerHTML += "Result : " + indexName + " < " + result;
                    } else {
                        // Display Question
                        document.getElementById("rText").innerHTML = "Question : " + val1 + " - " + Math.abs(val2) + indexName + " > " + inequalityVal + "<br>";
                        // Display Result
                        document.getElementById("rText").innerHTML += "Result : " + indexName + " > " + result;
                    }
            	}
            } else {
            	// Display error & return null
            	document.getElementById("eText").textContent = "Please choose an aviable index (1 & 2)";
            	return null;
            }
        } else {
        	// Display error & return null
        	document.getElementById("eText").textContent = "Please choose an aviable operator (Plus & Min)";
            return null;
        }
    }
}
// Add Event Listener on calcButton
calcButton.addEventListener("click", calcEquation);
