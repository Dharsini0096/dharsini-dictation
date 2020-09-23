function showans(i)
{
	const answer = document.getElementsByClassName('ans');
	answer[i].style.display="block";
}
function start()
{
	const n = Math.floor(Math.random()*19);
	const dis=document.getElementsByClassName('sum');
	const answer = document.getElementsByClassName('ans');
	for(var j = 0 ; j <= 19; j++)
	{
		dis[j].style.display="none";
		answer[j].style.display="none";
	}
	dis[n].style.display="block";
}