(function(){
if(document.getElementById('__ea')){document.getElementById('__ea').remove();return;}
var sk=window.M&&window.M.cfg&&window.M.cfg.sesskey||'';
if(!sk){var ma=document.querySelector('meta[name="sesskey"]');if(ma)sk=ma.content;}
if(!sk){var mb=document.body.innerHTML.match(/"sesskey":"([^"]+)"/);if(mb)sk=mb[1];}
if(!sk){var mc=document.querySelector('input[name="sesskey"]');if(mc)sk=mc.value;}
var BASE='https://educacaoprofissional.educacao.sp.gov.br';
var el=document.createElement('div');
el.id='__ea';
document.body.appendChild(el);
el.innerHTML='<style>@import url(\'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500&display=swap\');*{box-sizing:border-box;margin:0;padding:0}#__ea{position:fixed;bottom:20px;right:20px;z-index:999999;width:290px;background:#0c0c0c;border:1px solid rgba(168,85,247,0.2);border-radius:10px;font-family:\'Geist Mono\',monospace;color:#e8e8e8;box-shadow:0 0 0 1px rgba(168,85,247,0.05),0 24px 60px rgba(0,0,0,0.9)}#__h{padding:11px 14px 10px;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:space-between}#__ht{display:flex;align-items:center;gap:8px}#__accent{width:6px;height:6px;border-radius:50%;background:#a855f7;flex-shrink:0}#__accent.run{animation:__blink 1s infinite}#__accent.err{background:#ff4466}@keyframes __blink{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(168,85,247,0)}50%{opacity:.4;box-shadow:0 0 8px 2px rgba(168,85,247,0.4)}}#__title{font-size:10px;font-weight:500;letter-spacing:.15em;color:rgba(255,255,255,0.45);text-transform:uppercase}#__cl{background:none;border:none;color:rgba(255,255,255,0.2);cursor:pointer;font-size:16px;padding:2px 6px;font-family:inherit;transition:color .15s;line-height:1}#__cl:hover{color:#ff4466}#__b{padding:12px 14px 14px}#__avatar-wrap{display:none;flex-direction:column;align-items:center;gap:10px;padding:8px 0 14px}#__avatar-wrap.show{display:flex}#__avatar-ring{position:relative;width:72px;height:72px}#__avatar-img{width:72px;height:72px;border-radius:50%;border:2px solid rgba(168,85,247,0.4);display:block}#__spinner{position:absolute;top:-4px;left:-4px;width:80px;height:80px;border-radius:50%;border:2px solid transparent;border-top-color:#a855f7;border-right-color:rgba(168,85,247,0.3);animation:__spin 1s linear infinite}@keyframes __spin{to{transform:rotate(360deg)}}#__av-msg{font-size:9px;color:rgba(168,85,247,0.7);letter-spacing:.08em;text-transform:uppercase}#__log{height:150px;overflow-y:auto;font-size:9px;line-height:1.9;color:rgba(255,255,255,0.25)}#__log::-webkit-scrollbar{width:2px}#__log::-webkit-scrollbar-thumb{background:rgba(168,85,247,0.2)}#__log span{display:block}.ok{color:#a855f7}.er{color:#ff4466}.in{color:rgba(255,255,255,0.55)}.wn{color:#ffaa00}.dm{color:rgba(255,255,255,0.18)}#__pg{height:1px;background:rgba(255,255,255,0.05);margin:10px 0;position:relative;overflow:hidden}#__pb{position:absolute;top:0;left:0;height:100%;width:0%;background:#a855f7;transition:width .4s ease;box-shadow:0 0 8px rgba(168,85,247,0.6)}#__stats{display:flex;gap:1px;margin-bottom:10px}#__stats .s{flex:1;padding:7px 0;text-align:center;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05)}#__stats .s:first-child{border-radius:4px 0 0 4px}#__stats .s:last-child{border-radius:0 4px 4px 0}#__stats .sv{font-size:15px;font-weight:400;color:#e8e8e8;line-height:1}#__stats .sl{font-size:7.5px;color:rgba(255,255,255,0.18);margin-top:3px;letter-spacing:.08em;text-transform:uppercase}#__ac{display:flex;gap:6px}.btn{flex:1;padding:8px 0;border:1px solid rgba(255,255,255,0.07);border-radius:4px;font-family:\'Geist Mono\',monospace;font-size:9px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:all .15s;background:none;color:rgba(255,255,255,0.35)}.gob{border-color:rgba(168,85,247,0.35);color:#a855f7}.gob:hover{background:rgba(168,85,247,0.06);box-shadow:0 0 14px rgba(168,85,247,0.12)}.gob:disabled{opacity:.2;cursor:not-allowed}.spb:hover{border-color:rgba(255,68,102,0.3);color:#ff4466}#__foot{padding:8px 14px;border-top:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;gap:6px}#__by{font-size:8px;color:rgba(255,255,255,0.15);letter-spacing:.04em;display:flex;align-items:center;gap:5px}#__by b{color:#a855f7;font-weight:400}</style><div id="__h"><div id="__ht"><div id="__accent"></div><div id="__title">EduAuto</div></div><button id="__cl">&times;</button></div><div id="__b"><div id="__avatar-wrap"><div id="__avatar-ring"><img id="__avatar-img" src="data:image/png;base64,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" /><div id="__spinner"></div></div><div id="__av-msg">processando...</div></div><div id="__log"><span class="dm">// aguardando</span></div><div id="__pg"><div id="__pb"></div></div><div id="__stats"><div class="s"><div class="sv" id="__sc">—</div><div class="sl">Cursos</div></div><div class="s"><div class="sv" id="__sa">—</div><div class="sl">Ativ.</div></div><div class="s"><div class="sv" id="__so">0</div><div class="sl">OK</div></div></div><div id="__ac"><button class="btn gob" id="__go">Iniciar</button><button class="btn spb" id="__sp">Parar</button></div></div><div id="__foot"><div id="__by"><svg width="11" height="11" viewBox="0 0 24 24" fill="#a855f7" opacity=".5"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.074.074 0 0 0-.041-.104 13.12 13.12 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg><b>made by nejizzuki</b></div></div>';
document.getElementById('__cl').onclick=function(){el.remove();};
var stopped=false,total=0,done=0,already=0,errors=0;
var logEl=document.getElementById('__log');
function log(msg,cls){
  var d=document.createElement('div');
  var sp1=document.createElement('span');sp1.className='dm';sp1.textContent=new Date().toLocaleTimeString('pt-BR')+' ';
  var sp2=document.createElement('span');sp2.className=cls||'';sp2.innerHTML=msg;
  d.appendChild(sp1);d.appendChild(sp2);
  logEl.appendChild(d);logEl.scrollTop=logEl.scrollHeight;
}
function setStatus(msg,cls){var a=document.getElementById('__accent');if(a)a.className=cls||'';var t=document.getElementById('__title');if(t)t.textContent=msg||'EduAuto';}
function setStat(id,v){var e=document.getElementById(id);if(e)e.textContent=v;}
function setBar(p){document.getElementById('__pb').style.width=Math.min(100,p)+'%';}
function sleep(ms){return new Promise(function(r){setTimeout(r,ms);});}
function ph(html){return new DOMParser().parseFromString(html,'text/html');}
function ajax(calls){
  return fetch(BASE+'/lib/ajax/service.php?sesskey='+sk+'&info='+calls[0].methodname,{
    method:'POST',headers:{'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'},
    body:JSON.stringify(calls),credentials:'include'
  }).then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
  .then(function(d){if(d[0]&&d[0].error)throw new Error((d[0].exception&&d[0].exception.message)||'API error');return d;});
}
function getCourseIds(){
  var fp=[].slice.call(document.querySelectorAll('[data-courseid]')).map(function(e){return parseInt(e.dataset.courseid);}).filter(Boolean);
  if(fp.length)return Promise.resolve([...new Set(fp)]);
  return fetch(BASE+'/local/dimensions/view-plan.php',{credentials:'include'})
    .then(function(r){return r.text();}).then(function(html){
      var doc=ph(html);
      var ids=[].slice.call(doc.querySelectorAll('[data-courseid]')).map(function(e){return parseInt(e.dataset.courseid);}).filter(Boolean);
      if(ids.length)return[...new Set(ids)];
      var mm=html.match(/\/course\/view\.php\?id=(\d+)/g)||[];
      return[...new Set(mm.map(function(l){var x=l.match(/(\d+)/);return x?parseInt(x[1]):0;}).filter(Boolean))];
    }).catch(function(){return[];});
}
function getProgress(ids){
  return ajax([{index:0,methodname:'local_dimensions_get_course_progress',args:{courseids:ids}}])
    .then(function(r){return r[0].data||[];}).catch(function(e){log('aviso: '+e.message,'wn');return[];});
}
function getCmids(url){
  return fetch(url,{credentials:'include'}).then(function(r){
    if(!r.ok){log('section HTTP '+r.status,'wn');return[];}return r.text();
  }).then(function(html){
    if(!html)return[];
    var doc=ph(html);var acts=[];
    [].slice.call(doc.querySelectorAll('li.activity[data-id]')).forEach(function(li){
      var cmid=parseInt(li.getAttribute('data-id'));if(!cmid)return;
      var cl=li.className.split(' ');
      var tc=cl.find(function(c){return c.indexOf('modtype_')===0;});
      var mn=tc?tc.replace('modtype_',''):'unknown';
      var cs=-1;var ce=li.querySelector('[data-completionstate]');
      if(ce)cs=parseInt(ce.getAttribute('data-completionstate'));
      if(cs===-1&&(li.classList.contains('complete')||li.querySelector('.completion-complete')))cs=1;
      acts.push({cmid:cmid,modname:mn,cs:cs});
    });
    if(!acts.length){
      [].slice.call(doc.querySelectorAll('[id^="module-"]')).forEach(function(li){
        var cmid=parseInt(li.id.replace('module-',''));if(!cmid)return;
        var cl=li.className.split(' ');var tc=cl.find(function(c){return c.indexOf('modtype_')===0;});
        acts.push({cmid:cmid,modname:tc?tc.replace('modtype_',''):'unknown',cs:-1});
      });
    }
    return acts;
  }).catch(function(e){log('erro section: '+e.message,'wn');return[];});
}
function markDone(cmid){return ajax([{index:0,methodname:'core_completion_update_activity_completion_status_manually',args:{cmid:cmid,completed:true}}]);}
function visitMod(mn,cmid){
  return fetch(BASE+'/mod/'+mn+'/view.php?id='+cmid,{credentials:'include',headers:{Accept:'text/html'}})
    .then(function(r){if(!r.ok)throw new Error('view HTTP '+r.status);});
}
function doScorm(cmid){
  return fetch(BASE+'/mod/scorm/view.php?id='+cmid,{credentials:'include'}).then(function(r){if(!r.ok)throw new Error('SCORM '+r.status);return r.text();})
  .then(function(html){
    var sm=html.match(/"scoid"\s*:\s*(\d+)/);var am=html.match(/"attempt"\s*:\s*(\d+)/);
    var scoid=sm?sm[1]:null;var attempt=am?am[1]:'1';
    if(!scoid)return markDone(cmid);
    var b=new URLSearchParams({id:cmid,scoid:scoid,attempt:attempt,sesskey:sk});
    if(html.indexOf('cmi.completion_status')>=0){
      b.append('cmi.completion_status','completed');b.append('cmi.success_status','passed');
      b.append('cmi.score.raw','100');b.append('cmi.score.max','100');b.append('cmi.score.min','0');b.append('cmi.score.scaled','1');
    }else{
      b.append('cmi.core.lesson_status','passed');b.append('cmi.core.score.raw','100');
      b.append('cmi.core.score.max','100');b.append('cmi.core.score.min','0');b.append('cmi.core.session_time','00:30:00');
    }
    return fetch(BASE+'/mod/scorm/datamodel.php',{method:'POST',credentials:'include',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:b})
      .then(function(r){if(!r.ok)throw new Error('SCORM dm '+r.status);});
  });
}
// Extrai JSON balanceando chaves — funciona com ou sem CDATA //]]>
function extractH5PIntegration(html){
  var idx=html.indexOf('H5PIntegration');
  if(idx===-1)return null;
  var start=html.indexOf('{',idx);
  if(start===-1)return null;
  var depth=0,inStr=false,esc=false;
  for(var i=start;i<html.length;i++){
    var c=html[i];
    if(esc){esc=false;continue;}
    if(c==='\\'&&inStr){esc=true;continue;}
    if(c==='"'&&!esc)inStr=!inStr;
    if(!inStr){
      if(c==='{')depth++;
      else if(c==='}'){depth--;if(depth===0)return html.slice(start,i+1);}
    }
  }
  return null;
}
// H5P: envia xAPI via service.php (formato exato capturado no Burp)
// Endpoint: POST /lib/ajax/service.php?sesskey=SK&info=core_xapi_statement_post
// Body: [{index:0, methodname:"core_xapi_statement_post", args:{component, requestjson}}]
// requestjson e uma STRING (json-dentro-de-json)
// choice IDs sao indices numericos como string: "0","1","2"...
// correctResponsesPattern e response sao o indice como string do correct:true
function processH5Phtml(html,cmid){
  var raw=extractH5PIntegration(html);
  if(!raw)throw new Error('H5PIntegration nao encontrado');
  var integ;
  try{integ=JSON.parse(raw);}catch(e){throw new Error('H5PIntegration JSON invalido: '+e.message);}
  var contents=integ.contents||{};var keys=Object.keys(contents);
  if(!keys.length)throw new Error('sem conteudo H5P');
  var uid=(integ.user&&integ.user.id)||'';
  var uname=(integ.user&&integ.user.name)||'';
  return Promise.all(keys.map(function(key){
    var ct=contents[key];
    var hid=parseInt(key.replace('cid-',''));
    var xu=ct.url; // object.id da atividade: /xapi/activity/CONTEXTID
    if(!xu)return;
    var qd=null;
    try{if(ct.jsonContent){qd=typeof ct.jsonContent==='string'?JSON.parse(ct.jsonContent):ct.jsonContent;}}catch(e){}
    var correctIdx='';var correctText='';var choices=[];
    if(qd&&qd.answers&&Array.isArray(qd.answers)){
      qd.answers.forEach(function(a,i){
        var txt=a.text.replace(/<[^>]+>/g,'').replace(/\n/g,'').trim();
        choices.push({id:String(i),description:{'en-US':txt}});
        if(a.correct){correctIdx=String(i);correctText=txt;}
      });
    }
    if(correctText)log('  H5P: resposta correta "'+correctText+'"','dm');
    // monta o statement exatamente como o site faz
    var stmt={
      actor:{name:uname,objectType:'Agent',account:{name:String(uid),homePage:BASE}},
      verb:{id:'http://adlnet.gov/expapi/verbs/answered',display:{'en-US':'answered'}},
      object:{
        id:xu,objectType:'Activity',
        definition:{
          extensions:{'http://h5p.org/x-api/h5p-local-content-id':hid},
          name:{'en-US':ct.metadata&&ct.metadata.title||''},
          description:{'en-US':qd&&qd.question?qd.question.replace(/<[^>]+>/g,'').trim():''},
          type:'http://adlnet.gov/expapi/activities/cmi.interaction',
          interactionType:'choice',
          correctResponsesPattern:[correctIdx],
          choices:choices
        }
      },
      context:{contextActivities:{category:[{id:'http://h5p.org/libraries/'+ct.library.replace(' ','-'),objectType:'Activity'}]}},
      result:{score:{min:0,max:1,raw:1,scaled:1},completion:true,success:true,duration:'PT10S',response:correctIdx}
    };
    // POST via Moodle service.php — formato exato do Burp
    var payload=[{index:0,methodname:'core_xapi_statement_post',args:{
      component:'mod_h5pactivity',
      requestjson:JSON.stringify([stmt])
    }}];
    return fetch(BASE+'/lib/ajax/service.php?sesskey='+sk+'&info=core_xapi_statement_post',{
      method:'POST',
      credentials:'include',
      headers:{'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'},
      body:JSON.stringify(payload)
    }).then(function(r){if(!r.ok)throw new Error('xAPI HTTP '+r.status);return r.json();})
    .then(function(d){if(d&&d[0]&&d[0].error)throw new Error('xAPI erro: '+JSON.stringify(d[0].exception));});
  }));
}
// FIX PRINCIPAL: view.php carrega H5P num iframe (/h5p/embed.php?url=...)
// O H5PIntegration esta DENTRO do iframe, nao na pagina pai.
// Buscamos a view, extraimos o src do iframe h5p, e fazemos fetch do embed.
function doH5P(cmid){
  return fetch(BASE+'/mod/h5pactivity/view.php?id='+cmid,{credentials:'include'})
  .then(function(r){if(!r.ok)throw new Error('H5P view '+r.status);return r.text();})
  .then(function(viewHtml){
    // Tenta primeiro: H5PIntegration direto na view (Moodle mais antigo)
    if(viewHtml.indexOf('H5PIntegration')>=0){
      return processH5Phtml(viewHtml,cmid);
    }
    // Moodle moderno: H5P carregado num iframe. Extrai o src do iframe.
    var doc=ph(viewHtml);
    var iframeEl=doc.querySelector('iframe.h5p-iframe,iframe[src*="h5p/embed"],iframe[src*="embed.php"]');
    var embedSrc=iframeEl?iframeEl.getAttribute('src'):null;
    // Tambem tenta via data-content-id para montar a URL do embed
    if(!embedSrc){
      var iframeById=doc.querySelector('iframe[data-content-id]');
      if(iframeById){
        var hid=iframeById.getAttribute('data-content-id');
        // A URL do embed e construida pelo JS do Moodle com pluginfile
        // Buscamos via API o deploy URL do conteudo h5p
        embedSrc=BASE+'/h5p/embed.php?url='+encodeURIComponent(BASE+'/pluginfile.php/1/core_h5p/content/'+hid+'/content.json')+'&preventredirect=0&component=mod_h5pactivity';
      }
    }
    if(!embedSrc||embedSrc==='about:blank'){
      // Fallback: tenta a API do Moodle para pegar o deployedFile URL do h5p
      return ajax([{index:0,methodname:'core_h5p_get_trusted_h5p_file',args:{url:BASE+'/mod/h5pactivity/view.php?id='+cmid,frame:0,export:0,embed:0,copyright:0}}])
      .then(function(d){
        var files=(d[0]&&d[0].data&&d[0].data.files)||[];
        var f=files.find(function(x){return x.fileurl&&x.fileurl.indexOf('embed')>=0;})||files[0];
        if(!f||!f.fileurl)throw new Error('H5PIntegration nao encontrado');
        return fetch(f.fileurl,{credentials:'include'}).then(function(r){return r.text();}).then(function(h){return processH5Phtml(h,cmid);});
      });
    }
    return fetch(embedSrc,{credentials:'include'})
    .then(function(r){if(!r.ok)throw new Error('H5P embed '+r.status);return r.text();})
    .then(function(h){return processH5Phtml(h,cmid);});
  });
}
function procAct(act){
  var cmid=act.cmid,mn=act.modname,cs=act.cs;
  if(['label','unknown'].indexOf(mn)>=0)return Promise.resolve('skip');
  if(['quiz','assign','workshop','forum'].indexOf(mn)>=0){log('  skip '+mn.toUpperCase()+' #'+cmid,'wn');return Promise.resolve('skip');}
  if(cs===1){log('  ok '+mn.toUpperCase()+' #'+cmid+' ja feito','dm');return Promise.resolve('already');}
  log('> '+mn.toUpperCase()+' #'+cmid,'in');
  var p;
  if(mn==='scorm')p=doScorm(cmid);
  else if(mn==='h5pactivity')p=doH5P(cmid);
  else if(mn==='subsection')p=markDone(cmid).catch(function(){});
  else p=visitMod(mn,cmid);
  return p.then(function(){log('  ok concluido','ok');return'done';}).catch(function(e){log('  erro: '+e.message,'er');return'err';});
}
async function run(){
  if(!sk){log('sem sesskey - recarregue o AVA','er');setStatus('Sem sesskey','err');return;}
  stopped=false;done=0;already=0;errors=0;total=0;
  document.getElementById('__go').disabled=true;
  setStat('__sc','-');setStat('__sa','-');setStat('__so','0');logEl.innerHTML='';setBar(0);
  setStatus('Buscando...','run');
  try{
    log('Buscando cursos...','in');
    var courseIds=await getCourseIds();
    if(!courseIds.length){log('nenhum curso. Abra o plano de estudos.','er');setStatus('Sem cursos','err');document.getElementById('__go').disabled=false;return;}
    log(''+courseIds.length+' cursos: ['+courseIds.join(',')+']','ok');setStat('__sc',courseIds.length);
    var coursesData=await getProgress(courseIds);
    var all=[];
    for(var ci=0;ci<coursesData.length;ci++){
      if(stopped)break;
      var c=coursesData[ci];
      if(c.locked){log('bloqueado: curso '+c.courseid+' ate '+c.formatted_start_date,'wn');continue;}
      var secs=(c.sections||[]).filter(function(s){return s.has_activities&&s.url;});
      log('curso '+c.courseid+': '+secs.length+' secoes','dm');
      for(var si=0;si<secs.length;si++){
        if(stopped)break;
        log(' lendo: '+secs[si].name.substring(0,40),'dm');
        var acts=await getCmids(secs[si].url);
        acts.forEach(function(a){all.push(a);});
        await sleep(200);
      }
    }
    total=all.length;setStat('__sa',total);
    if(!total){log('nenhuma atividade encontrada','wn');setStatus('Nada','err');document.getElementById('__go').disabled=false;return;}
    log(total+' atividades','in');setStatus('Processando...','run');
    for(var ai=0;ai<all.length;ai++){
      if(stopped){log('parado','wn');break;}
      var res=await procAct(all[ai]);
      if(res==='done'){done++;setStat('__so',done+already);setBar((done+already)/total*100);await sleep(700);}
      else if(res==='already'){already++;setStat('__so',done+already);setBar((done+already)/total*100);}
      else if(res==='err')errors++;
    }
    log((errors?'aviso':'ok')+' '+done+' novos, '+already+' ja feitos'+(errors?', '+errors+' erros':''),errors?'wn':'ok');
    setStatus(done+already===total?'Concluido!':done+' novos','done');
  }catch(e){log('ERRO: '+e.message,'er');setStatus('Erro','err');}
  document.getElementById('__go').disabled=false;
}
document.getElementById('__go').onclick=run;
document.getElementById('__sp').onclick=function(){var aw=document.getElementById('__avatar-wrap');if(aw)aw.className='';stopped=true;};
})();
