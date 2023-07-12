function num(value) {
	btnPressed = document.getElementById(value);
	output = document.getElementById("output1");
	zeroCheck(btnPressed);
}
function operation(value) {
	btnPressed = document.getElementById(value);
	output = document.getElementById("output1");
	output2 = document.getElementById("output2");
	output2.value = output2.value + output.value + btnPressed.value;
	eqCheck();
	output.value = "";
}
function mul() {
	btnPressed = document.getElementById("X");
	output = document.getElementById("output1");
	output2 = document.getElementById("output2");
	output2.value = output2.value + output.value + btnPressed.value;
	eqCheck();
	output.value = "";
}
function div() {
	btnPressed = document.getElementById("div");
	output = document.getElementById("output1");
	output2 = document.getElementById("output2");
	output2.value = output2.value + output.value + btnPressed.value;
	eqCheck();
	output.value = "";
}
function dec() {
	btnPressed = document.getElementById("dec");
	output = document.getElementById("output1");
	output.value = output.value + btnPressed.value;
}
function fEval() {
	btnPressed = document.getElementById("eq");
	output = document.getElementById("output1");
	output2 = document.getElementById("output2");
	output2.value = output2.value + output.value;
	output.value = eval(output2.value);
	output2.value = output2.value + btnPressed.value;
}
function eqCheck() {
	output = document.getElementById("output1");
	output2 = document.getElementById("output2");
	if (output2.value.includes("=")) {
		output2.value = output.value + btnPressed.value;
	}
}
function reciprocal() {
	btnPressed = document.getElementById("1/x");
	output = document.getElementById("output1");
	output2 = document.getElementById("output2");
	output2.value = "1/" + output2.value + output.value;
	output.value = 1 / output.value;
}
function square() {
	btnPressed = document.getElementById("x^2");
	output = document.getElementById("output1");
	output2 = document.getElementById("output2");
	output.value = output.value * output.value;
	output2.value = output2.value + output.value;
	eqCheck();
}
function root() {
	btnPressed = document.getElementById("x^2");
	output = document.getElementById("output1");
	output2 = document.getElementById("output2");
	output.value = Math.sqrt(output.value);
	output2.value = output2.value + output.value;
	eqCheck();
}
function clear1() {
	output = document.getElementById("output1");
	output2 = document.getElementById("output2");
	output.value = "";
	output2.value = "";
}
function sign() {
	btnPressed = document.getElementById("sign");
	output = document.getElementById("output1");
	output.value = output.value * -1;
}
function backspace() {
	btnPressed = document.getElementById("backspace");
	output = document.getElementById("output1");
	str1 = output.value;
	str2 = str1.slice(0, str1.length - 1);
	output.value = str2;
}
function percent() {
	btnPressed = document.getElementById("percent");
	output = document.getElementById("output1");
	output2 = document.getElementById("output2");
	if (output2.value.includes("+" || "-")) {
		output.value = (output.value / 100) * output2.value;
	} else {
		output.value = 0;
	}
}
function zeroCheck(btnPressed) {
	output = document.getElementById("output1");
	if (output.value == "0") {
		s = output.value;
		s2 = s.replace(s, btnPressed.value);
		output.value = s2;
	} else {
		output.value = output.value + btnPressed.value;
	}
}
// function f1() {
// 	btnPressed = document.getElementById("1");
// 	output = document.getElementById("output1");
// 	zeroCheck(btnPressed);
// 	// output.value = output.value + btnPressed.value;
// }
// function f2() {
// 	btnPressed = document.getElementById("2");
// 	output = document.getElementById("output1");
// 	zeroCheck(btnPressed);
// 	// output.value = output.value + btnPressed.value;
// }
// function f3() {
// 	btnPressed = document.getElementById("3");
// 	output = document.getElementById("output1");
// 	zeroCheck(btnPressed);
// 	// output.value = output.value + btnPressed.value;
// }
// function f4() {
// 	btnPressed = document.getElementById("4");
// 	output = document.getElementById("output1");
// 	zeroCheck(btnPressed);
// 	// output.value = output.value + btnPressed.value;
// }
// function f5() {
// 	btnPressed = document.getElementById("5");
// 	output = document.getElementById("output1");
// 	zeroCheck(btnPressed);
// 	// output.value = output.value + btnPressed.value;
// }
// function f6() {
// 	btnPressed = document.getElementById("6");
// 	output = document.getElementById("output1");
// 	zeroCheck(btnPressed);
// 	// output.value = output.value + btnPressed.value;
// }
// function f7() {
// 	btnPressed = document.getElementById("7");
// 	output = document.getElementById("output1");
// 	zeroCheck(btnPressed);
// 	// output.value = output.value + btnPressed.value;
// }
// function f8() {
// 	btnPressed = document.getElementById("8");
// 	output = document.getElementById("output1");
// 	zeroCheck(btnPressed);
// 	// output.value = output.value + btnPressed.value;
// }
// function f9() {
// 	btnPressed = document.getElementById("9");
// 	output = document.getElementById("output1");
// 	zeroCheck(btnPressed);
// 	// output.value = output.value + btnPressed.value;
// }
// function f10() {
// 	btnPressed = document.getElementById("0");
// 	output = document.getElementById("output1");
//     zeroCheck(btnPressed)
// 	// output.value = output.value + btnPressed.value;
// }
// function sum() {
// 	btnPressed = document.getElementById("+");
// 	output = document.getElementById("output1");
// 	output2 = document.getElementById("output2");
// 	output2.value = output2.value + output.value + btnPressed.value;
// 	eqCheck();
// 	output.value = "";
// }
// function diff() {
// 	btnPressed = document.getElementById("-");
// 	output = document.getElementById("output1");
// 	output2 = document.getElementById("output2");
// 	output2.value = output2.value + output.value + btnPressed.value;
// 	eqCheck();
// 	output.value = "";
// }
// function f19(){
//     btnPressed=document.getElementById("M+");
//     output=document.getElementById("output1")
//     output.value=output.value+btnPressed.value
// }
// function f20(){
//     btnPressed=document.getElementById("MS");
//     output=document.getElementById("output1")
//     output.value=output.value+btnPressed.value
// }
