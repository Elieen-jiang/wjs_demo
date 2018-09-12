$(function () {
    $('[data-toggle="tooltip"]').tooltip()


// // 计算产品块导航项的原始宽度
//     var ul =$(".wjs_product .nav-tabs");
//     var lis = ul.find("li");
//     var totalWidth = 0; //总宽度
//     lis.each(function(index,value) {
//         totalWidth =+ totalWidth(value).innerWidth();
//     });
//     ul.width(totalWidth);
//     /*使用插件实现导航条的滑动操作*/
//     var myScroll = new IScroll('.tabs_parent',{
//         /*设置水平滑动，不允许垂直滑动*/
//         scrollX: true, scrollY: false
//     });
// });
    /*计算产品块导航项的原始宽度*/
    var ul = $(".wjs_product .nav-tabs");
    var lis = ul.find("li");
    var totalWidth = 0;//总宽度
    lis.each(function (index, value) {
        console.log($(value));
        totalWidth += totalWidth + $(value).innerWidth();
        /* totalWidth+=$(value).innerWidth();*/
        /* console.log($(value).width());*/
        /*获取宽度的方法的说明：
        * width():它只能得到当前元素的内容的宽度
        * innerWidth():它能获取当前元素的内容的宽度+padding
        * outerWidth():获取当前元素的内容的宽度+padding+border
        * outerWidth(true):获取元素的内容的宽度+padding+border+margin*/
    });
    ul.width(totalWidth);
    /*使用插件实现导航条的滑动操作*/
    var myScroll = new IScroll('.tabs_parent', {
        /*设置水平滑动，不允许垂直滑动*/
        scrollX: true, scrollY: false
    });
});