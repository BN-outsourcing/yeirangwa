/* 백내장 스크립트 */

"use strict";
import { isMobile } from "../../constant/responsive.js";
import { init, menuHoverHanlder } from "../common/common.js";
import presbyopia_section01 from "./section/presbyopia_section01.js";
import presbyopia_section02 from "./section/presbyopia_section02.js";

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

$('._header').addClass('white');

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

menuHoverHanlder();
presbyopia_section01();
presbyopia_section02();
init();