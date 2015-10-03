// alert('This code does nothing')

var links = $("a[href*='CourseDetailLink']");
var e = []
for (i = 0; i < links.length; i++)
	{
	//$("a[id='pageContent_CourseList_CourseDetailLink_".concat(i.toString(), "']")).replaceWith('<a id="pageContent_CourseList_CourseDetailLink_'.concat(i.toString(), '" href="javascript:myFunction(', i.toString(), ')">course info</a>'));
	$("a[id='pageContent_CourseList_CourseDetailLink_".concat(i.toString(), "']")).click( function() { 
		console.log(event.target.id); 
		return false; 
		} );
	}
//console.log(links);

