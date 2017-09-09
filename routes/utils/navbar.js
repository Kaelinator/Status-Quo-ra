const links = [
	{id: 0, text: 'Home', href: '/'},
	{id: 1, text: 'About', href: '/about'},
	{id: 2, text: 'Users', href: '/users'}
]

exports.generateLinks = (pageId) => {

	return links.map((link) => {

			link.active = (link.id === pageId)
			return link
	})
}
