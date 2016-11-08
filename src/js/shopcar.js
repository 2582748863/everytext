$(function(){
	var clonet=$('#cartable tbody tr').eq(0)
	var cloner=$('#cartable tbody tr').eq(1)
	$('#cartable tbody').empty();
	for(var i=0;i<5;i++){
		var clonea=clonet.clone(true,true);
		var cloneb=cloner.clone(true,true);
		clonea.appendTo('#cartable tbody');
		cloneb.appendTo('#cartable tbody');
		console.log(i);
	}
	
	$('#all').on('click',function(){
		$('#cartable tbody input:checkbox').prop('checked',this.checked);
	});
	$('#cartable input').click(function(){
		changeAllStatus();
		
	})
	//所有的复选框勾上时改变全选框的状态
	function changeAllStatus(){
		var checkboxLen = $('#cartable tbody').find(':checkbox').length;
		var checkedLen = $('#cartable tbody').find(':checkbox:checked').length;
		$('#all').prop('checked',checkedLen==checkboxLen);
		
	}
	//删除购物车商品
	$('.cleartr').click(function(){
		$(this).closest("tr").prev('tr').remove();
		$(this).closest("tr").remove();
		
	})
	function total(){
		$('.money').each(function() {   
			console.log($(this))
			 var djia=parseFloat(($(this).siblings('.djia').text()).slice(1));
			var weigh=parseFloat(($(this).siblings('.weigh').text()).slice(0,-2));
			var sl=parseInt($(this).prev().find('.sl').val());
			if(sl==0){
				$(this).find('span').text(0);
				return;
			}
			var money="￥"+sl*djia*weigh.toFixed(2);
			$(this).find('span').text(money);
			                                                  
		});	
	}
	total();
	$('.sl')[0].oninput=function(){
		total();
	}
	$('.remove').on('click',function(){
		var thisele=$(this).siblings('input');
		var i=parseInt(thisele.val())-1;
		if(i<=0){
			i=0;
		}
		thisele.val(i);
		total();
	})
	$('.add').on('click',function(){
		var thisel=$(this).siblings('input');
		var i=parseInt(thisel.val())+1;
		thisel.val(i);
		total();
	})
	function totalmoney(){
		var total=0;
		var totalweight=0;
		$('#cartable tbody tr').find('input:checkbox:checked').closest('td').siblings('.money').children().each(function(){
			console.log('aa')
			total=total+parseFloat($(this).text().slice(1));
		});
		var goodstotal=$('#cartable tbody .clonetr').find(':checkbox:checked').length;
		$('#cartable tbody .clonetr').find(':checkbox:checked').closest('tr').each(function(){
			totalweight+=parseFloat($(this).find('.weigh').text().slice(0,-2))*parseInt($(this).find('.sl').val());
			//console.log(totalweight)
			
		});
		totalweight=totalweight.toFixed(2);
		$('.goods span').text(goodstotal);
		$('.weight span').text(totalweight+'Kg');
		$(".count .first").text('￥'+total);
		$('.car-bottom span').text('￥'+total);
	}
	$('#cartable').on('click',function(){
		totalmoney();
		//console.log('dd')
	})
	
})
