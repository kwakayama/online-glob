!function(){function a(){this.returnValue=!1}function b(){this.cancelBubble=!0}var c,d,e=0,f=[],g={},h={},i={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},j=/[<>&\"\']/g,k=window.setTimeout,l={};!function(a){var b,c,d,e=a.split(/,/);for(b=0;b<e.length;b+=2)for(d=e[b+1].split(/ /),c=0;c<d.length;c++)h[d[c]]=e[b]}("application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mpga mpega mp2 mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe");var m={VERSION:"@@version@@",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:h,ua:function(){var a,b,c,d=navigator,e=d.userAgent,f=d.vendor;return a=/WebKit/.test(e),c=a&&-1!==f.indexOf("Apple"),b=window.opera&&window.opera.buildNumber,{windows:-1!==navigator.platform.indexOf("Win"),ie:!a&&!b&&/MSIE/gi.test(e)&&/Explorer/gi.test(d.appName),webkit:a,gecko:!a&&/Gecko/.test(e),safari:c,opera:!!b}}(),typeOf:function(a){return{}.toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},extend:function(a){return m.each(arguments,function(b,c){c>0&&m.each(b,function(b,c){a[c]=b})}),a},cleanName:function(a){var b,c;for(c=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"],b=0;b<c.length;b+=2)a=a.replace(c[b],c[b+1]);return a=a.replace(/\s+/g,"_"),a=a.replace(/[^a-z0-9_\-\.]+/gi,"")},addRuntime:function(a,b){return b.name=a,f[a]=b,f.push(b),b},guid:function(){var a,b=(new Date).getTime().toString(32);for(a=0;5>a;a++)b+=Math.floor(65535*Math.random()).toString(32);return(m.guidPrefix||"p")+b+(e++).toString(32)},buildUrl:function(a,b){var c="";return m.each(b,function(a,b){c+=(c?"&":"")+encodeURIComponent(b)+"="+encodeURIComponent(a)}),c&&(a+=(a.indexOf("?")>0?"&":"?")+c),a},each:function(a,b){var d,e,f;if(a)if(d=a.length,d===c){for(e in a)if(a.hasOwnProperty(e)&&b(a[e],e)===!1)return}else for(f=0;d>f;f++)if(b(a[f],f)===!1)return},formatSize:function(a){return a===c||/\D/.test(a)?m.translate("N/A"):a>1073741824?Math.round(a/1073741824,1)+" GB":a>1048576?Math.round(a/1048576,1)+" MB":a>1024?Math.round(a/1024,1)+" KB":a+" b"},getPos:function(a,b){function c(a){var b,c,d=0,e=0;return a&&(c=a.getBoundingClientRect(),b="CSS1Compat"===i.compatMode?i.documentElement:i.body,d=c.left+b.scrollLeft,e=c.top+b.scrollTop),{x:d,y:e}}var d,e,f,g=0,h=0,i=document;if(a=a,b=b||i.body,a&&a.getBoundingClientRect&&navigator.userAgent.indexOf("MSIE")>0&&i.documentMode<8)return e=c(a),f=c(b),{x:e.x-f.x,y:e.y-f.y};for(d=a;d&&d!=b&&d.nodeType;)g+=d.offsetLeft||0,h+=d.offsetTop||0,d=d.offsetParent;for(d=a.parentNode;d&&d!=b&&d.nodeType;)g-=d.scrollLeft||0,h-=d.scrollTop||0,d=d.parentNode;return{x:g,y:h}},getSize:function(a){return{w:a.offsetWidth||a.clientWidth,h:a.offsetHeight||a.clientHeight}},parseSize:function(a){var b;return"string"==typeof a&&(a=/^([0-9]+)([mgk]?)$/.exec(a.toLowerCase().replace(/[^0-9mkg]/g,"")),b=a[2],a=+a[1],"g"==b&&(a*=1073741824),"m"==b&&(a*=1048576),"k"==b&&(a*=1024)),a},xmlEncode:function(a){return a?(""+a).replace(j,function(a){return i[a]?"&"+i[a]+";":a}):a},toArray:function(a){var b,c=[];for(b=0;b<a.length;b++)c[b]=a[b];return c},inArray:function(a,b){if(b){if(Array.prototype.indexOf)return Array.prototype.indexOf.call(b,a);for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c}return-1},addI18n:function(a){return m.extend(g,a)},translate:function(a){return g[a]||a},isEmptyObj:function(a){if(a===c)return!0;for(var b in a)return!1;return!0},hasClass:function(a,b){var c;return""==a.className?!1:(c=new RegExp("(^|\\s+)"+b+"(\\s+|$)"),c.test(a.className))},addClass:function(a,b){m.hasClass(a,b)||(a.className=""==a.className?b:a.className.replace(/\s+$/,"")+" "+b)},removeClass:function(a,b){var c=new RegExp("(^|\\s+)"+b+"(\\s+|$)");a.className=a.className.replace(c,function(a,b,c){return" "===b&&" "===c?" ":""})},getStyle:function(a,b){return a.currentStyle?a.currentStyle[b]:window.getComputedStyle?window.getComputedStyle(a,null)[b]:void 0},addEvent:function(e,f,g){var h,i,j;j=arguments[3],f=f.toLowerCase(),d===c&&(d="Plupload_"+m.guid()),e.addEventListener?(h=g,e.addEventListener(f,h,!1)):e.attachEvent&&(h=function(){var c=window.event;c.target||(c.target=c.srcElement),c.preventDefault=a,c.stopPropagation=b,g(c)},e.attachEvent("on"+f,h)),e[d]===c&&(e[d]=m.guid()),l.hasOwnProperty(e[d])||(l[e[d]]={}),i=l[e[d]],i.hasOwnProperty(f)||(i[f]=[]),i[f].push({func:h,orig:g,key:j})},removeEvent:function(a,b){var e,f,g;if("function"==typeof arguments[2]?f=arguments[2]:g=arguments[2],b=b.toLowerCase(),a[d]&&l[a[d]]&&l[a[d]][b]){e=l[a[d]][b];for(var h=e.length-1;h>=0&&(e[h].key!==g&&e[h].orig!==f||(a.removeEventListener?a.removeEventListener(b,e[h].func,!1):a.detachEvent&&a.detachEvent("on"+b,e[h].func),e[h].orig=null,e[h].func=null,e.splice(h,1),f===c));h--);if(e.length||delete l[a[d]][b],m.isEmptyObj(l[a[d]])){delete l[a[d]];try{delete a[d]}catch(i){a[d]=c}}}},removeAllEvents:function(a){var b=arguments[1];a[d]!==c&&a[d]&&m.each(l[a[d]],function(c,d){m.removeEvent(a,d,b)})}};m.Uploader=function(a){function b(){var a,b,c=0;if(this.state==m.STARTED){for(b=0;b<i.length;b++)a||i[b].status!=m.QUEUED?c++:(a=i[b],a.status=m.UPLOADING,this.trigger("BeforeUpload",a)&&this.trigger("UploadFile",a));c==i.length&&(this.stop(),this.trigger("UploadComplete",i))}}function d(){var a,b;for(e.reset(),a=0;a<i.length;a++)b=i[a],b.size!==c?(e.size+=b.size,e.loaded+=b.loaded):e.size=c,b.status==m.DONE?e.uploaded++:b.status==m.FAILED?e.failed++:e.queued++;e.size===c?e.percent=i.length>0?Math.ceil(e.uploaded/i.length*100):0:(e.bytesPerSec=Math.ceil(e.loaded/((+new Date-g||1)/1e3)),e.percent=e.size>0?Math.ceil(e.loaded/e.size*100):0)}var e,g,h={},i=[],j=!1;e=new m.QueueProgress,a=m.extend({chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:"file",filters:[]},a),m.extend(this,{state:m.STOPPED,runtime:"",features:{},files:i,settings:a,total:e,id:m.guid(),init:function(){function e(){var a,b,c,d=j[o++];if(d){if(a=d.getFeatures(),b=n.settings.required_features)for(b=b.split(","),c=0;c<b.length;c++)if(!a[b[c]])return void e();d.init(n,function(b){b&&b.success?(n.features=a,n.runtime=d.name,n.trigger("Init",{runtime:d.name}),n.trigger("PostInit"),n.refresh()):e()})}else n.trigger("Error",{code:m.INIT_ERROR,message:m.translate("Init error.")})}var h,j,l,n=this,o=0;if("function"==typeof a.preinit?a.preinit(n):m.each(a.preinit,function(a,b){n.bind(b,a)}),a.page_url=a.page_url||document.location.pathname.replace(/\/[^\/]+$/g,"/"),/^(\w+:\/\/|\/)/.test(a.url)||(a.url=a.page_url+a.url),a.chunk_size=m.parseSize(a.chunk_size),a.max_file_size=m.parseSize(a.max_file_size),n.bind("FilesAdded",function(b,d){var e,f,g,h=0,j=a.filters;for(j&&j.length&&(g=[],m.each(j,function(a){m.each(a.extensions.split(/,/),function(a){g.push(/^\s*\*\s*$/.test(a)?"\\.*":"\\."+a.replace(new RegExp("["+"/^$.*+?|()[]{}\\".replace(/./g,"\\$&")+"]","g"),"\\$&"))})}),g=new RegExp(g.join("|")+"$","i")),e=0;e<d.length;e++)f=d[e],f.loaded=0,f.percent=0,f.status=m.QUEUED,!g||g.test(f.name)?f.size!==c&&f.size>a.max_file_size?b.trigger("Error",{code:m.FILE_SIZE_ERROR,message:m.translate("File size error."),file:f}):(i.push(f),h++):b.trigger("Error",{code:m.FILE_EXTENSION_ERROR,message:m.translate("File extension error."),file:f});return h?void k(function(){n.trigger("QueueChanged"),n.refresh()},1):!1}),a.unique_names&&n.bind("UploadFile",function(a,b){var c=b.name.match(/\.([^.]+)$/),d="tmp";c&&(d=c[1]),b.target_name=b.id+"."+d}),n.bind("UploadProgress",function(a,b){b.percent=b.size>0?Math.ceil(b.loaded/b.size*100):100,d()}),n.bind("StateChanged",function(a){if(a.state==m.STARTED)g=+new Date;else if(a.state==m.STOPPED)for(h=a.files.length-1;h>=0;h--)a.files[h].status==m.UPLOADING&&(a.files[h].status=m.QUEUED,d())}),n.bind("QueueChanged",d),n.bind("Error",function(a,c){c.file&&(c.file.status=m.FAILED,d(),a.state==m.STARTED&&k(function(){b.call(n)},1))}),n.bind("FileUploaded",function(a,c){c.status=m.DONE,c.loaded=c.size,a.trigger("UploadProgress",c),k(function(){b.call(n)},1)}),a.runtimes)for(j=[],l=a.runtimes.split(/\s?,\s?/),h=0;h<l.length;h++)f[l[h]]&&j.push(f[l[h]]);else j=f;e(),"function"==typeof a.init?a.init(n):m.each(a.init,function(a,b){n.bind(b,a)})},refresh:function(){this.trigger("Refresh")},start:function(){i.length&&this.state!=m.STARTED&&(this.state=m.STARTED,this.trigger("StateChanged"),b.call(this))},stop:function(){this.state!=m.STOPPED&&(this.state=m.STOPPED,this.trigger("CancelUpload"),this.trigger("StateChanged"))},disableBrowse:function(){j=arguments[0]!==c?arguments[0]:!0,this.trigger("DisableBrowse",j)},getFile:function(a){var b;for(b=i.length-1;b>=0;b--)if(i[b].id===a)return i[b]},removeFile:function(a){var b;for(b=i.length-1;b>=0;b--)if(i[b].id===a.id)return this.splice(b,1)[0]},splice:function(a,b){var d;return d=i.splice(a===c?0:a,b===c?i.length:b),this.trigger("FilesRemoved",d),this.trigger("QueueChanged"),d},trigger:function(a){var b,c,d=h[a.toLowerCase()];if(d)for(c=Array.prototype.slice.call(arguments),c[0]=this,b=0;b<d.length;b++)if(d[b].func.apply(d[b].scope,c)===!1)return!1;return!0},hasEventListener:function(a){return!!h[a.toLowerCase()]},bind:function(a,b,c){var d;a=a.toLowerCase(),d=h[a]||[],d.push({func:b,scope:c||this}),h[a]=d},unbind:function(a){a=a.toLowerCase();var b,d=h[a],e=arguments[1];if(d){if(e!==c){for(b=d.length-1;b>=0;b--)if(d[b].func===e){d.splice(b,1);break}}else d=[];d.length||delete h[a]}},unbindAll:function(){var a=this;m.each(h,function(b,c){a.unbind(c)})},destroy:function(){this.stop(),this.trigger("Destroy"),this.unbindAll()}})},m.File=function(a,b,c,d){var e=this;e.id=a,e.name=b,e.size=c,e.relativePath=d||b,e.loaded=0,e.percent=0,e.status=0},m.Runtime=function(){this.getFeatures=function(){},this.init=function(){}},m.QueueProgress=function(){var a=this;a.size=0,a.loaded=0,a.uploaded=0,a.failed=0,a.queued=0,a.percent=0,a.bytesPerSec=0,a.reset=function(){a.size=a.loaded=a.uploaded=a.failed=a.queued=a.percent=a.bytesPerSec=0}},m.runtimes={},window.plupload=m}(),function(a,b,c,d){function e(b,c){var d;return"FileReader"in a?(d=new FileReader,d.readAsDataURL(b),d.onload=function(){c(d.result)},void 0):c(b.getAsDataURL())}function f(b,c){var d;return"FileReader"in a?(d=new FileReader,d.readAsBinaryString(b),d.onload=function(){c(d.result)},void 0):c(b.getAsBinary())}function g(a,c,d,f){var g,h,i,l,n=this;e(m[a.id],function(e){g=b.createElement("canvas"),g.style.display="none",b.body.appendChild(g),h=g.getContext("2d"),i=new Image,i.onerror=i.onabort=function(){f({success:!1})},i.onload=function(){var b,m,o,p;if(c.width||(c.width=i.width),c.height||(c.height=i.height),l=Math.min(c.width/i.width,c.height/i.height),1>l||1===l&&"image/jpeg"===d){if(b=Math.round(i.width*l),m=Math.round(i.height*l),g.width=b,g.height=m,h.drawImage(i,0,0,b,m),"image/jpeg"===d){if(o=new j(atob(e.substring(e.indexOf("base64,")+7))),o.headers&&o.headers.length&&(p=new k,p.init(o.get("exif")[0])&&(p.setExif("PixelXDimension",b),p.setExif("PixelYDimension",m),o.set("exif",p.getBinary()),n.hasEventListener("ExifData")&&n.trigger("ExifData",a,p.EXIF()),n.hasEventListener("GpsData")&&n.trigger("GpsData",a,p.GPS()))),c.quality)try{e=g.toDataURL(d,c.quality/100)}catch(q){e=g.toDataURL(d)}}else e=g.toDataURL(d);e=e.substring(e.indexOf("base64,")+7),e=atob(e),o&&o.headers&&o.headers.length&&(e=o.restore(e),o.purge()),g.parentNode.removeChild(g),f({success:!0,data:e})}else f({success:!1})},i.src=e})}function h(){function a(a,b){var c,d=f?0:-8*(b-1),g=0;for(c=0;b>c;c++)g|=e.charCodeAt(a+c)<<Math.abs(d+8*c);return g}function b(a,b,c){var c=3===arguments.length?c:e.length-b-1;e=e.substr(0,b)+a+e.substr(c+b)}function c(a,c,d){var e,g="",h=f?0:-8*(d-1);for(e=0;d>e;e++)g+=String.fromCharCode(c>>Math.abs(h+8*e)&255);b(g,a,d)}var e,f=!1;return{II:function(a){return a===d?f:void(f=a)},init:function(a){f=!1,e=a},SEGMENT:function(a,c,d){switch(arguments.length){case 1:return e.substr(a,e.length-a-1);case 2:return e.substr(a,c);case 3:b(d,a,c);break;default:return e}},BYTE:function(b){return a(b,1)},SHORT:function(b){return a(b,2)},LONG:function(b,e){return e===d?a(b,4):void c(b,e,4)},SLONG:function(b){var c=a(b,4);return c>2147483647?c-4294967296:c},STRING:function(b,c){var d="";for(c+=b;c>b;b++)d+=String.fromCharCode(a(b,1));return d}}}function j(a){var b,c,e,f={65505:{app:"EXIF",name:"APP1",signature:"Exif\x00"},65506:{app:"ICC",name:"APP2",signature:"ICC_PROFILE\x00"},65517:{app:"IPTC",name:"APP13",signature:"Photoshop 3.0\x00"}},g=[],i=d,k=0;if(b=new h,b.init(a),65496===b.SHORT(0)){for(c=2,e=Math.min(1048576,a.length);e>=c;)if(i=b.SHORT(c),i>=65488&&65495>=i)c+=2;else{if(65498===i||65497===i)break;k=b.SHORT(c+2)+2,f[i]&&b.STRING(c+4,f[i].signature.length)===f[i].signature&&g.push({hex:i,app:f[i].app.toUpperCase(),name:f[i].name.toUpperCase(),start:c,length:k,segment:b.SEGMENT(c,k)}),c+=k}return b.init(null),{headers:g,restore:function(a){b.init(a);var d=new j(a);if(!d.headers)return!1;for(var e=d.headers.length;e>0;e--){var f=d.headers[e-1];b.SEGMENT(f.start,f.length,"")}d.purge(),c=65504==b.SHORT(2)?4+b.SHORT(4):2;for(var e=0,h=g.length;h>e;e++)b.SEGMENT(c,0,g[e].segment),c+=g[e].length;return b.SEGMENT()},get:function(a){for(var b=[],c=0,d=g.length;d>c;c++)g[c].app===a.toUpperCase()&&b.push(g[c].segment);return b},set:function(a,b){var c=[];"string"==typeof b?c.push(b):c=b;for(var d=ii=0,e=g.length;e>d&&(g[d].app===a.toUpperCase()&&(g[d].segment=c[ii],g[d].length=c[ii].length,ii++),!(ii>=c.length));d++);},purge:function(){g=[],b.init(null)}}}}function k(){function a(a,b){var c,e,g,h,i,l,m,n,o=f.SHORT(a),p=[],q={};for(c=0;o>c;c++)if(m=l=a+12*c+2,g=b[f.SHORT(m)],g!==d){switch(h=f.SHORT(m+=2),i=f.LONG(m+=2),m+=4,p=[],h){case 1:case 7:for(i>4&&(m=f.LONG(m)+k.tiffHeader),e=0;i>e;e++)p[e]=f.BYTE(m+e);break;case 2:i>4&&(m=f.LONG(m)+k.tiffHeader),q[g]=f.STRING(m,i-1);continue;case 3:for(i>2&&(m=f.LONG(m)+k.tiffHeader),e=0;i>e;e++)p[e]=f.SHORT(m+2*e);break;case 4:for(i>1&&(m=f.LONG(m)+k.tiffHeader),e=0;i>e;e++)p[e]=f.LONG(m+4*e);break;case 5:for(m=f.LONG(m)+k.tiffHeader,e=0;i>e;e++)p[e]=f.LONG(m+4*e)/f.LONG(m+4*e+4);break;case 9:for(m=f.LONG(m)+k.tiffHeader,e=0;i>e;e++)p[e]=f.SLONG(m+4*e);break;case 10:for(m=f.LONG(m)+k.tiffHeader,e=0;i>e;e++)p[e]=f.SLONG(m+4*e)/f.SLONG(m+4*e+4);break;default:continue}n=1==i?p[0]:p,q[g]=j.hasOwnProperty(g)&&"object"!=typeof n?j[g][n]:n}return q}function b(){var b=d,c=k.tiffHeader;return f.II(18761==f.SHORT(c)),42!==f.SHORT(c+=2)?!1:(k.IFD0=k.tiffHeader+f.LONG(c+=2),b=a(k.IFD0,g.tiff),k.exifIFD="ExifIFDPointer"in b?k.tiffHeader+b.ExifIFDPointer:d,k.gpsIFD="GPSInfoIFDPointer"in b?k.tiffHeader+b.GPSInfoIFDPointer:d,!0)}function e(a,b,c){var d,e,h,j=0;if("string"==typeof b){var l=g[a.toLowerCase()];for(hex in l)if(l[hex]===b){b=hex;break}}for(d=k[a.toLowerCase()+"IFD"],e=f.SHORT(d),i=0;e>i;i++)if(h=d+12*i+2,f.SHORT(h)==b){j=h+8;break}return j?(f.LONG(j,c),!0):!1}var f,g,j,k={};return f=new h,g={tiff:{274:"Orientation",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}},j={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}},{init:function(a){return k={tiffHeader:10},a!==d&&a.length?(f.init(a),65505===f.SHORT(0)&&"EXIF\x00"===f.STRING(4,5).toUpperCase()?b():!1):!1},EXIF:function(){var b;if(b=a(k.exifIFD,g.exif),b.ExifVersion&&"array"===c.typeOf(b.ExifVersion)){for(var d=0,e="";d<b.ExifVersion.length;d++)e+=String.fromCharCode(b.ExifVersion[d]);b.ExifVersion=e}return b},GPS:function(){var b;return b=a(k.gpsIFD,g.gps),b.GPSVersionID&&(b.GPSVersionID=b.GPSVersionID.join(".")),b},setExif:function(a,b){return"PixelXDimension"!==a&&"PixelYDimension"!==a?!1:e("exif",a,b)},getBinary:function(){return f.SEGMENT()}}}var l,m={};c.runtimes.Html5=c.addRuntime("html5",{getFeatures:function(){var d,e,f,g,h,i;return e=f=h=i=!1,a.XMLHttpRequest&&(d=new XMLHttpRequest,f=!!d.upload,e=!(!d.sendAsBinary&&!d.upload)),e&&(g=!!(d.sendAsBinary||a.Uint8Array&&a.ArrayBuffer),h=!(!File||!File.prototype.getAsDataURL&&!a.FileReader||!g),i=!(!File||!(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice))),l=c.ua.safari&&c.ua.windows,{html5:e,dragdrop:function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a}(),jpgresize:h,pngresize:h,multipart:h||!!a.FileReader||!!a.FormData,canSendBinary:g,cantSendBlobInFormData:!(!(c.ua.gecko&&a.FormData&&a.FileReader)||FileReader.prototype.readAsArrayBuffer),progress:f,chunks:i,multi_selection:!(c.ua.safari&&c.ua.windows),triggerDialog:c.ua.gecko&&a.FormData||c.ua.webkit}},init:function(d,e){function h(a){if(!a||"undefined"==typeof a.files)return!1;var b=c.toArray(a.types||[]);return-1!==b.indexOf("public.file-url")||-1!==b.indexOf("application/x-moz-file")||-1!==b.indexOf("Files")||0===b.length}function i(a,b,d){b.pending||(b.pending=0),b.files||(b.files=[]),b.pending++;var e=a.createReader(),f=a.fullPath.replace(/^\//,"").replace(/(.+?)\/?$/,"$1/");e.readEntries(function(a){b.pending--,c.each(a,function(a){a.isFile?(b.pending++,a.file(function(a){a.relativePath=f+a.name,b.files.push(a),0===--b.pending&&b(b.files)},d)):i(a,b,d)}),0===b.pending&&b(b.files)},d)}function j(a){var b,e,f,g=[],h={};for(e=0;e<a.length;e++)b=a[e],h[b.name]||(h[b.name]=!0,f=c.guid(),m[f]=b,g.push(new c.File(f,b.fileName||b.name,b.fileSize||b.size,b.relativePath)));g.length&&d.trigger("FilesAdded",g)}var k,n;return k=this.getFeatures(),k.html5?(d.bind("Init",function(a){var e,f,g,h,i,k,l,m=[],n=a.settings.filters,o=b.body;e=b.createElement("div"),e.id=a.id+"_html5_container",c.extend(e.style,{position:"absolute",background:d.settings.shim_bgcolor||"transparent",width:"100px",height:"100px",overflow:"hidden",zIndex:99999,opacity:d.settings.shim_bgcolor?"":0}),e.className="plupload html5",d.settings.container&&(o=b.getElementById(d.settings.container),"static"===c.getStyle(o,"position")&&(o.style.position="relative")),o.appendChild(e);a:for(g=0;g<n.length;g++)for(i=n[g].extensions.split(/,/),h=0;h<i.length;h++){if("*"===i[h]){m=[];break a}k=c.mimeTypes[i[h]],k&&-1===c.inArray(k,m)&&m.push(k)}if(e.innerHTML='<input id="'+d.id+'_html5"  style="font-size:999px" type="file" accept="'+m.join(",")+'" '+(d.settings.multi_selection&&d.features.multi_selection?'multiple="multiple"':"")+" />",e.scrollTop=100,l=b.getElementById(d.id+"_html5"),a.features.triggerDialog?c.extend(l.style,{position:"absolute",width:"100%",height:"100%"}):c.extend(l.style,{cssFloat:"right",styleFloat:"right"}),l.onchange=function(){j(this.files),this.value=""},f=b.getElementById(a.settings.browse_button)){var p=a.settings.browse_button_hover,q=a.settings.browse_button_active,r=a.features.triggerDialog?f:e;p&&(c.addEvent(r,"mouseover",function(){c.addClass(f,p)},a.id),c.addEvent(r,"mouseout",function(){c.removeClass(f,p)},a.id)),q&&(c.addEvent(r,"mousedown",function(){c.addClass(f,q)},a.id),c.addEvent(b.body,"mouseup",function(){c.removeClass(f,q)},a.id)),a.features.triggerDialog&&c.addEvent(f,"click",function(c){var d=b.getElementById(a.id+"_html5");d&&!d.disabled&&d.click(),c.preventDefault()},a.id)}}),d.bind("PostInit",function(){var a=b.getElementById(d.settings.drop_element);if(a){if(l)return void c.addEvent(a,"dragenter",function(e){var f,g,i;f=b.getElementById(d.id+"_drop"),!f&&h(e.dataTransfer)&&(f=b.createElement("input"),f.setAttribute("type","file"),f.setAttribute("id",d.id+"_drop"),f.setAttribute("multiple","multiple"),c.addEvent(f,"change",function(){j(this.files),c.removeEvent(f,"change",d.id),f.parentNode.removeChild(f)},d.id),a.appendChild(f)),g=c.getPos(a,b.getElementById(d.settings.container)),i=c.getSize(a),"static"===c.getStyle(a,"position")&&c.extend(a.style,{position:"relative"}),c.extend(f.style,{position:"absolute",display:"block",top:0,left:0,width:i.w+"px",height:i.h+"px",opacity:0})},d.id);c.addEvent(a,"dragover",function(a){h(a.dataTransfer)&&a.preventDefault()},d.id),c.addEvent(a,"drop",function(a){var b=a.dataTransfer;if(h(b)){var c,d=b.items||[];d[0]&&d[0].webkitGetAsEntry&&(c=d[0].webkitGetAsEntry())?i(c.filesystem.root,function(a){j(a)},function(){j(b.files)}):j(b.files),a.preventDefault()}},d.id)}}),d.bind("Refresh",function(a){var e,f,g,h,i;e=b.getElementById(d.settings.browse_button),e&&(f=c.getPos(e,b.getElementById(a.settings.container)),g=c.getSize(e),h=b.getElementById(d.id+"_html5_container"),c.extend(h.style,{top:f.y+"px",left:f.x+"px",width:g.w+"px",height:g.h+"px"}),d.features.triggerDialog&&("static"===c.getStyle(e,"position")&&c.extend(e.style,{position:"relative"}),i=parseInt(c.getStyle(e,"zIndex"),10),isNaN(i)&&(i=0),c.extend(e.style,{zIndex:i}),c.extend(h.style,{zIndex:i-1})))}),d.bind("DisableBrowse",function(a,c){var d=b.getElementById(a.id+"_html5");d&&(d.disabled=c)}),d.bind("CancelUpload",function(){n&&n.abort&&n.abort()}),d.bind("UploadFile",function(b,d){function e(a,b,c){var d;if(!File.prototype.slice)return(d=File.prototype.webkitSlice||File.prototype.mozSlice)?d.call(a,b,c):null;try{return a.slice(),a.slice(b,c)}catch(e){return a.slice(b,c-b)}}function h(f){function g(){function m(e){var f,j=0,l="----pluploadboundary"+c.guid(),m="--",v="\r\n",w="";if(n=new XMLHttpRequest,n.upload&&(n.upload.onprogress=function(a){d.loaded=Math.min(d.size,i+a.loaded-j),b.trigger("UploadProgress",d)}),n.onreadystatechange=function(){var a,j;if(4==n.readyState&&b.state!==c.STOPPED){try{a=n.status}catch(k){a=0}if(a>=400)b.trigger("Error",{code:c.HTTP_ERROR,message:c.translate("HTTP Error."),file:d,status:a});else{if(p){if(j={chunk:h,chunks:p,response:n.responseText,status:a},b.trigger("ChunkUploaded",d,j),i+=s,j.cancelled)return void(d.status=c.FAILED);d.loaded=Math.min(d.size,(h+1)*r)}else d.loaded=d.size;b.trigger("UploadProgress",d),e=o=f=w=null,!p||++h>=p?(d.status=c.DONE,b.trigger("FileUploaded",d,{response:n.responseText,status:a})):g()}}},b.settings.multipart&&k.multipart){if(q.name=d.target_name||d.name,n.open("post",u,!0),c.each(b.settings.headers,function(a,b){n.setRequestHeader(b,a)}),"string"!=typeof e&&a.FormData)return f=new FormData,c.each(c.extend(q,b.settings.multipart_params),function(a,b){f.append(b,a)}),f.append(b.settings.file_data_name,e),void n.send(f);if("string"==typeof e){if(n.setRequestHeader("Content-Type","multipart/form-data; boundary="+l),c.each(c.extend(q,b.settings.multipart_params),function(a,b){w+=m+l+v+'Content-Disposition: form-data; name="'+b+'"'+v+v,w+=unescape(encodeURIComponent(a))+v}),t=c.mimeTypes[d.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream",w+=m+l+v+'Content-Disposition: form-data; name="'+b.settings.file_data_name+'"; filename="'+unescape(encodeURIComponent(d.name))+'"'+v+"Content-Type: "+t+v+v+e+v+m+l+m+v,j=w.length-e.length,e=w,n.sendAsBinary)n.sendAsBinary(e);else if(k.canSendBinary){for(var x=new Uint8Array(e.length),y=0;y<e.length;y++)x[y]=255&e.charCodeAt(y);n.send(x.buffer)}return}}u=c.buildUrl(b.settings.url,c.extend(q,b.settings.multipart_params)),n.open("post",u,!0),n.setRequestHeader("Content-Type","application/octet-stream"),c.each(b.settings.headers,function(a,b){n.setRequestHeader(b,a)}),n.send(e)}var o,p,q,r,s,t,u=b.settings.url;d.status!=c.DONE&&d.status!=c.FAILED&&b.state!=c.STOPPED&&(q={name:d.target_name||d.name},j.chunk_size&&d.size>j.chunk_size&&(k.chunks||"string"==typeof f)?(r=j.chunk_size,p=Math.ceil(d.size/r),s=Math.min(r,d.size-h*r),o="string"==typeof f?f.substring(h*r,h*r+s):e(f,h*r,h*r+s),q.chunk=h,q.chunks=p):(s=d.size,o=f),b.settings.multipart&&k.multipart&&"string"!=typeof o&&l&&k.cantSendBlobInFormData&&k.chunks&&b.settings.chunk_size?(l.onload=function(){m(l.result)},l.readAsBinaryString(o)):m(o))}var h=0,i=0,l="FileReader"in a?new FileReader:null;g()}var i,j=b.settings;i=m[d.id],k.jpgresize&&b.settings.resize&&/\.(png|jpg|jpeg)$/i.test(d.name)?g.call(b,d,b.settings.resize,/\.png$/i.test(d.name)?"image/png":"image/jpeg",function(a){a.success?(d.size=a.data.length,h(a.data)):k.chunks?h(i):f(i,h)}):!k.chunks&&k.jpgresize?f(i,h):h(i)}),d.bind("Destroy",function(a){var d,e,f=b.body,g={inputContainer:a.id+"_html5_container",inputFile:a.id+"_html5",browseButton:a.settings.browse_button,dropElm:a.settings.drop_element};for(d in g)e=b.getElementById(g[d]),e&&c.removeAllEvents(e,a.id);c.removeAllEvents(b.body,a.id),a.settings.container&&(f=b.getElementById(a.settings.container)),f.removeChild(b.getElementById(g.inputContainer))}),void e({success:!0})):void e({success:!1})}})}(window,document,plupload);