/* 공유되는 스크립트 */
"use strict";

import section06 from "./section/section06.js";
import section07 from "./section/section07.js";
import section08 from "./section/section08.js";

export const menuHoverHanlder = ()=>{

    $('.menu-hover').click(function(e){
        e.stopPropagation();
        $('.headerNav').addClass('active');
    });

}

export const init = ()=>{

    section06();
    section07();
    section08();

}