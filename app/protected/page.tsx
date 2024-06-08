
import AuthButton from "@/components/buttons/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Header from "@/components/layout-components/header";
import BackButton from "@/components/buttons/BackButton";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaHeart, FaQuestion } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import Link from "next/link";


export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user", user)

  if (!user) {
    return redirect("/login");
  }

    const menuList = [
      {
        name: "Free Play",
        icon: <IoLogoGameControllerB className="inline-block mr-4 h-10 w-10" />,
        href: "protected/freeplay",
        aria: "Link to discover page",
      },
      {
        name: "Levels",
        icon: <FaHeart className="inline-block mr-4 h-10 w-10" />,
        href: "/protected/Levels",
        aria: "Link to liked tracks",
      },
      {
        name: "Leaderboard",
        icon: <MdLeaderboard className="inline-block mr-4 h-10 w-10" />,
        href: "/protected/Leaderboard",
        aria: "Link to upload music",
      },
      {
        name: "How to Play",
        icon: <FaQuestion className="inline-block mr-4 h-10 w-10" />,
        href: "/protected/HTP",
        aria: "Link to leaderboard page",
      }
    ]

  return (
    <>
      <div className="flex items-center mx-auto mt-24"></div>
      <nav>
        <ul className="flex flex-col gap-10 lg:flex-row justify-center">
          {menuList.map((item, index) => (
            <li key={item.name}>
              <Link
                href={item.href}
                aria-label={item.aria}
                className="relative"
              >
                <span className="absolute top-0 left-0 mt-2 ml-2 h-full w-full rounded bg-black"></span>
                <span
                  className={`relative inline-block h-full w-full rounded-lg border-4 border-black bg-white px-6 py-3 text-xl font-bold text-black transition duration-100 hover:bg-mint hover:text-gray-900 z-60`}
                >
                  {item.icon} {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <AuthButton />
    </>
  );
};





{/* <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <AuthButton />
          </div>
        </nav>
        <Header />
      </div>
    </div> */}