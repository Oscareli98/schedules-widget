!function($){function e(e,t){for(var n=[];t>=e;)n.push(e),e=new Date(e.setDate(e.getDate()+1));return n}function t(){var e=$(".mins-remaining");e.text(a()),c()===y||s()===y?($(".in-schedule").hide(),$(".no-schedule").show(),$(".lower .title").text("normal schedule")):($(".in-schedule").show(),$(".no-schedule").hide(),$(".lower .title").text("today's schedule")),n(),$(".cur-schedule").text(c().name);var t=s();$("#in").text(t.name),$("#started").text(o(t.start)),d()===y?($("#next").html("nothing"),$("#at").html(o(t.end))):($("#next").text(d().name),$("#at").text(o(d().start)))}function n(){var e=c(),t=$(".lower");t.html("");var n="";$.each(e.periods,function(e,n){var a='<div class="period"> <div class="container"> <p class="name">'+h(n.name)+'</p> <div class="detail"> <p class="times">'+o(n.start)+" – "+o(n.end)+'</p> <p class="length">'+r(n)+" minutes</p></div> </div></div>";t.append(a)})}function a(){var e=s();if("noschool"===e.name)return 0;var t=m(),n=u(e.end)-t;return n}function r(e){return u(e.end)-u(e.start)}function s(){var e=m(),t=c();if(t===y)return y;var n=y;return $.each(t.periods,function(t,a){var r=u(a.start),s=u(a.end);return e>=r&&s>e?(n=a,!1):void 0}),n}function d(){var e=s(),t=c(),n=$.inArray(e,t.periods);return-1===n||n===t.periods.length-1?y:t.periods[n+1]}function i(){}function u(e){var t=e.split(":"),n=parseInt(t[0],10),a=parseInt(t[1],10),r=60*n+a;return r}function o(e){var t=e.split(":"),n=parseInt(t[0],10);return n>12&&(n%=12),n+":"+t[1]}function m(){var e=new Date;return 60*e.getHours()+e.getMinutes()}function c(){var e=["sun","mon","tue","wed","thu","fri","sat"],t=new Date;if(-1!==$.inArray(t,g))return y;var n=t.getDay(),a=e[n];return x[a]}function h(e){return/^\d.*/.test(e)?e+" period":e}var l={name:"normal A schedule",days:["mon"],periods:[{name:"0A",start:"8:15",end:"9:50"},{name:"1st",start:"9:55",end:"11:25"},{name:"2nd",start:"11:35",end:"13:05"},{name:"lunch",start:"13:05",end:"14:05"},{name:"3rd",start:"14:10",end:"15:40"}]},p={name:"normal B schedule",days:["tue","thu"],periods:[{name:"0B",start:"8:15",end:"9:50"},{name:"5th",start:"9:55",end:"11:25"},{name:"6th",start:"11:35",end:"13:05"},{name:"lunch",start:"13:05",end:"14:05"},{name:"7th",start:"14:10",end:"15:40"}]},f={name:"forum schedule",days:["wed"],periods:[{name:"0A",start:"8:15",end:"9:45"},{name:"1st",start:"9:50",end:"11:20"},{name:"forum",start:"11:25",end:"11:55"},{name:"2nd",start:"12:00",end:"13:30"},{name:"lunch",start:"13:30",end:"14:05"},{name:"3rd",start:"14:10",end:"15:40"}]},v={name:"late start schedule",days:[],periods:[{name:"staff meetings",start:"8:00",end:"9:50"},{name:"5th",start:"10:00",end:"11:15"},{name:"0B",start:"11:20",end:"12:30"},{name:"lunch",start:"12:30",end:"13:05"},{name:"6th",start:"13:10",end:"14:20"},{name:"7th",start:"14:25",end:"15:40"}]},w={name:"friday A/B",days:["fri"],periods:[{name:"0A/0B",start:"8:15",end:"9:50"},{name:"1st/5th",start:"9:55",end:"11:25"},{name:"2nd/6th",start:"11:35",end:"13:05"},{name:"lunch",start:"13:05",end:"14:05"},{name:"3rd/7th",start:"14:10",end:"15:40"}]},y={name:"noschool",periods:w.periods},x={mon:l,tue:p,wed:f,thu:p,fri:w,sat:y,sun:y},g=[],D=new Date(2015,6,4),A=new Date(2015,7,23),B=new Date(2015,8,7);g.push(e(D,A)),g.push(B),$(document).ready(function(){t(),setInterval(t,100)})}(jQuery);