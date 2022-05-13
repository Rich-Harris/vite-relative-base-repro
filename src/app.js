const routes = {
	home: () => import('./routes/home.js')
};

routes
	.home()
	.then((mod) => {
		mod.render();
	})
	.catch((err) => {
		document.body.innerHTML = err.message;
	});
