const form = document.getElementById('form');
form.innerHTML = `
<div class="form-box" id="fm-box">
<div class="inner" style="text-align:-webkit-center;">
<div style="text-align:-webkit-center;border:1.5px solid #000;width:95%;padding:10px 20px;max-width:450px;" > 
<a href="" class="scroll box" style="border-color:#000;text-align:-webkit-center;">
                    
    <span class="timer" style="color:#000;font-size:14px;font-weight:600;">
        신청 마감 | <span id="day" style="font-weight:600;"></span> ( <span id="countdown" style="font-weight:600;"></span>)
    </span>
</a></div><br><br>
    <h1 class="form-top-title">간편하게 문의하기</h1>

    <div class="form-box-inner">
        <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="dll(); submitted=true;">
            <input type="hidden" name="entry.1567221187" id="book-name" value="">
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                        <tr id="select_lic" >
                            <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->문의 구분<br></th>
                            <td>

                                <select name='entry.870032759' id='division' class="form-control" placeholder="현재 조건">

                                    <option value="문의 구분" selected disabled>문의 구분</option>
                                        <option value="홈페이지 제작">홈페이지 제작</option>
                                        <option value="랜딩페이지 제작">랜딩 페이지 제작</option>
                                        <option value="광고 기반 세팅">광고 기반 세팅</option>
                                        <option value="온라인 기반 제작">온라인 기반 제작</option>
                                        <option value="기타">기타</option>
                                      
                                </select>

                          
                            </td>
                        </tr>

                       <!-- <tr>
                        <th>예산</th>
                        <td>
                            <input type='text' name='entry.685721169' id='budget' class="form-control" placeholder="예상 중인 제작 금액">
                        </td>
                    </tr> -->
                    <!-- <tr>
                        <th>마감 기한</th>
                        <td>
                            <input type='text' name='entry.156373642' id='limit' class="form-control" placeholder="일정 마감 기한 (마감 날짜, 혹은 기간)">
                        </td>
                    </tr> -->

                    <tr>
                    <th>문의사항</th>
                    <td>
                        <textarea name='entry.2068120597' id='message' class="form-control" placeholder="제작 목적과 원하시는 사항들을 적어주세요." style="min-height:100px"></textarea>
                    </td>
                </tr>

                    <!-- <tr>
                        <th>회사명</th>
                        <td>
                            <input type='text' name='entry.887213340' id='company' class="form-control" placeholder="회사명">
                        </td>
                    </tr>
                    <tr>
                        <th>직책</th>
                        <td>
                            <input type='text' name='entry.1762571249' id='position' class="form-control" placeholder="직책">
                        </td>
                    </tr> -->
                    <tr>
                        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->성함</th>
                        <td>
                            <input type='text' name='entry.963166228' id='name' class="form-control" placeholder="성함" maxlength="4">
                        </td>
                    </tr>
                    <tr>
                        <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->이메일</th>
                        <td>
                            <input type='text' name='entry.1096623200' id='email' class="form-control" placeholder="이메일 주소">
                        </td>
                    </tr>

                    <tr>
                    <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->전화번호</th>
                    <td>
                        <input type='text' name='entry.1568459541' id='phone' class="form-control" placeholder="전화번호" maxlength="11">
                    </td>
                </tr>
                  
                  
                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                            
                        
                            <input class="submit-btn" type='submit' id='send_message' value='문의 신청하기' disabled style="background:#595959">
                            <div class="form-agree-box">
                                <p class="form-info-agree">
                                    <span>
                                       
                                        <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked>
                                        <label style="color:black; font-weight:300;font-size:13px;margin-top:-3px;" for="agree11">개인정보보호정책</label>
                    
                    
                                        <span class="privacyBtn" style="color:black;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                            [자세히 보기]
                                        </span>
                                    </span>
                                </p>

                                <script type="text/javascript">var submitted = false;</script>

                                <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                                <iframe name="hidden_iframe12" id="hidden_iframe12" style="display:none;" onload=""></iframe>
                               
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
</div><!----form-end------>



`;

document.body.appendChild(form.content);