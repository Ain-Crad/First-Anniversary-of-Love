var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;

function showImage(){
myImage.setAttribute("src", imageArray[imageIndex]);
myTxt.innerHTML = txtArray[imageIndex];
imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function play(){
	flag = 1 - flag;
	document.getElementById("typeDiv").style.opacity = flag;
	document.getElementById("imgTxt").style.opacity = 1 - flag;
	if(t == 0){
		showImage();
		setInterval(showImage, 2500);
	}
	t++;
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.01;
		btn.style.opacity = btnVal;
	}
	else{
		if(ok == 3){
			ok += 1;
		}
	}
}

setInterval(function (){
	if(ok == 3){
		setInterval(buttonFadeIn, 200);
	}
}, 50)