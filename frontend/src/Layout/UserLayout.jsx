import React from 'react';
import SidebarNav from '../components/Sidebar';
import Navbar from '../components/Navbar';

export const UserLayout = ({ children }) => {
  return (
    <section className="h-screen flex">
      <SidebarNav />

      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Ensure that 'main' fills the available space */}
        <main className="flex-1 p-3 overflow-auto">
          {children}
        </main>
      </div>
    </section>
  );
};
