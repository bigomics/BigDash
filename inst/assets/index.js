(()=>{"use strict";Shiny,jQuery;const e=e=>{t()?$(e).html("<span>Collapse</span>"):$(e).html('<i class="fa fa-expand"></i>')},a=()=>{$(".show-expanded").toggleClass("d-none"),$(".hide-expanded").toggleClass("d-none")},t=()=>$("#sidebar-container").hasClass("sidebar-expanded");$((function(){$("[data-bs-toggle]").on("click",(e=>{$(e.currentTarget).find(".toggler").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up")})),n(),$(".tab-trigger").on("click",(e=>{let a=$(e.currentTarget).data("target");s(a)}))}));const n=()=>{let e=$(".tab-trigger").first().data("target");s(e)},s=e=>{$("#big-tabs").find(".big-tab").each(((a,t)=>{r(t,e)}))},r=(e,a)=>{if($(e).data("name")==a)return $(e).removeClass("d-none"),$(e).show(),void $(e).trigger("shown");$(e).addClass("d-none"),$(e).hide(),$(e).trigger("hidden")};$((function(){$("[data-toggle=sidebar-collapse]").on("click",(t=>{var n;n=t.currentTarget,$("#sidebar-container").toggleClass("sidebar-expanded sidebar-collapsed"),e(n),a()}))}))})();