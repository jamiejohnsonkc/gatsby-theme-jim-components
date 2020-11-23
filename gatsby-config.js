module.exports = {
	plugins: [
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		name: `images`,
		// 		path: `${__dirname}/src/images`,
		// 	},
		// },
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				name: `svg`,
				rule: {
					include: /assets/,
				},
			},
		},
		`gatsby-plugin-sass`,
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: [
						// 'Roboto: 100,300,400,700,900',
						// 'Roboto Slab: 300, 400, 700, 900',
						'Spectral: 300,400,600,700',
						'Source Sans Pro: 200,300,400,600,700,900',
						'Source Code Pro',
					],
				},
			},
		},
		// {
		// 	resolve: `gatsby-plugin-page-creator`,
		// 	options: {
		// 		path: `${__dirname}/src/pages`,
		// 	},
		// },
		// `gatsby-transformer-sharp`,
		// `gatsby-plugin-sharp`,
		// `gatsby-plugin-transition-link`,
		`gatsby-plugin-theme-ui`,
		`gatsby-theme-jim-theme-ui`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-preload-fonts`,
	],
}
