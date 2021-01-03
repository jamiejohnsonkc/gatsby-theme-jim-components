/** @jsx jsx */
import { jsx } from 'theme-ui'
import HoverTextFill from './HoverTextFill'

export default {
  title: 'Ui/Effects/Hover',
  component: HoverTextFill,
  argTypes: {
    backgroundColor: { control: 'color' },
    backgroundHoverColor: { control: 'color' },
    color: { control: 'color' },
    // fontSize: { control: 'fontSize' },
  },
}

const Template = ({ args, ...props }) => (
  <HoverTextFill
    {...props}
    sx={{
      fontSize: 5,
      fontFamily: 'heading',
      fontWeight: 'heavy',
      transition: 'transform 275ms ease',
      '&:before': {
        transition: 'transform 275ms ease',
        color: 'primary',
      },
    }}
    {...args}
  />
)

export const Light = Template.bind({})
Light.storyName = 'Hover: Background Text Fill'
Light.args = {
	children: 'Hover: text fill light',
}

export const Dark = Template.bind({})
Dark.storyName = 'Hover: Background Text Fill Dark'
Dark.args = {
  children: 'Hover: text fill dark',
}
