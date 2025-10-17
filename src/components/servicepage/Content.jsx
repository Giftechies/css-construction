"use client";

import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Content({ data = {} }) {
  return (
    <section className="w-full py-10">
      <main
        className="
          container mx-auto 
          grid grid-cols-1 lg:grid-cols-12 gap-8 
          px-4 sm:px-6 lg:px-8
        "
      >
        {/* Main Content */}
        <div className="lg:col-span-9">
          <article
            className="prose prose-lg max-w-none editor"
            dangerouslySetInnerHTML={{ __html: data?.content || "" }}
          />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-3 lg:sticky lg:top-10 h-fit hidden lg:block">
          <Sidebar />
        </aside>
      </main>
    </section>
  );
}
