document.addEventListener("DOMContentLoaded", LoadTitleBar);

const titlebarHtml =
`
<a>
	<img src="icon.png" width="60px"></a>
	<a href="https://github.com/TeddyTelanoff"><h3>Check me out on Github</h3>
	<a href="/games"><h3>Games</h3>
	<a href="/devlog"><h3>DevLog</h3>
</a>
`;

function LoadTitleBar()
{
	const titlebars = document.getElementsByClassName("titlebar");
	for (let titlebar of titlebars)
		titlebar.innerHTML = titlebarHtml;
}