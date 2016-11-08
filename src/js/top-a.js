//顶部切换按钮的鼠标事件
$('.list-tab').on('mouseenter','li',function(){
	$(this).addClass('list-tabbg');
})
.on('mouseleave','li',function(){
	$(this).removeClass('list-tabbg');
});
//根据轮播图数量生成相应li并添加图片
var arrpic=['img/carsolue1.png','img/carsolue2.png','img/carsolue3.png','img/carsolue4.png','img/carsolue5.png']
$.each(arrpic, function(idx,item) {    
	  var $Li=$('<li/>');
	  $Li.appendTo('#top-list .pic');
	  var $img=$('<img>');
	  $img.appendTo($Li);
	  $img.attr('src',arrpic[idx]);
	 var $btnLi=$('<li/>');
	 $btnLi.appendTo('#top-list .btn');
	 var $a=$('<a/>');
	 $a.appendTo($btnLi);
	 $a.html(idx+1).attr('href','#');
	 console.log('aa');
});
var time=0;
var i=1;
var flag=false;
$('#top-list .btn').on('mouseenter','li',function(idx,n){
	$(this).addClass('active');
	i=$(this).index();
	flag=true;
	picmove();
})
$('#top-list .btn').on('mouseleave','li',function(idx,item){
	$(this).removeClass('active');
	i=$(this).index()+1;
	if(i>=$('#top-list .pic li').length){
		i=0;
	}
	flag=false;
	timer=setTimeout(picmove,2000)
})

$('#top-list .pic li').eq(0).css('display','block');
function picmove(){
	clearTimeout(timer);
	$('#top-list .pic li').fadeOut(200).eq(i).fadeIn(200);
	$('#top-list .btn li').removeClass('active').eq(i).addClass('active');
	i++;
	
	if(i>=$('#top-list .pic li').length){
		i=0;
	}
	if(time!=0){
		clearTimeout(time);
	}
	time=setTimeout(picmove,2000);
	if(flag){
		clearTimeout(time);
	}
}
var timer=setTimeout(picmove,2000)
//给商品分类里的每个分类绑定的事件
//下拉列表数据
var arr=[];
var cdzc={};//产地直采
arr.push(cdzc);
var slgs={goods:"时令果蔬",kinds:[{smallgoods:"新鲜水果 ",contents:["应季畅销","进口水果","国产水果 ","水果礼盒礼篮"]}]};//时令果蔬
arr.push(slgs);
var rqdp={goods:"肉禽蛋品" ,kinds:[{smallgoods:"肉类制品",contents:["熟食肉禽 ","腊肉/腊肠","肉丸"]},{smallgoods:"猪牛羊肉",contents:["鲜冻牛羊肉"]}]};//肉禽蛋品
arr.push(rqdp);
var schx={goods:"水产海鲜" ,kinds:[{smallgoods:"肉类制品",contents:["熟食肉禽 ","腊肉/腊肠","肉丸"]},{smallgoods:"猪牛羊肉",contents:["鲜冻牛羊肉"]}]};//水产海鲜
arr.push(schx);
var rpmd={goods:"乳品面点" ,kinds:[{smallgoods:"肉类制品",contents:["熟食肉禽 ","腊肉/腊肠","肉丸"]},{smallgoods:"猪牛羊肉",contents:["鲜冻牛羊肉"]}]};//乳品面点
arr.push(rpmd);
var lygh={goods:"粮油干货" ,kinds:[{smallgoods:"肉类制品",contents:["熟食肉禽 ","腊肉/腊肠","肉丸"]},{smallgoods:"猪牛羊肉",contents:["鲜冻牛羊肉"]}]};//粮油干货
arr.push(lygh);
var lsjy={goods:"零食酒饮" ,kinds:[{smallgoods:"肉类制品",contents:["熟食肉禽 ","腊肉/腊肠","肉丸"]},{smallgoods:"猪牛羊肉",contents:["鲜冻牛羊肉"]}]};//零食酒饮
arr.push(lsjy);
var myhh={goods:"母婴呵护" ,kinds:[{smallgoods:"肉类制品",contents:["熟食肉禽 ","腊肉/腊肠","肉丸"]},{smallgoods:"猪牛羊肉",contents:["鲜冻牛羊肉"]}]};//母婴呵护
arr.push(myhh);
var ghmz={goods:"个护美妆" ,kinds:[{smallgoods:"肉类制品",contents:["熟食肉禽 ","腊肉/腊肠","肉丸"]},{smallgoods:"猪牛羊肉",contents:["鲜冻牛羊肉"]}]};//个护美妆
arr.push(ghmz);
var jjry={goods:"家居日用" ,kinds:[{smallgoods:"肉类制品",contents:["熟食肉禽 ","腊肉/腊肠","肉丸"]},{smallgoods:"猪牛羊肉",contents:["鲜冻牛羊肉"]}]};//家居日用
arr.push(jjry);
var cjdq={goods:"厨具电器" ,kinds:[{smallgoods:"肉类制品",contents:["熟食肉禽 ","腊肉/腊肠","肉丸"]},{smallgoods:"猪牛羊肉",contents:["鲜冻牛羊肉"]}]};//厨具电器
arr.push(cjdq);
var dftc={goods:"地方特产" ,kinds:[{smallgoods:"肉类制品",contents:["熟食肉禽 ","腊肉/腊肠","肉丸"]},{smallgoods:"猪牛羊肉",contents:["鲜冻牛羊肉"]}]};//地方特产
arr.push(dftc);
$('#top-list .list li a').each(function(){
	$('<span/>').appendTo($(this));
});
var listgoods='';
$('#top-list .list').on('mouseenter','li a',function(){
	$('#list-select').empty();
	$(this).css('backgroundColor','#dd0000');
	$('#list-select').show();
	listgoods=$(this).text();
	createList();
	})
	.on('mouseleave','li a',function(){
		$(this).css('backgroundColor','#ffffff');	
	});
	$('#top-list .list li').first().on('mouseenter',function(){
		$('#list-select').hide();
	});
	//封装函数根据商品种类生产相应的对应列表
	function createList(){
		$.each(arr,function(idx,item){
			console.log('come in')
			if(this.goods==listgoods){
				//if(this.goods==undefined){
				//	$('#list-select').hide();
				//}
				//else{
					console.log('aa');
					var $ul=$('<ul/>');
					$ul.appendTo('#list-select');
					$.each(this.kinds,function(){
						var $aa=$('<a/>')
						$aa.html(this.smallgoods).attr('href',"#");
						var $span=$('<span/>');
						var $li=$('<li/>');
						$aa.appendTo($li);
						$span.appendTo($li);
						$li.appendTo($ul);
						$.each(this.contents,function(){
							var $a=$('<a/>');
							$a.appendTo($li).html(this).attr('href',"#").addClass('aa');
							$a.appendTo($li);
						});	
						
					});
					
				//}
				return false;
			}
		});
	}
;

$('#top-listl').on('mouseleave',function(){
	$('#list-select').hide().empty();
})


