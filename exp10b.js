var step_no=0; /*This variable is used to perform all the actions in the required sequence. 
                     Depending on the value of this variable the part of the method is called.*/
var count = 0; /* This variable is used to perform the actions on the objects without distortions.
                      i.e., It make sures that one or more actions are not performed at a time. */ 


/*This method is called when the page is loaded. */
window.onload = function(){ 
    initialFunction();
    addclickEvents();
}

// This function is called to set the first set of instructions as the page loads.
function  initialFunction() {
	document.getElementById('instruction').innerHTML = 'Turn on the spectrophotometer instrument by clicking on the power button and wait for 30 min for initialization of the instrument.';
	document.getElementById('sample_number').innerHTML = 'Sample Number : 1';
}

//This function is used to add click events to elements
function addclickEvents(){
    document.getElementById("power_btn").addEventListener("click", function() {
          	turnOn();
    }, false);
    document.getElementById("spectrometerlid_btn").addEventListener("click", function() {
          	spectrometer();
    }, false);
	document.getElementById("purple_solution").addEventListener("click", function() {
          	purpleSolution();
    }, false);
    document.getElementById("yellow_solution").addEventListener("click", function() {
          	yellowSolution();
    }, false);
    document.getElementById("computerscreen_btn").addEventListener("click", function() {
          	runWavelength();
    }, false);
    document.getElementById("scan_btn").addEventListener("click", function() {
          	scan();
    }, false);
    document.getElementById("close_btn").addEventListener("click", function() {
          	close();
    }, false);
    document.getElementById("particlegrowth_btn").addEventListener("click", function() {
          	particleGrowth();
    }, false);
    document.getElementById("pipette").addEventListener("click", function() {
          	pipette();
    }, false);
    document.getElementById("ascorbic_acid").addEventListener("click", function() {
          	ascorbicAcid();
    }, false);
}

//To disable and enable the cursor pointers on elements.
function cursorPointers(id1, id2){
    document.getElementById(id1).style.cursor = "default";
    document.getElementById(id2).style.cursor = "pointer";
}

// This method is called to make the clockface and clock handle visible and make the clock handle rotate and make it 
// hidden after a certain period of time.
function showClock() {
	$('#clockface2, #clockhand2').css('visibility', 'visible');
	rotateElements('clockhand2', '360');
	setTimeout(function(){
		$('#clockface2, #clockhand2').css('visibility', 'hidden');
	}, 3000);
}

function turnOn() {
	if(step_no == 0){
		showClock();
		document.getElementById('instruction').innerHTML='Click on the spectrophotometer lid to open it.';
		cursorPointers('power_btn', 'spectrometerlid_btn');
		step_no++;
	}
	else if(step_no == 8){
		showClock();
		document.getElementById('instruction').innerHTML='Take the micropipette by clicking on it.';
		cursorPointers('power_btn', 'pipette');
		step_no++;
	}
}

function spectrometer() {
	if(step_no == 1){
		document.getElementById('spectrometer').src='images/spectrometer_open.png';
		document.getElementById('instruction').innerHTML ='Click on the cuvette to place it in the sample cell holder of the instrument. One has to use aqueous TX-100 solution as the sample blank or reference in this measurement. Here a double beam spectrophotometer is shown. In this case, one can place the sample in the sample holder(often the front one) and the sample bank or reference in the reference holder(often the back one) simultaneously.';
		cursorPointers('spectrometerlid_btn', 'purple_solution');
		step_no++;
	}
	else if(step_no == 3){
		document.getElementById('spectrometer').src='images/spectrometer.png';
		document.getElementById('instruction').innerHTML='Run the wavelength scan by clicking on the Computer monitor and then on the ‘Scan’ tab and observe the scan. In the real spectrophotometer, an appropriate wavelength range of incident light for the sample can be chosen and the wavelength scan are run via the accompanied computer software. One can run the scan in absorbance or transmittance mode. The scan data is stored in the computer.If the spectrophotometer is a single beam instrument, then first the sample blank or reference is taken in a cuvette and the wavelength scan is run followed by the sample. One has to subtract the reference data from the sample data for respective wavelengths. Collect data by clicking on the Data tab. Plot the absorbance (and transmittance) of the sample at various wavelengths and determine the wavelength of maximum absorption i.e., spectral peak-position. Colloidal gold particles absorb maximum light near wavelength 520 nm.';
		cursorPointers('spectrometerlid_btn', 'computerscreen_btn');
		step_no++;
	}
	else if(step_no == 13){
		document.getElementById('spectrometer').src='images/spectrometer_open.png';
		document.getElementById('instruction').innerHTML= 'Close the chamber lid by clicking on it.';
		cursorPointers('spectrometerlid_btn', 'yellow_solution');
		step_no++;
	}
	else if(step_no == 15){
		document.getElementById('spectrometer').src='images/spectrometer.png';
		document.getElementById('instruction').innerHTML= 'Run the scan in the kinetics mode by clicking on the ‘Scan’ button and observe the scan. In the real spectrophotometer, an appropriate wavelength of light is selected (here λ=520 nm) at which increase in absorbance vs. time scan is performed by using the accompanied computer software.';
		cursorPointers('spectrometerlid_btn', 'computerscreen_btn');
		step_no++;
	}
}

