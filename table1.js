//table from Json
    var tbl = $('<table/>').attr('id', 'json-table');
    $('#text').append(tbl);
    for ( var i=0; i<textJson.length; i++ ) {
      var tr = `<tr class="${textJson[i]['composition']}" >`,
          td1 = `<td class="pali"> ${textJson[i]['pali']} <td>`,
          td2 = `<td class="lit"> ${textJson[i]['lit']} <td>`,
          td3 = `<td class="free"> ${textJson[i]['free']} <td>`;
          tr_end = `</tr>`;
          
      $(tbl).append(tr + td1 + tr_end + tr + td2 + td3 + tr_end);
    }
   