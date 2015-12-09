<?php
	/** THIS PAGE LETS THE USER EDIT LEVEL 3*/

	//check user GET inputs (level & sublevel)
	if(!isset($_GET['level']))		die("ERROR: level not specified");
	if(!isset($_GET['sublevel']))	die("ERROR: sublevel not specified");

	/*
	 * level: 		mandatory. possible values: {"Water","Wastewater"}
	 * sublevel: 	mandatory. possible values: {"Abstraction","Treatment","Distribution","Collection","Treatment","Discharge"}
	 */
	$level=$_GET['level'];
	$sublevel=$_GET['sublevel'];
?>
<!doctype html><html><head>
	<meta charset=utf-8>
	<title>ECAM Web App</title>
	<link rel=stylesheet href="css.css"><style>
		td{text-align:center}
		th{vertical-align:middle}
		td.input input{width:40px;font-size:18px}
		td.input{width:80px;text-align:right;background-color:#eee;cursor:cell}
	</style>
	<script src="dataModel/info.js"></script><!--All variable descriptions and units object here-->
	<script src="dataModel/global.js"></script><!--Default Global object here-->
	<script src="js/cookies.js"></script><!--basic cookie functions here-->
	<script src="js/updateGlobalFromCookies.js"></script><!--update Global object from cookie "GLOBAL" here-->
	<script>
		<?php
			/** establish the level 2 stage we are going to be focused, since substages of level 3 have the same variables*/
			echo "var CurrentStage = Global['$level']['$sublevel'];";
		?>

		/** Array to store all Substage objects */
		var substages = []

		<?php
			//Read "substages" current object
			echo "substages = Global.Level3['$level']['$sublevel'];";
		?>

		/** Returns array of strings which are input identifiers for current stage, e.g ["aV1","av2"] */
		function getInputs()
		{
			/*empty array*/ var inputs = []
			for(field in CurrentStage)
			{
				if(typeof(CurrentStage[field])!="number" )continue
				inputs.push(field)
			}
			return inputs
		}

		/** Substage class for storing all variables that correspond to current stage */
		function Substage()
		{
			/*get a list of variables for this level*/ var inputs = getInputs()
			/*substage name*/ this.name = "Substage "+(substages.length+1)
			//now make the object look like, e.g. Substage {tV1: 0, tV2: 0, tV3: 0, tV4: 0, tV5: 0, ...}
			for(i in inputs)this[inputs[i]]=0
		}

		/** button new substage pushed */
		function newSubstage()
		{
			substages.push(new Substage()) //add a new substage to the array "substages"
			init()
		}

		/** button delete substage pushed */
		function deleteSubstage(index)
		{
			substages.splice(index,1)
			init()
		}

		/** compute the sum of all substages for a particular variable code*/
		function sumAll(code)
		{
			var sum=0
			for(s in substages)sum+=parseFloat(substages[s][code])
			return sum
		}

		/** update substages table */
		function updateSubstagesTable()
		{
			/*table element*/ var t = document.getElementById('substages')

			/*update table header */
				while(t.rows[0].cells.length>2)t.rows[0].deleteCell(-1)
				//go over substages: create a column for each
				for(s in substages)
				{
					var newTH = document.createElement('th')
					newTH.innerHTML="Substage "+(parseInt(s)+1)
					t.rows[0].appendChild(newTH)
				}
				//TOTAL header
				var newTH = document.createElement('th')
				newTH.innerHTML="&sum; SUBSTAGES"
				t.rows[0].appendChild(newTH)
				//LEVEL2 header
				var newTH = document.createElement('th')
				newTH.innerHTML="LEVEL 2"
				t.rows[0].appendChild(newTH)
				//DIFFERENCE BETWEEN LEVEL 2 and sum of substages
				var newTH=document.createElement('th')
				newTH.innerHTML="Difference"
				newTH.style.backgroundColor='orange'
				t.rows[0].appendChild(newTH)
				//UNIT header
				var newTH = document.createElement('th')
				newTH.innerHTML="Unit"
				t.rows[0].appendChild(newTH)
			/*end update header*/

			/*update table body*/
				while(t.rows.length>1)t.deleteRow(-1)
				//each row corresponds to a variable of the current stage
				var inputs = getInputs()
				for(input in inputs)
				{
					/*variable code*/var code=inputs[input]
					var newRow=t.insertRow(-1)
					newRow.setAttribute('field',code)
					var newCell=newRow.insertCell(-1)
					/*link and name*/newCell.innerHTML="<a href=variable.php?id="+code+">"+code+"</a>"
					/*variable description*/
					var newCell=newRow.insertCell(-1)
					newCell.style.textAlign="left"
					newCell.style.fontSize="10px"
					newCell.innerHTML="<a href=variable.php?id="+code+">"+Info[code].description+"</a>"
					//go over substages
					for(s in substages)
					{
						var newCell=newRow.insertCell(-1)
						newCell.className="input"
						newCell.setAttribute('onclick','transformField(this)')
						newCell.setAttribute('substage',s)
						newCell.innerHTML=substages[s][code]
					}
					//SUM OF SUBSTAGES
					var sum=sumAll(code)
					var newCell=newRow.insertCell(-1)
					newCell.innerHTML=sum
					//LEVEL 2 current value
					var newCell=newRow.insertCell(-1)
					newCell.innerHTML=CurrentStage[code]
					//DIFFERENCE BETWEEN LEVEL 2 and sum of substages
					var diff=Math.abs(parseFloat(CurrentStage[code])-sumAll(code))
					var newCell=newRow.insertCell(-1)
					newCell.style.backgroundColor=diff==0?"#af0":"red"
					newCell.innerHTML=diff
					//Unit for current input
					var newCell=newRow.insertCell(-1)
					newCell.style.textAlign='left'
					newCell.innerHTML=Info[code].unit
				}
				//Options
				var newRow = t.insertRow(-1)
				var newCell = newRow.insertCell(-1)
				newCell.style.border="none"
				newCell.colSpan=2
				for(s in substages)
				{
					var str=""+
						"<button style='vertical-align:middle' class=delete onclick=deleteSubstage("+s+")></button>"
					newRow.insertCell(-1).innerHTML=str
				}
			/*end update body*/

			/*update counter*/ document.getElementById('counter').innerHTML=substages.length
		}

		//TESTING
		function transformField(element)
		{
			element.removeAttribute('onclick')
			var field=element.parentNode.getAttribute('field')
			var substage=element.getAttribute('substage')
			element.innerHTML=""
			var input=document.createElement('input')
			input.autocomplete='off'
			input.setAttribute('onkeypress',"if(event.which==13){updateSubstage("+substage+",'"+field+"',this.value)}")
			input.setAttribute('onblur',"updateSubstage("+substage+",'"+field+"',this.value)") //now works
			input.value=substages[substage][field]
			element.appendChild(input)
			input.select()
			return
		}

		function updateSubstage(substageIndex,field,newValue)
		{
			if(typeof(CurrentStage[field])=="number")newValue=parseFloat(newValue) //if CurrentStage[field] is a number, parse float
			substages[substageIndex][field]=newValue
			init() //update tables and write cookies
		}

		/** Update all tables */
		function init()
		{
			updateSubstagesTable()
			updateResult()
		}
	</script>
</head><body onload=init()><center>
<!--NAVBAR--><?php include"navbar.php"?>
<!--nav menu--><?php include"youAreHere.php"?>
<!--TITLE-->
<?php 
	//Navigable <h1>title</h1>
	switch($level)
	{
		case "Water": $titleLevel="<a href=edit.php?level=$level>Water Supply</a>";break;
		case "Waste": $titleLevel="<a href=edit.php?level=$level>Wastewater</a>";break;
	}
	/*Separator*/$sep="<span style=color:black>&rsaquo;</span>";
	$titleSublevel="<a href=edit.php?level=$level&sublevel=$sublevel>$sublevel</a>";
	$title="<a href=stages.php>Stages</a> $sep $titleLevel $sep $titleSublevel $sep <span style=color:black>Substages (Level 3)</a>";
?>
<!--TITLE--><h1><?php echo $title?></h1>
<!--HELP--><h4>Here you can subdivide your Level 2 Stage into new Level 3 Substages</h4>
<!--new substage button--><button onclick=newSubstage() class=button>+ New Substage</button>
<!--substages counter--><div class=inline style="border:1px solid #ccc;vertical-align:middle">Substages: <span id=counter>0</span></div>

<!--SUBSTAGES TABLE-->
<table id=substages style=margin:1em><tr>
	<td style="border:none">
	<td style="border:none">
</table>

<?php //die()?>

<!--PLOTS-->
<div class=inline style="border:1px solid #000;width:45%;margin:1em">
	SOME PLOTS HERE (to be implemented at the end)
</div>

<!--CURRENT JSON--><?php include'currentJSON.php'?>
