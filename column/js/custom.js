/**
 * 1:1 실시간 전화상담, 24시간 법률상담, 실시간 상담신청 submit func.
 * @param frmName
 * @returns {boolean}
 */
function submitForm(frmName)
{
    event.preventDefault();
    event.stopPropagation();

    let frm = document.querySelector('form[name="frm_'+frmName+'"]');

    if(!validate(frm)){
        alert('내용을 모두 기입해주세요.');
        return false;
    }

    if(frm.querySelector('input[name="policy_agree"]') !== null){
        if(frm.policy_agree.checked == false){
            alert('개인정보수집 및 이용에 동의해주세요.');
            return false;
        }
    }

    let data = $(frm).serialize();

    $.ajax({
        url: frm.action,
        type: 'post',
        data: data,
        dataType: 'json',
    })
        .done(function(response){
            alert(response.msg)
        })
        .fail(function(error){
            alert("처리 중 오류가 발생하였습니다.\n\r관리자에게 문의해주세요.\n\rserver error");
        })
        .always(function(response){
            clear(frm);
        });
}

/**
 * 1:1 실시간 전화상담, 24시간 법률상담, 실시간 상담신청 submit func.
 * @param frmName
 * @returns {boolean}
 */
function submitForm2(frmName)
{
    event.preventDefault();
    event.stopPropagation();

    let frm = document.querySelector('form[name="frm_'+frmName+'"]');

    if (frm.wr_name.value == "") {
		alert("이름을 입력해주세요.");
		frm.wr_name.focus();
		return;
	}

	if (frm.wr_tel.value == "") {
		alert("연락처를 입력해주세요.");
		frm.wr_tel.focus();
		return;
	}

    if(frm.querySelector('input[name="policy_agree"]') !== null){
        if(frm.policy_agree.checked == false){
            alert('개인정보수집 및 이용에 동의해주세요.');
            return false;
        }
    }

    let data = $(frm).serialize();

    $.ajax({
        url: frm.action,
        type: 'post',
        data: data,
        dataType: 'json',
    })
        .done(function(response){
            alert(response.msg)
        })
        .fail(function(error){
            alert("처리 중 오류가 발생하였습니다.\n\r관리자에게 문의해주세요.\n\rserver error");
        })
        .always(function(response){
            clear(frm);
        });
}

/**
 * form input, select, textarea value 존재 여부 검증
 * @param frm
 * @returns {boolean}
 */
function validate(frm)
{
    let valid = true;
    let inputs = frm.querySelectorAll('input, select, textarea');
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ""){
            valid = false;
        }
    }
    return valid;
}

/**
 * form 내 input, select, textarea 값 지우기
 * @param frm
 */
function clear(frm)
{
    if(document.querySelector('div.bottom_contact_mob').classList.contains('on')){
        document.querySelector('li.close_btn').click();
    }

    let inputs = frm.querySelectorAll('input, select, textarea');
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].getAttribute('type') !== 'hidden'){
            if(inputs[i].getAttribute('name') !== 'policy_agree'){
                inputs[i].value = "";
            }
        }
    }
}

/**
 * 상담 신청 글 조회 시, 비밀번호 조회 ajax
 * @returns {boolean}
 */
function pwdCheck(currnetUrl)
{
    let frm = document.frm_password;

    if(!validate(frm)){
        alert('내용을 모두 기입해주세요.');
        return false;
    }

    let data = $(frm).serialize();
    let url = currnetUrl.replace('.php', '_view.php');

    $.ajax({
        url: '/g5/api/password_check.php',
        type: 'post',
        data: data,
        dataType: 'json',
    })
        .done(function(response){
            alert(response.msg);
            if(response.code == 1000){
                location.href = url+'?wr_id='+frm.wr_id.value;
            }
        })
        .fail(function(error){
            alert("처리 중 오류가 발생하였습니다.\n\r관리자에게 문의해주세요.\n\rserver error");
        })
        .always(function(response){
            clear(frm);
        });
}

/**
 * 비밀번호 확인 모달에 대한, open method
 * @param boGroup
 * @param boTable
 * @param wrId
 * @returns {number}
 */
function modalOpen(boGroup, boTable, wrId)
{
    document.getElementById('wr_id').value = wrId;
    document.getElementById('bo_group').value = boGroup;
    document.getElementById('bo_table').value = boTable;
    document.querySelector('html').classList.add('no_scroll');
    document.querySelector('body').classList.add('no_scroll');
    //document.getElementById('modal_bg').style.top = window.scrollY+'px';
    document.getElementById('modal_bg').classList.add('on');
}

/**
 * 비밀번호 확인 모달에 대한, close method
 */
function modalClose()
{
    let frm = document.frm_password;

    clear(frm);

    document.querySelector('html').classList.remove('no_scroll');
    document.querySelector('body').classList.remove('no_scroll');
    document.getElementById('modal_bg').classList.remove('on');
}

/**
 * 상담신청 글 submit method
 */
function submitInquiry(currnetUrl)
{
    let frm = document.frm_inquiry;

    if(!validate(frm)){
        alert('내용을 모두 기입해주세요.');
    }else{
        let data = $(frm).serialize();
        let url = currnetUrl.replace('_write', '');

        $.ajax({
            url: frm.action,
            type: 'post',
            data: data,
            dataType: 'json',
        })
            .done(function(response){
                alert(response.msg);
                if(response.code == 1000){
                    location.href = url;
                }
            })
            .fail(function(error){
                alert("처리 중 오류가 발생하였습니다.\n\r관리자에게 문의해주세요.\n\rserver error");
            })
            .always(function(response){
                // clear(frm);
            });
    }
}

/**
 *
 */
function searchContents(currentUrl)
{
    let searchValue = document.getElementById('search_value').value.trim();
    if(searchValue == ''){
        location.href = currentUrl;
    }else{
        searchValue = encodeURIComponent(searchValue);
        let url = currentUrl+'?search_value='+searchValue;
        location.href = url;
    }
}

/**
 * onload 함수
 */
$(function(){
    /**
     * 전화번호 input에 사용자가 값 입력 시, 자동으로 전화번호 형태로 값을 변경
     */
    $(document).on("keyup", 'input[name="wr_tel"]', function() {
        $(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") );
    });

    /**
     * 이혼전담센터 index.php 내 '언론보도 및 소식' 및 '고객스토리' 탭 관련
     * 탭 클릭 시 View More 링크 변경
     */
    $(document).on("click", ".tablink", function() {
        document.querySelector('#view_more_btn a').setAttribute('href', this.getAttribute('view-more-link'));
    });
});