function purpleSolution() {
	if(step_no == 2){
		animateElements('purple_solution', '-=9', '-=35.2');
		setTimeout(function() {
			document.getElementById('purple_solution').style.width = '1.3%';
		}, 800);

		setTimeout(function() {
			document.getElementById('ref_cuvette1').style.visibility = 'visible';
			animateElements('ref_cuvette1', '+=14', '-=9.5');
		}, 1100);

		setTimeout(function() {
			animateElements('purple_solution', '+=4', '-=0');
			animateElements('ref_cuvette1', '+=4.5', '-=0');
		}, 2100);
		setTimeout(function() {
			$('#purple_solution, #ref_cuvette1').css('visibility', 'hidden');
			document.getElementById('instruction').innerHTML = 'Close the lid by clicking on it.';
			cursorPointers('purple_solution', 'spectrometerlid_btn');
		}, 3100);
		step_no++;
	}
}

function runWavelength() {
	if(step_no == 4){
		document.getElementById('graph1').style.visibility = 'visible';
		cursorPointers('computerscreen_btn', 'scan_btn');
		step_no++;
	}
	else if(step_no == 16){
		document.getElementById('graph2').style.visibility = 'visible';
		cursorPointers('computerscreen_btn', 'scan_btn');
		step_no++;
	}
}

function scan() {
	if(step_no == 5){
		document.getElementById('graph1').style.visibility = 'hidden';
		document.getElementById('video1').style.visibility = 'visible';
		cursorPointers('scan_btn', 'close_btn');
		step_no++;
	}
	else if(step_no == 17){
		document.getElementById('graph2').style.visibility = 'hidden';
		document.getElementById('video2').style.visibility = 'visible';
		cursorPointers('scan_btn', 'close_btn');
		step_no++;
	}
}

function close() {
	if(step_no == 6){
		document.getElementById('video1').style.visibility = 'hidden';
		document.getElementById('particlegrowth_btn').style.visibility = 'visible';
		document.getElementById('instruction').innerHTML = 'Start Particle Growth Kinetics Measurement';
		cursorPointers('close_btn', 'particlegrowth_btn');
		step_no++;
	}
	else if(step_no == 18){
		document.getElementById('video1').style.visibility = 'hidden';
		document.getElementById('particlegrowth_btn').style.visibility = 'visible';
		document.getElementById('instruction').innerHTML = 'Start Particle Growth Kinetics Measurement';
		cursorPointers('close_btn', 'particlegrowth_btn');
		step_no++;
	}
}

function particleGrowth() {
	if(step_no == 7){
		document.getElementById('particlegrowth_btn').style.visibility = 'hidden';
		document.getElementById('purpleSol1').style.visibility = 'visible';
		// location.reload();
		// document.getElementById('frame').src = 'exp10b.html';
		document.getElementById('instruction').innerHTML = 'Turn on the spectrophotometer instrument by clicking on the power button and wait for 30 min for initialization of the instrument.For the preparation of Sample 1 gold particle proceed as follows. ';
		cursorPointers('particlegrowth_btn', 'power_btn');
		step_no++;
	}
}

function pipette() {
	if(step_no == 9){
		animateElements('pipette', '+=50', '+=20');
		document.getElementById('instruction').innerHTML = 'Click on the micropipette again to collect the required quantity of seed solution.';
		step_no++;
	}
	else if(step_no == 10){
		document.getElementById('pipette').src = 'images/pipette_with_sol.png';
		document.getElementById('purple_solution').src = 'images/half_filled_purple_sol.png';
		document.getElementById('instruction').innerHTML = 'Add the seed solution from micropipette to the required quantity of Au(III) ion solution in the cuvette by clicking on the pipette once again.';
		step_no++;
	}
	else if(step_no == 11){
		animate('pipette', '-=10', '-=10','+=10');
		document.getElementById('pipette').src = 'images/pipette.png';
		setTimeout(function() {
			animateElements('pipette', '-=49', '-=10');
		}, 5000);
		document.getElementById('instruction').innerHTML = 'Add 0.04 mL 10-2 M ascorbic acid at a time (not drop by drop) by clicking on the ascorbic acid solution.Immediately after addition of ascorbic acid, the kinetics of the particle development from the seed should be followed by following the increase in absorbance value at λ=520 nm with time (at 331°C). ';
		cursorPointers('pipette', 'ascorbic_acid');
		step_no++;
	}
}

function ascorbicAcid() {
	if(step_no == 12) {
		animateElements('pipette', '+=13', '+=21.5');

		setTimeout(function(){
			animate('pipette', '-=7', '+=0', '+=0');
		}, 2000);

		setTimeout(function(){
			animateElements('pipette', '+=40', '-=12');
		}, 3000);

		setTimeout(function(){
			animateElements('pipette', '-=45', '-=8');
			document.getElementById('instruction').innerHTML= 'Click on the spectrophotometer lid to open it.';
			cursorPointers('pipette', 'spectrometerlid_btn');
		}, 7000);
		
		step_no++;
	}
}

function yellowSolution() {
	if(step_no == 14){
		animateElements('yellow_solution', '-=9', '-=35.2');
		setTimeout(function() {
			document.getElementById('yellow_solution').style.width = '1.3%';
		}, 800);

		setTimeout(function() {
			document.getElementById('ref_cuvette2').style.visibility = 'visible';
			animateElements('ref_cuvette2', '+=14', '-=9.5');
		}, 1100);

		setTimeout(function() {
			animateElements('purple_solution', '+=4', '-=0');
			animateElements('ref_cuvette2', '+=4.5', '-=0');
		}, 2100);
		setTimeout(function() {
			$('#purple_solution, #ref_cuvette2').css('visibility', 'hidden');
			document.getElementById('instruction').innerHTML = 'Close the lid by clicking on it.';
			cursorPointers('yellow_solution', 'spectrometerlid_btn');
		}, 3100);
		step_no++;
	}
}