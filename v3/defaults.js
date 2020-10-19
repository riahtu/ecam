/*
 * Default configuration for ecam (backend and frontend)
*/

//frontend elements visible or not
ecam_logo.visible   = 1;
linear_menu.visible = 1;
stages_menu.visible = 0;

//backend: add substages
/*
for(let i=0;i<1;i++) stages_menu.add_substage('Water','Abstraction');
for(let i=0;i<1;i++) stages_menu.add_substage('Water','Treatment');
for(let i=0;i<1;i++) stages_menu.add_substage('Water','Distribution');
for(let i=0;i<1;i++) stages_menu.add_substage('Waste','Collection');
for(let i=0;i<1;i++) stages_menu.add_substage('Waste','Treatment');
for(let i=0;i<1;i++) stages_menu.add_substage('Waste','Onsite');
*/

//initial page to display
//ecam.show('overview');
variable.view('wsa_KPI_GHG_fuel');

//default values
Global.General.conv_kwh_co2 = 0.7; //conversion factor for grid electricity (kgCO2/kWh)
Global.General.prot_con     = 22;  //prot consumption                       (kg/person/year)
Global.General.bod_pday     = 37;  //BOD5                                   (g/person/day)
Global.General.bod_pday_fs  = 37;  //BOD5 in faecal sludge                  (g/person/day)
Global.Water.ws_resi_pop    = 1000;
Global.Waste.ww_resi_pop    = 2000;
Global.Waste.ww_vol_gene    = 150000;
