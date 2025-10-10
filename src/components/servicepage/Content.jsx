import { Section } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Content(){
    return(
      <section className="   " >
        <main className="container   flex py-20  " >
            <div   >
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ad, accusantium temporibus neque corporis porro laboriosam ipsum hic dolorem praesentium nobis sapiente. Vel repellendus labore incidunt atque porro culpa ratione.</h1>

            </div>

            {/* sider bar */}
            <div><Sidebar/></div>
        </main>
      </section>
    )
}