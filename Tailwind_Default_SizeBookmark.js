javascript: (function() {
    function Resize() {
    	let _2xlSize = 1536,
    		_xlSize = 1280,
    		_lgSize = 1024
    		_mdSize = 768,
    		_smSize = 640;
    	
        let t = document.documentElement.clientWidth,
            e = "XL",
            o = "0",
            p = "0";
         
		if (t > _2xlSize) {
			e = "2XL";
			o = "N/A";
			p = "Pre XL: " + (t - _xlSize - (_2xlSize - _xlSize));
		}
		else if (t > _xlSize) {
			e = "XL";
			o = "Next 2XL: " + (_2xlSize - t);
			p = "Pre LG: " + (t - _lgSize - (_xlSize - _lgSize));
		}
		else if (t > _lgSize) {
			e = "LG";
			o = "Next XL: " + (_xlSize - t);
			p = "Pre MD: " + (t - _mdSize - (_lgSize - _mdSize));
		}
		else if (t > _mdSize) {
			e = "MD";
			o = "Next LG: " + (_lgSize - t);
			p = "Pre SM: " + (t - _smSize - (_mdSize - _smSize));
		}
		else {
			e = "SM";
			o = "Next MD: " + (_mdSize - t);
			p = "N/A"
		}
        
        document.querySelector("#spnTailwindSize").innerText = e;
        document.querySelector("#spnTailwindCurrent").innerText = `Width: ${t}px`;
        document.querySelector("#spnTailwindToPre").innerText = p;
        document.querySelector("#spnTailwindToNext").innerText = o;
    }
    
    document.querySelector("body").insertAdjacentHTML('beforeend', `<div style='position:fixed;z-index:5000;top: 10px;right: 10px;background-color: #000000c2;padding: 5px 10px;'>
                        <span id='spnTailwindSize' style='color: white;display:block;'>...</span>
                        <span id='spnTailwindCurrent' style='color: white;display:block'>...</span>
                        <span id='spnTailwindToPre' style='color: white;display:block'>...</span>
                        <span id='spnTailwindToNext' style='color: white;display:block'>...</span>
                    `);
                    
     Resize();
     window.onresize = Resize;
})();
