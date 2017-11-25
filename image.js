function preview(){
    $(".publish").css({"display":"block"});
    var title = localStorage.getItem('title');//title value
    var html = localStorage.getItem('html');
    $('#coverphoto').attr("src",);
if(title !== null ){
    var titleNode = document.createElement('h1');//title node
    var titleTextNode = document.createTextNode(title); // title text node
    var titleDiv = document.getElementsByClassName('title')[0];
    var x = titleNode.appendChild(titleTextNode);
     titleNode.appendChild(titleTextNode);
    titleDiv.appendChild(titleNode);
    console.log(title);
}
else{
    return;
}
 
    //  var titleText = $("<p id='title'>" + title + "</p>");
    // $(titleText).appendTo($("#contain")); 
    $('.article').html(html);
   var contain = document.getElementsByClassName('ql-editor')[0];
    contain.setAttribute("contenteditable",'false');
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var userAgentInfo = navigator.userAgent;
//          var Agents = ["Android", "iPhone", "Windows Phone","iPad"];
// for(var i = 0; i<Agents.length; i++){
//     if(userAgentInfo.indexOf())
// }
 var imgBaseData = localStorage.getItem('imgBaseData');
 if(imgBaseData !== 'null'){
     $('#coverphoto').attr('src',imgBaseData);
 }else{return;}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
$('.publish').click(function () {
  
   $(".container").remove(".publish");
   console.log("111");
    var htmlString  = $(":root").html();
    var FinalhtmlString = htmlString.replace('<div class="publish" style="display: block;">保存网页</div>','');
    download('LittleEditors.html', FinalhtmlString);
})



}

// 标题
// font-size:18px;