$(function(){
	var flag=0;
	function makesure(){
		var user=/.{4,20}/;
		var usernam=$('.username').val()
		var userm=user.test(usernam);
		if(userm){
			flag=flag+1;
		}
		else{
			alert('用户名不合法')
			flag=0;
			return;
		}
		
		var num=/^[1]\d{10}/;
		var numberp=$('.number').val();
		var numm=num.test(numberp);
		if(numm){
			flag=flag+1;
		}
		else{
			alert('手机号码不正确')
			flag=0;
			return;
		}
		var pass=/\d{6,20}/;
		var passworda=$('#password').val()
		var passm=pass.test(passworda);
		if(passm){
			flag=flag+1;
		}
		else{
			alert('密码位数不正确')
			flag=0;
			return;
		}
		var word=/\d{6,20}/;
		var passwordb=$('#passwordagin').val()
		var wordm=word.test(passwordb);
		if(passm&&(passwordb==$('#password').val())){
			flag=flag+1;
		}
		else{
			alert('2次密码必须相同')
			flag=0;
			return;
		}
		
		if($('#yzm').val()==yzm){
			flag+=1;
		}
		else{
			flag=0;
			alert("验证码错误");
			return;
		}
		if($('#check input').prop('checked')){
			flag+=1;
			console.log('dd')
		}
		else{
			flag=0;
			alert('请阅读并接受e万家服务协议');
			return;
		}
		if(flag==6){
			$.get('/data/register',{username:usernam,phonenumber:numberp,password:passworda},
			function(){
				alert('注册成功');
			});
		}
	}
	var yzm='';
		$('.yzm-tab button').click(function(){
			createyzm();
			return false;
		})
		function createyzm(){
			yzm=''
			var ma=parseInt(Math.random()*10);
			yzm+=ma
			var mb=parseInt(Math.random()*10);
			yzm+=mb
			var mc=parseInt(Math.random()*10);
			yzm+=mc
			var md=parseInt(Math.random()*10);
			yzm+=md
			
			$('.yzm-tab button').text(yzm);
		}
		createyzm();
	$('.over').click(function(){
		makesure()
		return false;
	})
	$('#check input').prop('checked',true);
	
})
