import { Icon } from './Icon'
import { IconAstro, IconTypeScript, IconPreact, IconBun, IconTailwind, IconExpress, IconAstroLight } from './Icons'

const pillClasses = 'flex items-center justify-center gap-1.5 h-fit w-fit p-2 px-2.5 rounded-md text-xs'
const iconClasses = 'h-4 w-auto'

export const AstroPill = () => (
  <div class={pillClasses}>
    <Icon class={`${iconClasses} hidden is-dark:flex`}>
      <IconAstro />
    </Icon>
    <Icon class={`${iconClasses} is-dark:hidden`}>
      <IconAstroLight />
    </Icon>
    Astro
  </div>
)

export const TypeScriptPill = () => (
  <div class={pillClasses}>
    <Icon class={iconClasses}>
      <IconTypeScript />
    </Icon>
    TypeScript
  </div>
)

export const PreactPill = () => (
  <div class={pillClasses}>
    <Icon class={iconClasses}>
      <IconPreact />
    </Icon>
    Preact (TSX)
  </div>
)

export const BunPill = () => (
  <div class={pillClasses}>
    <Icon class={iconClasses}>
      <IconBun />
    </Icon>
    Bun
  </div>
)

export const TailwindPill = () => (
  <div class={pillClasses}>
    <Icon class={iconClasses}>
      <IconTailwind />
    </Icon>
    Tailwind CSS
  </div>
)

export const ExpressPill = () => (
  <div class={pillClasses}>
    <Icon class={iconClasses}>
      <IconExpress />
    </Icon>
    Express
  </div>
)
