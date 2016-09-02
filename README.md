#为什么要建这么一个库
为了方便将现在写的一些零碎的工具代码整合，为以后提供方便。
#目录
##pagination
分页插件
演示案例pagination/demo3.html
用于提供分页。

使用方法：
引入文件<script src="pagination.js"></script>
/*声明一个新的分页*/
var page=pagination();
page.initPage();
/*为该分页绑定事件*/
function handleClick(a) {
     page.handleClick(a)
}
后来发现bootstra也是有分页的，回头看看它是怎么写的==
##plus-minus-item
用于提供添加和删除元素。
./plus-minus-item
主要文件：plus-minus.js
演示demo：demo.html