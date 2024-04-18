<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_head.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/components/header.html";
?>

<main class="_main">

    <?php
        include $_SERVER["DOCUMENT_ROOT"]."/components/main/section01.html";
    ?>

    <section class="sec02">
        <h3 class="h3">
            <p>더 빠르고 부드러운 시력 교정술,</p>
            <p><span>자이스 스마일라식</span></p>
        </h3>
        <p class="tbx">
            아름다운 눈, 소중한 눈, 눈의 건강을 지키기 위해 끊임없이 노력하는 예일안과는<br/>
            안전한 시력 교정을 위해 스마일 수술을 개발한 자이스 장비를 도입했습니다. <br/>
            본원은 회복과 시력의 질 향상을 위해 숙련된 의료진이 검사부터, 수술, 사후 관리까지 <br/>
            <span>1:1 맞춤형으로 커스터마이징 스마일 라식을 추구</span>합니다. 
        </p>
    </section>

    <section class="sec02"></section>

    <section class="sec03"></section>

    <section class="sec04"></section>

    <section class="sec05"></section>

    <section class="sec06"></section>



    <section class="connecting">
        <div class="wrapper">
            <div class="lt">
                <dl>
                    <dt>오시는 길</dt>
                    <dd>
                        <p>경남 창원시 마산회원구 3·15대로 659</p>
                        <span>(석전동 244-4)</span>
                    </dd>
                </dl>
                <dl>
                    <dt>진료시간</dt>
                    <dd>
                        <div>
                            <h4>평일</h4>
                            <p>09:00 ~ 18:00</p>
                        </div>
                        <div>
                            <h4>토요일</h4>
                            <p>09:00 ~ 12:00</p>
                            <span> * 상황에 따라 접수 조기마감 될 수 있습니다.</span>
                        </div>
                        <div>
                            <h4>점심시간</h4>
                            <p>13:00 ~ 14:00</p>
                        </div>
                    </dd>
                </dl>
            </div>
            <div class="rt">
                <form action="">
                    <h4>문의하기</h4>
                    <div class="box">
                        <label for="">문의항목<span>*</span></label>
                        <select name="" id="">
                            <option value="">선택해 주세요.</option>
                        </select>
                    </div>
                    <div class="flex">
                        <div class="box">
                            <label for="">이름<span>*</span></label>
                            <input type="text">
                        </div>
                        <div class="box">
                            <label for="">연락처<span>*</span></label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="box">
                        <label for="">내용<span>*</span></label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="자유롭게 작성해 주세요."></textarea>
                    </div>
                    <div>
                        <div>
                            <input type="checkbox" name="" id="">
                            <p><span>개인정보처리방침</span>에 동의합니다. <a href="">(전문보기)</a></p>
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <?php
        include_once $_SERVER["DOCUMENT_ROOT"]."/components/footer.html";
    ?>

</main>

<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_end.php";
?>