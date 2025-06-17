import {
  DartIcon,
  FigmaIcon,
  FlutterIcon,
  JavaScriptIcon,
  ReactIcon,
  TailwindIcon,
  HtmlIcon, CssIcon, ScssIcon
} from '../components/SvgIcon';

export const techCategory = Object.freeze({
  LANGUAGE: 'language',
  FRAMEWORK: 'framework',
  STYLING: 'styling',
});

export const techStack = [
  { category: techCategory.FRAMEWORK, icon: <ReactIcon />, text: 'React' },
  { category: techCategory.FRAMEWORK, icon: <FlutterIcon/>, text: 'Flutter' },
  { category: techCategory.LANGUAGE, icon: <HtmlIcon/>, text: 'HTML' },
  { category: techCategory.LANGUAGE, icon: <JavaScriptIcon/>, text: 'JavaScript' },
  { category: techCategory.LANGUAGE, icon: <DartIcon/>, text: 'Dart' },
  { category: techCategory.STYLING, icon: <CssIcon/>, text: 'CSS' },
  { category: techCategory.STYLING, icon: <ScssIcon/>, text: 'SCSS' },
  { category: techCategory.STYLING, icon: <TailwindIcon/>, text: 'Tailwind' },
  { category: techCategory.STYLING, icon: <FigmaIcon/>, text: 'Figma' },
];
