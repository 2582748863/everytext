//日期格式转换
function transform(odate){
	var arr=odate.split(" ");
	var date=arr[0].split("-");
	var time=arr[1].split(":");
	var str=new Date;
	str.setYear(date[0]);
	str.setMonth(date[1]-1);
	str.setDate(date[2]);
	str.setHours(time[0]);
	str.setMinutes(time[1]);
	str.setSeconds(time[2]);
	return str;
}
//传入一个对象和倒计时的天数，在这个对象里显示倒计时
function djs(obj,time){
	var odiv1=obj;
	//var time1=transform(time);
	//直接设置倒计时为3天以后
	var time1=new Date();
	time1.setDate( time1.getDate()+ 3);
	//var str1=odate(time1);
	//var str1="距离:"+str1;
	var nowtime=new Date();
	var deta=(time1-nowtime)/1000+1;
	if(deta<0){
		deta=deta*(-1);
	}
	console.log(deta);
	stop();
	function stop(){
		deta--;
		if(deta<0){
			clearInterval(t);
			odiv1.innerHTML="0天0时0分0秒";
			return;
		}
		var detad=parseInt(deta/(3600*24));
		var detah=parseInt((deta%(3600*24))/3600);
		var detam=parseInt((deta%3600)/60);
		var detas=parseInt(deta%60);
		if(detah<10){
			detah="0"+detah;
		}
		if(detam<10){
			detam="0"+detam;
		}
		if(detas<10){
			detas="0"+detas;
		}
		odiv1.innerHTML=detad+"天"+detah+"时"+detam+"分"+detas+"秒";
	}
	var t=setInterval(stop,1000);
}
function odate(oDate)
{
	var year=oDate.getFullYear();
	var Month=oDate.getMonth()+1;
	var oDa=oDate.getDate();
	var Hour=oDate.getHours();
	var minute=oDate.getMinutes();
	var second=oDate.getSeconds();
	if(Month<10){
		Month="0"+Month;
	}
	if(oDa<10){
		oDa="0"+oDa;
	}
	if(Hour<10){
		Hour="0"+Hour;
	}
	if(minute<10){
		minute="0"+minute;
	}
	if(second<10){
		second="0"+second;
	}
	var str=year+"年"+Month+"月"+oDa+"日"+Hour+"："+minute+":"+second;
	return str;
}