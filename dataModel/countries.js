/*
	List of countries, with:
		- Conversion factor
		- Protein consumption
		- Bod per day (IPCC TABLE 6.4)
*/

var Countries={
	"Brazil":{ 
		conv_kwh_co2:0.092643638,
		wwc_prot_con:30.66,
		wwc_bod_pday:50,
	},
	"Canada":{ 
		conv_kwh_co2:0.179763325,
		wwc_prot_con:38.325,
		wwc_bod_pday:60,
	}, 
	"Denmark":{ 
		conv_kwh_co2:0.374745583,
		wwc_prot_con:40.515,
		wwc_bod_pday:62,
	},
	"Egypt":{ 
		conv_kwh_co2:0.500886095,
		wwc_prot_con:33.215,
		wwc_bod_pday:34,
	},
	"Germany":{ 
		conv_kwh_co2:0.672220452,
		wwc_prot_con:36.135,
		wwc_bod_pday:62,
	},
	"Greece":{ 
		conv_kwh_co2:1.921092777,
		wwc_prot_con:43.07,
		wwc_bod_pday:57,
	},
	"India":{ 
		conv_kwh_co2:1.333174843,
		wwc_prot_con:20.44,
		wwc_bod_pday:34,
	},
	"Italy":{ 
		conv_kwh_co2:0.410898038,
		wwc_prot_con:40.88,
		wwc_bod_pday:60,
	},
	"Japan":{ 
		conv_kwh_co2:0.443356848,
		wwc_prot_con:33.58,
		wwc_bod_pday:42,
	},
	"Mexico":{ 
		conv_kwh_co2:0.452483345,
		wwc_prot_con:33.58,
		wwc_bod_pday:40,
	},
	"Peru":{ 
		conv_kwh_co2:0.237721212,
		wwc_prot_con:24.455,
		wwc_bod_pday:40,
	},
	"Russian Federation":{ 
		conv_kwh_co2:0.513180381,
		wwc_prot_con:35.405,
		wwc_bod_pday:60,
	},
	"Sweden":{ 
		conv_kwh_co2:0.023033883,
		wwc_prot_con:39.055,
		wwc_bod_pday:75,
	},
	"Thailand":{ 
		conv_kwh_co2:0.626742612,
		wwc_prot_con:20.805,
		wwc_bod_pday:40,
	},
	"Turkey":{ 
		conv_kwh_co2:0.865664547,
		wwc_prot_con:36.135,
		wwc_bod_pday:38,
	},
	"United States of America":{ 
		conv_kwh_co2:0.547096737,
		wwc_prot_con:41.61,
		wwc_bod_pday:85,
	},
};

