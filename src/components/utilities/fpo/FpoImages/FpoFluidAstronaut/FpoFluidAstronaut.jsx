import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function FpoFluidAstronaut() {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "gatsby-astronaut.png" }) {
				childImageSharp {
					fluid {
						base64
						aspectRatio
						src
						srcSet
						sizes
					}
				}
			}
		}
	`)

	return (
		<Img fluid={data.file.childImageSharp.fluid} alt='The Gatsby Astronaut' />
	)
}
