<?php
    include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_head.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/components/header.html";
?>

<main class="_main">

    <?php
        include $_SERVER["DOCUMENT_ROOT"]."/components/main/section01.html";
    ?>

    <section class="sec02">
        <div class="wrapper" max="1440">
            <h3 class="h3">
                <p>더 빠르고 부드러운 시력 교정술,<br/><span>자이스 스마일라식</span></p>
            </h3>
            <p class="tbx">
                아름다운 눈, 소중한 눈, 눈의 건강을 지키기 위해 끊임없이 노력하는 예일안과는<br/>
                안전한 시력 교정을 위해 스마일 수술을 개발한 자이스 장비를 도입했습니다. <br/>
                본원은 회복과 시력의 질 향상을 위해 숙련된 의료진이 검사부터, 수술, 사후 관리까지 <br/>
                <span>1:1 맞춤형으로 커스터마이징 스마일 라식을 추구</span>합니다. 
            </p>
        </div>
    </section>

    <section class="sec02"></section>

    <section class="sec03"></section>

    <section class="sec04"></section>

    <section class="sec05"></section>

    <section class="sec06"></section>

    <div class="smile">
        <h3>
            예일안과에서 <span>Smile</span> 지을 수 있는 이유! <br/>
            다름아닌 <em>“믿음”</em> 이 있기 때문입니다.
        </h3>
        <ul>
            <li>
                <dl>
                    <dt>Check 01</dt>
                    <dd>
                        투명유리 수술실로 환자분들에게<br/>
                        믿음을 줄 수 있는 수술합니다
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>
                        Check 02
                    </dt>
                    <dd>
                        대학병원급 첨단 장비 사용으로<br/>
                        검사와 수술에 대한 신뢰를 드립니다.
                    </dd>
                </dl>
            </li>
        </ul>
    </div>

    <div class="eyetalk">
        <div class="wrapper" max="1440">
            <div class="top">
                <dl>
                    <dt>더 편리해진 눈 건강 정보 나눔</dt>
                    <dd>알기 쉬운 <span>Eye Talk</span></dd>
                </dl>
                <a href="">View More</a>
            </div>
        </div>

        <div class="box">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="/asset/img/main/eye_talk_01.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="/asset/img/main/eye_talk_01.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="/asset/img/main/eye_talk_01.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="/asset/img/main/eye_talk_01.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="/asset/img/main/eye_talk_01.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="/asset/img/main/eye_talk_01.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="banner">
        <?php
            for($i = 0; $i < 10; $i++) {
        ?>
            <div>
                <p><span>YEIL</span> Eye Clinic</p>
                <div><img src="/asset/img/main/banner_star.png" alt=""></div>
            </div>
        <?php
            }
        ?>
    </div>

    <section class="talk">
        <div class="wrapper" max="1440">
            <div class="lf">
                <dl>
                    <dt>더 새로운 예일안과 소식 나눔</dt>
                    <dd>보기 쉬운 <span>Yeil Talk</span></dd>
                </dl>
                <a href="">View More</a>
            </div>
            <div class="rf">
                <a href="">
                    <dl class="date">
                        <dt>05</dt>
                        <dd>2024.04</dd>
                    </dl>
                    <dl class="tbx">
                        <dt>4월 진료안내입니다! 참고바랍니다.</dt>
                        <dd>예일안과는 4/10(수) 제22대 국회의원선거로 인한 휴진입니다. 미리 일정을 확인하셔서 진료 및 수술에
                            불편이 없으시길 바랍니다.</dd>
                    </dl>
                </a>
                <a href="">
                    <dl class="date">
                        <dt>14</dt>
                        <dd>2024.02</dd>
                    </dl>
                    <dl class="tbx">
                        <dt>[방송안내] MBC건강클리닉 안과 5과 김민우 원장님 출연합니다!</dt>
                        <dd>김민우 원장님이 MBC 경남라디오 ‘건강클리닉’에 출연합니다.
                            주제는 < 노년기에 흔한 안질환> 으로 2024년 02월 16일 금요일 18시 10분에 시작하니 많은 청취......</dd>
                    </dl>
                </a>
                <a href="">
                    <dl class="date">
                        <dt>15</dt>
                        <dd>2023.12</dd>
                    </dl>
                    <dl class="tbx">
                        <dt>예일안과 IPL 벨로체 장비 도입!</dt>
                        <dd>예일안과에 ‘SUPER VELOCE 4800’이 도입되었습니다! SUPER VELOCE 4800은 눈 주변 혈류 순환을
                            개선함으로써 눈물 유지에 필요한 기름 분비를 촉진할 뿐만 아니라 비정상적으로 획장된 혈관을 축소하......</dd>
                    </dl>
                </a>
            </div>
        </div>
    </section>

    <section class="navi">
        <div id="daumRoughmapContainer1713455041853" class="root_daum_roughmap root_daum_roughmap_landing"></div>
        <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>
        <script charset="UTF-8">
            new daum.roughmap.Lander({
                "timestamp" : "1713455041853",
                "key" : "2j2tr",
                "mapHeight" : "440"
            }).render();
        </script>
    </section>

    <section class="connecting">
        <div class="wrapper" max="1440">
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
                        <div class="flex">
                            <h4>평일</h4>
                            <p>09:00 ~ 18:00</p>
                        </div>
                        <div class="flex">
                            <h4>토요일</h4>
                            <p>09:00 ~ 12:00</p>
                            <span> * 상황에 따라 접수 조기마감 될 수 있습니다.</span>
                        </div>
                        <div class="flex">
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
                        <div class="select">
                            <select name="" id="">
                                <option value="">선택해 주세요.</option>
                            </select>
                            <i class="xi-angle-down"></i>
                        </div>
                    </div>
                    <div class="grid">
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
                    <div class="arg">
                        <div class="flex">
                            <div class="check">
                                <input type="checkbox" name="" id="chk">
                                <label for="chk"><i class="xi-check-min"></i></label>
                            </div>
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