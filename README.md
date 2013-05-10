minimal-social-icons
====================

Author  :  Jesse Jones  
Version :  v0.4  
Modified:  10 May 2013  


##### Description    
A set of SVG minimal social and tech company icons. SVG is an ideal format for creating resolution independent icons. Instead of needing multiple icon sizes, one can be used and the size can be changed in either a vector-based program or programmatically (CSS, JS, etc). The colors are kept minimal so it scales well at both small and large sizes without distortion and banding that comes with scaling vector based gradients. No gradients were harmed in the making of these icons

##### Fallback Support SVG

A script is included for browsers that do not support SVG *cough* IE 6-8 *cough*. It replaces the SVG graphics with PNG Img  versions of the files. Requires jQuery and Modernizr to use. 
    <script>
	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}
    </script> 


##### Licensing      
The icons are free to use and modify as you wish under the MIT License.
All logos and branding icons are under the copyright of their respected owners and associated companies

##### The MIT License 

Copyright ©2013 Jesse Jones

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.




