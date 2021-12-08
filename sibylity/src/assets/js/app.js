import * as $ from 'jquery'
import dt from 'datatables.net'
$.fn.DataTable = dt;
import 'what-input';
import sib from './sib.js';
import chart from './chart.js';
//import dt from 'datatables.net';
/*import './jquery.datatables.min.js';
import './datatables.foundation.min.js';*/

$(document).ready(() => {
    sib.init();
});
 
// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
window.sib = sib;
window.Chart = chart;
//window.dt = dt;
//require( 'datatables.net' )( window, $ );
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();






  