
let i = 0;
let text1 = "Hey! Miss Qiu.";
let text2 = "Today is the Big Day."
let speed = 100;

function typeWriter(text, para){
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

document.addEventListener('DOMContentLoaded', function() {
   // your code here
   	setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
}, false);
