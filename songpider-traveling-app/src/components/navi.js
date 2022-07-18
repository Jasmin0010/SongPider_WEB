import * as React from 'react';



function Navi(){
    return(

        <div className="nav_bar">
        <ul class = "nav_list">
            <li><a href="./pages/history.js"target="_self">history</a></li>
            <li><a href="./pages/home.js" target="_self">home</a></li>
            <li><a href="./pages/mypage.js" target="_self">mypage</a></li>
            <li><a href="./pages/course.js" target="_self">course</a></li>
        </ul>
        <ul class="nav_link">
            <i class="nav_link"></i>
            <i class="link"></i>
        </ul>
    </div>
    );
}

export default Navi;