<!DOCTYPE html>
	<title>Eye Sight</title>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css" />
<link rel="stylesheet" href="../css/colorfuzz.css" />

</head>
<body class="is-active">

<div id="masthead">
	<div>
		<h1><a href="/"><img src="http://placekitten.com/g/80/60" /></a></h1>
	</div>

	<div daf>
		<form name="eyesightForm" id="eyesightForm">

		<div class="form--URL">
			<input type="text" id="checkLink" name="checkLink" placeholder="http://" />
			<input type="submit" value="➜">
		</div>

	</div>
	
	<div class="form--options">

<div><input type="radio" name="eyesight" value="Deuteranomaly" checked="checked" id="optionDeuteranomaly"> <label for="optionDeuteranomaly" title="Red-green color-blindness. Affects 5.35%">Deuteranomaly</label></label></div>

<div><input type="radio" name="eyesight" value="Protanomaly" id="optionProtanomaly"> <label for="optionProtanomaly" title="Missing the L-cone, different intensities of red light. Affects 1.11%">Protanomaly</a></label></div>

<div><input type="radio" name="eyesight" value="Deuteranopia" id="optionDeuteranopia"><label for="optionDeuteranopia" title="Red-green color blindness due to missing M-cone. Affects 1.1%"> Deuteranopia </a></label></div>


<div><input type="radio" name="eyesight" value="Protanopia" id="optionProtanopia"> <label for="optionProtanopia" title="A type of red-green color-blindness. Affects 1.03%">Protanopia</a></label></div> 

<div><input type="radio" name="eyesight" value="Tritanopia" id="optionTritanopia"> <label for="optionTritanopia" title="Blue-yellow colorblindness due to missing S-cone. Affects <1%">Tritanopia</a></label></div>


<div><input type="radio" name="eyesight" value="Achromatopsia" id="optionAchromatopsia"> <label for="optionAchromatopsia" title="Rod monochromacy. Affects 0.003%">Achromatopsia</a></label></div>

</div>

</form>

</div><!-- /#masthead -->


<div id="slider"><h4 id="label">Deuteranomaly</h4><iframe id="pageOutput" src="http://www.colormatters.com/color-and-design/basic-color-theory" class="Deuteranopia" width="800" height="300" frameborder="0" allowfullscreen></iframe></div>

<!-- iframe slider? -->



<!-- 01 // Deuteranomaly -->
<svg><defs><filter id="Deuteranomaly"><feColorMatrix 
type="matrix" values="0.8 0.2 0 0 0, 0.258 0.742 0 0 0, 0 0.142 0.858 0 0, 0 0 0 1 0"/></filter></defs></svg>

<!-- 02 // Protanomaly -->
<svg><defs><filter id="Protanomaly"><feColorMatrix 
type="matrix" values="0.817 0.183 0 0 0, 0.333 0.667 0 0 0, 0 0.125 0.875 0.114 0, 0 0 0 1 0"/></filter></defs></svg>

<!-- 03 // Deuteranopia -->
<svg><defs><filter id="Deuteranopia"><feColorMatrix 
type="matrix" values="0.625 0.375 0 0 0, 0.7 0.3 0 0 0, 0 0.3 0.7 0.114 0, 0 0 0 1 0"/></filter></defs></svg>

<!-- 04 // Protanopia -->
<svg><defs><filter id="Protanopia"><feColorMatrix 
type="matrix" values="0.567 0.433 0 0 0, 0.558 0.442 0 0 0, 0 0.242 0.758 0.114 0, 0 0 0 1 0"/></filter></defs></svg>

<!-- 05 // Tritanopia -->
<svg><defs><filter id="Tritanopia"><feColorMatrix 
type="matrix" values="0.95 0.05 0 0 0, 0 0.433 0.567 0 0, 0 0.475 0.525 0 0, 0 0 0 1 0"/></filter></defs></svg>

<!-- 06 // Achromatopsia -->
<svg><defs><filter id="Achromatopsia"><feColorMatrix 
type="matrix" values="0.299 0.587 0.114 0 0, 0.299 0.587 0.114 0 0, 0.299 0.587 0.114 0 0, 0 0 0 1 0"/></filter></defs></svg>


<script> 

</script>

</body>
</html>



