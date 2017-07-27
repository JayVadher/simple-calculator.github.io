
/* ----------------------------------------------------------------------------
CHECK NUMBER OF CHARACTERS IF MORE THAN 16 DISPLAY ERROR MESSAGE AND CLEAR ANSWER WINDOW
-------------------------------------------------------------------------------- */

	function numCheck() {
		
		if (document.getElementById("answerWindow").innerHTML.length > 16) {
				document.getElementById("notify").innerHTML = "Oh No! 16 characters is the limit. <br> Either you entered \
				more than 16 characters OR your answer was more than 16 characters. Please try again"
				document.getElementById("answerWindow").innerHTML = "";
			}

	}


/* ----------------------------------------------------------------

DISPLAY THE NUMBER ON THE ANSWER WINDOW ONCE A NUMBER BUTTON IS CLICKED

-----------------------------------------------------------------   */
	 function num0() {

	 	document.getElementById("answerWindow").innerHTML += "0";
	 	numCheck();

	 }

	 function num1() {

	 	document.getElementById("answerWindow").innerHTML += "1";
	 	numCheck();
	 }

	function num2() {

	 	document.getElementById("answerWindow").innerHTML += "2";
	 	numCheck();

	 }

	function num3() {

	 	document.getElementById("answerWindow").innerHTML += "3";
	 		numCheck();
	 }

	function num4() {

	 	document.getElementById("answerWindow").innerHTML += "4";
		numCheck();
	 }


	function num5() {

	 	document.getElementById("answerWindow").innerHTML += "5";
		numCheck();
	 }

	function num6() {

	 	document.getElementById("answerWindow").innerHTML += "6";
		numCheck();
	 }

	function num7() {

	 	document.getElementById("answerWindow").innerHTML += "7";
		numCheck();
	 }

	function num8() {

	 	document.getElementById("answerWindow").innerHTML += "8";
		numCheck();
	 }

	function num9() {

	 	document.getElementById("answerWindow").innerHTML += "9";
		numCheck();
	 }


	function multiply() {
		document.getElementById("answerWindow").innerHTML += "*";
		numCheck();
	}

	function divide() {
		document.getElementById("answerWindow").innerHTML += "/";
		numCheck();
	}

	function minus() {
		document.getElementById("answerWindow").innerHTML += "-";
		numCheck();
	}

	function addition() {
		document.getElementById("answerWindow").innerHTML += "+";
		numCheck();
	}


/* ---------------------------------------------------

CALCULATE THE TOTAL USING EVAL AND DISPLAY FINAL ANSWER.
CLEAR ANSWER WINDOW UPON CLCIKING THE CLEAR BUTTON

------------------------------------------------------- */


	function equalsTo() {
		var finalAnswer = eval(document.getElementById("answerWindow").innerHTML).toFixed(0);
		document.getElementById("answerWindow").innerHTML = finalAnswer;

		numCheck();
	}


	function clearAll() {
		document.getElementById("answerWindow").innerHTML = "";
		
	}
