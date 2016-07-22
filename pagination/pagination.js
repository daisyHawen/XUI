var pagination = (function() {
    /*每页显示条数*/
    var pages: 2,
        /*当前页码*/
        pageNow: 1,
        /*总页数*/
        pageNum: 2;

    /*初始化分页，默认在第一页*/
    var initPage: function(object) {
            // var trs = $("#wuzi-form tr");
            var trs = $(objec);
            var length = trs.length - 1;
            pageNum = Math.ceil(length / pages);
            renewPagination(pageNum);
        },
        /*更新页码列表*/
        renewPagination: function(pageNum， paginObj) {
            // var pageul = $("#wuzi-form ul");
            var pageul = $(paginObj);
            pageul.empty();
            var html = "<li class='prev '><a onclick='handleClick(this.text)'>«上一页</a></li>";
            for (var i = 1; i <= pageNum; i++) {
                if (i == pageNow) {
                    var tempt = "<li class='active'><a onclick='handleClick(this.text)' >" + i + "</a></li>"
                } else {
                    tempt = "<li><a onclick='handleClick(this.text)'>" + i + "</a></li>";
                }
                html += tempt;
            }
            html += "       <li class='dotted'><span>...</span></li> <li class='next'><a onclick='handleClick(this.text)'>下一页»</a></li> <div> <span>&nbsp;&nbsp;共" + pageNum + "页&nbsp; </span> </div>";
            pageul.append(html);


        },
        /*更新数据列表*/
        renewList: function(pageNow， dataObject) {
            // var trs = $("#wuzi-form tr");
            var trs = $(dataObjext);
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

        handleClick: function(a) {
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
            renewPagination(pageNum);
            renewList(pageNow);
        }
    return {
        initPage: initPage();
    }
}());