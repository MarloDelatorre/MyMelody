<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div >
        <header>Music</header>
        <div id="music">
            <ul>
                <div>
                    <li id="pads"> Daisy by Zedd</li>
                </div>
                <div>
                    <li id="pads"> Starboy by Weeknd</li>
                </div>
                <div>
                    <li id="pads"> Fractures by Illenium</li>
                </div>
                <div>
                    <li id="pads"> Illusion by Zedd</li>
                </div>
            </ul>
        </div>
    </div>
  </div>
</template>

<style scoped>
    #music {
        background-color: #0C1012;
        color: #EBDBE2;
        width: 600px;
    }
    #pads {
        font-size: 30px;
        border-bottom: 1px solid #FFFFFF;
        border-color: #EBDBE2;
        padding: 10px;
        
        
    }
    #images {
        list-style-image: url("../../src/assets/Earbuds.jpeg");
        background-size: contain;
        
    }
</style>
