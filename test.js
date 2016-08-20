/*测试设置默认参数*/
function MessageBox(title,x,y,z){
title = title || "1";
console.log(title); 
console.log(x);
console.log(y);
console.log(z);
} 
MessageBox("123",1);
