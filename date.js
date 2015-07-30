function todaydate(){
	var today_date= new Date()
	var myyear=today_date.getYear() +1900
	var mymonth=today_date.getMonth()+1
	var mytoday=today_date.getDate()
	document.body.innerHTML = document.body.innerHTML.replace("Today's Date", "4/20/" + myyear);
}