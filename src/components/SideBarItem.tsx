import { routeType } from '@/interfaces/route'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'


interface SideBarItemProps {
  children: React.ReactNode
}

const SideBarItem: React.FC<routeType> = ({icon:Icon, label, href, active}) => {
  return (
    <Link className={twMerge('flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1', active && 'text-white')} href={href}>
      <Icon size={26} />
      <p className='truncate w-full'>{label}</p>
    </Link>
  )
}

export default SideBarItem