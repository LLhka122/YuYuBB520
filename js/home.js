			
	function myweb(){
	window.location.href='start.html';
}		
			
	var person=prompt("宝贝猪又去哪里呀！想出校还是进校呀？","打俩字儿试试看呗！");
	if (person!=null && person=="进校")
{
 	window.location.href='jinxiao.html';
} 
else if(person=='出校')
{
	window.location.href='chuxiao.html';
}
else{
	alert('输入错误，请重新输入');
//	window.location='home.html';
}
