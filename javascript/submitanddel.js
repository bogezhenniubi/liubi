var href=document.getElementsByTagName("a");
for(var i=0;i<href.length;i++){
	href[i].onclick=function(){
		var tr=this.parentNode.parentNode;
		var td=tr.getElementsByTagName("td")[0];
		var a=confirm("确认删除"+td.innerText+"?");
		if(a){
			tr.parentNode.removeChild(tr);
		}
	}
}
	
var btn=document.getElementById("btn");
btn.onclick=function(){
	var name=document.getElementById("username");
	var email=document.getElementById("email");
	var salary=document.getElementById("salary");
	var tr=document.createElement("tr");
	var tdname=document.createElement("td");
	var tdemail=document.createElement("td");
	var tdsalary=document.createElement("td");
	var tda=document.createElement("td");
		tdname.innerText=name.value;
		tdemail.innerText=email.value;
		tdsalary.innerText=salary.value;
	var ha=document.createElement("a");
		ha.href="#"
		ha.innerText="DEL";
		tda.appendChild(ha)
	tr.appendChild(tdname);
	tr.appendChild(tdemail);
	tr.appendChild(tdsalary);
	tr.appendChild(tda);
	ha.onclick=function(){
		var tr=this.parentNode.parentNode;
		var td=tr.getElementsByTagName("td")[0];
		var a=confirm("确认删除"+td.innerText+"?");
		if(a){
			tr.parentNode.removeChild(tr);
		}
	}
	var tbody=document.getElementsByTagName("tbody")[0];
	tbody.appendChild(tr);
	var href=document.getElementsByTagName("a");
	
}