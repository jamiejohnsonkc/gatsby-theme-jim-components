/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import ContactIconsBar from '../../elements/ContactIconsBar'
import animation from '../../../../../../../gatsby-theme-scroll-reveal/animation'
import Headline from '../../../../../../../gatsby-theme-jim-components/src/components/designElements/Text/Headline'
import SectionGrid from '../../../../../../../gatsby-theme-jim-components/src/components/containers/SectionGrid'
import Article from '../../../../../../../gatsby-theme-jim-components/src/components/containers/Article'
import HoverHglUdrln from '../../../../../../../gatsby-theme-jim-components/src/components/fx/HoverHglUdrln'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'

const SlateSummary = ({ sectionBg, ...props }) => (
	<>
		<SectionGrid
			sectionBg={sectionBg}
			justifyContent='start'
			alignItems='center'
			className='introSummary'
		>
			<Article
				{...props}
				sx={{
					variant: 'layout.article',
				}}
			>
				<Headline
					{...props}
					as='h1'
					variant='styles.hxxl'
					{...animation.slideUp1}
				>
					Hiyas.
				</Headline>
				<Text
					{...props}
					sx={{
						variant: 'text.text_lg',

						// mb: 3,
						maxWidth: '34em',
					}}
					{...animation.slideUp2}
				>
					I've spent the better part of my career at agencies leading teams to
					develop solutions through creativity and technology. Along the way I
					also led marketing for global corporations which tempered my creative
					inclinations with real-world business perspective.
				</Text>
				<Text
					{...props}
					sx={{
						variant: 'text.text_lg',

						// mb: 4,
						maxWidth: '34em',
					}}
					{...animation.slideUp3}
				>
					A while back I took a step away to enjoy life a bit. In between the
					feedings and changes I began tinkering with Wordpress. Today I'm
					building with React and Gatsby. And I'm ready to get back into the
					game.
				</Text>
				<Text
					{...props}
					sx={{
						variant: 'text.text_lg',
						fontSize: [2, 3, 2, null, null, null],
						mb: [2, 3, 1, 4, 4, null],
						display: 'block',
						fontFamily: 'heading',
						fontWeight: 'heavy',
						color: 'primary',
					}}
					{...animation.slideUp4}
				>
					Need a coder? A website? More?
					<Link
						to='/'
						{...props}
						{...animation.slideUp5}
						sx={{
							textDecoration: 'none',
							ml: [0, 0, 1, 1, 1, 1],
							mb: [2, 2, 0, 2, 0, 0],
						}}
					>
						<HoverHglUdrln
							differenceColor='rgb(252,86,11)'
							children="Let's go"
							outlineColor='primary'
							textColor='text'
							underlineColor='text'
							underlineHeight='2px'
						/>
					</Link>
					{/* <AniLink swipe direction='up' to='web_development'>
						PaintDrip
					</AniLink> */}
				</Text>

				<ContactIconsBar
					linkBoxTransform='translateY(100px)'
					mt={[4, 6, 4, 0, null, null]}
					display='flex'
					// justifyContent: 'center',
					alignItems='center'
					flex='1 0 auto'
					width={['12em', '22em', '18em', '18em', '18em']}
					minHeight='4em'
					//width: ,
					// motion1='...animation.slideUp1'
					// motion2='...animation.slideUp1'
					// motion3='...animation.slideUp1'
					// motion4='...animation.slideUp1'
				/>
			</Article>
		</SectionGrid>
		{/* </Section> */}
	</>
)

SlateSummary.propTypes = {}

SlateSummary.defaultProps = {}

export default SlateSummary
