function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function() {
    if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
}
xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  details(data.career);
  education(data.Education);
  Skills(data.Skills);
})
var parent=document.querySelector(".parent");
var child=document.querySelector(".child");
var child1=document.querySelector(".child1");
function profile(pro){
  var image=document.createElement("img");
  image.src=pro.img;
  child.appendChild(image);
  parent.appendChild(child);
  var name=document.createElement("h1");
  name.textContent=pro.name;
  child.appendChild(name);
  var hr=document.createElement("hr");
  child.append(hr);
  var email=document.createElement("h");
  email.textContent=pro.email;
  child.appendChild(email);

}
var parent=document.querySelector(".parent");
var child=document.querySelector(".child");
var child1=document.querySelector(".child1");
function details(det){
  var data=document.createElement("h1");
  data.textContent="Career Details";
  child1.appendChild(data);
  var hr=document.createElement("hr");
  child1.append(hr);
  var info=document.createElement("h2");
  info.textContent=det.info;
  child1.appendChild(info);
}
function education(edu){
var h2=document.createElement("h1");
h2.textContent="Education details";
child1.appendChild(h2);
var hr=document.createElement("hr");
child1.append(hr);
var table=document.createElement("table");
table.border="3";
let row="";
row += "<tr>"+"<th>"+"SNo"+"</th>"+
"<th>"+"Degree"+"</th>"+
"<th>"+"Institute"+"</th>"+
"<th>"+"Percentage"+"</th>"+"</tr>";
for(i in edu){
row += "<tr>"+"<td>"+edu[i].Sno+"</td>"+
"<td>"+edu[i].degree+"</td>"+
"<td>"+edu[i].institute+"</td>"+
"<td>"+edu[i].percentage+"</td>"+"</tr>";
}
table.innerHTML=row;
child1.appendChild(table);
parent.appendChild(child1);
}
function Skills(S){
  var sk=document.createElement("h2");
  sk.textContent="Skills";
  child1.append(sk);
  var ul=document.createElement(ul);
  child1.append(ul);
  for(i in S){
    var li=document.createElement("li");
    li.textContent=S[i].info;
    ul.append(li);
  }
}
