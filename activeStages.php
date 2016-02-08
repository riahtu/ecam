<script>
	/*  This file is part of "summary.php"
		It creates a table indicating active stages
	*/

	var aass={ }; //namespace

	aass.stageName=function(stage)
	{
		var r;
		switch(stage)
		{
			case "uws":	     r="Urban water cycle";break;
			case "water":	 r="Water Supply";break;
			case "waste":	 r="Wastewater";break;
			case "waterGen": r="Energy use and production";break;
			case "waterAbs": r="Abstraction";break;
			case "waterTre": r="Treatment";break;
			case "waterDis": r="Distribution";break;
			case "wasteGen": r="Energy use and production";break;
			case "wasteCol": r="Collection";break;
			case "wasteTre": r="Treatment";break;
			case "wasteDis": r="Discharge";break;
			default: r=stage;break;
		}
		return r;
	}
	aass.printCell=function(stage,colspan)
	{
		var color = Global.Configuration["Active Stages"][stage] ? "black" : "#ccc";
		var background = Global.Configuration["Active Stages"][stage] ? "" : "#eee";
		document.write("<td class=stage onmouseover=aass.hlStage('"+stage+"',1) onmouseout=aass.hlStage('"+stage+"',0) colspan="+colspan+" style='text-align:center;background:"+background+";color:"+color+"'>"+this.stageName(stage));
	}
	aass.hlStage=function(stage,hl)
	{
		var newColor = hl ? "#af0":"";
		var elements = document.querySelectorAll('tr[family='+stage+']')
		for(var i=0;i<elements.length;elements[i++].style.backgroundColor=newColor){}
	}
</script>
<style>.stage:hover {background:#af0}</style>
<table>
	<tr><th colspan=8>Stages<tr>
		<tr><script>
		['water','waste'].forEach(function(stage)
		{
			aass.printCell(stage,4);
		});
		</script><tr><script>
		['waterGen','waterAbs','waterTre','waterDis'].forEach(function(stage)
		{
			aass.printCell(stage,1);
		});
		['wasteGen','wasteCol','wasteTre','wasteDis'].forEach(function(stage)
		{
			aass.printCell(stage,1);
		});
	</script>
</table>
