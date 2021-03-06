/*
  - 'exceptions' are variables that not behave like normal ones are treated here
  they are inputs with a list of possible values that set the number
  what is different of normal dropdowns is that the user can also enter a number besides selecting an option

  - each selection is stored in Configuration.Selected
*/

var Exceptions={
  //grouped by similarty rather than stage
  //all functions are almost equal => could be generalised as ~ function(code, table, field_name_in_table) TODO
  list:{
    //CH4 emission factors
      ww_ch4_efac_unt:function(){
        var td=document.querySelector('tr[field=ww_ch4_efac_unt] td');if(!td)return;

        var select=document.createElement('select');select.style.fontSize='smaller';select.style.display='block';td.appendChild(select);
        select.onchange=function(){
          Global.Waste.Collection.ww_ch4_efac_unt=parseFloat(select.value);
          Global.Configuration.Selected.ww_ch4_efac_unt=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        };

        Object.keys(Tables.ww_ch4_efac).forEach(key=>{
          var option=document.createElement('option');select.appendChild(option);
          var value=Tables.ww_ch4_efac[key].ch4_efac;
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ("+format(value)+")";
          if(key==Global.Configuration.Selected.ww_ch4_efac_unt){ option.selected='true'; }
        });
      },
      ww_ch4_efac_unc:function(){
        var td=document.querySelector('tr[field=ww_ch4_efac_unc] td');if(!td)return;

        var select=document.createElement('select');select.style.fontSize='smaller';select.style.display='block';td.appendChild(select);
        select.onchange=function(){
          Global.Waste.Collection.ww_ch4_efac_unc=parseFloat(select.value);
          Global.Configuration.Selected.ww_ch4_efac_unc=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        };

        Object.keys(Tables.ww_ch4_efac).forEach(key=>{
          var option=document.createElement('option');select.appendChild(option);
          var value=Tables.ww_ch4_efac[key].ch4_efac;
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ("+format(value)+")";
          if(key==Global.Configuration.Selected.ww_ch4_efac_unc){option.selected='true';}
        });
      },
      wwt_ch4_efac:function(){
        var td=document.querySelector('tr[field=wwt_ch4_efac] td');if(!td)return;

        var select=document.createElement('select');select.style.fontSize='smaller';select.style.display='block';td.appendChild(select);
        select.onchange=function() {
          Global.Waste.Treatment.wwt_ch4_efac=parseFloat(select.value);
          Global.Configuration.Selected.wwt_ch4_efac=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        };

        Object.keys(Tables.wwt_type_tre).forEach(key=>{
          var option=document.createElement('option');select.appendChild(option);
          var value=Tables.wwt_type_tre[key].ch4_efac;
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ("+format(value)+")";
          if(key==Global.Configuration.Selected.wwt_ch4_efac){option.selected='true';}
        });
      },
      wwd_ch4_efac:function(){
        var td=document.querySelector('tr[field=wwd_ch4_efac] td');if(!td)return;

        var select=document.createElement('select');select.style.fontSize='smaller';select.style.display='block';td.appendChild(select);
        select.onchange=function(){
          Global.Waste.Discharge.wwd_ch4_efac=parseFloat(select.value);
          Global.Configuration.Selected.wwd_ch4_efac=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        };

        Object.keys(Tables.ww_ch4_efac).forEach(key=>{
          var option=document.createElement('option');select.appendChild(option);
          var value=Tables.ww_ch4_efac[key].ch4_efac;
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ("+format(value)+")";
          if(key==Global.Configuration.Selected.wwd_ch4_efac){ option.selected='true'; }
        });
      },
      fsc_ch4_efac:function(){
        var td=document.querySelector('tr[field=fsc_ch4_efac] td');if(!td)return;

        var select=document.createElement('select');select.style.fontSize='smaller';select.style.display='block';td.appendChild(select);
        select.onchange=function() {
          Global.Faecl.Containment.fsc_ch4_efac=parseFloat(select.value);
          Global.Configuration.Selected.fsc_ch4_efac=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        };

        Object.keys(Tables.fsc_type_tre).forEach(key=>{
          var option=document.createElement('option');select.appendChild(option);
          var value = Tables.fsc_type_tre[key][(Global.Faecl.Containment.fsc_flooding?"ch4_efac_flooding":"ch4_efac")];
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ("+format(value)+")";
          if(key==Global.Configuration.Selected.fsc_ch4_efac){option.selected='true';}
        });
      },
      fst_ch4_efac:function(){
        var td=document.querySelector('tr[field=fst_ch4_efac] td');if(!td)return;

        var select=document.createElement('select');select.style.fontSize='smaller';select.style.display='block';td.appendChild(select);
        select.onchange=function(){
          Global.Faecl.Treatment.fst_ch4_efac=parseFloat(select.value);
          Global.Configuration.Selected.fst_ch4_efac=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        };

        Object.keys(Tables.fst_type_tre).forEach(key=>{
          var option=document.createElement('option');select.appendChild(option);
          var value=Tables.fst_type_tre[key].ch4_efac;
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ("+format(value)+")";
          if(key==Global.Configuration.Selected.fst_ch4_efac){option.selected='true';}
        });
      },
      fsr_ch4_efac:function(){ //this is the only one it has 'soil infiltration (0)' as option
        var td=document.querySelector('tr[field=fsr_ch4_efac] td');if(!td)return;

        var select=document.createElement('select');select.style.fontSize='smaller';select.style.display='block';td.appendChild(select);
        select.onchange=function() {
          Global.Faecl.Reuse.fsr_ch4_efac=parseFloat(select.value);
          Global.Configuration.Selected.fsr_ch4_efac=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        };

        Object.keys(Tables.fsr_ch4_efac).forEach(key=>{
          var option=document.createElement('option');select.appendChild(option);
          var value=Tables.fsr_ch4_efac[key].ch4_efac;
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ("+format(value)+")";
          if(key==Global.Configuration.Selected.fsr_ch4_efac){option.selected='true';}
        });
      },
      fsr_ch4_efac_dumping:function(){
        var td=document.querySelector('tr[field=fsr_ch4_efac_dumping] td'); if(!td)return;

        var select=document.createElement('select');select.style.fontSize='smaller';select.style.display='block';td.appendChild(select);
        select.onchange=function() {
          Global.Faecl.Reuse['fsr_ch4_efac_dumping']=parseFloat(select.value);
          Global.Configuration.Selected['fsr_ch4_efac_dumping']=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        }

        Object.keys(Tables.fsr_dumping_pth).forEach(key=>{
          var option=document.createElement('option');select.appendChild(option);
          var value=Tables.fsr_dumping_pth[key].ch4_efac;
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ("+format(value)+")";
          if(key==Global.Configuration.Selected.fsr_ch4_efac_dumping){ option.selected='true'; }
        });
      },

    //BOD removed as sludge
      wwt_bod_slud:function(){
        var td=document.querySelector('tr[field=wwt_bod_slud] td'); if(!td)return;

        var select=document.createElement('select'); select.style.fontSize='smaller'; select.style.display='block'; td.appendChild(select);
        select.onchange=function(){
          Global.Waste.Treatment.wwt_bod_slud=parseFloat(select.value);
          Global.Configuration.Selected.wwt_bod_slud=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        };

        Object.keys(Tables.wwt_type_tre).forEach(key=>{
          var option=document.createElement('option'); select.appendChild(option);
          var value=Global.Waste.Treatment.wwt_bod_infl*Tables.wwt_type_tre[key].bod_rmvd_as_sludge_estm;
          var bod_rmvd_perc=Tables.wwt_type_tre[key].bod_rmvd_as_sludge_estm*100;
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ["+bod_rmvd_perc+"%] &rarr; ("+format(value)+")";
          if(key==Global.Configuration.Selected.wwt_bod_slud){ option.selected='true'; }
        });
      },
      fst_bod_slud:function(){
        var td=document.querySelector('tr[field=fst_bod_slud] td');if(!td)return;

        var select=document.createElement('select'); select.style.fontSize='smaller'; select.style.display='block'; td.appendChild(select);
        select.onchange=function(){
          Global.Faecl.Treatment.fst_bod_slud=parseFloat(select.value);
          Global.Configuration.Selected.fst_bod_slud=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        };

        Object.keys(Tables.fst_type_tre).forEach(key=>{
          var option=document.createElement('option'); select.appendChild(option);
          var value=Global.Faecl.Treatment.fst_bod_infl*Tables.fst_type_tre[key].bod_rmvd_as_sludge_estm;
          var bod_rmvd_perc = Tables.fst_type_tre[key].bod_rmvd_as_sludge_estm*100;
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ["+bod_rmvd_perc+"%] &rarr; ("+format(value)+")";
          if(key==Global.Configuration.Selected.fst_bod_slud){ option.selected='true'; }
        });
      },

    //FS density
      fsc_fdensity:function(){
        var td=document.querySelector('tr[field=fsc_fdensity] td'); if(!td)return;

        var select=document.createElement('select'); select.style.fontSize='smaller'; select.style.display='block'; td.appendChild(select);
        select.onchange=function(){
          Global.Faecl.Containment.fsc_fdensity=parseFloat(select.value);
          Global.Configuration.Selected.fsc_fdensity=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        };

        Object.keys(Tables.fsc_type_tre).forEach(key=>{
          var option=document.createElement('option'); select.appendChild(option);
          var value=Tables.fsc_type_tre[key].fs_density;
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ("+format(value)+")";
          if(key==Global.Configuration.Selected.fsc_fdensity){option.selected='true';}
        });
      },

    //BOD concentration
      fsc_bod_conc_fs:function(){
        var td=document.querySelector('tr[field=fsc_bod_conc_fs] td'); if(!td)return;

        var select=document.createElement('select'); select.style.fontSize='smaller'; select.style.display='block'; td.appendChild(select);
        select.onchange=function(){
          Global.Faecl.Containment.fsc_bod_conc_fs=parseFloat(select.value);
          Global.Configuration.Selected.fsc_bod_conc_fs=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        };

        Object.keys(Tables.fsc_type_tre).forEach(key=>{
          var option=document.createElement('option');select.appendChild(option);
          var value=Tables.fsc_type_tre[key].BOD_conc_FS;
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ("+format(value)+")";
          if(key==Global.Configuration.Selected.fsc_bod_conc_fs){option.selected='true';}
        });
      },
      fsr_bod_conc_fs:function(){
        var td=document.querySelector('tr[field=fsr_bod_conc_fs] td'); if(!td)return;

        var select=document.createElement('select'); select.style.fontSize='smaller'; select.style.display='block'; td.appendChild(select);
        select.onchange=function(){
          Global.Faecl.Reuse.fsr_bod_conc_fs=parseFloat(select.value);
          Global.Configuration.Selected.fsr_bod_conc_fs=select.options[select.options.selectedIndex].getAttribute('key');
          init();
        };

        Object.keys(Tables.fsc_type_tre).forEach(key=>{
          var option=document.createElement('option');select.appendChild(option);
          var value = Tables.fsc_type_tre[key].BOD_conc_FS;
          option.value=value;
          option.setAttribute('key',key);
          option.innerHTML=translate(key)+" ("+format(value)+")";
          if(key==Global.Configuration.Selected.fsr_bod_conc_fs){option.selected='true';}
        });
      },
  },

  //call all exceptions inside 'list' wrapper
  apply:function(){Object.keys(this.list).forEach(key=>{this.list[key]()})},
};

//save exceptions inside global to make them searchable for the function 'outputsPerInput' (in 'formulas.js')
Global.Exceptions=Exceptions;

//initialize with empty string inside Configuration.Selected for Exceptions to avoid warning "types do not match"
Object.keys(Exceptions.list).forEach(key=>{Global.Configuration.Selected[key]=""});

//default values for exceptions
Global.Configuration.Selected.ww_ch4_efac_unt="Sea and aerobic water bodies";
Global.Configuration.Selected.ww_ch4_efac_unc="Stagnant sewer and anaerobic water bodies";
