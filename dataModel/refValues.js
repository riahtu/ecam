/**
  *
  * KPIs that have reference values to consider them "good","acceptable","bad",etc
  *
  */

var RefValues = 
{
	//check if input "code" is inside this object
	isInside:function(code)
	{
		for(var field in this) 
		{ 
			if(code==field){return true;break;} 
		}
		return false;
	},

	//Beware with: dE4 (2 inputs), dE5(returning different conclusions), tE1(complex), tE4(incorrect)

	//tE4: Good: 90 ≤ tE4 ≤ 70, Acceptable: 100 ≤ tE4 < 90 and 70 < tE4 ≤ 50, Unsatisfactory: tE4 > 100 and tE4 < 50,
	tE4:function(value)
	{
		     if(70 <= value && value <= 90)                                  {return "Good"}
		else if((90 <  value && value <= 100) || (50 <= value && value < 70)){return "Acceptable"}
		else if((value > 100)||(value < 50))                                 {return "Unsatisfactory"}
		else                                                                 {return "Out of range"}
	},

	//tE1 is the most complex
	tE1:function(value)
	{
		/*
		WTP > 5000 m3/d - Good: tE1 ≤ 0.025; Acceptable: 0.025 < tE1 ≤ 0.04; Unsatisfactory: tE1 > 0.04                                                          
		WTP <= 5000 m3/d  - Good: tE1 ≤ 0.04; Acceptable: 0.04 < tE1 ≤ 0.055; Unsatisfactory: tE1 > 0.055                                                        
		WTP with Pre-ox > 5000 m3/d  - Good: tE1 ≤ 0.055; Acceptable: 0.055 < tE1 ≤ 0.07; Unsatisfactory: tE1 > 0.07                                 
		WTP with Pre-ox <= 5000 m3/d  - Good: tE1 ≤ 0.07; Acceptable: 0.07 < tE1 ≤ 0.085; Unsatisfactory: tE1 > 0.085
		WTP (with raw and treated water pumping) - Good: tE1 ≤ 0.4; Acceptable: 0.4 < tE1 ≤ 0.5; Unsatisfactory: tE1 > 0.5  
		*/
		return "Not implemented";
	},

	//dE4 2 inputs: Good: dE4  ≥ 80 – dE5, Acceptable: 80-dE5 > dE4 ≥ 70-dE5, Unsatisfactory: dE4 < 70 – dE5,
	dE4:function(value,dE5)
	{
			 if(value  >= 80-dE5)                  {return "Good"}
		else if(80-dE5 >  value && value >= 70-dE5){return "Acceptable"}
		else if(value  <  70-dE5)                  {return "Unsatisfactory"}
		else                                       {return "Out of range"}
	},

	//dE5 is different: Flat: dE5 ≤ 15, Medium: 15 < dE5 ≤ 30, Hilly: dE5 > 30,
	dE5:function(value)
	{
			 if(value <= 15)                  {return "Flat"}
		else if(15    <  value && value <= 30){return "Medium"}
		else if(value >  30)                  {return "Hilly"}
		else                                  {return "Out of range"}
	},

	/************************NORMAL ONES*****************************/

	//aE3: Good: 0.2725 ≤ aE3 ≤ 0.40, Acceptable: 0.40 < aE3 ≤ 0.54, Unsatisfactory: aE3 > 0.54
	aE3:function(value)
	{
		     if(0.2725 <= value && value <= 0.40){return "Good"}
		else if(0.40   <  value && value <= 0.54){return "Acceptable"}
		else if(value  >  0.54)                  {return "Unsatisfactory"}
		else                                     {return "Out of range"}
	},

	//aE5: Good: 0.2725 > aE5 ≥ 0.19, Acceptable: 0.19 > aE5 ≥ 0.12, Unsatisfactory: aE5 < 0.12
	aE5:function(value)
	{
			 if(0.2725 > value && value >= 0.19){return "Good"}
		else if(0.19   > value && value >= 0.12){return "Acceptable"}
		else if(value  < 0.12)                  {return "Unsatisfactory"}
		else                                    {return "Out of range"}
	},

	//aE6: Good: aE6 ≤ 6, Acceptable: 6 < aE6 ≤ 12, Unsatisfactory: aE6 > 12
	aE6:function(value)
	{
		     if(value <= 6)                   {return "Good"}
		else if(6     <  value && value <= 12){return "Acceptable"}
		else if(value >  12)                  {return "Unsatisfactory"}
		else                                  {return "Out of range"}
	},

	//aE7: Good: aE7 ≤ 2, Acceptable: 2 < aE7 ≤ 4, Unsatisfactory: aE7> 4,
	aE7:function(value)
	{
			if(value <= 2)                  {return "Good"}
		else if(2     <  value && value <= 4){return "Acceptable"}
		else if(value >  4)                  {return "Unsatisfactory"}
		else                                 {return "Out of range"}
	},

	//tE3: Good: tE3 ≤ 0.06, Acceptable: 0.06 < tE3 ≤ 0.10, Unsatisfactory: tE3 > 0.10,
	tE3:function(value)
	{
			 if(value <= 0.06)                  {return "Good"}
		else if(0.06  <  value && value <= 0.10){return "Acceptable"}
		else if(value >  0.10)                  {return "Unsatisfactory"}
		else                                    {return "Out of range"}
	},

	//dE3: Good: 0.2725 ≤ dE3 ≤ 0.40 , Acceptable: 0.40 < dE3 ≤ 0.54, Unsatisfactory: dE3 > 0.54,
	dE3:function(value)
	{
			 if(0.2725 <= value && value <= 0.40){return "Good"}
		else if(0.40   <  value && value <= 0.54){return "Acceptable"}
		else if(value  >  0.54)                  {return "Unsatisfactory"}
		else                                     {return "Out of range"}
	},

	//dE6: Good: dE6 ≤ 6 , Acceptable: 6 < dE6 ≤ 12, Unsatisfactory: dE6 > 12,
	dE6:function(value)
	{
			 if(value <= 6)                  {return "Good"}
		else if(6     < value && value <= 12){return "Acceptable"}
		else if(value > 12)                  {return "Unsatisfactory"}
		else                                 {return "Out of range"}
	},

	//dE7: Good: dE7 ≤ 2, Acceptable: 2 < dE7 ≤ 4, Unsatisfactory: dE7 > 4,
	dE7:function(value)
	{
			 if(value <= 2)                 {return "Good"}
		else if(2     < value && value <= 4){return "Acceptable"}
		else if(value > 4)                  {return "Unsatisfactory"}
		else                                {return "Out of range"}
	},

	/* missing initially ones:*/

	wtE1:function(value)
	{
		return "Not implemented";
		/*
		TF or aerated lagoons- Good: wtE1 ≤ 0.185 + 1127/TW; Acceptable: 0.185 + 1127/TW < wtE1 < 0.231 + 1409/TW; Unsatisfactory: wtE1 ≥ 0.231 + 1409/TW
		AS - Good: wtE1 ≤ 0.280 + 1192/TW; Acceptable: 0.280 + 1192/TW < wtE1 < 0.350 + 1490/TW; Unsatisfactory: wtE1 ≥ 0.350 + 1490/TW
		AS + C/F - Good: wtE1 ≤ 0.325 + 1384/TW; Acceptable: 0.325 + 1384/TW < wtE1 < 0.406 + 1730/TW; Unsatisfactory: wtE1 ≥ 0.406 + 1730/TW
		AS w/ nitrification + C/F - Good: wtE1 ≤ 0.424 + 1362/TW; Acceptable: 0.424 + 1362/TW < wtE1 < 0.530 + 1703/TW; Unsatisfactory: wtE1 ≥ 0.530 + 1703/TW
		note: TW = Treated wastewater (m3/d)
		*/
	},

	//wcE3: Good: 0.2725 ≤ wcE3 ≤ 0.45, Acceptable: 0.45 < wcE3 ≤ 0.68, Unsatisfactory: wcE3 > 0.68
	wcE3:function(value)
	{
			 if(0.2725 <= value && value <= 0.45){return "Good"}
		else if(0.45   <  value && value <= 0.68){return "Acceptable"}
		else if(value  > 0.68)                   {return "Unsatisfactory"}
		else                                     {return "Out of range"}
	},

	//wtE3: Good: wtE3 ≤ 2 , Acceptable: 2 < wtE3 ≤ 10, Unsatisfactory: wtE3 > 10,
	wtE3:function(value)
	{
			 if(value <= 2)                   {return "Good"}
		else if(2     <  value && value <= 10){return "Acceptable"}
		else if(value > 10)                   {return "Unsatisfactory"}
		else                                  {return "Out of range"}
	},

	//wtE4: Good: wtE4 ≥ 0.0009 BOD5 , Acceptable: 0.0009 BOD5 > wtE4 ≥ 0.0007 BOD5, Unsatisfactory: wtE4 < 0.0007 BOD5, note: BOD5 = influent BOD (mg/L) = wtV15,
	wtE4:function(value)
	{
			 if(value  >= 0.0009)                  {return "Good"}
		else if(0.0009 >  value && value >= 0.0007){return "Acceptable"}
		else if(value  <  0.0007)                  {return "Unsatisfactory"}
		else                                       {return "Out of range"}
	},

	//wtE7: Good: wtE7 ≤ 0.8 , Acceptable: 0.8 < wtE7 ≤ 1.5, Unsatisfactory: wtE7 > 1.5,
	wtE7:function(value)
	{
			 if(value <= 0.8)                 {return "Good"}
		else if(0.8   < value && value <= 1.5){return "Acceptable"}
		else if(value > 1.5)                  {return "Unsatisfactory"}
		else                                  {return "Out of range"}
	},

	//wtE8: Good: wtE8 ≥ 20 , Acceptable: 20 < wtE8 ≤ 12, Unsatisfactory: wtE8 < 12,
	wtE8:function(value)
	{
			 if(value >= 20)                  {return "Good"}
		else if(20    >  value && value >= 12){return "Acceptable"}
		else if(value < 12)                   {return "Unsatisfactory"}
		else                                  {return "Out of range"}
	},

	//wtE9: Good: 95 ≤ wtE9 ≤ 70, Acceptable: 100 ≤ wtE9 < 95 and 70 < wtE9 ≤ 50, Unsatisfactory: wtE9 > 100 and wtE9 < 50,
	//NEED CORRECTION TBD
	wtE9:function(value)
	{
			 if(70 <= value && value <= 95)                            {return "Good"}
		else if((95 <  value && value <= 100) || (50<value&&value<70) ){return "Acceptable"}
		else if(value > 100 || value < 50)                             {return "Unsatisfactory"}
		else                                                           {return "Out of range"}
	},

	//wdE3: Good: 0.2725 ≤ wdE3 ≤ 0.40 , Acceptable: 0.40 < wdE3 ≤ 0.54, Unsatisfactory: wdE3 > 0.54,
	wdE3:function(value)
	{
			 if(0.2725 <= value && value <= 0.40){return "Good"}
		else if(0.40   <  value && value <= 0.54){return "Acceptable"}
		else if(value  > 0.54)                   {return "Unsatisfactory"}
		else                                     {return "Out of range"}
	},

	//wdE5: Good: 0.2725 > wdE5 ≥ 0.19 , Acceptable: 0.19 > wdE5 ≥ 0.12, Unsatisfactory: wdE5 < 0.12,
	wdE5:function(value)
	{
		        if(0.19 <= value && value < 0.2725){return "Good"}
		   else if(0.12 <= value && value < 0.19)  {return "Acceptable"}
		   else if(value < 0.12)                   {return "Unsatisfactory"}
		   else                                    {return "Out of range"}
	},
}