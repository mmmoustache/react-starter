export default ({markup, data}) => {
	return `<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="client.css" />
</head>
<body>
	<div id="root">${markup}</div>
	<script src="client.js" async></script>
	<script>window.__INITIAL_STATE__ = ${JSON.stringify(data)};</script>
</body>
</html>`;
};

// export default ({markup, data, styles, script}) => {
// 	return `<!doctype html>
// <html>
// <head>
// 	<meta charset="utf-8">
// 	<meta http-equiv="x-ua-compatible" content="ie=edge">
// 	<title></title>
// 	<meta name="description" content="">
// 	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
// 	<style>${styles}</style>
// </head>
// <body>
// 	<div id="root">${markup}</div>
// 	<script>${script}</script>
// 	<script>window.__INITIAL_STATE__ = ${JSON.stringify(data)};</script>
// </body>
// </html>`;
// };