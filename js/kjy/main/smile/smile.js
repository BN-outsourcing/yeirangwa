/* 스마일 라식 스크립트 */

"use strict";
import { init } from "../common/common.js";
import section03 from "./section/section03.js";
import section04 from "./section/section04.js";
import section05 from "./section/section05.js";
import smile_section01 from "./section/smile_section01.js";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

ScrollSmoother.create({
    smooth: 1,
    effects: true,
});

gsap.timeline({})
.from('._main .visual .tbx dl dt',{
    y : 50,
    opacity : 0
})
.from('._main .visual .tbx dl dd',{
    y : 50,
    opacity : 0
},">-=25%")
.from('._main .visual .tbx p',{
    y : 50,
    opacity : 0
},">-=25%");

smile_section01();
section03();
section04();
section05();
init();