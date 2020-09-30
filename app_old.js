
// for ( let i=0; i<textJson.length; i++ ) {
//     let textKind = `<p class= "${textJson[i]['composition']}" </p>`,
//     textPali = `<p class="pali"> ${textJson[i]['pali']}</p>`,
//     textLit = `<p class="lit"> ${textJson[i]['lit']}</p>`,
//     textFree = `<p class="free"> ${textJson[i]['free']}</p>`,
//     Wrapper_Box = `<div class="box"> ${textPali + textLit +textFree} </div>`;

//     $(".container").append(Wrapper_Box);
    
// }




    /** 
     * 
     * JavaScript Array map() Method ES6
     */
    

      textJson.map((text, index) => {   
             let textPali = `<p class="pali"> ${text.pali}</p>`,
                textLit = `<p class="lit"> ${text.lit}</p>`,
                textFree = `<p class="free"> ${text.free}</p>`,
                Wrapper_Box = `<div class="box"> ${textPali + textLit +textFree} </div>`;
                
            return $(".container").append(Wrapper_Box);
     
      })
