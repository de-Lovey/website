//新闻分页

var pageNum = 1;
var totalPage = 0;

$(document).ready(function(){
	 //--------------------------------------------------------------
    $("#pre").click(function(){
    	
    	var pre=pageNum*1-1;
    	if(pageNum==1){
    		//alert("已经是第一页");
    	}else{
        	$.ajax({      
 	    		type: "get",        
 	    		url: "indexController.do?joinList&pageNum="+pre,        
 	    		dataType: "json",   /*这句可用可不用，没有影响*/  
 	    		contentType: "application/json; charset=utf-8",      
 	    		success: function (data) {  
 	      			var array=data.attributes.list; 
 	      			pageNum = data.attributes.pageNum;
 	      			totalPage = data.attributes.totalPage;
 	      			if(pageNum==1){
 	      				$("#pre").addClass("page_until");
	       				$("#next").removeClass("page_until");
 	      	    	}
 	      			$("#_content").empty();
 	      			$.each(array,function(index,item){
 	      				$("#_content").append(
 	      		   				"<li>"+
 	      			   				"<div class='join_tit'>"+
 	      			                    "<span><i></i>"+item.position+"</span>"+
 	      			                    "<span>"+item.area+"</span>"+
 	      			                    "<span><b>"+item.salary+"</b></span>"+
 	      			                "</div>"+
 	      			                "<div class='join_cont'>"+
 	      			                    "<span><b>招聘人数：</b>"+item.numbers+"</span><i>|</i>"+
 	      			                    "<span><b>招聘方式：</b>"+item.way+"</span><i>|</i>"+
 	      			                    "<span><b>年龄要求：</b>"+item.ageRequest+"</span><i>|</i>"+
 	      			                    "<span><b>工作年限：</b>"+item.workYears+"</span>"+
 	      			                "</div>"+
 	      		                "</li>"
 	      		             );
 	      			})
 	      			li();
 	    		},            
 	    		error: function (XMLHttpRequest, textStatus, errorThrown) {alert(errorThrown);     }     	
 		 	});  
    	} 
    });
    
    
   	$("#next").click(function(){
   		
       	var next=pageNum*1+1;
       	if(pageNum==totalPage){
       	//	alert("已经是最后一页");
   		}else{
    	   	$.ajax({      
	    		type: "get",        
	    		url: "indexController.do?joinList&pageNum="+next,    
	    		dataType: "json",   /*这句可用可不用，没有影响*/  
	    		contentType: "application/json; charset=utf-8",      
	    		success: function (data) {  
	       			var array=data.attributes.list; 
	       			pageNum = data.attributes.pageNum;
	       			totalPage = data.attributes.totalPage;
	       			if(pageNum == totalPage){
	       				$("#next").addClass("page_until");
	       				$("#pre").removeClass("page_until");
	       			}
	       			$("#_content").empty();
	       			$.each(array,function(index,item){
	       				$("#_content").append(
	       		   				"<li>"+
	       			   				"<div class='join_tit'>"+
	       			                    "<span><i></i>"+item.position+"</span>"+
	       			                    "<span>"+item.area+"</span>"+
	       			                    "<span><b>"+item.salary+"</b></span>"+
	       			                "</div>"+
	       			                "<div class='join_cont'>"+
	       			                    "<span><b>招聘人数：</b>"+item.numbers+"</span><i>|</i>"+
	       			                    "<span><b>招聘方式：</b>"+item.way+"</span><i>|</i>"+
	       			                    "<span><b>年龄要求：</b>"+item.ageRequest+"</span><i>|</i>"+
	       			                    "<span><b>工作年限：</b>"+item.workYears+"</span>"+
	       			                "</div>"+
	       		                "</li>"
	       		             );
	       			})
	       			li();
	    		},          
	    		error: function (XMLHttpRequest, textStatus, errorThrown) {alert(errorThrown);     }     	
		 	});  
    	}
    });
    
   	$.ajax({      
		type: "get",        
		url: "indexController.do?joinList&pageNum="+1,       
		dataType: "json",   /*这句可用可不用，没有影响*/  
		contentType: "application/json; charset=utf-8",      
		success: function (data) {  
   			var array=data.attributes.list; 
   			pageNum = data.attributes.pageNum;
   			totalPage = data.attributes.totalPage;
   			
   			$("#_content").empty();
   			$.each(array,function(index,item){
   				$("#_content").append(
	   				"<li>"+
		   				"<div class='join_tit'>"+
		                    "<span><i></i>"+item.position+"</span>"+
		                    "<span>"+item.area+"</span>"+
		                    "<span><b>"+item.salary+"</b></span>"+
		                "</div>"+
		                "<div class='join_cont'>"+
		                    "<span><b>招聘人数：</b>"+item.numbers+"</span><i>|</i>"+
		                    "<span><b>招聘方式：</b>"+item.way+"</span><i>|</i>"+
		                    "<span><b>年龄要求：</b>"+item.ageRequest+"</span><i>|</i>"+
		                    "<span><b>工作年限：</b>"+item.workYears+"</span>"+
		                "</div>"+
	                "</li>"
	             );
   			})
   			li();
		},        
		error: function (XMLHttpRequest, textStatus, errorThrown) {alert(errorThrown);     }     	
	}); 
    //------------------------------------------------------------------
})

function li(){
	$(".join_items li").find(".join_cont").hide();
    $(".join_items li:first").find(".join_cont").show();
    $(".join_items li").click(function() {
    	$(".join_items li").find(".join_cont").slideUp(600);
        $(this).find(".join_cont").slideDown('600')
    })
}
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
