export default ({markup, data}) => {
	return `<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="/build/client.css" />
	<link rel="stylesheet" href="/build/server.css" />
</head>
<body>
	<div id="root">${markup}</div>
	<script src="/build/client.js" async></script>
	<script>window.__INITIAL_STATE__ = ${JSON.stringify(data)};</script>
	</script>
</body>
</html>`;
};