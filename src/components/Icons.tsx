import type { Theme } from '@/types/uiTypes'
import type { SVGAttributes } from 'preact'
import type { ReactNode } from 'preact/compat'

interface SVGProps {
  children: ReactNode
  id?: string
  viewBox?: string
  class?: string
  width?: string
  height?: string
  fill?: string
  stroke?: string
  strokeWidth?: string
  strokeLinecap?: SVGAttributes<SVGSVGElement>['strokeLinecap']
  strokeLinejoin?: SVGAttributes<SVGSVGElement>['strokeLinejoin']
  hidden?: boolean
}

const Svg = ({ children, id, viewBox = '0 0 24 24', class: className, width = '24', height = '24', fill = 'transparent', stroke = 'currentColor', strokeWidth, strokeLinecap, strokeLinejoin, hidden }: SVGProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id={id}
    viewBox={viewBox}
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinejoin={strokeLinejoin}
    strokeLinecap={strokeLinecap}
    hidden={hidden}
    class={`${className} h-full w-full pointer-events-none`}
  >
    {children}
  </svg>
)

export const IconTheme = ({ id, mode }: { id?: string, mode: Theme }) => (
  <Svg id={id} strokeLinecap='round' strokeLinejoin='round'>
    { mode === 'auto' && <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008' /> }
    { mode === 'light' && <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008' /> }
    { mode === 'dark' && <>
      <path d='M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
      <path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />  
    </> }
  </Svg>
)

export const IconMail = () => (
  <Svg>
    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
    <path d="M3 7l9 6l9 -6" />
  </Svg>
)


export function IconGitHub () {
  return (
    <Svg>
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </Svg>
  )
}

export const IconLinkedin = () => (
  <svg viewBox='0 0 24 24' class='h-full w-full pointer-events-none' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-linecap='round'>
    <path d='M8 11v5' />
    <path d='M8 8v.01' />
    <path d='M12 16v-5' />
    <path d='M16 16v-3a2 2 0 1 0 -4 0' />
    <path d='M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10' />
  </svg>
)
