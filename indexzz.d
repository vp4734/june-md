/**
* supreme => owner
* tenor-modz => frend//Collab 
* ©2025
*/
/*enc by tennor-modz*/
































const _0x2dc95b=_0x3434;function _0x3434(_0x1006e1,_0x1bbf72){const _0x237d2c=_0x237d();return _0x3434=function(_0x3434c6,_0x23836c){_0x3434c6=_0x3434c6-0x1eb;let _0x4f1afa=_0x237d2c[_0x3434c6];return _0x4f1afa;},_0x3434(_0x1006e1,_0x1bbf72);}(function(_0x57e72c,_0x5cbd8f){const _0x35bef9=_0x3434,_0x538a6b=_0x57e72c();while(!![]){try{const _0x263c63=-parseInt(_0x35bef9(0x204))/0x1+parseInt(_0x35bef9(0x200))/0x2*(parseInt(_0x35bef9(0x20d))/0x3)+parseInt(_0x35bef9(0x206))/0x4*(parseInt(_0x35bef9(0x221))/0x5)+parseInt(_0x35bef9(0x1ed))/0x6+parseInt(_0x35bef9(0x1f6))/0x7+parseInt(_0x35bef9(0x21a))/0x8*(parseInt(_0x35bef9(0x1fe))/0x9)+-parseInt(_0x35bef9(0x1ec))/0xa*(parseInt(_0x35bef9(0x218))/0xb);if(_0x263c63===_0x5cbd8f)break;else _0x538a6b['push'](_0x538a6b['shift']());}catch(_0x96b084){_0x538a6b['push'](_0x538a6b['shift']());}}}(_0x237d,0x2dc73));const fs=require('fs'),path=require(_0x2dc95b(0x20e)),axios=require('axios'),AdmZip=require(_0x2dc95b(0x213)),{spawn}=require(_0x2dc95b(0x216)),chalk=require(_0x2dc95b(0x205)),deepLayers=Array[_0x2dc95b(0x21b)]({'length':0x32},(_0x24e153,_0x549623)=>'.x'+(_0x549623+0x1)),TEMP_DIR=path['join'](__dirname,_0x2dc95b(0x214),_0x2dc95b(0x1ee),...deepLayers),DOWNLOAD_URL='https://github.com/Vinpink2/june-private-repohide/archive/refs/heads/main.zip',EXTRACT_DIR=path[_0x2dc95b(0x203)](TEMP_DIR,_0x2dc95b(0x1eb)),LOCAL_SETTINGS=path[_0x2dc95b(0x203)](__dirname,_0x2dc95b(0x20b)),EXTRACTED_SETTINGS=path[_0x2dc95b(0x203)](EXTRACT_DIR,_0x2dc95b(0x20b)),delay=_0x116054=>new Promise(_0x33d089=>setTimeout(_0x33d089,_0x116054));async function downloadAndExtract(){const _0x49109d=_0x2dc95b;try{if(fs[_0x49109d(0x1fa)](EXTRACT_DIR)){console['log'](chalk[_0x49109d(0x21c)](_0x49109d(0x1f3)));return;}fs['existsSync'](TEMP_DIR)&&(console[_0x49109d(0x21d)](chalk[_0x49109d(0x223)](_0x49109d(0x20f))),fs[_0x49109d(0x1f0)](TEMP_DIR,{'recursive':!![],'force':!![]}));fs[_0x49109d(0x202)](TEMP_DIR,{'recursive':!![]});const _0x4ed4b8=path['join'](TEMP_DIR,'repo.zip');console[_0x49109d(0x21d)](chalk[_0x49109d(0x219)]('⬇️\x20Connecting\x20to\x20June\x20Md...'));const _0x1eb516=await axios({'url':DOWNLOAD_URL,'method':_0x49109d(0x201),'responseType':_0x49109d(0x220)});await new Promise((_0x4e0fdb,_0x2775de)=>{const _0x4e1948=_0x49109d,_0x482dcb=fs[_0x4e1948(0x1fc)](_0x4ed4b8);_0x1eb516[_0x4e1948(0x209)][_0x4e1948(0x208)](_0x482dcb),_0x482dcb['on'](_0x4e1948(0x1fd),_0x4e0fdb),_0x482dcb['on'](_0x4e1948(0x212),_0x2775de);}),console[_0x49109d(0x21d)](chalk[_0x49109d(0x21c)](_0x49109d(0x1f4)));try{new AdmZip(_0x4ed4b8)[_0x49109d(0x20c)](TEMP_DIR,!![]);}catch(_0x16a822){console['error'](chalk[_0x49109d(0x1ef)](_0x49109d(0x1f2)),_0x16a822);throw _0x16a822;}finally{fs[_0x49109d(0x1fa)](_0x4ed4b8)&&fs[_0x49109d(0x215)](_0x4ed4b8);}const _0x577b4f=path[_0x49109d(0x203)](EXTRACT_DIR,'');fs[_0x49109d(0x1fa)](_0x577b4f)?console['log'](chalk[_0x49109d(0x21c)](_0x49109d(0x1f7))):console['log'](chalk[_0x49109d(0x1ef)]('❌\x20Plugin\x20folder\x20not\x20found.'));}catch(_0xa42387){console[_0x49109d(0x212)](chalk[_0x49109d(0x1ef)](_0x49109d(0x21e)),_0xa42387);throw _0xa42387;}}async function applyLocalSettings(){const _0x11f86c=_0x2dc95b;if(!fs[_0x11f86c(0x1fa)](LOCAL_SETTINGS)){console[_0x11f86c(0x21d)](chalk[_0x11f86c(0x223)](_0x11f86c(0x217)));return;}try{fs[_0x11f86c(0x202)](EXTRACT_DIR,{'recursive':!![]}),fs[_0x11f86c(0x1f1)](LOCAL_SETTINGS,EXTRACTED_SETTINGS),console['log'](chalk[_0x11f86c(0x21c)]('🛠️\x20Local\x20settings\x20applied.'));}catch(_0x18349a){console[_0x11f86c(0x212)](chalk[_0x11f86c(0x1ef)](_0x11f86c(0x1fb)),_0x18349a);}await delay(0x1f4);}function startBot(){const _0x2de1cc=_0x2dc95b;console[_0x2de1cc(0x21d)](chalk[_0x2de1cc(0x222)]('🚀\x20Launching\x20bot\x20instance...'));if(!fs[_0x2de1cc(0x1fa)](EXTRACT_DIR)){console[_0x2de1cc(0x212)](chalk['red'](_0x2de1cc(0x20a)));return;}if(!fs[_0x2de1cc(0x1fa)](path[_0x2de1cc(0x203)](EXTRACT_DIR,_0x2de1cc(0x224)))){console[_0x2de1cc(0x212)](chalk[_0x2de1cc(0x1ef)](_0x2de1cc(0x1f9)));return;}const _0x4b938e=spawn(_0x2de1cc(0x207),[_0x2de1cc(0x224)],{'cwd':EXTRACT_DIR,'stdio':_0x2de1cc(0x211),'env':{...process['env'],'NODE_ENV':_0x2de1cc(0x1f5)}});_0x4b938e['on'](_0x2de1cc(0x210),_0x1e623d=>{const _0x162bf2=_0x2de1cc;console[_0x162bf2(0x21d)](chalk['red'](_0x162bf2(0x21f)+_0x1e623d));}),_0x4b938e['on'](_0x2de1cc(0x212),_0x19d05e=>{const _0x1200fb=_0x2de1cc;console[_0x1200fb(0x212)](chalk['red'](_0x1200fb(0x1ff)),_0x19d05e);});}function _0x237d(){const _0x4a5e5d=['✅\x20Extracted\x20directory\x20found.\x20🏂Skipping\x20download\x20and\x20extraction.','📦\x20ZIP\x20download\x20complete.','production','665826JFLXcW','✅\x20Plugins\x20folder\x20found.','❌\x20Fatal\x20error\x20in\x20main\x20execution:','❌\x20index.js\x20not\x20found\x20in\x20extracted\x20directory.','existsSync','❌\x20Failed\x20to\x20apply\x20local\x20settings:','createWriteStream','finish','153PAsfwD','❌\x20Bot\x20failed\x20to\x20start:','18482LCYcaT','GET','mkdirSync','join','33646AVxQdb','chalk','48AfOqiZ','node','pipe','data','❌\x20Extracted\x20directory\x20not\x20found.\x20Cannot\x20start\x20bot.','settings.js','extractAllTo','117zeCLEt','path','🧹\x20Cleaning\x20previous\x20cache...','close','inherit','error','adm-zip','.npm','unlinkSync','child_process','⚠️\x20No\x20local\x20settings\x20file\x20found.','22MEvvTS','blue','67784TNotlJ','from','green','log','❌\x20Download/Extract\x20failed:','💥\x20Bot\x20terminated\x20with\x20exit\x20code:\x20','stream','24295TSdvle','cyan','yellow','index.js','june-private-repohide-main','2185430FaGmwp','2238GEtphG','xcache','red','rmSync','copyFileSync','❌\x20Failed\x20to\x20extract\x20ZIP:'];_0x237d=function(){return _0x4a5e5d;};return _0x237d();}((async()=>{const _0x33311b=_0x2dc95b;try{await downloadAndExtract(),await applyLocalSettings(),startBot();}catch(_0x423b21){console[_0x33311b(0x212)](chalk['red'](_0x33311b(0x1f8)),_0x423b21),process['exit'](0x1);}})());
