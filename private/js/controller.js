var azurlane_models = ["aidang_2", "beierfasite_2", "dujiaoshou_4", "shengluyisi_2", "huonululu_3", "shengluyisi_3", "tierbici_2", "xianghe_2", "xixuegui_4"];

var iframe_heights = ["400px","400px","300px","360px","300px","400px","360px","400px","400px"]

var model_index = 0;
$(function () {
	$(".guider-random").click(function(){
		model_index++;
		if(model_index >= azurlane_models.length){
			model_index = 0;
		}
		var model_name = azurlane_models[model_index];
		var iframe_height = iframe_heights[model_index];
		$('#live2d_iframe').attr('src', "/private/azurlane.html?model_name="+model_name).css('height', iframe_height);
	});
});