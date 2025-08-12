import {
  CssIcon,
  DartIcon,
  FigmaIcon,
  FlutterIcon,
  GitIcon,
  GithubIcon,
  HtmlIcon,
  JavaScriptIcon,
  ReactIcon,
  ScssIcon,
  TailwindIcon,
} from './SvgIcon';

export const techCategory = Object.freeze({
  LANGUAGE: 'language',
  FRAMEWORK: 'framework',
  STYLING: 'styling',
  TOOL: 'tool',
});

export const techStack = [
  { category: techCategory.FRAMEWORK, icon: <ReactIcon />, text: 'React' },
  { category: techCategory.FRAMEWORK, icon: <FlutterIcon />, text: 'Flutter' },
  { category: techCategory.LANGUAGE, icon: <HtmlIcon />, text: 'HTML' },
  {
    category: techCategory.LANGUAGE,
    icon: <JavaScriptIcon />,
    text: 'JavaScript',
  },
  { category: techCategory.LANGUAGE, icon: <DartIcon />, text: 'Dart' },
  { category: techCategory.STYLING, icon: <CssIcon />, text: 'CSS' },
  { category: techCategory.STYLING, icon: <ScssIcon />, text: 'SCSS' },
  { category: techCategory.STYLING, icon: <TailwindIcon />, text: 'Tailwind' },
  { category: techCategory.STYLING, icon: <FigmaIcon />, text: 'Figma' },
  { category: techCategory.TOOL, icon: <GitIcon />, text: 'Git' },
  { category: techCategory.TOOL, icon: <GithubIcon />, text: 'Github' },
];
