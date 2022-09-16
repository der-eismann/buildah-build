require('./sourcemap-register.js');module.exports=(()=>{"use strict";var e={351:function(e,t,n){var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const i=s(n(87));const o=n(278);function issueCommand(e,t,n){const s=new Command(e,t,n);process.stdout.write(s.toString()+i.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const r="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=r+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const s=this.properties[n];if(s){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(s)}`}}}}e+=`${r}${escapeData(this.message)}`;return e}}function escapeData(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(s.next(e))}catch(e){i(e)}}function rejected(e){try{step(s["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())})};var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=n(351);const r=n(717);const u=n(278);const c=i(n(87));const l=i(n(622));var d;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(d=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=u.toCommandValue(t);process.env[e]=n;const s=process.env["GITHUB_ENV"]||"";if(s){const t="_GitHubActionsFileCommandDelimeter_";const s=`${e}<<${t}${c.EOL}${n}${c.EOL}${t}`;r.issueCommand("ENV",s)}else{o.issueCommand("set-env",{name:e},n)}}t.exportVariable=exportVariable;function setSecret(e){o.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){r.issueCommand("PATH",e)}else{o.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${l.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}return n.trim()}t.getInput=getInput;function setOutput(e,t){o.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){o.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=d.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){o.issueCommand("debug",{},e)}t.debug=debug;function error(e){o.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){o.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+c.EOL)}t.info=info;function startGroup(e){o.issue("group",e)}t.startGroup=startGroup;function endGroup(){o.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return s(this,void 0,void 0,function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n})}t.group=group;function saveState(e,t){o.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,n){var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const i=s(n(747));const o=s(n(87));const r=n(278);function issueCommand(e,t){const n=process.env[`GITHUB_${e}`];if(!n){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!i.existsSync(n)){throw new Error(`Missing file at path: ${n}`)}i.appendFileSync(n,`${r.toCommandValue(t)}${o.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},514:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(s.next(e))}catch(e){i(e)}}function rejected(e){try{step(s["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())})};var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=i(n(159));function exec(e,t,n){return s(this,void 0,void 0,function*(){const s=o.argStringToArray(e);if(s.length===0){throw new Error(`Parameter 'commandLine' cannot be null or empty.`)}const i=s[0];t=s.slice(1).concat(t||[]);const r=new o.ToolRunner(i,t,n);return r.exec()})}t.exec=exec},159:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(s.next(e))}catch(e){i(e)}}function rejected(e){try{step(s["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())})};var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=i(n(87));const r=i(n(614));const u=i(n(129));const c=i(n(622));const l=i(n(436));const d=i(n(962));const a=process.platform==="win32";class ToolRunner extends r.EventEmitter{constructor(e,t,n){super();if(!e){throw new Error("Parameter 'toolPath' cannot be null or empty.")}this.toolPath=e;this.args=t||[];this.options=n||{}}_debug(e){if(this.options.listeners&&this.options.listeners.debug){this.options.listeners.debug(e)}}_getCommandString(e,t){const n=this._getSpawnFileName();const s=this._getSpawnArgs(e);let i=t?"":"[command]";if(a){if(this._isCmdFile()){i+=n;for(const e of s){i+=` ${e}`}}else if(e.windowsVerbatimArguments){i+=`"${n}"`;for(const e of s){i+=` ${e}`}}else{i+=this._windowsQuoteCmdArg(n);for(const e of s){i+=` ${this._windowsQuoteCmdArg(e)}`}}}else{i+=n;for(const e of s){i+=` ${e}`}}return i}_processLineBuffer(e,t,n){try{let s=t+e.toString();let i=s.indexOf(o.EOL);while(i>-1){const e=s.substring(0,i);n(e);s=s.substring(i+o.EOL.length);i=s.indexOf(o.EOL)}t=s}catch(e){this._debug(`error processing line. Failed with error ${e}`)}}_getSpawnFileName(){if(a){if(this._isCmdFile()){return process.env["COMSPEC"]||"cmd.exe"}}return this.toolPath}_getSpawnArgs(e){if(a){if(this._isCmdFile()){let t=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(const n of this.args){t+=" ";t+=e.windowsVerbatimArguments?n:this._windowsQuoteCmdArg(n)}t+='"';return[t]}}return this.args}_endsWith(e,t){return e.endsWith(t)}_isCmdFile(){const e=this.toolPath.toUpperCase();return this._endsWith(e,".CMD")||this._endsWith(e,".BAT")}_windowsQuoteCmdArg(e){if(!this._isCmdFile()){return this._uvQuoteCmdArg(e)}if(!e){return'""'}const t=[" ","\t","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'];let n=false;for(const s of e){if(t.some(e=>e===s)){n=true;break}}if(!n){return e}let s='"';let i=true;for(let t=e.length;t>0;t--){s+=e[t-1];if(i&&e[t-1]==="\\"){s+="\\"}else if(e[t-1]==='"'){i=true;s+='"'}else{i=false}}s+='"';return s.split("").reverse().join("")}_uvQuoteCmdArg(e){if(!e){return'""'}if(!e.includes(" ")&&!e.includes("\t")&&!e.includes('"')){return e}if(!e.includes('"')&&!e.includes("\\")){return`"${e}"`}let t='"';let n=true;for(let s=e.length;s>0;s--){t+=e[s-1];if(n&&e[s-1]==="\\"){t+="\\"}else if(e[s-1]==='"'){n=true;t+="\\"}else{n=false}}t+='"';return t.split("").reverse().join("")}_cloneExecOptions(e){e=e||{};const t={cwd:e.cwd||process.cwd(),env:e.env||process.env,silent:e.silent||false,windowsVerbatimArguments:e.windowsVerbatimArguments||false,failOnStdErr:e.failOnStdErr||false,ignoreReturnCode:e.ignoreReturnCode||false,delay:e.delay||1e4};t.outStream=e.outStream||process.stdout;t.errStream=e.errStream||process.stderr;return t}_getSpawnOptions(e,t){e=e||{};const n={};n.cwd=e.cwd;n.env=e.env;n["windowsVerbatimArguments"]=e.windowsVerbatimArguments||this._isCmdFile();if(e.windowsVerbatimArguments){n.argv0=`"${t}"`}return n}exec(){return s(this,void 0,void 0,function*(){if(!d.isRooted(this.toolPath)&&(this.toolPath.includes("/")||a&&this.toolPath.includes("\\"))){this.toolPath=c.resolve(process.cwd(),this.options.cwd||process.cwd(),this.toolPath)}this.toolPath=yield l.which(this.toolPath,true);return new Promise((e,t)=>{this._debug(`exec tool: ${this.toolPath}`);this._debug("arguments:");for(const e of this.args){this._debug(`   ${e}`)}const n=this._cloneExecOptions(this.options);if(!n.silent&&n.outStream){n.outStream.write(this._getCommandString(n)+o.EOL)}const s=new ExecState(n,this.toolPath);s.on("debug",e=>{this._debug(e)});const i=this._getSpawnFileName();const r=u.spawn(i,this._getSpawnArgs(n),this._getSpawnOptions(this.options,i));const c="";if(r.stdout){r.stdout.on("data",e=>{if(this.options.listeners&&this.options.listeners.stdout){this.options.listeners.stdout(e)}if(!n.silent&&n.outStream){n.outStream.write(e)}this._processLineBuffer(e,c,e=>{if(this.options.listeners&&this.options.listeners.stdline){this.options.listeners.stdline(e)}})})}const l="";if(r.stderr){r.stderr.on("data",e=>{s.processStderr=true;if(this.options.listeners&&this.options.listeners.stderr){this.options.listeners.stderr(e)}if(!n.silent&&n.errStream&&n.outStream){const t=n.failOnStdErr?n.errStream:n.outStream;t.write(e)}this._processLineBuffer(e,l,e=>{if(this.options.listeners&&this.options.listeners.errline){this.options.listeners.errline(e)}})})}r.on("error",e=>{s.processError=e.message;s.processExited=true;s.processClosed=true;s.CheckComplete()});r.on("exit",e=>{s.processExitCode=e;s.processExited=true;this._debug(`Exit code ${e} received from tool '${this.toolPath}'`);s.CheckComplete()});r.on("close",e=>{s.processExitCode=e;s.processExited=true;s.processClosed=true;this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);s.CheckComplete()});s.on("done",(n,s)=>{if(c.length>0){this.emit("stdline",c)}if(l.length>0){this.emit("errline",l)}r.removeAllListeners();if(n){t(n)}else{e(s)}});if(this.options.input){if(!r.stdin){throw new Error("child process missing stdin")}r.stdin.end(this.options.input)}})})}}t.ToolRunner=ToolRunner;function argStringToArray(e){const t=[];let n=false;let s=false;let i="";function append(e){if(s&&e!=='"'){i+="\\"}i+=e;s=false}for(let o=0;o<e.length;o++){const r=e.charAt(o);if(r==='"'){if(!s){n=!n}else{append(r)}continue}if(r==="\\"&&s){append(r);continue}if(r==="\\"&&n){s=true;continue}if(r===" "&&!n){if(i.length>0){t.push(i);i=""}continue}append(r)}if(i.length>0){t.push(i.trim())}return t}t.argStringToArray=argStringToArray;class ExecState extends r.EventEmitter{constructor(e,t){super();this.processClosed=false;this.processError="";this.processExitCode=0;this.processExited=false;this.processStderr=false;this.delay=1e4;this.done=false;this.timeout=null;if(!t){throw new Error("toolPath must not be empty")}this.options=e;this.toolPath=t;if(e.delay){this.delay=e.delay}}CheckComplete(){if(this.done){return}if(this.processClosed){this._setResult()}else if(this.processExited){this.timeout=setTimeout(ExecState.HandleTimeout,this.delay,this)}}_debug(e){this.emit("debug",e)}_setResult(){let e;if(this.processExited){if(this.processError){e=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`)}else if(this.processExitCode!==0&&!this.options.ignoreReturnCode){e=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`)}else if(this.processStderr&&this.options.failOnStdErr){e=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`)}}if(this.timeout){clearTimeout(this.timeout);this.timeout=null}this.done=true;this.emit("done",e,this.processExitCode)}static HandleTimeout(e){if(e.done){return}if(!e.processClosed&&e.processExited){const t=`The STDIO streams did not close within ${e.delay/1e3} seconds of the exit event from process '${e.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;e._debug(t)}e._setResult()}}},962:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(s.next(e))}catch(e){i(e)}}function rejected(e){try{step(s["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())})};var i;Object.defineProperty(t,"__esModule",{value:true});const o=n(357);const r=n(747);const u=n(622);i=r.promises,t.chmod=i.chmod,t.copyFile=i.copyFile,t.lstat=i.lstat,t.mkdir=i.mkdir,t.readdir=i.readdir,t.readlink=i.readlink,t.rename=i.rename,t.rmdir=i.rmdir,t.stat=i.stat,t.symlink=i.symlink,t.unlink=i.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return s(this,void 0,void 0,function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true})}t.exists=exists;function isDirectory(e,n=false){return s(this,void 0,void 0,function*(){const s=n?yield t.stat(e):yield t.lstat(e);return s.isDirectory()})}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function mkdirP(e,n=1e3,i=1){return s(this,void 0,void 0,function*(){o.ok(e,"a path argument must be provided");e=u.resolve(e);if(i>=n)return t.mkdir(e);try{yield t.mkdir(e);return}catch(s){switch(s.code){case"ENOENT":{yield mkdirP(u.dirname(e),n,i+1);yield t.mkdir(e);return}default:{let n;try{n=yield t.stat(e)}catch(e){throw s}if(!n.isDirectory())throw s}}}})}t.mkdirP=mkdirP;function tryGetExecutablePath(e,n){return s(this,void 0,void 0,function*(){let s=undefined;try{s=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(s&&s.isFile()){if(t.IS_WINDOWS){const t=u.extname(e).toUpperCase();if(n.some(e=>e.toUpperCase()===t)){return e}}else{if(isUnixExecutable(s)){return e}}}const i=e;for(const o of n){e=i+o;s=undefined;try{s=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(s&&s.isFile()){if(t.IS_WINDOWS){try{const n=u.dirname(e);const s=u.basename(e).toUpperCase();for(const i of yield t.readdir(n)){if(s===i.toUpperCase()){e=u.join(n,i);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(s)){return e}}}}return""})}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}},436:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(s.next(e))}catch(e){i(e)}}function rejected(e){try{step(s["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((s=s.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const i=n(129);const o=n(622);const r=n(669);const u=n(962);const c=r.promisify(i.exec);function cp(e,t,n={}){return s(this,void 0,void 0,function*(){const{force:s,recursive:i}=readCopyOptions(n);const r=(yield u.exists(t))?yield u.stat(t):null;if(r&&r.isFile()&&!s){return}const c=r&&r.isDirectory()?o.join(t,o.basename(e)):t;if(!(yield u.exists(e))){throw new Error(`no such file or directory: ${e}`)}const l=yield u.stat(e);if(l.isDirectory()){if(!i){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,c,0,s)}}else{if(o.relative(e,c)===""){throw new Error(`'${c}' and '${e}' are the same file`)}yield copyFile(e,c,s)}})}t.cp=cp;function mv(e,t,n={}){return s(this,void 0,void 0,function*(){if(yield u.exists(t)){let s=true;if(yield u.isDirectory(t)){t=o.join(t,o.basename(e));s=yield u.exists(t)}if(s){if(n.force==null||n.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(o.dirname(t));yield u.rename(e,t)})}t.mv=mv;function rmRF(e){return s(this,void 0,void 0,function*(){if(u.IS_WINDOWS){try{if(yield u.isDirectory(e,true)){yield c(`rd /s /q "${e}"`)}else{yield c(`del /f /a "${e}"`)}}catch(e){if(e.code!=="ENOENT")throw e}try{yield u.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield u.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield c(`rm -rf "${e}"`)}else{yield u.unlink(e)}}})}t.rmRF=rmRF;function mkdirP(e){return s(this,void 0,void 0,function*(){yield u.mkdirP(e)})}t.mkdirP=mkdirP;function which(e,t){return s(this,void 0,void 0,function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(u.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}}try{const t=[];if(u.IS_WINDOWS&&process.env.PATHEXT){for(const e of process.env.PATHEXT.split(o.delimiter)){if(e){t.push(e)}}}if(u.isRooted(e)){const n=yield u.tryGetExecutablePath(e,t);if(n){return n}return""}if(e.includes("/")||u.IS_WINDOWS&&e.includes("\\")){return""}const n=[];if(process.env.PATH){for(const e of process.env.PATH.split(o.delimiter)){if(e){n.push(e)}}}for(const s of n){const n=yield u.tryGetExecutablePath(s+o.sep+e,t);if(n){return n}}return""}catch(e){throw new Error(`which failed with message ${e.message}`)}})}t.which=which;function readCopyOptions(e){const t=e.force==null?true:e.force;const n=Boolean(e.recursive);return{force:t,recursive:n}}function cpDirRecursive(e,t,n,i){return s(this,void 0,void 0,function*(){if(n>=255)return;n++;yield mkdirP(t);const s=yield u.readdir(e);for(const o of s){const s=`${e}/${o}`;const r=`${t}/${o}`;const c=yield u.lstat(s);if(c.isDirectory()){yield cpDirRecursive(s,r,n,i)}else{yield copyFile(s,r,i)}}yield u.chmod(t,(yield u.stat(e)).mode)})}function copyFile(e,t,n){return s(this,void 0,void 0,function*(){if((yield u.lstat(e)).isSymbolicLink()){try{yield u.lstat(t);yield u.unlink(t)}catch(e){if(e.code==="EPERM"){yield u.chmod(t,"0666");yield u.unlink(t)}}const n=yield u.readlink(e);yield u.symlink(n,t,u.IS_WINDOWS?"junction":null)}else if(!(yield u.exists(t))||n){yield u.copyFile(e,t)}})}},987:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});t.BuildahCli=void 0;const s=n(186);const i=n(514);const o=n(622);const r=n(314);class BuildahCli{constructor(e){this.storageOptsEnv="";this.executable=e}static getImageFormatOption(e){return["--format",e?"oci":"docker"]}async buildUsingDocker(e,t,n,s,i,o,r,u,c,l,d){const a=["bud"];if(l){a.push("--arch");a.push(l)}if(d){a.push("--platform");a.push(d)}n.forEach(e=>{a.push("-f");a.push(e)});o.forEach(e=>{a.push("--label");a.push(e)});s.forEach(e=>{a.push("--build-arg");a.push(e)});a.push(...BuildahCli.getImageFormatOption(i));a.push(`--tls-verify=${c}`);if(r){a.push(`--layers=${r}`)}if(u.length>0){a.push(...u)}a.push("-t");a.push(e);a.push(t);return this.execute(a)}async from(e,t,n){const s=["from"];s.push(`--tls-verify=${t}`);if(n.length>0){s.push(...n)}s.push(e);return this.execute(s)}async copy(e,t,n){if(t.length===0){return undefined}s.debug("copy");s.debug(e);for(const s of t){const t=["copy",e,s];if(n){t.push(n)}return this.execute(t)}return undefined}async config(e,t){s.debug("config");s.debug(e);const n=["config"];if(t.entrypoint){n.push("--entrypoint");n.push(BuildahCli.convertArrayToStringArg(t.entrypoint))}if(t.port){n.push("--port");n.push(t.port)}if(t.envs){t.envs.forEach(e=>{n.push("--env");n.push(e)})}if(t.arch){n.push("--arch");n.push(t.arch)}if(t.workingdir){n.push("--workingdir");n.push(t.workingdir)}if(t.labels){t.labels.forEach(e=>{n.push("--label");n.push(e)})}n.push(e);return this.execute(n)}async commit(e,t,n){s.debug("commit");s.debug(e);s.debug(t);const i=["commit",...BuildahCli.getImageFormatOption(n),"--squash",e,t];return this.execute(i)}async tag(e,t){const n=["tag"];const i=[];for(const s of t){n.push(r.getFullImageName(e,s));i.push(r.getFullImageName(e,s))}s.info(`Tagging the built image with tags ${t.toString()}`);await this.execute(n);s.info(`✅ Successfully built image${i.length!==1?"s":""} "${i.join(", ")}"`)}async manifestCreate(e){const t=["manifest","create"];t.push(e);s.info(`Creating manifest ${e}`);await this.execute(t)}async manifestAdd(e,t){const n=["manifest","add"];n.push(e);n.push(t);s.info(`Adding image "${t}" to the manifest.`);await this.execute(n)}static convertArrayToStringArg(e){let t="[";e.forEach(e=>{t+=`"${e}",`});return`${t.slice(0,-1)}]`}async execute(e,t={}){let n="";let r="";const u={...t};u.ignoreReturnCode=true;u.listeners={stdline:e=>{n+=e+"\n"},errline:e=>{r+=e+"\n"}};if(t.group){const t=[this.executable,...e].join(" ");s.startGroup(t)}const c={};Object.entries(process.env).forEach(([e,t])=>{if(t!=null){c[e]=t}});if(this.storageOptsEnv){c.STORAGE_OPTS=this.storageOptsEnv}u.env=c;try{const c=await i.exec(this.executable,e,u);if(t.ignoreReturnCode!==true&&c!==0){let e=`${o.basename(this.executable)} exited with code ${c}`;if(r){e+=`\n${r}`}throw new Error(e)}return{exitCode:c,output:n,error:r}}finally{if(t.group){s.endGroup()}}}}t.BuildahCli=BuildahCli},69:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.Outputs=t.Inputs=void 0;var n;(function(e){e["ARCH"]="arch";e["ARCHS"]="archs";e["BASE_IMAGE"]="base-image";e["BUILD_ARGS"]="build-args";e["CONTAINERFILES"]="containerfiles";e["CONTENT"]="content";e["CONTEXT"]="context";e["DOCKERFILES"]="dockerfiles";e["ENTRYPOINT"]="entrypoint";e["ENVS"]="envs";e["EXTRA_ARGS"]="extra-args";e["IMAGE"]="image";e["LABELS"]="labels";e["LAYERS"]="layers";e["OCI"]="oci";e["PLATFORM"]="platform";e["PLATFORMS"]="platforms";e["PORT"]="port";e["TAGS"]="tags";e["TLS_VERIFY"]="tls-verify";e["WORKDIR"]="workdir"})(n=t.Inputs||(t.Inputs={}));var s;(function(e){e["IMAGE"]="image";e["IMAGE_WITH_TAG"]="image-with-tag";e["TAGS"]="tags"})(s=t.Outputs||(t.Outputs={}))},144:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});t.run=void 0;const s=n(186);const i=n(436);const o=n(622);const r=n(69);const u=n(987);const c=n(314);async function run(){if(process.env.RUNNER_OS!=="Linux"){throw new Error("buildah, and therefore this action, only works on Linux. Please use a Linux runner.")}const e=await i.which("buildah",true);const t=new u.BuildahCli(e);await t.execute(["version"],{group:true});const n="latest";const o=process.env.GITHUB_WORKSPACE||process.cwd();const l=c.getContainerfiles();const d=s.getInput(r.Inputs.IMAGE);const a=s.getInput(r.Inputs.TAGS);const p=a.trim().split(/\s+/);const f=s.getInput(r.Inputs.LABELS);const h=f?c.splitByNewline(f):[];const m=[];let g=false;for(const e of p){m.push(e.toLowerCase());if(e.toLowerCase()!==e){g=true}}const y=d.toLowerCase();if(g||d!==y){s.warning(`Reference to image and/or tag must be lowercase.`+` Reference has been converted to be compliant with standard.`)}if(p.length===0){s.info(`Input "${r.Inputs.TAGS}" is not provided, using default tag "${n}"`);p.push(n)}const w=s.getInput(r.Inputs.EXTRA_ARGS);let v=[];if(w){const e=c.splitByNewline(w);v=e.flatMap(e=>e.split(" ")).map(e=>e.trim())}const E=c.isFullImageName(m[0]);if(m.some(e=>c.isFullImageName(e)!==E)){throw new Error(`Input "${r.Inputs.TAGS}" cannot have a mix of full name and non full name tags. Refer to https://github.com/redhat-actions/buildah-build#image-tag-inputs`)}if(!E&&!y){throw new Error(`Input "${r.Inputs.IMAGE}" must be provided when not using full image name tags. Refer to https://github.com/redhat-actions/buildah-build#image-tag-inputs`)}const _=c.getFullImageName(y,m[0]);const C=s.getInput(r.Inputs.OCI)==="true";const $=c.getArch();const S=c.getPlatform();if($.length>0&&S.length>0){throw new Error("The --platform option may not be used in combination with the --arch option.")}const O=[];if(l.length!==0){O.push(...await doBuildUsingContainerFiles(t,_,o,l,C,$,S,h,v))}else{if(S.length>0){throw new Error("The --platform option is not supported for builds without containerfiles.")}O.push(...await doBuildFromScratch(t,_,C,$,h,v))}if($.length>1||S.length>1){s.info(`Creating manifest with tag${m.length!==1?"s":""} `+`"${m.join(", ")}"`);const e=[];for(const n of m){const s=c.getFullImageName(y,n);await t.manifestCreate(s);e.push(s);for(const e of $){const n=c.removeIllegalCharacters(e);await t.manifestAdd(s,`${_}-${n}`)}for(const e of S){const n=c.removeIllegalCharacters(e);await t.manifestAdd(s,`${_}-${n}`)}}s.info(`✅ Successfully built image${O.length!==1?"s":""} "${O.join(", ")}" `+`and manifest${e.length!==1?"s":""} "${e.join(", ")}"`)}else if(m.length>1){await t.tag(y,m)}else if(m.length===1){s.info(`✅ Successfully built image "${c.getFullImageName(y,m[0])}"`)}s.setOutput(r.Outputs.IMAGE,y);s.setOutput(r.Outputs.TAGS,a);s.setOutput(r.Outputs.IMAGE_WITH_TAG,_)}t.run=run;async function doBuildUsingContainerFiles(e,t,n,i,u,l,d,a,p){if(i.length===1){s.info(`Performing build from Containerfile`)}else{s.info(`Performing build from ${i.length} Containerfiles`)}const f=o.join(n,s.getInput(r.Inputs.CONTEXT));const h=c.getInputList(r.Inputs.BUILD_ARGS);const m=i.map(e=>o.join(n,e));const g=s.getInput(r.Inputs.LAYERS);const y=s.getInput(r.Inputs.TLS_VERIFY)==="true";const w=[];if(l.length>0||d.length>0){for(const n of l){let s="";if(l.length>1){s=`-${c.removeIllegalCharacters(n)}`}await e.buildUsingDocker(`${t}${s}`,f,m,h,u,a,g,p,y,n,undefined);w.push(`${t}${s}`)}for(const n of d){let s="";if(d.length>1){s=`-${c.removeIllegalCharacters(n)}`}await e.buildUsingDocker(`${t}${s}`,f,m,h,u,a,g,p,y,undefined,n);w.push(`${t}${s}`)}}else if(l.length===1||d.length===1){await e.buildUsingDocker(t,f,m,h,u,a,g,p,y,l[0],d[0]);w.push(t)}else{await e.buildUsingDocker(t,f,m,h,u,a,g,p,y);w.push(t)}return w}async function doBuildFromScratch(e,t,n,i,o,u){s.info(`Performing build from scratch`);const l=s.getInput(r.Inputs.BASE_IMAGE,{required:true});const d=c.getInputList(r.Inputs.CONTENT);const a=c.getInputList(r.Inputs.ENTRYPOINT);const p=s.getInput(r.Inputs.PORT);const f=s.getInput(r.Inputs.WORKDIR);const h=c.getInputList(r.Inputs.ENVS);const m=s.getInput(r.Inputs.TLS_VERIFY)==="true";const g=await e.from(l,m,u);const y=g.output.replace("\n","");const w=[];if(i.length>0){for(const s of i){let r="";if(i.length>1){r=`-${c.removeIllegalCharacters(s)}`}const u={entrypoint:a,port:p,workingdir:f,envs:h,arch:s,labels:o};await e.config(y,u);await e.copy(y,d);await e.commit(y,`${t}${r}`,n);w.push(`${t}${r}`)}}else{const s={entrypoint:a,port:p,workingdir:f,envs:h,labels:o};await e.config(y,s);await e.copy(y,d);await e.commit(y,t,n);w.push(t)}return w}run().catch(s.setFailed)},314:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});t.removeIllegalCharacters=t.getFullImageName=t.isFullImageName=t.getCommaSeperatedInput=t.getInputList=t.getContainerfiles=t.getPlatform=t.getArch=t.splitByNewline=void 0;const s=n(186);const i=n(69);function splitByNewline(e){return e.split(/\r?\n/)}t.splitByNewline=splitByNewline;function getArch(){const e=getCommaSeperatedInput(i.Inputs.ARCHS);const t=s.getInput(i.Inputs.ARCH);if(t&&e.length>0){s.warning(`Both "${i.Inputs.ARCH}" and "${i.Inputs.ARCHS}" inputs are set. `+`Please use "${i.Inputs.ARCH}" if you want to provide multiple `+`ARCH else use ${i.Inputs.ARCH}". "${i.Inputs.ARCHS}" takes preference.`)}if(e.length>0){return e}else if(t){return[t]}return[]}t.getArch=getArch;function getPlatform(){const e=s.getInput(i.Inputs.PLATFORM);const t=getCommaSeperatedInput(i.Inputs.PLATFORMS);if(e&&t.length>0){s.warning(`Both "${i.Inputs.PLATFORM}" and "${i.Inputs.PLATFORMS}" inputs are set. `+`Please use "${i.Inputs.PLATFORMS}" if you want to provide multiple `+`PLATFORM else use ${i.Inputs.PLATFORM}". "${i.Inputs.PLATFORMS}" takes preference.`)}if(t.length>0){s.debug("return platforms");return t}else if(e){s.debug("return platform");return[e]}s.debug("return empty");return[]}t.getPlatform=getPlatform;function getContainerfiles(){const e=getInputList(i.Inputs.CONTAINERFILES);const t=getInputList(i.Inputs.DOCKERFILES);if(e.length!==0&&t.length!==0){s.warning(`Both "${i.Inputs.CONTAINERFILES}" and "${i.Inputs.DOCKERFILES}" inputs are set. `+`Please use only one of these two inputs, as they are aliases of one another. `+`"${i.Inputs.CONTAINERFILES}" takes precedence.`)}return e.length!==0?e:t}t.getContainerfiles=getContainerfiles;function getInputList(e){const t=s.getInput(e);if(!t){return[]}const n=splitByNewline(t);return n.reduce((e,t)=>e.concat(t).map(e=>e.trim()),[])}t.getInputList=getInputList;function getCommaSeperatedInput(e){const t=s.getInput(e);if(t.length===0){s.debug("empty");return[]}const n=t.split(",");return n.reduce((e,t)=>e.concat(t).map(e=>e.trim()),[])}t.getCommaSeperatedInput=getCommaSeperatedInput;function isFullImageName(e){return e.indexOf(":")>0}t.isFullImageName=isFullImageName;function getFullImageName(e,t){if(isFullImageName(t)){return t}return`${e}:${t}`}t.getFullImageName=getFullImageName;function removeIllegalCharacters(e){return e.replace(/[^a-zA-Z0-9 ]/g,"")}t.removeIllegalCharacters=removeIllegalCharacters},357:e=>{e.exports=require("assert")},129:e=>{e.exports=require("child_process")},614:e=>{e.exports=require("events")},747:e=>{e.exports=require("fs")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},669:e=>{e.exports=require("util")}};var t={};function __webpack_require__(n){if(t[n]){return t[n].exports}var s=t[n]={exports:{}};var i=true;try{e[n].call(s.exports,s,s.exports,__webpack_require__);i=false}finally{if(i)delete t[n]}return s.exports}__webpack_require__.ab=__dirname+"/";return __webpack_require__(144)})();
//# sourceMappingURL=index.js.map