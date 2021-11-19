import useMediaQuery from './useMediaQuery'

/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 *
 * Inspired by: https://github.com/contra/react-responsive/issues/162#issuecomment-592082035
 */
export default function useBreakpoints() {
    // const breakpoints = {
    //     isXs: useMediaQuery('(max-width: 640px)'),
    //     isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
    //     isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    //     isLg: useMediaQuery('(min-width: 1025px)'),
    //     active: 'xs',
    // }
    // if (breakpoints.isXs) breakpoints.active = 'xs'
    // if (breakpoints.isSm) breakpoints.active = 'sm'
    // if (breakpoints.isMd) breakpoints.active = 'md'
    // if (breakpoints.isLg) breakpoints.active = 'lg'
    // return breakpoints
    const breakpoints = {
        isXs: useMediaQuery('(max-width: 400px)'),
        isSm: useMediaQuery('(min-width: 640px)'),
        isMd: useMediaQuery('(min-width: 800px)'),
        isTb: useMediaQuery('(min-width: 928px)'),
        isLg: useMediaQuery('(min-width: 1280px)'),
        isXlg: useMediaQuery('(min-width: 1600px)'),
        isUhd: useMediaQuery('(min-width: 2500px)'),

        active: 'xs',
    }
    if (breakpoints.isXs) breakpoints.active = 'xs'
    if (breakpoints.isSm) breakpoints.active = 'sm'
    if (breakpoints.isMd) breakpoints.active = 'md'
    if (breakpoints.isTb) breakpoints.active = 'tb'
    if (breakpoints.isLg) breakpoints.active = 'lg'
    if (breakpoints.isXlg) breakpoints.active = 'xlg'
    if (breakpoints.isUhd) breakpoints.active = 'uhd'
    return breakpoints
}

//usage
//const {isXs, isSm, isMd, isLg, active} = useBreakpoints();
