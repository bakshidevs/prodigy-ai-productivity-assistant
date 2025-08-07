"use client"

import { ChartColumn, LayoutDashboard, Moon, PanelLeftClose, PanelLeftOpen, Settings, SquareCheckBig, SunDim, Target } from "lucide-react";
import Image from "next/image";

import defaultProfile from "./assets/defaultProfile.jpg"
import Link from "next/link";
import useThemeStore from "@/store/themeStore";
import { useState } from "react";
import { cn } from "@/lib/utils";


export default function Sidebar() {
  const { isDarkModeEnabled, toggleTheme } = useThemeStore();
  const [panelClosed, setPanelClosed] = useState<boolean>(false);

  return (
    <div aria-label="Sidebar" className={cn("flex flex-col h-screen border-r-1 bg-gray-100 border-gray-300 relative dark:bg-blue-950 dark:text-gray-100 dark:border-gray-700", (panelClosed ? "px-2 py-8 w-16" : "p-8"))}>
      <button onClick={() => setPanelClosed(prevState => !prevState)}>
        {panelClosed ? <PanelLeftOpen className="absolute left-3" /> : <PanelLeftClose className="absolute right-4" />}
      </button>
      <div className="pt-4">
        <h1 className="text-2xl font-bold my-4">
          {!panelClosed &&
            "Sidebar"
          }
        </h1>
        <ul aria-label="Sidebar-Navigation" className={cn("flex flex-col gap-2", (panelClosed && "items-center"))}>
          <Link href="/dashboard">
            <li className="">
              <LayoutDashboard /> {!panelClosed && "Dashboard"}
            </li>
          </Link>
          <li className="">
            <SquareCheckBig /> {!panelClosed && "Tasks"}
          </li>
          <li className="">
            <Target /> {!panelClosed && "Goals"}
          </li>
          <li className="">
            <ChartColumn /> {!panelClosed && "Insights"}
          </li>
          <li className="">
            <Settings /> {!panelClosed && "Settings"}
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 justify-between mt-auto">
        <div aria-label="Sidebar-Profile" className="flex gap-2 items-center justify-center">
          <Image className="w-10 h-10 rounded-full object-cover" src={defaultProfile} alt="Bakshi" />
          {!panelClosed && (
            <div className="grid items-center">
              <p className="font-bold">Bakshi Devs</p>
              <p className=" text-gray-500">bakshidevs@example.com</p>
            </div>
          )}
        </div>
        <button className="p-2 hover:bg-gray-300 w-max cursor-pointer rounded-md" onClick={toggleTheme}>
          {isDarkModeEnabled ? <Moon /> : <SunDim />}
        </button>
      </div>
    </div>
  )
}
