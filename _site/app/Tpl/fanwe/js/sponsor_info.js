$(document).ready(function(){


$("#sponsor_form").bind("submit",function(){
    
  
    
    var ajaxurl = $(this).attr("action");
    var query = $(this).serialize();
    $.ajax({ 
        url: ajaxurl,
        dataType: "json",
        data:query,
        type: "POST",
        success: function(ajaxobj){
          if(ajaxobj.status==1)
          {
            if(ajaxobj.info!="")
            {
              $("input[name='info']").val(ajaxobj.info);
              $.showSuccess("保存成功",function(){
                if(ajaxobj.jump!="")
                {
                  location.href = ajaxobj.jump;
                }
              }); 
            }
            else
            {
              if(ajaxobj.jump!="")
              {
                location.href = ajaxobj.jump;
              }
            }
          }
          else
          {
            if(ajaxobj.info!="")
            {
              $.showErr(ajaxobj.info,function(){
                if(ajaxobj.jump!="")
                {
                  location.href = ajaxobj.jump;
                }
              }); 
            }
            else
            {
              if(ajaxobj.jump!="")
              {
                location.href = ajaxobj.jump;
              }
            }             
          }
        },
        error:function(ajaxobj)
        {
          if(ajaxobj.responseText!='')
          alert(ajaxobj.responseText);
        }
      });
      return false;
    });
    


     
    $("#savenext").bind("click",function(){ 
    $("#sponsor_form").submit();
    });


});