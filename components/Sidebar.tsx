import { ChartColumn, LayoutDashboard, Settings, SquareCheckBig, Target } from "lucide-react";
import Image from "next/image";

import defaultProfile from "./assets/defaultProfile.jpg"
import Link from "next/link";


export default function Sidebar() {
  return (
    <div aria-label="Sidebar" className="p-8 flex flex-col justify-between h-screen">
      <div className="">
        <h1 className="text-2xl font-bold my-4">Sidebar</h1>
        <ul aria-label="Sidebar-Navigation" className="flex flex-col gap-2">
          <Link href="/dashboard">
            <li className="flex items-center gap-2">
              <LayoutDashboard /> Dashboard
            </li>
          </Link>
          <li className="flex items-center gap-2">
            <SquareCheckBig /> Tasks
          </li>
          <li className="flex items-center gap-2">
            <Target /> Goals
          </li>
          <li className="flex items-center gap-2">
            <ChartColumn /> Insights
          </li>
          <li className="flex items-center gap-2">
            <Settings /> Settings
          </li>
        </ul>
      </div>
      <div aria-label="Sidebar-Profile" className="flex gap-2">
        <Image height={50} width={50} className="rounded-full object-cover" src={defaultProfile} alt="Bakshi" />
        <div className="grid items-center">
          <p className="font-bold">Bakshi Devs</p>
          <p className="text-md text-gray-500">bakshidevs@example.com</p>
        </div>
      </div>
    </div>
  )
}
