
for ( let i=0; i<textJson.length; i++ ) {
    let textKind = `<p class= "${textJson[i]['composition']}"`,
    textPali = `<p class="pali"> ${textJson[i]['pali']}</p>`,
    textLit = `<p class="lit"> ${textJson[i]['lit']}</p>`,
    textFree = `<p class="free"> ${textJson[i]['free']}</p>`;
    console.log(".pali")
$(".container").append(textPali + textLit + textFree)
}