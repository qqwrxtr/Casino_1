$(document).ready((function(){var s=function(s){$(s).arcticmodal({closeOnEsc:!1,closeOnOverlayClick:!1,openEffect:{type:"fade",speed:300},overlay:{css:{backgroundColor:"#010F2E",opacity:.8}}})};$(".js-order_button").click((function(){$(".js-bonus_window").fadeOut(300),s(".js-order_window")}));var t=2;$(".js-spin_button").click((function(){$(this).hasClass("disabled")||(t--,$(".js-count").text(t),1==t&&($(".js-spin_button").addClass("disabled"),$(".js-wheel").addClass("rotate1"),setTimeout((function(){$(".js-spin_button").removeClass("disabled"),$(".js-bonus_window").fadeIn(300)}),5e3)),0==t&&($(".js-spin_button").addClass("disabled"),$(".js-wheel").addClass("rotate2"),setTimeout((function(){$(".js-bonus_window").fadeOut(300),s(".js-order_window")}),8e3)))}))})),window.showHidePassword=function(s){var t=document.getElementById("password-input");return"password"==t.getAttribute("type")?(s.classList.add("view"),t.setAttribute("type","text")):(s.classList.remove("view"),t.setAttribute("type","password")),!1};
//# sourceMappingURL=index.54fd0513.js.map
