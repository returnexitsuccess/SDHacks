// alert('This code does nothing')

var links = $("a[href*='CourseDetailLink']").replaceWith('<a id="pageContent_CourseList_CourseDetailLink_0" href="test">course info</a>');

console.log(links);