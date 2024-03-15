<!DOCTYPE html>
<html class="test">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <META HTTP-EQUIV="pragma" CONTENT="no-cache">
    <META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">
    <META HTTP-EQUIV="expires" CONTENT="0">


    <title>Homepage</title>

    <script src='https://www.haishi.cool/js/version.js?2'></script>

    <script src='https://www.haishi.cool/library/jquery-3.6.0.js'></script>
    <script src="https://www.haishi.cool/library/jquery.cookie.min.js"></script>

    <link href="https://www.haishi.cool/library/bootstrap.min.css" rel="stylesheet">
    <script src="https://www.haishi.cool/library/bootstrap.min.js"></script>

    <link href="https://www.haishi.cool/library/material-design-icons/iconfont/material-icons.css" rel="stylesheet">



    <link rel="stylesheet" type="text/css" href="https://www.haishi.cool/css/common.css">

    <script src='https://www.haishi.cool/js/global.js'></script>
    <!-- <script src='https://www.haishi.cool/js/common.js'></script> -->
    <script src='https://www.haishi.cool/js/function.js'></script>

    <style>
        .test {
            cursor: url("https://www.haishi.cool/media/image/cursor/arrow.cur"), auto;
        }
    </style>

</head>

<body>


    <div id="toolbar-container"></div>
    <div id="editor-container"></div>

    <div class=" text-danger">啊啊</div>

    <script>
        $.get(rooturl + '/php/sever/maintain/test.php', function(result) {
            $('.text-danger').text(result);
        });
    </script>





</body>


</html>