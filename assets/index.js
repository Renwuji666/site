function setTab(name, cursel, n) {
	for (i = 1; i <= n; i++) {
		var menu = $("." + name + i);
		var con = $(".con_" + name + "_" + i);
		if (i == cursel) {
			$(menu).addClass("hover");
			$(con).show();
		} else {
			$(menu).removeClass("hover");
			$(con).hide();
		}
	}

	// 当切换 xmal 选项卡时，控制轮播按钮和企业图片的显示/隐藏
	if (name === 'xmal') {
		var syts = document.querySelector('.syts');
		var xyts = document.querySelector('.xyts');
		var lbAll = document.querySelectorAll('.con_xmal_1.lb');

		if (cursel == 1) {
			// 企业展示：显示按钮和图片
			if (syts) syts.style.display = 'flex';
			if (xyts) xyts.style.display = 'flex';
			// 显示当前轮播页
			lbAll.forEach(function (el) {
				el.style.visibility = '';
				el.style.opacity = '';
				el.style.position = '';
			});
			// 重置轮播到第一页
			if (window.resetEnterpriseCarousel) {
				window.resetEnterpriseCarousel();
			}
		} else {
			// 项目推介：隐藏按钮和所有企业图片
			if (syts) syts.style.display = 'none';
			if (xyts) xyts.style.display = 'none';
			// 隐藏所有轮播页
			lbAll.forEach(function (el) {
				el.style.visibility = 'hidden';
				el.style.opacity = '0';
				el.style.position = 'absolute';
			});
		}
	}
}

jQuery(".slideBox").slide({ mainCell: ".bd ul", autoPlay: true });
jQuery(".slsj_slideBox").slide({ mainCell: ".bd ul", autoPlay: true });


