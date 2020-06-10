//DEFAULT VALUES FOR V3 DEVELOPMENT (BACKEND AND FRONTEND)

/*FRONTEND*/

//page elements
ecam_logo.visible     = 1;
linear_menu.visible   = 1;
sidebar.visible       = 0;

//page views
tier_a.visible        = 0;
emission_tree.visible = 0;
constants.visible     = 0;
landing.visible       = 0;
summary_ghg.visible   = 0;
summary_nrg.visible   = 0;
tier_b.visible        = 0;

variable.visible      = 1;
variable.id="fsc_bod_infl";
let loc = locate_variable(variable.id);
variable.localization.level=loc.level;
variable.localization.sublevel=loc.sublevel;

development.visible   = 0;

/*BACKEND*/

//general variables
Global.General.anyFuelEngines = true; //do you have any fuel engines in any stage?
Global.General.conv_kwh_co2   = 0.7;  //conversion factor for grid electricity (kgCO2/kWh)
Global.General.prot_con       = 22;   //prot consumption                       (kg/person/year)
Global.General.bod_pday       = 37;   //BOD5                                   (g/person/day)
Global.General.bod_pday_fs    = 37;   //BOD5 in faecal sludge                  (g/person/day)

//level 1 (ws, ww, fs)
Global.Water.ws_resi_pop             = 1000; //people
Global.Water.ws_serv_pop             =  900; //people
Global.Waste.ww_resi_pop             = 2000; //people
Global.Waste.Collection.wwc_conn_pop = 1900; //people
Global.Waste.Treatment.wwt_serv_pop  = 1800; //people
Global.Faecl.fs_resi_pop             =  100; //people
Global.Faecl.fs_onsi_pop             =   90; //people

//Water Abstraction
Global.Water.Abstraction.wsa_nrg_cons = 1000; //kWh
Global.Water.Abstraction.wsa_vol_conv =  500; //m3

//Wastewater Treatment
Global.Waste.Treatment.wwt_bod_infl = 100; //kg

