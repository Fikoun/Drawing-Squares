window.onload = function ()
{	
		var butt = document.getElementById('b');
		var x = document.getElementById('x');
		var y = document.getElementById('y');
		var w = document.getElementById('w');
		var h = document.getElementById('h');
		var r = document.getElementById('r');

		butt.onclick = function () {
				var canvas = document.getElementById('canvas');
				this.disabled = true;
				var ktx = canvas.getContext('2d');
				ktx.clearRect(0, 0, 800, 500);
				var xp = parseInt(x.value);
				var yp = parseInt(y.value);
				var wp = parseInt(w.value);
				var hp = parseInt(h.value);
				var rp = parseInt(r.value);

				kresli(0, 0, 0, 0, xp, yp, wp, hp, rp);	
		}		
}

function kresli(x, y, w, h, xp, yp, wp, hp, rp) {
		
		var canvas = document.getElementById('canvas');
		var ktx = canvas.getContext('2d');
		ktx.save();
		ktx.strokeRect(20+x*xp, 20+y*yp, 150-w*wp, 150-h*hp);
		ktx.restore();

		x += 1;
		y += 1;
		w += 1;
		h += 1;
		var butt = document.getElementById('b');
		if (w >= 500) {
			ktx.clearRect(0, 0, 800, 500);
			butt.disabled = false;
		}else{
		var loopTimer = setTimeout('kresli('+x+','+y+','+w+','+h+','+xp+','+yp+','+wp+','+hp+','+rp+')', rp);
		}
}