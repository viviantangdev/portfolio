import {
  DartIcon,
  FigmaIcon,
  FlutterIcon,
  JavaScriptIcon,
  ReactIcon,
  TailwindIcon,
  HtmlIcon, CssIcon, ScssIcon
} from '../components/SvgIcon';

export const TechCategory = Object.freeze({
  LANGUAGE: 'language',
  FRAMEWORK: 'framework',
  STYLING: 'styling',
});

export const techStack = [
  { category: TechCategory.FRAMEWORK, icon: ReactIcon, text: 'React' },
  { category: TechCategory.FRAMEWORK, icon: FlutterIcon, text: 'Flutter' },
  { category: TechCategory.LANGUAGE, icon: HtmlIcon, text: 'HTML' },
  { category: TechCategory.LANGUAGE, icon: JavaScriptIcon, text: 'JavaScript' },
  { category: TechCategory.LANGUAGE, icon: DartIcon, text: 'Dart' },
  { category: TechCategory.STYLING, icon: CssIcon, text: 'CSS' },
  { category: TechCategory.STYLING, icon: ScssIcon, text: 'SCSS' },
  { category: TechCategory.STYLING, icon: TailwindIcon, text: 'Tailwind' },
  { category: TechCategory.STYLING, icon: FigmaIcon, text: 'Figma' },
];
