$(document).ready(function(){
    $(".el-menu-item").each(function(){
        if ($(this).text() == 'REST API') {
            $(this).hide();
        }
    });
});

