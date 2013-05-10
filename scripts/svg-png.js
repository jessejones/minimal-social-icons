/****SVG fallback script. Requires jQuery and Modernizr.js****/
/****Replace SVG w/ PNG on browsers *cough* IE *cough* that dont support SVG****/
<script>
	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}
</script> 
