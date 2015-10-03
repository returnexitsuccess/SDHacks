// alert('This code does nothing')

var links = $("a[href*='CourseDetailLink']");
for (i = 0; i < links.length; i++)
	{
	$("a[id='pageContent_CourseList_CourseDetailLink_".concat(i.toString(), "']")).replaceWith('<a id="pageContent_CourseList_CourseDetailLink_'.concat(i.toString(), '" href="javascript:myFunction(', i.toString(), ')">course info</a>'));
	}
//console.log(links);