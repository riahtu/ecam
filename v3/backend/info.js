/*
	Info: one-level-depth object that stores magnitudes and units for all inputs and outputs
		descriptions in english are inside languages/en.php
		descriptions in spanish are inside languages/es.php
	Format:
		"code": { "magnitude": string, "unit": string }
*/

let Info={
  //IPCC 2019
  wwt_n2o_efac:{magnitude:"Mass/People/Time", unit:"gN2O/person/year"},
  fst_n2o_efac:{magnitude:"Mass/People/Time", unit:"gN2O/person/year"},

  ww_sludge_disposal_method:{magnitude:"Option",unit:"disposal method"},
  fs_serv_pop:{magnitude:"People",unit:"people"},

  //wst pump efficiency
  wst_nrg_pump:{magnitude:"Energy",unit:"kWh"},
  wst_vol_pump:{magnitude:"Volume",unit:"m3"},
  wst_pmp_head:{magnitude:"Head",unit:"m"},
  wst_sta_head:{magnitude:"Head",unit:"m"},
  wst_coll_len:{magnitude:"Distance",unit:"km"},
  wst_KPI_std_nrg_cons:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
  wst_KPI_un_head_loss:{magnitude:"Headloss/Distance",unit:"m/km"},
  wst_pmp_flow:{magnitude:"Flow",unit:"L/s"},
  wst_pmp_volt:{magnitude:"Voltage",unit:"V"},
  wst_pmp_amps:{magnitude:"Intensity",unit:"A"},
  wst_pmp_exff:{magnitude:"Efficiency",unit:"%"},
  wst_pmp_pf:  {magnitude:"Power factor",unit:"ratio"},
  c_wst_pmp_pw:{magnitude:"Power",unit:"kW"},
  wst_KPI_nrg_elec_eff:{magnitude:"Efficiency",unit:"%"},
  wst_KPI_std_nrg_newp:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
  wst_KPI_nrg_cons_new:{magnitude:"Energy",unit:"kWh"},
  wst_KPI_nrg_estm_sav:{magnitude:"Energy",unit:"kWh"},
  wst_KPI_ghg_estm_red:{magnitude:"Mass",unit:"kg CO2eq"},

  //wwt pump efficiency
  wwt_nrg_pump:{magnitude:"Energy",unit:"kWh"},
  wwt_vol_pump:{magnitude:"Volume",unit:"m3"},
  wwt_pmp_head:{magnitude:"Head",unit:"m"},
  wwt_sta_head:{magnitude:"Head",unit:"m"},
  wwt_coll_len:{magnitude:"Distance",unit:"km"},
  wwt_KPI_std_nrg_cons:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
  wwt_KPI_un_head_loss:{magnitude:"Headloss/Distance",unit:"m/km"},
  wwt_pmp_flow:{magnitude:"Flow",unit:"L/s"},
  wwt_pmp_volt:{magnitude:"Voltage",unit:"V"},
  wwt_pmp_amps:{magnitude:"Intensity",unit:"A"},
  wwt_pmp_exff:{magnitude:"Efficiency",unit:"%"},
  wwt_pmp_pf:  {magnitude:"Power factor",unit:"ratio"},
  c_wwt_pmp_pw:{magnitude:"Power",unit:"kW"},
  wwt_KPI_nrg_elec_eff:{magnitude:"Efficiency",unit:"%"},
  wwt_KPI_std_nrg_newp:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
  wwt_KPI_nrg_cons_new:{magnitude:"Energy",unit:"kWh"},
  wwt_KPI_nrg_estm_sav:{magnitude:"Energy",unit:"kWh"},
  wwt_KPI_ghg_estm_red:{magnitude:"Mass",unit:"kg CO2eq"},

  //wwd pump efficiency
  wwd_nrg_pump:{magnitude:"Energy",unit:"kWh"},
  wwd_vol_pump:{magnitude:"Volume",unit:"m3"},
  wwd_pmp_head:{magnitude:"Head",unit:"m"},
  wwd_sta_head:{magnitude:"Head",unit:"m"},
  wwd_coll_len:{magnitude:"Distance",unit:"km"},
  wwd_KPI_std_nrg_cons:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
  wwd_KPI_un_head_loss:{magnitude:"Headloss/Distance",unit:"m/km"},
  wwd_pmp_flow:{magnitude:"Flow",unit:"L/s"},
  wwd_pmp_volt:{magnitude:"Voltage",unit:"V"},
  wwd_pmp_amps:{magnitude:"Intensity",unit:"A"},
  wwd_pmp_exff:{magnitude:"Efficiency",unit:"%"},
  wwd_pmp_pf:  {magnitude:"Power factor",unit:"ratio"},
  c_wwd_pmp_pw:{magnitude:"Power",unit:"kW"},
  wwd_KPI_nrg_elec_eff:{magnitude:"Efficiency",unit:"%"},
  wwd_KPI_std_nrg_newp:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
  wwd_KPI_nrg_cons_new:{magnitude:"Energy",unit:"kWh"},
  wwd_KPI_nrg_estm_sav:{magnitude:"Energy",unit:"kWh"},
  wwd_KPI_ghg_estm_red:{magnitude:"Mass",unit:"kg CO2eq"},

  wwt_slu_lf_TVS:    {magnitude:"Percent", unit:"%"},
  wwt_slu_lf_N_cont: {magnitude:"Percent", unit:"%"},
  wwt_slu_la_N_cont: {magnitude:"Percent", unit:"%"},

  fsr_lf_TVS:{magnitude:"Percent", unit:"%"},
  fsr_la_N_cont:{magnitude:"Percent", unit:"%"},
  fsr_lf_N_cont:{magnitude:"Percent", unit:"%"},

  wwd_bod_effl: {magnitude:"Mass",      unit:"kg" },
  wwd_ch4_efac: {magnitude:"Mass/Mass", unit:"kgCH4/kgBOD" },
  wwd_KPI_GHG_tre:{magnitude:"Mass",unit:"kg CO2eq"},
  wwd_KPI_GHG_tre_ch4:{magnitude:"Mass",        unit:"kg CO2eq"},
  wwd_KPI_GHG_tre_n2o:{magnitude:"Mass",unit:"kg CO2eq"},

  ww_ch4_efac_unt: {magnitude:"Mass/Mass", unit:"kgCH4/kgBOD" },
  ww_ch4_efac_unc: {magnitude:"Mass/Mass", unit:"kgCH4/kgBOD" },

  fsr_ghg_avoided_land: {magnitude:"Mass",   unit:"kg CO2eq"},
  fsr_KPI_GHG_urine:    {magnitude:"Mass",   unit:"kg CO2eq"},

  fst_nrg_biog:       {magnitude:"Energy", unit:"kWh"},
  fst_SL_GHG_avoided: {magnitude:"Mass",   unit:"kg CO2eq"},

  fsr_type_tre:   {magnitude:"Option", unit:"Disposal type"},
  fs_vol_trck:    {magnitude:"Volume", unit:"L"},

	fs_SL_serv_pop: {magnitude:"Percentage",unit:"%"},
  fsc_fdensity:   {magnitude:"Concentration", unit:"kg/m3" },
  fsc_vol_trck:   {magnitude:"Volume", unit:"L"},
  fst_vol_trck:   {magnitude:"Volume", unit:"L"},
  fsr_vol_trck:   {magnitude:"Volume", unit:"L"},
  fsc_bod_conc_fs: {magnitude:"Concentration", unit:"kg/m3" },

  fsr_vol_fuel:        {magnitude:"Volume",    unit:"L" },

  //FS Reuse
  fsr_N_urine:          {magnitude:"Mass",        unit:"kg"},
  fsr_reused_N:         {magnitude:"Mass",        unit:"kg"},
  fsr_reused_P:         {magnitude:"Mass",        unit:"kg"},
  fsr_ghg_avoided_landapp:  {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_ghg_avoided_landfil:  {magnitude:"Mass",        unit:"kg CO2eq"},

  fsr_mass_landapp:         {magnitude:"Mass",        unit:"kg"},
  fsr_mass_landfil:         {magnitude:"Mass",        unit:"kg"},
  fsr_soil_typ:             {magnitude:"Option",      unit:"Soil type"},
  fsr_n2o_effl:             {magnitude:"Mass/Volume", unit:"mg/L"},
  fsr_vol_disc:             {magnitude:"Volume",      unit:"m3"},
  fsr_disp_typ:             {magnitude:"Option",      unit:"Disposal type"},
  fsr_vol_dumping:          {magnitude:"Volume",      unit:"m3"},
  fsr_dumping_pth:          {magnitude:"Option",      unit:"Dumping pathway"},

  fsr_fslu_typ:             {magnitude:"Option",      unit:"Type of FS"},
  fsr_fslu_typ_la:          {magnitude:"Option",      unit:"Type of FS"},
  fsr_fslu_typ_lf:          {magnitude:"Option",      unit:"Type of FS"},

  fsr_ghg_avoided_reuse_N:         {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_ghg_avoided_reuse_P:         {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_ghg_avoided_reuse:         {magnitude:"Mass",        unit:"kg CO2eq"},

  fsr_KPI_GHG_elec:         {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_KPI_GHG:              {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_KPI_GHG_landapp:      {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_KPI_GHG_landfil:      {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_KPI_GHG_landfil_n2o:  {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_KPI_GHG_landfil_ch4:  {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_KPI_GHG_dumping:      {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_KPI_GHG_dumping_n2o:  {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_KPI_GHG_dumping_ch4:  {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_KPI_GHG_tre_n2o:      {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_KPI_GHG_tre_ch4:      {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_KPI_GHG_tre:          {magnitude:"Mass",        unit:"kg CO2eq"},
  fsr_ch4_efac:             {magnitude:"Mass/Mass",   unit:"kgCH4/kgBOD" },
  fsr_ch4_efac_dumping:     {magnitude:"Mass/Mass",   unit:"kgCH4/kgBOD" },
  fsr_bod_conc_fs:          {magnitude:"Concentration", unit:"kg/m3" },
  fsr_bod_effl:             {magnitude:"Mass",      unit:"kg" },

  fsc_flooding:             {magnitude:"Option",      unit:"Yes/No"},

  //FS Treatment
  fst_biog_pro:        {magnitude:"Volume",    unit:"m3" },
  fst_biog_val:        {magnitude:"Volume",    unit:"m3" },
  fst_biog_fla:        {magnitude:"Volume",    unit:"m3" },
  fst_ch4_biog:        {magnitude:"Percent",   unit:"%" },
  fst_vol_fuel:        {magnitude:"Volume",    unit:"L" },
  fst_KPI_GHG_elec:    {magnitude:"Mass",      unit:"kg CO2eq" },
  fst_KPI_GHG_biog:    {magnitude:"Mass",      unit:"kg CO2eq" },
  fst_KPI_GHG:         {magnitude:"Mass",      unit:"kg CO2eq" },
  fst_bod_infl:        {magnitude:"Mass",      unit:"kg" },
  fst_bod_effl:        {magnitude:"Mass",      unit:"kg" },
  fst_bod_slud:        {magnitude:"Mass",      unit:"kg" },
  fst_ch4_efac:        {magnitude:"Mass/Mass", unit:"kgCH4/kgBOD" },
  fst_type_tre:        {magnitude:"Option",    unit:"Treatment type"},
  fst_KPI_GHG_tre_ch4: {magnitude:"Mass",      unit:"kg CO2eq"},
  fst_KPI_GHG_tre_n2o: {magnitude:"Mass",      unit:"kg CO2eq"},
  fst_KPI_GHG_tre:     {magnitude:"Mass",      unit:"kg CO2eq"},

  //FS Containment
  fsc_ch4_efac:     {magnitude:"Mass/Mass",  unit:"kgCH4/kgBOD"},
  fsc_cont_emp:     {magnitude:"Percentage", unit:"%"},
  fsc_type_tre:     {magnitude:"Option",     unit:"Containment type"},
  fsc_bod_infl:     {magnitude:"Mass",       unit:"kg"}, //influent bod load
  fsc_fslu_emp:     {magnitude:"Volume",     unit:"m3"}, //FS emptied
  fsc_bod_rmvd:     {magnitude:"Mass",       unit:"kg"}, //bod removed as FS
  fsc_KPI_GHG_elec: {magnitude:"Mass",       unit:"kg CO2eq"},
  fsc_KPI_GHG_cont: {magnitude:"Mass",       unit:"kg CO2eq"},
  fsc_KPI_GHG:      {magnitude:"Mass",       unit:"kg CO2eq"},

  //pump efficiency FSM
  fsc_nrg_pump:{magnitude:"Energy",unit:"kWh"},
  fsc_vol_pump:{magnitude:"Volume",unit:"m3"},
  fsc_pmp_head:{magnitude:"Head",unit:"m"},
  fsc_sta_head:{magnitude:"Head",unit:"m"},
  fsc_coll_len:{magnitude:"Distance",unit:"km"},
  fsc_KPI_std_nrg_cons:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
  fsc_KPI_un_head_loss:{magnitude:"Headloss/Distance",unit:"m/km"},
  fsc_pmp_flow:{magnitude:"Flow",unit:"L/s"},
  fsc_pmp_volt:{magnitude:"Voltage",unit:"V"},
  fsc_pmp_amps:{magnitude:"Intensity",unit:"A"},
  fsc_pmp_exff:{magnitude:"Efficiency",unit:"%"},
  fsc_pmp_pf:  {magnitude:"Power factor",unit:"ratio"},
  c_fsc_pmp_pw:{magnitude:"Power",unit:"kW"},
  fsc_KPI_nrg_elec_eff:{magnitude:"Efficiency",unit:"%"},
  fsc_KPI_std_nrg_newp:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
  fsc_KPI_nrg_cons_new:{magnitude:"Energy",unit:"kWh"},
  fsc_KPI_nrg_estm_sav:{magnitude:"Energy",unit:"kWh"},
  fsc_KPI_ghg_estm_red:{magnitude:"Mass",unit:"kg CO2eq"},

  fst_nrg_pump:{magnitude:"Energy",unit:"kWh"},
  fst_vol_pump:{magnitude:"Volume",unit:"m3"},
  fst_pmp_head:{magnitude:"Head",unit:"m"},
  fst_sta_head:{magnitude:"Head",unit:"m"},
  fst_coll_len:{magnitude:"Distance",unit:"km"},
  fst_KPI_std_nrg_cons:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
  fst_KPI_un_head_loss:{magnitude:"Headloss/Distance",unit:"m/km"},
  fst_pmp_flow:{magnitude:"Flow",unit:"L/s"},
  fst_pmp_volt:{magnitude:"Voltage",unit:"V"},
  fst_pmp_amps:{magnitude:"Intensity",unit:"A"},
  fst_pmp_exff:{magnitude:"Efficiency",unit:"%"},
  fst_pmp_pf:  {magnitude:"Power factor",unit:"ratio"},
  c_fst_pmp_pw:{magnitude:"Power",unit:"kW"},
  fst_KPI_nrg_elec_eff:{magnitude:"Efficiency",unit:"%"},
  fst_KPI_std_nrg_newp:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
  fst_KPI_nrg_cons_new:{magnitude:"Energy",unit:"kWh"},
  fst_KPI_nrg_estm_sav:{magnitude:"Energy",unit:"kWh"},
  fst_KPI_ghg_estm_red:{magnitude:"Mass",unit:"kg CO2eq"},

  fsr_nrg_pump:{magnitude:"Energy",unit:"kWh"},
  fsr_vol_pump:{magnitude:"Volume",unit:"m3"},
  fsr_pmp_head:{magnitude:"Head",unit:"m"},
  fsr_sta_head:{magnitude:"Head",unit:"m"},
  fsr_coll_len:{magnitude:"Distance",unit:"km"},
  fsr_KPI_std_nrg_cons:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
  fsr_KPI_un_head_loss:{magnitude:"Headloss/Distance",unit:"m/km"},
  fsr_pmp_flow:{magnitude:"Flow",unit:"L/s"},
  fsr_pmp_volt:{magnitude:"Voltage",unit:"V"},
  fsr_pmp_amps:{magnitude:"Intensity",unit:"A"},
  fsr_pmp_exff:{magnitude:"Efficiency",unit:"%"},
  fsr_pmp_pf:  {magnitude:"Power factor",unit:"ratio"},
  c_fsr_pmp_pw:{magnitude:"Power",unit:"kW"},
  fsr_KPI_nrg_elec_eff:{magnitude:"Efficiency",unit:"%"},
  fsr_KPI_std_nrg_newp:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
  fsr_KPI_nrg_cons_new:{magnitude:"Energy",unit:"kWh"},
  fsr_KPI_nrg_estm_sav:{magnitude:"Energy",unit:"kWh"},
  fsr_KPI_ghg_estm_red:{magnitude:"Mass",unit:"kg CO2eq"},

  //LEVEL1 FSM
  fs_resi_pop:     {magnitude:"People",     unit:"people"},
  fsc_onsi_pop:    {magnitude:"People",     unit:"people"},
  fsc_open_pop:    {magnitude:"People",     unit:"people"},
  fs_KPI_GHG:      {magnitude:"Mass", unit:"kg CO2eq"},

  //fsm energy consumed
  fs_nrg_cons:  {magnitude:"Energy", unit:"kWh"},
  fsc_nrg_cons: {magnitude:"Energy", unit:"kWh"},
  fst_nrg_cons: {magnitude:"Energy", unit:"kWh"},
  fsr_nrg_cons: {magnitude:"Energy", unit:"kWh"},

  //after water reuse edits
  ww_GHG_avoided:     {magnitude:"Mass", unit:"kg CO2eq"},
  wwt_SL_GHG_avoided: {magnitude:"Mass", unit:"kg CO2eq"},
  wwt_slu_comp_C_seq: {magnitude:"Mass", unit:"kg CO2eq"},
  wwt_slu_app_C_seq:  {magnitude:"Mass", unit:"kg CO2eq"},
  wwt_slu_land_C_seq: {magnitude:"Mass", unit:"kg CO2eq"},
  wwt_wr_C_seq_slu:   {magnitude:"Mass", unit:"kg CO2eq"},

  //wate reuse
  wwd_wr_N_rec:     {magnitude:"Mass",   unit:"kg"},
  wwd_wr_P_rec:     {magnitude:"Mass",   unit:"kg"},
  wwd_wr_adnrg:     {magnitude:"Energy", unit:"kWh"},
  wwd_wr_vol_d:     {magnitude:"Volume", unit:"m3"},
  wwd_wr_GHG_avo_N: {magnitude:"Mass",   unit:"kg CO2eq"},
  wwd_wr_GHG_avo_P: {magnitude:"Mass",   unit:"kg CO2eq"},
  wwd_wr_GHG_avo:   {magnitude:"Mass",   unit:"kg CO2eq"},
  wwd_wr_nrg_sav:   {magnitude:"Energy", unit:"kWh"},
  wwd_wr_GHG_avo_d: {magnitude:"Mass",   unit:"kg CO2eq"},

  //pump edits
  wsa_pmp_pf: {magnitude:"Power factor",unit:"ratio"},
  wsd_pmp_pf: {magnitude:"Power factor",unit:"ratio"},
  wwc_pmp_pf: {magnitude:"Power factor",unit:"ratio"},

  //untreated, onsite and uncollected
  wwc_KPI_GHG_unt:     {magnitude:"Mass",unit:"kg CO2eq"},
  wwc_KPI_GHG_unt_n2o: {magnitude:"Mass",unit:"kg CO2eq"},
  wwc_KPI_GHG_unt_ch4: {magnitude:"Mass",unit:"kg CO2eq"},
  ww_SL_ghg_unc:       {magnitude:"Mass",unit:"kg CO2eq"},
  ww_SL_ghg_unc_ch4:   {magnitude:"Mass",unit:"kg CO2eq"},
  ww_SL_ghg_unc_n2o:   {magnitude:"Mass",unit:"kg CO2eq"},

	//GENERAL
	Days:{magnitude:"Time",unit:"days"},
	Years:{magnitude:"Time",unit:"years"},
	conv_kwh_co2:{magnitude:"Conversion",unit:"kg CO2/kWh"},
  prot_con:{magnitude:"Annual per capita consumption",unit:"kg/person/year"},
  bod_pday:{magnitude:"Mass/inhab/time",unit:"g/person/day"},
  bod_pday_fs:{magnitude:"Mass/inhab/time",unit:"g/person/day"},
	TotalGHG :{magnitude:"Mass",unit:"kg CO2eq"},
  TotalNRG :{magnitude:"Energy", unit:"kWh"},
	content_C:{magnitude:"Mass",unit:"kg C"},
	content_N:{magnitude:"Mass",unit:"kg N"},

	/* +============+ */
	/* | Fuel types |
	/* +============+ */
	wsa_fuel_typ:{magnitude:"Option",unit:"Fuel type"},
	wst_fuel_typ:{magnitude:"Option",unit:"Fuel type"},
	wsd_fuel_typ:{magnitude:"Option",unit:"Fuel type"},
	wwc_fuel_typ:{magnitude:"Option",unit:"Fuel type"},
	wwt_fuel_typ:{magnitude:"Option",unit:"Fuel type"},
	wwd_fuel_typ:{magnitude:"Option",unit:"Fuel type"},
	wsd_trck_typ:{magnitude:"Option",unit:"Fuel type"},
	wwt_trck_typ:{magnitude:"Option",unit:"Fuel type"},
	wwd_trck_typ:{magnitude:"Option",unit:"Fuel type"},
	wwt_dige_typ:{magnitude:"Option",unit:"Fuel type"},
  fst_fuel_typ:{magnitude:"Option",unit:"Fuel type"},
  fsr_fuel_typ:{magnitude:"Option",unit:"Fuel type"},
  fsc_trck_typ:{magnitude:"Option",unit:"Fuel type"},
  fst_trck_typ:{magnitude:"Option",unit:"Fuel type"},
  fsr_trck_typ:{magnitude:"Option",unit:"Fuel type"},

	//fuel engines
	wsa_KPI_GHG_fuel:    {magnitude:"Mass",unit:"kg CO2eq"},
	wsa_KPI_GHG_fuel_co2:{magnitude:"Mass",unit:"kg CO2eq"},
	wsa_KPI_GHG_fuel_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
	wsa_KPI_GHG_fuel_ch4:{magnitude:"Mass",unit:"kg CO2eq"},
	wst_KPI_GHG_fuel:    {magnitude:"Mass",unit:"kg CO2eq"},
	wst_KPI_GHG_fuel_co2:{magnitude:"Mass",unit:"kg CO2eq"},
	wst_KPI_GHG_fuel_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
	wst_KPI_GHG_fuel_ch4:{magnitude:"Mass",unit:"kg CO2eq"},
	wsd_KPI_GHG_fuel:    {magnitude:"Mass",unit:"kg CO2eq"},
	wsd_KPI_GHG_fuel_co2:{magnitude:"Mass",unit:"kg CO2eq"},
	wsd_KPI_GHG_fuel_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
	wsd_KPI_GHG_fuel_ch4:{magnitude:"Mass",unit:"kg CO2eq"},
	wwc_KPI_GHG_fuel:    {magnitude:"Mass",unit:"kg CO2eq"},
	wwc_KPI_GHG_fuel_co2:{magnitude:"Mass",unit:"kg CO2eq"},
	wwc_KPI_GHG_fuel_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
	wwc_KPI_GHG_fuel_ch4:{magnitude:"Mass",unit:"kg CO2eq"},
	wwt_KPI_GHG_fuel:    {magnitude:"Mass",unit:"kg CO2eq"},
	wwt_KPI_GHG_fuel_co2:{magnitude:"Mass",unit:"kg CO2eq"},
	wwt_KPI_GHG_fuel_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
	wwt_KPI_GHG_fuel_ch4:{magnitude:"Mass",unit:"kg CO2eq"},
	wwd_KPI_GHG_fuel:    {magnitude:"Mass",unit:"kg CO2eq"},
	wwd_KPI_GHG_fuel_co2:{magnitude:"Mass",unit:"kg CO2eq"},
	wwd_KPI_GHG_fuel_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
	wwd_KPI_GHG_fuel_ch4:{magnitude:"Mass",unit:"kg CO2eq"},
  fsr_KPI_GHG_fuel:    {magnitude:"Mass",unit:"kg CO2eq"},
  fsr_KPI_GHG_fuel_co2:{magnitude:"Mass",unit:"kg CO2eq"},
  fsr_KPI_GHG_fuel_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
  fsr_KPI_GHG_fuel_ch4:{magnitude:"Mass",unit:"kg CO2eq"},
  fst_KPI_GHG_fuel:    {magnitude:"Mass",unit:"kg CO2eq"},
  fst_KPI_GHG_fuel_co2:{magnitude:"Mass",unit:"kg CO2eq"},
  fst_KPI_GHG_fuel_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
  fst_KPI_GHG_fuel_ch4:{magnitude:"Mass",unit:"kg CO2eq"},

  //fuel trucks
  fsc_KPI_GHG_trck:    {magnitude:"Mass",unit:"kg CO2eq"},
  fsc_KPI_GHG_trck_co2:{magnitude:"Mass",unit:"kg CO2eq"},
  fsc_KPI_GHG_trck_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
  fsc_KPI_GHG_trck_ch4:{magnitude:"Mass",unit:"kg CO2eq"},
  fst_KPI_GHG_trck:    {magnitude:"Mass",unit:"kg CO2eq"},
  fst_KPI_GHG_trck_co2:{magnitude:"Mass",unit:"kg CO2eq"},
  fst_KPI_GHG_trck_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
  fst_KPI_GHG_trck_ch4:{magnitude:"Mass",unit:"kg CO2eq"},
  fsr_KPI_GHG_trck:    {magnitude:"Mass",unit:"kg CO2eq"},
  fsr_KPI_GHG_trck_co2:{magnitude:"Mass",unit:"kg CO2eq"},
  fsr_KPI_GHG_trck_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
  fsr_KPI_GHG_trck_ch4:{magnitude:"Mass",unit:"kg CO2eq"},

	/* +================+ */
	/* | Service levels | */
	/* +================+ */
	//Water Supply
	ws_SL_serv_pop:{magnitude:"Percentage",unit:"%"},
	ws_SL_auth_con:{magnitude:"Volume/inhab/time",unit:"L/serv.pop./day"},
	ws_SL_nrg_cost:{magnitude:"Percentage",unit:"%"},

	//Wastewater
	ww_SL_serv_pop:{magnitude:"Percentage",unit:"%"},
	ww_SL_treat_m3:{magnitude:"Percentage",unit:"%"},
	ww_SL_nrg_cost:{magnitude:"Percentage",unit:"%"},

	//L1 Water Supply
	ws_resi_pop:{magnitude:"People", unit:"people"},
	wsd_serv_pop:{magnitude:"People", unit:"people"},
	ws_nrg_cons:{magnitude:"Energy",unit:"kWh"},
	ws_vol_fuel:{magnitude:"Volume",unit:"L"},
	ws_nrg_cost:{magnitude:"Currency",unit:"USD"},
	ws_run_cost:{magnitude:"Currency",unit:"USD"},
	ws_KPI_GHG :{magnitude:"Mass",unit:"kg CO2eq"},

	//L1 Wastewater
	ww_resi_pop:{magnitude:"People", unit:"people"},
	ww_conn_pop:{magnitude:"People", unit:"people"},
	ww_serv_pop:{magnitude:"People", unit:"people"},
  ww_uncl_pop:{magnitude:"People", unit:"people"},
  ww_untr_pop:{magnitude:"People", unit:"people"},

  ww_nrg_cons:{magnitude:"Energy",unit:"kWh"},
  ww_nrg_cost:{magnitude:"Currency",unit:"USD"},
  ww_run_cost:{magnitude:"Currency",unit:"USD"},
	ww_vol_fuel:{magnitude:"Volume",unit:"L"},
	ww_KPI_GHG :{magnitude:"Mass",unit:"kg CO2eq"},

	//L2 Water Abstraction
	wsa_nrg_cons:{magnitude:"Energy",unit:"kWh"},
	wsa_nrg_pump:{magnitude:"Energy",unit:"kWh"},
	wsa_vol_conv:{magnitude:"Volume",unit:"m3"},
	wsa_vol_pump:{magnitude:"Volume",unit:"m3"},
	wsa_vol_fuel:{magnitude:"Volume",unit:"L"},
	wsa_KPI_std_nrg_cons:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
	wsa_pmp_head:{magnitude:"Head",unit:"m"},
	wsa_sta_head:{magnitude:"Head",unit:"m"},
	wsa_main_len:{magnitude:"Distance",unit:"km"},
	wsa_KPI_un_head_loss:{magnitude:"Headloss/Distance",unit:"m/km"},
	wsa_KPI_GHG_elec:{magnitude:"Mass",unit:"kg CO2eq"},
	wsa_KPI_GHG:{magnitude:"Mass",unit:"kg CO2eq"},
	wsa_nrg_per_abs_watr:{magnitude:"Energy/Volume",unit:"kWh/m3"},
  wsa_nrg_per_pmp_watr:{magnitude:"Energy/Volume",unit:"kWh/m3"},
	wsa_pmp_type:{magnitude:"Option",unit:"Pump Type"},
	wsa_pmp_size:{magnitude:"Option",unit:"Pump Size"},
	wsa_pmp_flow:{magnitude:"Flow",unit:"L/s"},
	wsa_pmp_volt:{magnitude:"Voltage",unit:"V"},
	wsa_pmp_amps:{magnitude:"Intensity",unit:"A"},
	wsa_pmp_exff:{magnitude:"Efficiency",unit:"%"},
	c_wsa_pmp_pw:{magnitude:"Power",unit:"kW"},
	wsa_KPI_nrg_elec_eff:{magnitude:"Efficiency",unit:"%"},
	wsa_KPI_std_nrg_newp:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
	wsa_KPI_nrg_cons_new:{magnitude:"Energy",unit:"kWh"},
	wsa_KPI_nrg_estm_sav:{magnitude:"Energy",unit:"kWh"},
	wsa_KPI_ghg_estm_red:{magnitude:"Mass",unit:"kg CO2eq"},

	//L2 Water Treatment
	wst_vol_trea:{magnitude:"Volume",unit:"m3"},
	wst_vol_fuel:{magnitude:"Volume",unit:"L"},
	wst_nrg_cons:{magnitude:"Energy",unit:"kWh"},
	wst_tst_carr:{magnitude:"Percentage",unit:"%"},
	wst_mass_slu:{magnitude:"Mass",unit:"kg"},
	wst_trea_cap:{magnitude:"Volume",unit:"m3"},
	wst_treatmen:{magnitude:"Option",unit:"Technology"},
	wst_KPI_nrg_per_m3:{magnitude:"Energy/Volume",unit:"kWh/m3"},
	wst_KPI_slu_per_m3:{magnitude:"Mass/Volume",unit:"kg/m3"},
	wst_KPI_capac_util:{magnitude:"Percentage",unit:"%"},
	wst_KPI_tst_carr:{magnitude:"Percentage",unit:"%"},
	wst_KPI_GHG:{magnitude:"Mass",unit:"kg CO2eq"},
	wst_KPI_GHG_elec:{magnitude:"Mass",unit:"kg CO2eq"},

	//L2 Water Distribution
	wsd_nrg_cons:{magnitude:"Energy",unit:"kWh"},
	wsd_nrg_pump:{magnitude:"Energy",unit:"kWh"},
	wsd_vol_dist:{magnitude:"Volume",unit:"m3"},
	wsd_auth_con:{magnitude:"Volume",unit:"m3"},
	wsd_bill_con:{magnitude:"Volume",unit:"m3"},

	wsd_SL_nr_water:{magnitude:"Percentage",unit:"%"},
	wsd_SL_ghg_attr:{magnitude:"Mass",unit:"kg CO2eq"},
	wsd_SL_GHG_nrw:{magnitude:"Mass",unit:"kg CO2eq"},
	wst_SL_GHG_nrw:{magnitude:"Mass",unit:"kg CO2eq"},
	wsa_SL_GHG_nrw:{magnitude:"Mass",unit:"kg CO2eq"},
	wsd_SL_water_loss:{magnitude:"Percentage",unit:"%"},

	wsd_deli_pts:{magnitude:"Number",unit:"number"},
	wsd_ser_cons:{magnitude:"Number",unit:"number"},
	wsd_time_pre:{magnitude:"% Time",unit:"hours/day"},
	wsd_min_pres:{magnitude:"Pressure",unit:"m"},
	wsd_hi_no_el:{magnitude:"Elevation",unit:"m asl"},
	wsd_lo_no_el:{magnitude:"Elevation",unit:"m asl"},
	wsd_av_no_el:{magnitude:"Elevation",unit:"m asl"},
	wsd_wt_el_no:{magnitude:"Elevation",unit:"m"},
	wsd_vol_pump:{magnitude:"Volume",unit:"m3"},
	wsd_pmp_head:{magnitude:"Head",unit:"m"},
	wsd_main_len:{magnitude:"Distance",unit:"km"},
	wsd_vol_fuel:{magnitude:"Volume",unit:"L"},
	wsd_vol_trck:{magnitude:"Volume",unit:"L"},
	wsd_KPI_nrg_per_m3:{magnitude:"Energy/Volume",unit:"kWh/m3"},
	wsd_KPI_nrg_per_vd:{magnitude:"Energy/Volume",unit:"kWh/m3"},
	wsd_SL_pres_ade:{magnitude:"Percentage",unit:"%"},
	wsd_SL_cont_sup:{magnitude:"Percentage",unit:"%"},
	c_wsd_nrg_natu:{magnitude:"Energy",unit:"kWh"},
	c_wsd_nrg_mini:{magnitude:"Energy",unit:"kWh"},
	c_wsd_nrg_supp:{magnitude:"Energy",unit:"kWh"},
	c_wsd_nrg_topo:{magnitude:"Energy",unit:"kWh"},
	wsd_KPI_nrg_efficien:{magnitude:"Percent",unit:"%"},
	wsd_KPI_nrg_topgraph:{magnitude:"Percent",unit:"%"},
	wsd_KPI_std_nrg_cons:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
	wsd_KPI_water_losses:{magnitude:"Volume/Distance/Time",unit:"m3/km/year"},
	wsd_KPI_un_head_loss:{magnitude:"Headloss/Distance",unit:"m/km"},
	wsd_pmp_size:{magnitude:"Option",unit:"Pump Size"},
	wsd_sta_head:{magnitude:"Head",unit:"m"},
	wsd_KPI_GHG_elec:{magnitude:"Mass",unit:"kg CO2eq"},

	wsd_KPI_GHG_trck:     {magnitude:"Mass",               unit:"kg CO2eq"},
	wsd_KPI_GHG_trck_co2: {magnitude:"Mass",               unit:"kg CO2eq"},
	wsd_KPI_GHG_trck_n2o: {magnitude:"Mass",               unit:"kg CO2eq"},
	wsd_KPI_GHG_trck_ch4: {magnitude:"Mass",               unit:"kg CO2eq"},
  wsd_KPI_GHG:          {magnitude:"Mass",               unit:"kg CO2eq"},
  wsd_pmp_flow:         {magnitude:"Flow",               unit:"L/s"},
  wsd_pmp_volt:         {magnitude:"Voltage",            unit:"V"},
  wsd_pmp_amps:         {magnitude:"Intensity",          unit:"A"},
  wsd_pmp_exff:         {magnitude:"Efficiency",         unit:"%"},
  c_wsd_pmp_pw:         {magnitude:"Power",              unit:"kW"},
  wsd_KPI_nrg_elec_eff: {magnitude:"Efficiency",         unit:"%"},
  wsd_KPI_std_nrg_newp: {magnitude:"Energy/Volume/Head", unit:"kWh/m3/100m"},
  wsd_KPI_nrg_cons_new: {magnitude:"Energy",             unit:"kWh"},
  wsd_KPI_nrg_estm_sav: {magnitude:"Energy",             unit:"kWh"},
  wsd_KPI_ghg_estm_red: {magnitude:"Mass",               unit:"kg CO2eq"},

	//L2 Wastewater Collection
	wwc_vol_coll:{magnitude:"Volume",unit:"m3"},
  wwc_vol_conv:{magnitude:"Volume",unit:"m3"},
	wwc_nrg_cons:{magnitude:"Energy",unit:"kWh"},
  wwc_conn_pop:{magnitude:"People",unit:"people"},
	wwc_vol_pump:{magnitude:"Volume",unit:"m3"},
	wwc_nrg_pump:{magnitude:"Energy",unit:"kWh"},
	wwc_pmp_head:{magnitude:"Head",unit:"m"},
	wwc_sta_head:{magnitude:"Head",unit:"m"},
	wwc_vol_fuel:{magnitude:"Volume",unit:"L"},
	wwc_coll_len:{magnitude:"Distance",unit:"km"},
	wwc_wet_flow:{magnitude:"Average Flow",unit:"m3/day"},
	wwc_dry_flow:{magnitude:"Average Flow",unit:"m3/day"},
	wwc_rain_day:{magnitude:"Time",unit:"day"},
	c_wwc_vol_infl:{magnitude:"Volume",unit:"m3"},
	wwc_SL_GHG_ii:{magnitude:"Mass",unit:"kg CO2eq"},
	wwc_SL_fratio:{magnitude:"No dimension",unit:"ratio"},
	wwc_SL_inf_emis:{magnitude:"Mass",unit:"kg CO2eq"},
	wwc_SL_GHG_inf:{magnitude:"Mass",unit:"kg CO2eq"},
	wwt_SL_GHG_inf:{magnitude:"Mass",unit:"kg CO2eq"},
	wwd_SL_GHG_inf:{magnitude:"Mass",unit:"kg CO2eq"},
	wwc_SL_conn_pop:{magnitude:"People",unit:"%"},
	wwc_KPI_nrg_per_m3:{magnitude:"Energy/Volume",unit:"kWh/m3"},
	wwc_KPI_std_nrg_cons:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
	wwc_KPI_un_head_loss:{magnitude:"Headloss/Distance",unit:"m/km"},
	wwc_KPI_GHG_elec:{magnitude:"Mass",unit:"kg CO2eq"},

	wwc_KPI_GHG:{magnitude:"Mass",unit:"kg CO2eq"},
	wwc_pmp_flow:{magnitude:"Flow",unit:"L/s"},
	wwc_pmp_volt:{magnitude:"Voltage",unit:"V"},
	wwc_pmp_amps:{magnitude:"Intensity",unit:"A"},
	wwc_pmp_exff:{magnitude:"Efficiency",unit:"%"},
	c_wwc_pmp_pw:{magnitude:"Power",unit:"kW"},
	wwc_KPI_nrg_elec_eff:{magnitude:"Efficiency",unit:"%"},
	wwc_KPI_std_nrg_newp:{magnitude:"Energy/Volume/Head",unit:"kWh/m3/100m"},
	wwc_KPI_nrg_cons_new:{magnitude:"Energy",unit:"kWh"},
	wwc_KPI_nrg_estm_sav:{magnitude:"Energy",unit:"kWh"},
	wwc_KPI_ghg_estm_red:{magnitude:"Mass",unit:"kg CO2eq"},

	//L2 Wastewater Treatment
  wwt_serv_pop:{magnitude:"People",unit:"people"},
	wwt_biog_pro:{magnitude:"Volume",unit:"m3"},
	wwt_biog_val:{magnitude:"Volume",unit:"m3"},
	wwt_vol_trea:{magnitude:"Volume",unit:"m3"},
	wwt_nrg_cons:{magnitude:"Energy",unit:"kWh"},
	wwt_vol_fuel:{magnitude:"Volume",unit:"L"},
	wwt_bod_infl:{magnitude:"Mass",unit:"kg"},
	wwt_bod_effl:{magnitude:"Mass",unit:"kg"},
	wwt_bod_slud:{magnitude:"Mass",unit:"kg"},
	wwt_nrg_biog:{magnitude:"Energy",unit:"kWh"},
	wwt_ch4_biog:{magnitude:"Percentage",unit:"%"},
	wwt_tst_cmpl:{magnitude:"Number",unit:"number"},
	wwt_tst_cond:{magnitude:"Number",unit:"number"},
	wwt_mass_slu:{magnitude:"Mass",unit:"kg"},
	wwt_dryw_slu:{magnitude:"Mass",unit:"kg"},
	wwt_trea_cap:{magnitude:"Volume",unit:"m3"},
  wwt_vol_tslu:{magnitude:"Volume",unit:"L"},

	wwt_type_tre:{magnitude:"Option",unit:"Technology"},
	wwt_slu_disp:{magnitude:"Option",unit:"Sludge type disposed of"},
	wwt_slu_type:{magnitude:"Option",unit:"Disposal type"},
	wwt_ch4_efac:{magnitude:"Mass/Mass",unit:"kgCH4/kgBOD"},
	c_wwt_nrg_biog:{magnitude:"Energy",unit:"kWh"},
	c_wwt_bod_rmvd:{magnitude:"Mass",unit:"kg"},
	wwt_biog_fla:{magnitude:"Volume",unit:"m3"},
	wwt_KPI_nrg_per_m3:{magnitude:"Energy/Volume",unit:"kWh/m3"},
	wwt_KPI_nrg_per_kg:{magnitude:"Energy/Mass",unit:"kWh/kg"},
	wwt_KPI_biog_x_bod:{magnitude:"Volume/Mass",unit:"Nm3/kg"},
	wwt_KPI_nrg_biogas:{magnitude:"Energy/Volume",unit:"kWh/m3"},
	wwt_KPI_nrg_x_biog:{magnitude:"Percent",unit:"%"},
	wwt_KPI_sludg_prod:{magnitude:"Mass/Volume",unit:"kg/m3"},
	wwt_KPI_dry_sludge:{magnitude:"Percent",unit:"% DW"},
	wwt_KPI_capac_util:{magnitude:"Percent",unit:"%"},
	wwt_SL_qual_com :{magnitude:"Percentage",unit:"%"},
  wwt_SL_vol_pday:{magnitude:"Volume/inhab/time",unit:"L/serv.pop./day"},
	wwt_KPI_nrg_per_pump:{magnitude:"Energy/Volume",unit:"kWh/m3"},
	wwt_KPI_GHG_elec:{magnitude:"Mass",unit:"kg CO2eq"},
	wwt_KPI_GHG:{magnitude:"Mass",unit:"kg CO2eq"},
	wwt_KPI_GHG_tre_ch4:{magnitude:"Mass",unit:"kg CO2eq"},
	wwt_KPI_GHG_tre_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
	wwt_KPI_GHG_tre:{magnitude:"Mass",unit:"kg CO2eq"},
	wwt_KPI_GHG_biog:{magnitude:"Mass",unit:"kg CO2eq"},

  wwt_GHG_tre_n2o:{magnitude:"Mass",unit:"kg"},//input

	//sludge mgmt
	wwt_fuel_dig:{magnitude:"Volume",unit:"L"},
	wwt_mass_slu_app:{magnitude:"Mass",unit:"kg"},
	wwt_mass_slu_comp:{magnitude:"Mass",unit:"kg"},
	wwt_mass_slu_inc:{magnitude:"Mass",unit:"kg"},
	wwt_mass_slu_land:{magnitude:"Mass",unit:"kg"},
	wwt_mass_slu_sto:{magnitude:"Mass",unit:"kg"},
	wwt_mass_slu_stock:{magnitude:"Mass",unit:"kg"},
	wwt_temp_inc:{magnitude:"Temperature",unit:"K"},
	wwt_time_slu_sto:{magnitude:"Storage time",unit:"day"},
	wwt_soil_typ:{magnitude:"Option",unit:"Soil type"},
	c_wwt_ch4_pot:{magnitude:"Mass",unit:"kg CH4"},
  wwt_KPI_GHG_dig_fuel:{magnitude:"Mass",      unit:"kg CO2eq"},
  wwt_KPI_GHG_dig_fuel_co2:{magnitude:"Mass",  unit:"kg CO2eq"},
  wwt_KPI_GHG_dig_fuel_n2o:{magnitude:"Mass",  unit:"kg CO2eq"},
  wwt_KPI_GHG_dig_fuel_ch4:{magnitude:"Mass",  unit:"kg CO2eq"},
  wwt_slu_storage_ch4:{magnitude:"Mass",       unit:"kg CO2eq"},
  wwt_slu_composting_ch4:{magnitude:"Mass",    unit:"kg CO2eq"},
  wwt_slu_composting_n2o:{magnitude:"Mass",    unit:"kg CO2eq"},
  wwt_slu_inciner_ch4:{magnitude:"Mass",       unit:"kg CO2eq"},
  wwt_slu_inciner_n2o:{magnitude:"Mass",       unit:"kg CO2eq"},
  wwt_slu_landapp_n2o:{magnitude:"Mass",       unit:"kg CO2eq"},
  wwt_slu_landfill_ch4:{magnitude:"Mass",      unit:"kg CO2eq"},
  wwt_slu_landfill_n2o:{magnitude:"Mass",      unit:"kg CO2eq"},
  wwt_KPI_ghg_sto_co2eq:{magnitude:"Mass",     unit:"kg CO2eq"},
  wwt_KPI_ghg_comp_co2eq:{magnitude:"Mass",    unit:"kg CO2eq"},
  wwt_KPI_ghg_inc_co2eq:{magnitude:"Mass",     unit:"kg CO2eq"},
  wwt_KPI_ghg_app_co2eq:{magnitude:"Mass",     unit:"kg CO2eq"},
  wwt_KPI_ghg_land_co2eq:{magnitude:"Mass",    unit:"kg CO2eq"},
  wwt_KPI_ghg_stock_co2eq:{magnitude:"Mass",   unit:"kg CO2eq"},
  wwt_KPI_ghg_tsludge:{magnitude:"Mass",       unit:"kg CO2eq"},
  wwt_KPI_ghg_tsludge_co2:{magnitude:"Mass",   unit:"kg CO2eq"},
  wwt_KPI_ghg_tsludge_n2o:{magnitude:"Mass",   unit:"kg CO2eq"},
  wwt_KPI_ghg_tsludge_ch4:{magnitude:"Mass",   unit:"kg CO2eq"},
  wwt_KPI_GHG_slu:{magnitude:"Mass",           unit:"kg CO2eq"},

	//L2 Wastewater Discharge
	wwd_vol_disc:{magnitude:"Volume",unit:"m3"},
  wwd_total_m3:{magnitude:"Volume",unit:"m3"},
	wwd_nrg_cons:{magnitude:"Energy",unit:"kWh"},
	wwd_vol_fuel:{magnitude:"Volume",unit:"L"},
	wwd_vol_trck:{magnitude:"Volume",unit:"L"},
	wwd_vol_nonp:{magnitude:"Volume",unit:"m3"},
	wwd_n2o_effl:{magnitude:"Mass/Volume",unit:"mg/L"},
	wwd_SL_ghg_non:{magnitude:"Mass",unit:"kg CO2eq"},
	wwd_KPI_nrg_per_m3:{magnitude:"Energy/Volume",unit:"kWh/m3"},
	wwd_KPI_GHG_elec:{magnitude:"Mass",unit:"kg CO2eq"},
	wwd_KPI_GHG_trck:{magnitude:"Mass",unit:"kg CO2eq"},
	wwd_KPI_GHG_trck_co2:{magnitude:"Mass",unit:"kg CO2eq"},
	wwd_KPI_GHG_trck_n2o:{magnitude:"Mass",unit:"kg CO2eq"},
	wwd_KPI_GHG_trck_ch4:{magnitude:"Mass",unit:"kg CO2eq"},
	wwd_KPI_GHG:{magnitude:"Mass",unit:"kg CO2eq"},

	//UNFCCC categories
	unfccc_1A1 :{magnitude:"Mass",unit:"kg CO2eq"},
	unfccc_1A3 :{magnitude:"Mass",unit:"kg CO2eq"},
	unfccc_5A  :{magnitude:"Mass",unit:"kg CO2eq"},
	unfccc_5B  :{magnitude:"Mass",unit:"kg CO2eq"},
	unfccc_5C  :{magnitude:"Mass",unit:"kg CO2eq"},
	unfccc_5D  :{magnitude:"Mass",unit:"kg CO2eq"},
};
