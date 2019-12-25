window.onload = function(){
	var top = document.getElementById("top1");
	var banner = document.getElementsByClassName("banner")[0];
	var images = document.getElementById("bottom").children;
	var box = document.getElementsByClassName("box")[0];
	var slide = document.getElementsByClassName("slide")[0];
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var min = document.getElementsByClassName('min');
	var small = document.getElementsByClassName('small');
	var list = document.getElementsByClassName('list')[0];
	var Bimg = document.getElementById("Bimg");
	var con = document.getElementsByClassName('content')[0];
	var text = document.getElementsByClassName('text')[0];
	var daohang = document.getElementById("daohang");
    var img = document.getElementById("img");

	var index = 1;
	var isMoving = false;

	daohang.onclick=function(){
		document.getElementById("top").style.display='block';
	}
	img.onclick=function(){
		document.getElementById("top").style.display='none';
	}
	
	top.onmouseover = function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
	}
	top.onmouseout = function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
	}

	//change1
	function change1(){
		text.children[0].innerHTML = "[爆款]WEY";
		text.children[1].innerHTML = "参考价：23.98-34.33万";
		text.children[2].innerHTML = "综合评价：90分";
		text.children[5].innerHTML = "联系电话：440-555-2213";
	}
	//change2
	function change2(){
		text.children[0].innerHTML = "[爆款]GRT";
		text.children[1].innerHTML = "参考价：17.98-27.78万";
		text.children[2].innerHTML = "综合评价：83分";
		text.children[5].innerHTML = "联系电话：441-225-2213";
	}
	//change3
	function change3(){
		text.children[0].innerHTML = "[爆款]MUO";
		text.children[1].innerHTML = "参考价：27.98-37.33万";
		text.children[2].innerHTML = "综合评价：85分";
		text.children[5].innerHTML = "联系电话：442-335-2213";
	}
	//点击事件
	left.onclick = function prev(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index --;
		imgChange();
		animate(box,{left:-500*index},function(){
			if(index == 0){
				index = 3;
				box.style.left = "-1500px";
			}
			isMoving = false;
		});
	};
	right.onclick = function next(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index ++;
		imgChange();
		animate(box,{left:-500*index},function(){
			if(index == 4){
				index = 1;
				box.style.left = "-500px";
			}
			isMoving = false;
		});
	};
	for(var i = 0; i < images.length; i++){
		images[i].idx = i;
		images[i].onclick = function(){
			index = this.idx+1;
			imgChange();
			animate(box,{left:index*(-500)});
		}
	}
	function imgChange(){
		for (var i = 0; i < images.length; i++) {
			images[i].children[0].id = "";
		}
		if(index == 4){
			images[0].children[0].id = "active";
			list.children[0].src = "images/m0.jpg";
			change1();
		}else if(index == 0){
			images[2].children[0].id = "active";
			list.children[0].src = "images/m2.jpg";
			change3();
		}else{
			images[index - 1].children[0].id = "active"; 
			list.children[0].src = "images/m" + (index-1) +".jpg";
			index-1 == 0?change1():index-1==1?change2():change3();
		}
	}
	for(var i = 0; i<min.length; i++){
		min[i].onmouseover= function(){
			this.lastElementChild.style.display = "block";
			list.style.display = "block";
	    }
    }
	for(var i = 0; i<min.length; i++){
		min[i].onmouseout= function(){
			this.lastElementChild.style.display = "none";
			list.style.display = "none";
	    }
    }

    for (var i = 0; i < min.length; i++) {
	     min[i].onmousemove = function(ev){
	        var ol = 0;
	        var ot = 0;
	        var a = 85;
	  	    ol = ev.clientX-con.offsetLeft-80/2;
	        ot = ev.offsetY+parseInt(this.lastElementChild.style.top);
	        ol = ol < a ? a : ol > 250+a? 250+a : ol;
	        ot = ot < 40 ? 0 : ot > 110? 70: ot-40;
	        this.lastElementChild.style.left = ol + "px";
	        this.lastElementChild.style.top = ot + "px";
	        Bimg.style.left = -(ol-a)/330*1320 + "px";
	        Bimg.style.top = -ot/150*600 + "px";
	    }	
    }
}