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
          	purple_solution();
    }, false);
    document.getElementById("computerscreen_btn").addEventListener("click", function() {
          	runWavelength();
    }, false);
    document.getElementById("scan_btn").addEventListener("click", function() {
          	scan();
    }, false);
    document.getElementById("scan_btn").addEventListener("click", function() {
          	close();
    }, false);
    document.getElementById("particlegrowth_btn").addEventListener("click", function() {
          	particleGrowth();
    }, false);
    document.getElementById("pipette").addEventListener("click", function() {
          	pipette();
    }, false);
}

//To disable and enable the cursor pointers on elements.
function cursorPointers(id1, id2){
    document.getElementById(id1).style.cursor = "default";
    document.getElementById(id2).style.cursor = "pointer";
}

function showClock() {
	$('#clockface2, #clockhand2').css('visibility', 'visible');
	rotateElements('clockhand2', '90');
	setTimeout(function(){
		$('#clockface2, #clockhand2').css('visibility', 'hidden');
	}, 2000);
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
}

function purple_solution() {
	if(step_no == 2){
		animateElements('purple_solution', '-=9', '-=35.2');
		setTimeout(function() {
			document.getElementById('purple_solution').style.width = '1.3%';
		}, 800);

		setTimeout(function() {
			document.getElementById('ref_cuvette').style.visibility = 'visible';
			animateElements('ref_cuvette', '+=14', '-=9.5');
		}, 1100);

		setTimeout(function() {
			animateElements('purple_solution', '+=4', '-=0');
			animateElements('ref_cuvette', '+=4.5', '-=0');
		}, 2100);
		setTimeout(function() {
			$('#purple_solution, #ref_cuvette').css('visibility', 'hidden');
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
}

function scan() {
	if(step_no == 5){
		document.getElementById('graph1').style.visibility = 'hidden';
		document.getElementById('video1').style.visibility = 'visible';
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
}

function particleGrowth() {
	if(step_no == 7){
		document.getElementById('particlegrowth_btn').style.visibility = 'hidden';
		document.getElementById('purpleSol1').style.visibility = 'visible';
		document.getElementById('instruction').innerHTML = 'Turn on the spectrophotometer instrument by clicking on the power button and wait for 30 min for initialization of the instrument.For the preparation of Sample 1 gold particle proceed as follows. ';
		cursorPointers('particlegrowth_btn', 'power_btn');
		step_no++;
	}
}

function pipette() {
	if(step_no == 9){
		animateElements('pipette', '+=54', '+=20');
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
			animateElements('pipette', '-=54', '-=5');
		}, 5000);
		document.getElementById('instruction').innerHTML = 'Add 0.04 mL 10-2 M ascorbic acid at a time (not drop by drop) by clicking on the ascorbic acid solution.Immediately after addition of ascorbic acid, the kinetics of the particle development from the seed should be followed by following the increase in absorbance value at λ=520 nm with time (at 331°C). ';
		cursorPointers('pipette', 'ascorbic_acid');
		step_no++;
	}
}