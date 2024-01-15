$(document).ready(function(){
    $('#send_message').click(function(){
        
          //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        const regex1 = /^[|가-힣a-zA-Z\s+]+$/;
        const regex = /^[|0-9|]+$/;
        var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var division = $('#division').val();
        var budget = $('#budget').val();
        var limit = $('#limit').val();
        var message = $('#message').val();
        var company = $('#company').val();
        var position = $('#position').val();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var agree = $('#agree11').is(":checked");
        
        
        $('#name,#email,#message,#agree11').click(function(){
            $(this).removeClass("error_input");
        });
        


         // Form field validation
         if(!regex1.test(name) || name.length<0 ){
            var error = true;
            $('#name').addClass("error_input");
           alert("이름 입력을 확인하세요.");
        }else{
            $('#name').removeClass("error_input");
        }

        if (agree == false){
            var error = true;
            $('#agree11').addClass("error_input");
            alert("개인정보동의를 체크해주세요.");
        }else{
            $('#agree11').removeClass("error_input");
        }
        
        
        // If there is no validation error, next to process the mail function
        if(error == false){
           // Disable submit button just after the form processed 1st time successfully.
          
           $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSet6ZP3sml-dE75NevxYGN0PuchXTywcvWajqy1UBbPv4MNyg/formResponse");
           $('#send_message').attr({'disabled' : 'true', 'value' : '전송 중입니다' });
           
            
     $('#send_message').prop("disabled", false);
    $('#send_message').css({transition:"1s"});
    $('#send_message').css({background:"#222222"});
    $('#send_message').css({color:"#fff"});
    $('[name="fm"]').submit();
    $('#hidden_iframe11').attr("onload", "hoa();");
    $('#hidden_iframe12').attr("onload", "hoa();");
   
        }
    });    

   

});


function dll(){
    // var f = document.fm;
    // f.submit();
    // $('[name="fm"],[name="fm1"]').submit();

}
 
function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}
 

