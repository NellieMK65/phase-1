document.addEventListener('DOMContentLoaded', () => {
	const articlesDiv = document.getElementById('articles');

	fetch('http://localhost:3000/articles')
		.then((res) => res.json())
		.then((data) => {
			data.forEach((article) => {
				const articleDiv = document.createElement('div');
				articleDiv.className = 'article';
				articleDiv.style.backgroundColor = '#f2f';

				const title = document.createElement('h1');
				title.innerText = article.title;

				const content = document.createElement('p');
				content.innerText = article.content;

				articleDiv.append(title, content);

				articlesDiv.append(articleDiv);
			});
		});
});
