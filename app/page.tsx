"use client"

import Sidebar from '@/components/Sidebar'
import { cn } from '@/lib/utils';
import useThemeStore from '@/store/themeStore';
import React from 'react'

export default function Home() {
  const { theme } = useThemeStore();
  return (
    <div className={cn("flex dark:bg-gray-950 dark:text-gray-100", theme)}>
      <Sidebar />
      <h1 className="flex-1">This is home</h1>
    </div>
  )
}
