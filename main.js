name_student = [];

function submit()
{

display_array = [];
for (var j = 1; j <= 4; j++)
{

 var name = document.getElementById("name_of_the_student_"+j).value;
 console.log(name);
 name_student.push(name);

}
console.log(name_student);
var lenght_name = name_student.length;
console.log(lenght_name);
for (var k = 0; k < lenght_name;k++)
{

display_array.push("<h4>NAME - "+ name_student[k] + "</h4>");
console.log(display_array);
document.getElementById("display_name_with_commas").innerHTML=display_array;
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"
var r_c = display_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=r_c;
}
}
function sorting()
{

name_student.sort();
console.log(name_student);
var display_array1 = [];

var lenght_name = name_student.length;
console.log(lenght_name);
for (var k = 0; k < lenght_name;k++)
{

display_array1.push("<h4>NAME - "+ name_student[k] + "</h4>");
console.log(display_array1);
document.getElementById("display_name_with_commas").innerHTML=display_array1;
var r_c = display_array1.join(" ");
document.getElementById("display_name_without_commas").innerHTML=r_c;
}
}

function update(){

document.getElementById("display_name_without_commas").innerHTML="<h1>"+name_student+"</h1>"

}
