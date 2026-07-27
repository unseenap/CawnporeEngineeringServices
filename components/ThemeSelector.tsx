import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";

export function ThemeSelector({ mobile = false }: { mobile?: boolean }) {
  return <AnimatedThemeToggler mobile={mobile} />;
}
