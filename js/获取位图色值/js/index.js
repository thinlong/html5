	var colorBar = document.querySelector("#colorImg");
	colorBar.addEventListener('click',function(e){
        var index = e.offsetX;
        var color = colorArr[index];
        document.querySelector("#colorDiv").style.backgroundColor = color;
		console.log("颜色值:" + color);
    },false);

	var canvas = document.getElementById('colorCanvas'); 
	var context = canvas.getContext('2d'); 
	var showimg = document.getElementById('colorImg');
	var imageData;
	var colorArr = [];
	
	showimg.onload = function(){ // image onload start 
        var img_width = this.width;
        var img_height = this.height; 
        // 设置画布尺寸 
        canvas.width = img_width; 
        canvas.height = img_height; 
        // 将图片按像素写入画布 
        context.drawImage(this, 0, 0, img_width, img_height); 

        // 读取图片像素信息 
        imageData = context.getImageData(0, 0, img_width, 1); 
  		var colorData = imageData.data;
		var len = colorData.length;
		for(var i = 0; i < len / 4; i++){
			var r = colorData[4 * i];
			var g = colorData[4 * i + 1];
			var b = colorData[4 * i + 2];
			var a = colorData[4 * i + 3];
			var c = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
			colorArr.push(c);
		}
	}
