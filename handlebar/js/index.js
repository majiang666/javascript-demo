$(document).ready(function(){
	$.ajax({  
	    url:'assets/data/json.json',
	    data:{},  
	    type:'post',  
	    dataType:'json',  
	    success:function(data) {  
	    	// 标题
	        if(data.returnCode == "0" && data.bean){
	        	var headerTitle = data.bean.title.name;
	        	$("#headerTitle").text(headerTitle);
	        }

	        Handlebars.registerHelper('if-bg', function(num, options) {
			  if(num % 2 == '0'){
			    return options.fn(this);
			  }else {
			    return options.inverse(this);
			  }
			});

			Handlebars.registerHelper('if-weihun', function(weihun, options) {
			  if(weihun.marry == '未婚'){
			  	console.log("1--" + weihun);
			    return options.fn(this);
			  }else {
			  	console.log("2--" + weihun);
			    return options.inverse(this);
			  }
			});
	        // 新闻
	        var myNews = Handlebars.compile($("#t_tpl").html());
	        var dataTit = data.bean;
	        $('#new_ul').html(myNews(dataTit));

	        // 图片
	        var myPhoto = Handlebars.compile($("#p_tpl").html());
	        $('#photo').html(myPhoto(dataTit));

	        // 人员
	        var myPelple = Handlebars.compile($("#people_tpl").html());
	        $("#people").html(myPelple(dataTit));
	    },  
	    error:function() {  
	        alert("json请求异常！");
	    }  
	});

	var str = '{"name":"huangxiaojian","age":"23"}';
	var jso = {a:1,b:2};
	var out = JSON.parse(str);//parse用于从一个字符串中解析出json对象
	var out1 = JSON.stringify(jso);//stringify()用于从一个对象解析出字符串
	console.log(out);
	console.log(out1);
	
});