var Countries={
	"Algeria":{conv_kwh_co2:0.66420926 , wwc_prot_con:31.39 , wwc_bod_pday:37,},
	"Angola":{conv_kwh_co2:0.037950113 , wwc_prot_con:15.695 , wwc_bod_pday:37,},
	"Argentina":{conv_kwh_co2:0.391932833 , wwc_prot_con:34.31 , wwc_bod_pday:40,},
	"Australia":{conv_kwh_co2:0.991757127 , wwc_prot_con:38.69 , wwc_bod_pday:60,},
	"Austria":{conv_kwh_co2:0.176796609 , wwc_prot_con:39.055 , wwc_bod_pday:60,},
	"Bangladesh":{conv_kwh_co2:0.63714323 , wwc_prot_con:17.885 , wwc_bod_pday:40,},
	"Belgium":{conv_kwh_co2:0.224767376 , wwc_prot_con:35.405 , wwc_bod_pday:60,},
	"Benin":{conv_kwh_co2:0.700678676 , wwc_prot_con:21.535 , wwc_bod_pday:37,},
	"Bolivia (Plurinational State of)":{ conv_kwh_co2:0.534996875 ,wwc_prot_con:20.44 , wwc_bod_pday:40,},
	"Botswana":{ conv_kwh_co2:1.825675055 ,wwc_prot_con:23.36 , wwc_bod_pday:37,},
	"Brazil":{ conv_kwh_co2:0.092643638 ,wwc_prot_con:30.66 , wwc_bod_pday:50,},
	"Burkina Faso":{ conv_kwh_co2:0.693 ,wwc_prot_con:29.2 , wwc_bod_pday:37,},
	"Cameroon":{ conv_kwh_co2:0.216568535 ,wwc_prot_con:21.17 , wwc_bod_pday:37,},
	"Canada":{ conv_kwh_co2:0.179763325 ,wwc_prot_con:38.325 , wwc_bod_pday:60,},
	"Chile":{ conv_kwh_co2:0.408614261 ,wwc_prot_con:32.12 , wwc_bod_pday:40,},
	"China":{ conv_kwh_co2:0.974624913 ,wwc_prot_con:32.485 , wwc_bod_pday:40,},
	"Colombia":{ conv_kwh_co2:0.111425218 ,wwc_prot_con:23.725 , wwc_bod_pday:40,},
	"Congo":{ conv_kwh_co2:0.120109978 ,wwc_prot_con:19.345 , wwc_bod_pday:37,},
	"Costa Rica":{ conv_kwh_co2:0.063756361 ,wwc_prot_con:27.01 , wwc_bod_pday:40,},
	"Côte d'Ivoire":{ conv_kwh_co2:0.501179338 ,wwc_prot_con:18.25 , wwc_bod_pday:37,},
	"Cuba":{ conv_kwh_co2:0.938086187 ,wwc_prot_con:29.2 , wwc_bod_pday:40,},
	"Democratic People's Republic of Korea":{ conv_kwh_co2:0.494658925 ,wwc_prot_con:21.17 , wwc_bod_pday:40,},
	"Denmark":{ conv_kwh_co2:0.374745583 ,wwc_prot_con:40.515 , wwc_bod_pday:62,},
	"Dominican Republic":{ conv_kwh_co2:0.641741728 ,wwc_prot_con:18.98 , wwc_bod_pday:40,},
	"Ecuador":{ conv_kwh_co2:0.269613843 ,wwc_prot_con:20.805 , wwc_bod_pday:40,},
	"Egypt":{ conv_kwh_co2:0.500886095 ,wwc_prot_con:33.215 , wwc_bod_pday:34,},
	"El Salvador":{ conv_kwh_co2:0.256072792 ,wwc_prot_con:25.915 , wwc_bod_pday:40,},
	"Eritrea":{ conv_kwh_co2:0.677991638 ,wwc_prot_con:17.155 , wwc_bod_pday:37,},
	"Ethiopia":{ conv_kwh_co2:0.118948451 ,wwc_prot_con:20.44 , wwc_bod_pday:37,},
	"Finland":{ conv_kwh_co2:0.225457295 ,wwc_prot_con:39.055 , wwc_bod_pday:60,},
	"France":{ conv_kwh_co2:0.070927465 ,wwc_prot_con:41.245 , wwc_bod_pday:60,},
	"Gabon":{ conv_kwh_co2:0.425188882 ,wwc_prot_con:29.565 , wwc_bod_pday:37,},
	"Germany":{ conv_kwh_co2:0.672220452 ,wwc_prot_con:36.135 , wwc_bod_pday:62,},
	"Ghana":{ conv_kwh_co2:0.214767509 ,wwc_prot_con:21.535 , wwc_bod_pday:37,},
	"Greece":{ conv_kwh_co2:1.921092777 ,wwc_prot_con:43.07 , wwc_bod_pday:57,},
	"Guatemala":{ conv_kwh_co2:0.341534936 ,wwc_prot_con:20.805 , wwc_bod_pday:40,},
	"Honduras":{ conv_kwh_co2:0.415487352 ,wwc_prot_con:24.455 , wwc_bod_pday:40,},
	"India":{ conv_kwh_co2:1.333174843 ,wwc_prot_con:20.44 , wwc_bod_pday:34,},
	"Indonesia":{ conv_kwh_co2:0.684693977 ,wwc_prot_con:20.44 , wwc_bod_pday:40,},
	"Iran (Islamic Republic of)":{ conv_kwh_co2:0.631113877 ,wwc_prot_con:30.66 , wwc_bod_pday:40,},
	"Ireland":{ conv_kwh_co2:0.521193132 ,wwc_prot_con:40.15 , wwc_bod_pday:60,},
	"Italy":{ conv_kwh_co2:0.410898038 ,wwc_prot_con:40.88 , wwc_bod_pday:60,},
	"Japan":{ conv_kwh_co2:0.443356848 ,wwc_prot_con:33.58 , wwc_bod_pday:42,},
	"Jordan":{ conv_kwh_co2:0.643924449 ,wwc_prot_con:27.74 , wwc_bod_pday:40,},
	"Kenya":{ conv_kwh_co2:0.332297783 ,wwc_prot_con:21.17 , wwc_bod_pday:37,},
	"Kuwait":{ conv_kwh_co2:0.637316929 ,wwc_prot_con:33.945 , wwc_bod_pday:40,},
	"Lebanon":{ conv_kwh_co2:0.694755686 ,wwc_prot_con:30.66 , wwc_bod_pday:40,},
	"Luxembourg":{ conv_kwh_co2:0.276002537 ,wwc_prot_con:44.895 , wwc_bod_pday:60,},
	"Malaysia":{ conv_kwh_co2:0.74884244 ,wwc_prot_con:28.835 , wwc_bod_pday:40,},
	"Mexico":{ conv_kwh_co2:0.452483345 ,wwc_prot_con:33.58 , wwc_bod_pday:40,},
	"Mongolia":{ conv_kwh_co2:2.310868705 ,wwc_prot_con:26.28 , wwc_bod_pday:40,},
	"Morocco":{ conv_kwh_co2:0.731211458 ,wwc_prot_con:32.485 , wwc_bod_pday:37,},
	"Mozambique":{ conv_kwh_co2:0.000445032 ,wwc_prot_con:13.87 , wwc_bod_pday:37,},
	"Namibia":{ conv_kwh_co2:0.489803834 ,wwc_prot_con:24.455 , wwc_bod_pday:37,},
	"Nepal":{ conv_kwh_co2:0.00304179 ,wwc_prot_con:21.9 , wwc_bod_pday:40,},
	"Netherlands":{ conv_kwh_co2:0.413302564 ,wwc_prot_con:38.325 , wwc_bod_pday:60,},
	"New Zealand":{ conv_kwh_co2:0.197695588 ,wwc_prot_con:34.31 , wwc_bod_pday:60,},
	"Nicaragua":{ conv_kwh_co2:0.472119274 ,wwc_prot_con:22.63 , wwc_bod_pday:40,},
	"Nigeria":{ conv_kwh_co2:0.43963136 ,wwc_prot_con:22.63 , wwc_bod_pday:37,},
	"Norway":{ conv_kwh_co2:0.002240278 ,wwc_prot_con:39.055 , wwc_bod_pday:60,},
	"Pakistan":{ conv_kwh_co2:0.473378547 ,wwc_prot_con:20.805 , wwc_bod_pday:40,},
	"Panama":{ conv_kwh_co2:0.276797888 ,wwc_prot_con:25.915 , wwc_bod_pday:40,},
	"Peru":{ conv_kwh_co2:0.237721212 ,wwc_prot_con:24.455 , wwc_bod_pday:40,},
	"Philippines":{ conv_kwh_co2:0.52673385 ,wwc_prot_con:21.535 , wwc_bod_pday:40,},
	"Poland":{ conv_kwh_co2:1.196125502 ,wwc_prot_con:36.865 , wwc_bod_pday:60,},
	"Portugal":{ conv_kwh_co2:0.400151316 ,wwc_prot_con:41.61 , wwc_bod_pday:60,},
	"Republic of Korea":{ conv_kwh_co2:0.504377662 ,wwc_prot_con:32.12 , wwc_bod_pday:40,},
	"Russian Federation":{ conv_kwh_co2:0.513180381 ,wwc_prot_con:35.405 , wwc_bod_pday:60,},
	"Saudi Arabia":{ conv_kwh_co2:0.795591395 ,wwc_prot_con:31.755 , wwc_bod_pday:40,},
	"Senegal":{ conv_kwh_co2:0.5982594 ,wwc_prot_con:21.535 , wwc_bod_pday:37,},
	"South Africa":{ conv_kwh_co2:1.069026617 ,wwc_prot_con:29.565 , wwc_bod_pday:37,},
	"Spain":{ conv_kwh_co2:0.34287509 ,wwc_prot_con:39.42 , wwc_bod_pday:60,},
	"Sri Lanka":{ conv_kwh_co2:0.417247633 ,wwc_prot_con:20.075 , wwc_bod_pday:40,},
	"Sudan":{ conv_kwh_co2:0.614906086 ,wwc_prot_con:26.645 , wwc_bod_pday:37,},
	"Sweden":{ conv_kwh_co2:0.023033883 ,wwc_prot_con:39.055 , wwc_bod_pday:75,},
	"Switzerland":{ conv_kwh_co2:0.003177437 ,wwc_prot_con:33.58 , wwc_bod_pday:60,},
	"Syrian Arab Republic":{ conv_kwh_co2:0.639109712 ,wwc_prot_con:29.2 , wwc_bod_pday:40,},
	"Thailand":{ conv_kwh_co2:0.626742612 ,wwc_prot_con:20.805 , wwc_bod_pday:40,},
	"Togo":{ conv_kwh_co2:0.207239024 ,wwc_prot_con:17.885 , wwc_bod_pday:37,},
	"Tunisia":{ conv_kwh_co2:0.572169413 ,wwc_prot_con:33.945 , wwc_bod_pday:37,},
	"Turkey":{ conv_kwh_co2:0.865664547 ,wwc_prot_con:36.135 , wwc_bod_pday:38,},
	"United Arab Emirates":{ conv_kwh_co2:0.938297499 ,wwc_prot_con:37.96 , wwc_bod_pday:40,},
	"United Kingdom":{ conv_kwh_co2:0.508501975 ,wwc_prot_con:37.96 , wwc_bod_pday:60,},
	"United Republic of Tanzania":{ conv_kwh_co2:0.26675705 ,wwc_prot_con:18.25 , wwc_bod_pday:37,},
	"United States of America":{ conv_kwh_co2:0.547096737 ,wwc_prot_con:41.61 , wwc_bod_pday:85,},
	"Uruguay":{ conv_kwh_co2:0.303713979 ,wwc_prot_con:29.2 , wwc_bod_pday:40,},
	"Venezuela (Bolivarian Republic of)":{ conv_kwh_co2:0.208069719 ,wwc_prot_con:25.915 , wwc_bod_pday:40,},
	"Vietnam":{ conv_kwh_co2:0.466848028 ,wwc_prot_con:26.28 , wwc_bod_pday:40,},
	"Yemen":{ conv_kwh_co2:0.644106104 ,wwc_prot_con:19.71 , wwc_bod_pday:40,},
	"Zambia":{ conv_kwh_co2:0.003197305 ,wwc_prot_con:17.52 , wwc_bod_pday:37,},
	"Zimbabwe":{ conv_kwh_co2:0.600377947 ,wwc_prot_con:20.075 , wwc_bod_pday:37,},
};

/*
1: BRANDER, M. SOOD A. WYLIE, C. HAUGHTON, A. LOVELL, J., 2011,Technical Paper Electricity-specific emission factors for grid electricity, Ecometrica, 
2: FAO Statistics Division, 2010, Food Balance Sheets
3: IPCC, 2006, Guidelines for National Greenhouse Gas Inventories Volume 5 Waste
*/
