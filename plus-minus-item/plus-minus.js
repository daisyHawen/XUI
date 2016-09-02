/*
 *专门用于添加元素，删除元素的函数
 *依赖jquery
 *输入参数
 *fatherObj:要插入元素的父元素的名字，如果是class就用'.name'，如果是id就用'#name'
 *Obj:要插入元素的class类名,用'.className'
 *maxSize:允许插入的最大个数
 */

var plusMinus = (function() {
	var fatherObj = "",
		objClassName = "",
		Counter = 1,
		maxSize = 4;
	var plusItems = function() {
			var father_ul = $(fatherObj);
			if (Counter > maxSize) {
				alert("只允许添加" + maxSize + "个条件");
			} else {
				var html = $(objClassName)[0].outerHTML;
				console.log(html);
				father_ul.append(html);
				Counter = Counter + 1;
			}
		},
		minusItems = function() {
			/*首先找到fatherObj的最后一个元素*/
			console.log(objClassName);
			var limit_li = $(objClassName);
			var last_limit_li = limit_li.last();
			if (Counter > 1) {
				last_limit_li.remove();
				Counter = Counter - 1;
			} else {
				console.log('只剩一个了，不要再删了！');
			}
		},
		init = function(ufatherObj, uobjClassName, umaxSize) {
			console.log('init');
			fatherObj = ufatherObj;
			objClassName = uobjClassName;
			maxSize = umaxSize;
		};
	return {
		plusItems: function() {
			return plusItems();
		},
		minusItems: function() {
			return minusItems();
		},
		init: function(ufatherObj, uobjClassName, umaxSize) {
			return init(ufatherObj, uobjClassName, umaxSize);
		}
	}

});
var newplusMinus = plusMinus();
var limit_ul = '.list-group';
var limit_li = '.list-group-item';
/*初始化参数*/
newplusMinus.init(limit_ul, limit_li, 5);
/*为按钮绑定事件函数*/
function addItem() {
	newplusMinus.plusItems();
}

function minusItem() {
	console.log('minus');
	newplusMinus.minusItems();
}