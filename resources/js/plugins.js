var _DENSITY = 20;
var _FPS = 30;
var _OPACITY = 0.25;
var _COLOR = "#FFFFFF";

(function ($) {
	$.fn.spinload = function (opts) {
		var element = this;
		var spinner = new Spinner({
			"lines": 10,
			"length": 10,
			"width": 5,
			"radius": 20,
			"corners": 1,
			"rotate": 0,
			"direction": 1,
			"color": "#FFFFFF",
			"speed": 1,
			"trail": 50,
			"shadow": false,
			"hwaccel": false,
			"className": "spinner",
			"zIndex": 0,
			"top": "auto",
			"left": "auto"
		}).spin($(element).find(".spinload").get(0));
		
		$(window).bind("load", function (event) {
			setTimeout(function () {
				$(element).find(".spinload").remove();
			}, 1000);
		});
		return (this);
	}
})(jQuery);

(function ($) {
	$.fn.placeholder = function (opts) {
		var element = this;

		$(window).bind("load", function (event) {
			$("[placeholder]").each(function (index) {
				var selection = this;
				
				$(selection).val($(selection).val() == "" ? $(selection).attr("placeholder") : $(selection).val());
			});
			$("[placeholder]").bind("focus", function (event) {
				var selection = this;
				
				$(selection).val($(selection).val() == $(selection).attr("placeholder") ? "" : $(selection).val());
			});
			$("[placeholder]").bind("blur", function (event) {
				var selection = this;
				
				$(selection).val($(selection).val() == "" ? $(selection).attr("placeholder") : $(selection).val());
			});
		});
		return (this);
	}
})(jQuery);

(function ($) {
	$.fn.substitute = function (html) {
		var element = this;
		var status = false;
		
		$(element).find(".button").bind("click", function (event) {
			if ($(element).find(".data").find(".field").size() != 0) {
				$(element).find(".data").find(".field").each(function (index) {
					var selection = this;
				
					$(selection).attr("class", $(selection).val() == $(selection).attr("placeholder") ? "field error" : "field");
				});
			}
			if ($(element).find(".data").find(".error").size() == 0) {
				if (status == false) {
					status = true;
					if (html) {
						$.ajax({
							"url": $(element).find(".data").attr("action"),
							"type": $(element).find(".data").attr("method"),
							"data": $(element).find(".data").serialize(),
							"success": function (data) {								
								if ($(html).size() != 0) {
									$(element).find(".button").replaceWith(html);
									status = false;
								}
							}
						});
					}
					else {
						$(element).find(".data").submit();
					}
				}
			}
			return (false);
		});
		return (this);
	};
})(jQuery);

(function ($) {
	$.fn.engine = function (opts) {
		var element = this;
		var density = _DENSITY;
		var fps = _FPS;
		var ratio = Math.round(window.devicePixelRatio ? window.devicePixelRatio : 1);
		var stack = [];
		var cvs = $(element).find(".animation").get(0);
		var ctx = cvs.getContext("2d");
		var img = $("<img/>").attr("src", "resources/images/arrow.png");
		var count = 0;
		var fn = function () {
			cvs.width = $(element).width() * ratio;
			cvs.height = $(element).height() * ratio;
			ctx.clearRect(0, 0, cvs.width, cvs.height);
			if (++count % fps <= fps / 2) {
				ctx.drawImage($(img).get(0),
					(cvs.width - (cvs.height / 8 <= 100 * ratio ? cvs.height / 8 : 100 * ratio)) / 2,
					(cvs.height - (cvs.height / 8 <= 100 * ratio ? cvs.height / 8 : 100 * ratio)) / 1,
					(cvs.height / 8 <= 100 * ratio ? cvs.height / 8 : 100 * ratio),
					(cvs.height / 8 <= 100 * ratio ? cvs.height / 8 : 100 * ratio)
				);
			}
			$(stack).each(function (index) {
				var obj = this;
				var x = _OPACITY - _OPACITY / (cvs.width / 2) * Math.abs(cvs.width / 2 - obj.position.x);
				var y = _OPACITY - _OPACITY / (cvs.height / 2) * Math.abs(cvs.height / 2 - obj.position.y);
			
				ctx.beginPath();
				ctx.arc(obj.position.x, obj.position.y, obj.speed.x * obj.speed.y % (50 * ratio) + (10 * ratio), (0 * Math.PI), (2 * Math.PI));
				ctx.globalAlpha = x <= y ? x : y;
				ctx.fillStyle = _COLOR;
				ctx.fill();
				ctx.closePath();
				obj.position.x = ((obj.speed.x % 2 ? obj.position.x + obj.speed.x / fps : obj.position.x - obj.speed.x / fps) + cvs.width) % cvs.width;
				obj.position.y = ((obj.speed.y % 2 ? obj.position.y + obj.speed.y / fps : obj.position.y - obj.speed.y / fps) + cvs.height) % cvs.height;
			});
		};

		while (density--) {
			stack.push({
				"position": {
					"x": Math.round(Math.random() * 1000000) % ($(element).width() * ratio),
					"y": Math.round(Math.random() * 1000000) % ($(element).height() * ratio)
				},
				"speed": {
					"x": Math.round(Math.random() * 1000000) % (50 * ratio),
					"y": Math.round(Math.random() * 1000000) % (50 * ratio)
				}
			});
		}
		fn();
		setInterval(function () {fn();}, 1000 / fps);
		$(window).bind("load resize scroll", function (event) {
			var opacity = Math.round((1 - 2 / $(element).height() * $(window).scrollTop()) * 100) / 100;
			var margin = Math.round($(element).height() / 2 - $(element).find(".content").height() / 2 - $(window).scrollTop() / 4);
			
			$(element).find(".content").css({"margin": margin + "px auto 0 auto", "opacity": opacity >= 0 ? opacity : 0});
			$(element).find(".animation").css({"opacity": opacity >= 0 ? opacity : 0});
		});
		return (this);
	}
})(jQuery);

(function ($) {
	$.fn.anim = function (opts) {
		var element = this;
		var delay = 5000;
		var current = 0;
		var fn = function () {
			$(element).find(".slide").each(function (index) {
				var selection = this;
				
				$(selection).css({"z-index": (index == current ? 1000 : 0), "opacity": (index == current ? 0.5 : 0)});
			});
			current = current + 1;
			current = current == $(element).find(".slide").size() ? 0 : current;
		};

		$(window).bind("load", function (event) {
			fn();
			setInterval(function () {fn();}, delay);
		});
		return (this);
	}
})(jQuery);

(function ($) {
	$.fn.effect = function (opts) {
		var element = this;

		$(element).children().each(function (index) {
			var selection = this;
			var opacity = Math.round((1 / $(selection).offset().top) * ($(window).height() / 2 + $(window).scrollTop()) * 100) / 100;
			
			$(selection).find(".effect").css({"opacity": opacity >= 1 ? 1 : 0});
		});
		return (this);
	};
})(jQuery);

$(function () {
	$(document).spinload();
	$(document).placeholder();
	$(window).bind("load resize", function (event) {
		$(".interface").css({"margin": $(window).height() + "px 0 0 0"});
	});
	$(window).bind("load resize scroll", function (event) {
		$(".interface").effect();
	});
});