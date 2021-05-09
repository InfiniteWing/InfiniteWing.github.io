var azurlane_models = ["dujiaoshou_4", "dujiaoshou_4"];

var iframe_heights = ["300px", "300px"]

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