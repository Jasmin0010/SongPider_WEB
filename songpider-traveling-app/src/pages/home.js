// eslint-disable-next-line 
import React from 'react';


//home button
function Home(){
    return(
        <div className ='home'>        
            <script type="text/javascript"
                src="//dapi.kakao.com/v2/maps/sdk.js?appkey=916b58ede859a5ccab3678338d2f2bb9"></script>    
            <main>
            <div id="map"
                style="width:500px;height:400px;"></div>
            </main>    
                
        </div>
    );
} 

export default Home;