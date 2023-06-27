/*simplified imports for reusabilities*/

/*---section components ----------*/
export {default as Navigation } from "./containers/NavigationBar/NavigationBar"

export {default as Banner } from "./containers/MainBanner/MainBanner"

export {default as FAQs} from './containers/FAQs/FAQs'

export {default as Mission} from './containers/Mission/Mission'

export {default as HowItWork} from "./containers/HowItWork/HowIWork" 

export {default as Designed} from "./containers/DesignedFor/DedignedFor"


/*---base element components ----------*/
export {default as Logo} from "./element/Logo/Logo"
export {default as MenuIcon} from "./icons/Hamburger/Hamburger"
export {default as Link} from './element/Link/Link'
export {default as Heading} from './element/Heading/Heading'
export {default as Paragraphe} from './element/Paragraphe/Paragraphe'
export {default as Picture} from "./element/Picture/Picture"
export {default as DefaultButton} from "./element/Button/BaseButton"
export {default as ButtonSecondary} from './element/Button/ButtonSecondary/ButtonSecondary'
export {default as MenuButton} from './element/Button/MenuButton/MenuButton'
export {default as ChevronUp} from './icons/ChevronUp/ChevronUp'
export {default as ChevronDown} from './icons/ChevronDown/ChevronDown'


/*--- block components - grouped element containing multiple base element components*/ 

export {default as LinksContainer} from './block/LinksWrapper/LinksWrapper'
export {default as MissionList} from './block/HowItWorkList/HowItWorkList'
export {default as Accordion} from './block/Accordion/Accordion'


export {default as AuthLinks} from './block/AuthWrapper/AuthWrapper'

export {default as BannerContent} from './block/Banner/BannerContent'