function spanleave(){
	var temp=document.getElementById('span2');
	temp.style.paddingLeft=30+'px';
	temp.style.opacity=0.5;
}
function spanrecover(){
	var temp=document.getElementById('span2');
	temp.style.paddingLeft=0+'px';
	temp.style.opacity=1;
}
function dispWechatCode(){
	var temp=document.getElementById('wechatcode');
	temp.style.display='block';
}
function hiddenWechatCode(){
	var temp=document.getElementById('wechatcode');
	temp.style.display='none';
}
