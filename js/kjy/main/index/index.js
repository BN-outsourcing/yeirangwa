/* 메인페이지의 스크립트 */
"use strict";

import { isMobile } from "../../constant/responsive.js";
import { menuHoverHanlder } from "../common/common.js";
import section01 from "./section/section01.js";
import section02 from "./section/section02.js";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

let smoother = undefined;

$(window).resize(function(){

    if(isMobile() === false && $(window).outerWidth() >= 821){

        smoother = ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });
    
    }else{

        if(smoother){
            smoother.kill();
            smoother = undefined;
        }

    }
    
}).resize();

menuHoverHanlder();
section01();
section02();
