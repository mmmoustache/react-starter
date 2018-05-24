import React from 'react';// eslint-disable-line

function MarkUp(markup, data, meta, styles, script, env) {
	return `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	${meta ? meta.title.toString() : 'Untitled Page'}
	${meta ? meta.meta.toString() : ''}
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222222">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="theme-color" content="#ffffff">
	${
		env === 'development' ?	`<link rel="stylesheet" href="/client.css" />` : `<style>${styles}</style>`
	}
</head>
<body>
	<div id="root">${markup}</div>
	${
		env === 'development' ?	`<script src="/client.js" async></script>` : `<script>${script}</script>`
	}
	<script>window.__INITIAL_STATE__ = ${JSON.stringify(data)};</script>
</body>
</html>`;
}

export default ({markup, data, meta, styles, script, env}) => {
	const markUp = MarkUp(markup, data, meta, styles, script, env);
	return env === 'development' ?	markUp : markUp.replace(/\n|\t/g, '');
};
