document.addEventListener("DOMContentLoaded", LoadTitleBar);

const titlebarHtml =
`
	<a href="/"><img src="/icon.png" width="60px"></a>
	<a target="_blank" href="https://github.com/TeddyTelanoff"><h3>Github</h3></a>
	<a href="/games"><h3>Games</h3></a>
	<a href="https://editor.p5js.org/SkoolBoiTreidex/full/azR7YeMhG"><h3>School Games</h3></a>
	<a href="/devlog" id="devlog"><h3>DevLog</h3></a>
`;

function LoadTitleBar()
{
	const titlebars = document.getElementsByClassName("titlebar");
	for (let titlebar of titlebars)
		titlebar.innerHTML = titlebarHtml;

	if (localStorage.getItem('devlog') == null)
		document.getElementById('devlog').innerHTML = '';
}