/* 메인페이지의 스크립트 */
"use strict";

import { menuHoverHanlder } from "../common/common.js";
import section01 from "./section/section01.js";
import section02 from "./section/section02.js";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

ScrollSmoother.create({
    smooth: 1,
    effects: true,
});

menuHoverHanlder();
section01();
section02();
