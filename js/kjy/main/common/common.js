/* 공유되는 스크립트 */
"use strict";

import section06 from "./section/section06.js";
import section07 from "./section/section07.js";
import section08 from "./section/section08.js";
import section09 from "./section/section09.js";
import section11 from "./section/section11.js";

export const menuHoverHanlder = ()=>{
    
    $('.menu-hover').mouseover(function(e){
        e.stopPropagation();
        $('.headerNav').addClass('active');
    });
    
}

export const init = ()=>{

    section06();
    section07();
    section08();
    section09();
    section11();

}