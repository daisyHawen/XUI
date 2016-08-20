/*var x=(function(){}())自调用函数，一加载就会执行
 *不采用自匿名
 *单例函数模式
 */
var pagination = (function() {
    
    var pages = 2,
        /*每页显示条数*/
        pageNow = 1,
        /*当前页码*/
        pageNum = 2;
        /*总页数*/
    var dataObj = "#pagin-content tr",
        /*数据项*/
        paginObj = "#pagin-content ul";
        /*分页项*/

    /*初始化分页，默认在第一页*/
    var initPage = function(udataObj, upaginObj, upages) {
            // var trs = $("#pagin-content tr");
            //设置全局参数
            console.log('initPage');
            if (upages) {
                pages = upages;
            }
            if (udataObj) {
                dataObj = udataObj;
            }
            if (upaginObj) {
                paginObj = upaginObj;
            }
            console.log(pages);
            console.log(dataObj);
            var trs = $(dataObj);
            console.log(trs);
            var length = trs.length - 1;
            pageNum = Math.ceil(length / pages);
            renewPagination();
            renewList()
        },
        /*更新页码列表*/
        renewPagination = function() {
            console.log('renewPagination');
            // var pageul = $("#pagin-content ul");
            var pageul = $(paginObj);
            console.log(pageul);
            pageul.empty();
            var html = "<li class='prev'><a onclick='pagination.handleClick(this.text)'>«上一页</a></li>";
            for (var i = 1; i <= pageNum; i++) {
                if (i == pageNow) {
                    var tempt = "<li class='active'><a onclick='pagination.handleClick(this.text)' >" + i + "</a></li>"
                } else {
                    tempt = "<li><a onclick='handleClick(this.text)'>" + i + "</a></li>";
                }
                html += tempt;
            }
            html += "       <li class='dotted'><span>...</span></li> <li class='next'><a onclick='handleClick(this.text)'>下一页»</a></li> <div> <span>&nbsp;&nbsp;共" + pageNum + "页&nbsp; </span> </div>";
            pageul.append(html);
        },
        /*更新数据列表*/
        renewList = function() {
            // var trs = $("#pagin-content tr");
            var trs = $(dataObj);
            for (var i = 1; i < trs.length; i++) {
                console.log(trs[i].id);
                var temptId = "#" + trs[i].id;

                $(temptId).removeClass('modal-tr-hide');
                // trs[i].removeClass('modal-tr-hide');
                if (i <= pageNow * pages - pages || i > pageNow * pages) {
                    $(temptId).addClass('modal-tr-hide');
                }
            }
        },

        handleClick = function(a) {
            console.log('handleClick');
            console.log(a);
            if (a == "下一页»") {
                if (pageNow == pageNum) {
                    a = pageNow;
                } else {
                    a = pageNow + 1;
                }
            }
            if (a == "«上一页") {
                if (pageNow == 1) {
                    a = pageNow;
                } else {
                    a = pageNow - 1;
                }
            }
            pageNow = a;
            if (pageNow == 1) {
                $(".prev").addClass('disabled');
            }
            if (pageNow == pageNum) {
                $(".next").addClass('disabled');
            }
            renewPagination();
            renewList();
        }
    return {
        initPage: function(udataObj, upaginObj, upages) {
            return initPage(udataObj, upaginObj, upages);
        },
        handleClick: function(a) {
            return handleClick(a);
        }
    }
});
// pagination.handleClick();
