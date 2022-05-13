import vite from 'vite';

await vite.build({
	base: './',
	build: {
		minify: false,
		outDir: 'public/build',
		rollupOptions: {
			input: {
				app: 'src/app.js'
			},
			output: {
				format: 'esm',
				entryFileNames: '[name].js',
				chunkFileNames: 'chunks/[name]-[hash].js',
				assetFileNames: 'assets/[name]-[hash][extname]'
			},
			preserveEntrySignatures: 'strict'
		}
	}
});