function hoa(){
    // setTimeout( function(){
    //     alert("신청시 알람 표시 창");
    //     $(window).scrollTop(0);
    //     window.location.reload();
    //    },1500);
    alert("문의 신청이 완료되었습니다\n최대한 빠르게 전화로 안내드리겠습니다.");
    $(window).scrollTop(0);
    window.location.href="./consulting-result.html";
  
  }

 
 function site1111(){
  //$('#mc-embedded-subscribe').click();
  

  window.location.reload();
 }


 function form_check(){

    const regex4 = /^[|가-힣a-zA-Z0-9\-.,/\s+]+$/;
    const regex3 = /^[|가-힣a-zA-Z0-9\s+]+$/;
    const regex2 = /^[가-힣]+$/;
    const regex = /^[|0-9|]+$/;
    var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var division = $('#division').val();
    var budget = $('#budget').val();
    var limit = $('#limit').val();
    var message = $('#message').val();
    var company = $('#company').val();
    var position = $('#position').val();
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var agree = $('#agree11').is(":checked");

    if (division != null)
    {
        // if (regex3.test(budget) && budget.length > 1)
        // {
        //     if (regex4.test(limit) && limit.length > 1)
        //     {
                if (message.length > 1)
                {
                
                    // if (regex3.test(company) && company.length > 1)
                    // {   
                        
                    //     if (regex3.test(position) && position.length > 1)
                    //     {   
                            
                                if(regex2.test(name) && name.length > 1 )
                                {
                                    
                                    if(email.match(regExp) != null)
                                    {
                                        if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone))
                                        {
                                        // if(regex.test(id) && id.length == 2 && id >=24 && id <51)
                                        // {
                                        
                                            // if( position != null )
                                            // {
                                        
                                                if (agree == true)
                                                {
                                                    $('#send_message').css({transition:"1s"});
                                                $('#send_message').prop("disabled", false);
                                                $('#send_message').prop("value", "문의 신청하기");
                                                $('#send_message').css({background:"#0e3b64"});
                                                $('#send_message').css({cursor:"pointer"});
                                                }
                                                else
                                                {
                                                    $('#send_message').css({transition:"1s"});
                                                    $('#send_message').prop("disabled", true);
                                                    $('#send_message').prop("value", "개인정보 동의를 해주세요");
                                                    $('#send_message').css({background:"#595959"});
                                                    $('#send_message').css({cursor:"default"});     
                                                }
                                                
                                            // }
                                            // else
                                            // {
                                            //     $('#send_message').css({transition:"1s"});
                                            //     $('#send_message').prop("disabled", true);
                                            //     $('#send_message').prop("value", "통화 시간을 선택하세요.");
                                            //     $('#send_message').css({background:"#595959"});
                                            //     $('#send_message').css({cursor:"default"});     
                                            // }
                            
                                        }
                                        else if(phone.length==0)
                                         {
                                        $('#send_message').css({transition:"1s"});
                                        $('#send_message').prop("disabled", true);
                                        $('#send_message').prop("value", "전화번호 입력을 확인하세요.");
                                        $('#send_message').css({background:"#595959"});
                                        $('#send_message').css({cursor:"default"});     
                                        }
                                        else 
                                        {
                                        $('#send_message').css({transition:"1s"});
                                        $('#send_message').prop("disabled", true);
                                        $('#send_message').prop("value", "전화번호 입력을 확인하세요.");
                                        $('#send_message').css({background:"#595959"});
                                        $('#send_message').css({cursor:"default"});     
                                        }
                                    
                                    }
                                    else if(email.length>0)
                                    {
                                        $('#send_message').css({transition:"1s"});
                                        $('#send_message').prop("disabled", true);
                                        $('#send_message').prop("value", "이메일 주소 입력을 확인하세요.");
                                        $('#send_message').css({background:"#595959"});
                                        $('#send_message').css({cursor:"default"});     
                                    }
                                    else
                                    {
                                        $('#send_message').css({transition:"1s"});
                                        $('#send_message').prop("disabled", true);
                                        $('#send_message').prop("value", "이메일 주소를 입력하세요.");
                                        $('#send_message').css({background:"#595959"});
                                        $('#send_message').css({cursor:"default"});     
                                    }
                                }
                                else if(name.length>0)
                                {
                                    $('#send_message').css({transition:"1s"});
                                    $('#send_message').prop("disabled", true);
                                    $('#send_message').prop("value", "성함 입력을 확인하세요.");
                                    $('#send_message').css({background:"#595959"});
                                    $('#send_message').css({cursor:"default"});     
                                }
                                else
                                {
                                    $('#send_message').css({transition:"1s"});
                                    $('#send_message').prop("disabled", true);
                                    $('#send_message').prop("value", "성함을 입력하세요.");
                                    $('#send_message').css({background:"#595959"});
                                    $('#send_message').css({cursor:"default"});     
                                }
 
                    //     }
                    //     else if(position.length>0)
                    //     {
                    //         $('#send_message').css({transition:"1s"});
                    //         $('#send_message').prop("disabled", true);
                    //         $('#send_message').prop("value", "직책 입력을 확인하세요.");
                    //         $('#send_message').css({background:"#595959"});
                    //         $('#send_message').css({cursor:"default"});     
                    //     }
                    //     else
                    //     {
                    //         $('#send_message').css({transition:"1s"});
                    //         $('#send_message').prop("disabled", true);
                    //         $('#send_message').prop("value", "직책 입력을 확인하세요.");
                    //         $('#send_message').css({background:"#595959"});
                    //         $('#send_message').css({cursor:"default"});     
                    //     }         

                    // }
                    // else if(company.length>0)
                    // {
                    //     $('#send_message').css({transition:"1s"});
                    //     $('#send_message').prop("disabled", true);
                    //     $('#send_message').prop("value", "회사명 입력을 확인하세요.");
                    //     $('#send_message').css({background:"#595959"});
                    //     $('#send_message').css({cursor:"default"});     
                    // }
                    // else
                    // {
                    //     $('#send_message').css({transition:"1s"});
                    //     $('#send_message').prop("disabled", true);
                    //     $('#send_message').prop("value", "회사명 입력을 확인하세요.");
                    //     $('#send_message').css({background:"#595959"});
                    //     $('#send_message').css({cursor:"default"});     
                    // }               
                
                }
                else if(message.length>0)
                {
                    $('#send_message').css({transition:"1s"});
                    $('#send_message').prop("disabled", true);
                    $('#send_message').prop("value", "제작 사항 입력을 확인하세요.");
                    $('#send_message').css({background:"#595959"});
                    $('#send_message').css({cursor:"default"});     
                }
                else
                {
                    $('#send_message').css({transition:"1s"});
                    $('#send_message').prop("disabled", true);
                    $('#send_message').prop("value", "제작 사항 입력을 확인하세요.");
                    $('#send_message').css({background:"#595959"});
                    $('#send_message').css({cursor:"default"});     
                } 

        //     }
        //     else if(limit.length>0)
        //     {
        //         $('#send_message').css({transition:"1s"});
        //         $('#send_message').prop("disabled", true);
        //         $('#send_message').prop("value", "마감 기한 입력을 확인하세요.");
        //         $('#send_message').css({background:"#595959"});
        //         $('#send_message').css({cursor:"default"});     
        //     }
        //     else
        //     {
        //         $('#send_message').css({transition:"1s"});
        //         $('#send_message').prop("disabled", true);
        //         $('#send_message').prop("value", "마감 기한 입력을 확인하세요.");
        //         $('#send_message').css({background:"#595959"});
        //         $('#send_message').css({cursor:"default"});     
        //     }            

        // }
        // else if(budget.length>0)
        // {
        //     $('#send_message').css({transition:"1s"});
        //     $('#send_message').prop("disabled", true);
        //     $('#send_message').prop("value", "예산 입력을 확인하세요.");
        //     $('#send_message').css({background:"#595959"});
        //     $('#send_message').css({cursor:"default"});     
        // }
        // else
        // {
        //     $('#send_message').css({transition:"1s"});
        //     $('#send_message').prop("disabled", true);
        //     $('#send_message').prop("value", "예산 입력을 확인하세요.");
        //     $('#send_message').css({background:"#595959"});
        //     $('#send_message').css({cursor:"default"});     
        // }              
    
    }
    else
    {
        $('#send_message').css({transition:"1s"});
        $('#send_message').prop("disabled", true);
        $('#send_message').prop("value", "문의 종류를 선택하세요.");
        $('#send_message').css({background:"#595959"});
        $('#send_message').css({cursor:"default"});        
    }
 }
  

$(function(){
 $('#division,#budget,#limit,#message,#company,#position,#name,#email,#phone,#agree11').bind("keyup click change",form_check);

})
