function view(quill) {
    $(".pageTitle").click(function () {
        clearInterval(timer);
        console.log("sad");
        localStorage.clear();
        console.log(localStorage);
        autoGet();
        window.location.reload();


    });
    $('.redo').click(function () {
        console.log('hello world');
        quill.history.redo();
    });
    $('.undo').click(function () {
        quill.history.undo();


    });

    $('.view').click(function () {
        var title = document.getElementsByClassName('inputBox')[0].value;
        localStorage.setItem('title', title);
        console.log(title);
        var html = document.getElementsByClassName('ql-editor')[0].outerHTML;

        localStorage.setItem('html', html);
        window.open('./preview.html');
    });
    var title = localStorage.getItem('title'); //title value
    var html = localStorage.getItem('html');
    $('.publish').click(function () {
        console.log('safsafasfafas');
        // var htmlString  =  $(document).html();
        download('page.html', htmlString);
    })
    var pagephoto = document.getElementsByClassName('pagephoto')[0];

    var photoTitle = document.getElementsByClassName('phototitle')[0];
    $('.pagephoto').mouseenter(function () {

        photoTitle.style.display = 'block';
        $(".phototitle").css({
            "position": "absolute",
            'top': '50%',
            'left': '50%',
            'margin-top': '10px',
            'margin-left': '-33px',


        });
        $(".phototitle").animate({
            top: "100px",
            opacity: '0.5'
        }, 100);
    })
    $('.pagephoto').mouseleave(function () {
        $(".phototitle").animate({
            top: "95px",
            opacity: '0'
        }, 200, function () {
            photoTitle.style.display = 'none';
        });


    })
    // $('#prepreview').mouseenter(function(){
    //     console.log("");
    // });
    $(".pagephoto").click(function () {

        // function imgPreview(fileDom) {
        //     console.log("sad");
        //     //判断是否支持FileReader
        //     if (window.FileReader) {
        //         var reader = new FileReader();
        //     } else {
        //         alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
        //     }

        //     //获取文件
        //     var file = fileDom.files[0];
        //     var imageType = /^image\//;
        //     //是否是图片
        //     if (!imageType.test(file.type)) {
        //         alert("请选择图片！");
        //         return;
        //     }
        //     //读取完成
        //     reader.onload = function (e) {
        //         //获取图片dom
        //         var img = document.getElementById("camera");
        //         //图片路径设置为读取的图片
        //         img.src = e.target.result;
        //         console.log(img.src);
        //     };
        //     reader.readAsDataURL(file);
        // }
        // imgPreview( $(".pagephoto"));
    });

    function show() {
        var k = $(".pagephoto").offset.top;
        console.log(k);
    }



    function x() {
        $('.ql-blank::before').addClass('ql-blank-font');
        console.log($('.ql-blank::before'));
        var toolbarContainer = document.getElementById('toolbarContainer');
        $(window).scroll(function () {　
            var ContainerTop = toolbarContainer.getBoundingClientRect().top;
            if (ContainerTop <= 59) {
                $("#toolbar").addClass("sfixed");　　　　　　
            }
            if (ContainerTop > 59) {
                $("#toolbar").removeClass("sfixed");
            }
        });
    }
    x();



    function autosave() {
        var title = window.document.getElementsByClassName('inputBox')[0].value;
        localStorage.setItem("articleTitle", title);
        var editorValue = window.document.getElementsByClassName('ql-editor')[0].innerHTML;
        localStorage.setItem("articleContent", editorValue);
        var imgBaseData = window.document.getElementById('preview').getAttribute('src');
        localStorage.setItem("imgBaseData", imgBaseData);
        var time2 = "草稿自动保存(" + new Date().Format("hh:mm:ss") + ')';
        console.log(time2);
        // var timeString = '草稿自动保存(' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ')';
        // console.log(timeString);
        window.document.getElementsByClassName('pageSubTitle')[0].innerHTML = time2;

    }

    function autoGet() {
        var articleTitle = localStorage.getItem('articleTitle');
        var articleContent = localStorage.getItem('articleContent');
        var imgBaseData = localStorage.getItem('imgBaseData');
        console.log();
        if (articleTitle) {
            $('.phototitle').remove();
            document.getElementsByClassName('inputBox')[0].value = articleTitle;
        }
        if (articleContent) {
            document.getElementsByClassName('ql-editor')[0].innerHTML = articleContent;
        }


        if (imgBaseData !== 'null') {
            $('.fileInput').remove();
            $('.camera').remove();
            document.getElementById('preview').setAttribute('src', imgBaseData);
        }



    }

    autoGet();
    var timer = setInterval(autosave, 10000);

    function imgPreview(fileDom) {
        //判断是否支持FileReader
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
        }

        //获取文件
        var file = fileDom.files[0];
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        //读取完成
        reader.onload = function (e) {
            //获取图片dom
            var img = document.getElementById("preview");
            //图片路径设置为读取的图片
            img.src = e.target.result;
            console.log(img.src);
        };
        reader.readAsDataURL(file);
        //     convertImgToBase64(img.src, function (base64Img) {
        //         console.log(url);
        //     // Base64DataURL
        // });
        $('.pagephoto').css("background-color:red");

    }


}