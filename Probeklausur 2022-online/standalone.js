'use strict';function solve(a){$("#txt_none,#txt_false,#txt_true").hide();$("#pnl_solution").show();$("tr").css("background-color","");""!==a&&0===$('input[name="answer"]:checked').length?$("#txt_none").show():($('input[name="answer"][value="1"]').closest("tr").css("background-color","#00C000"),$('input[name="answer"][value="0"]:checked').closest("tr").css("background-color","#F00000"),0===$('input[name="answer"][value="0"]:checked, input[name="answer"][value="1"]:not(:checked)').length?$("#txt_true").show():
$("#txt_false,#pnl_explanation").show())}function setResult(a){const b=$('input[name="answer"]');let c=[[b.length],[b.length]];for(let d=0;d<b.length;d++)c[0][d]=parseInt(b[d].value),c[1][d]=b[d].checked?1:0;sessionStorage.setItem(a,JSON.stringify(c))}function getResult(a){a=sessionStorage.getItem(a);if(null!==a){a=JSON.parse(a);var b=$('input[name="answer"]');for(let c=0;c<b.length;c++)b[c].checked=1===a[1][c]}};