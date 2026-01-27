function setTab(name, cursel, n) {
	for(i = 1; i <= n; i++) {
		var menu = $("." + name + i);
		var con = $(".con_" + name + "_" + i);
		if(i == cursel) {
			$(menu).addClass("hover");
			$(con).show();
		} else {
			$(menu).removeClass("hover");
			$(con).hide();
		}
	}
}

jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
jQuery(".slsj_slideBox").slide({mainCell:".bd ul",autoPlay:true});


