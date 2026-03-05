"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FancyTab {
  id: number;
  name: string;
  icon?: React.ReactNode;
  services: {
    title: string;
    description: string;
  }[];
}

interface TabsViewFancyProps {
  tabs: FancyTab[];
  defaultTab?: number;
}

export default function TabsViewFancy({
  tabs,
  defaultTab,
}: TabsViewFancyProps) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]?.id);
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (id: number) => {
    if (id === activeTab) return;

    setIsLoading(true);

    setTimeout(() => {
      setActiveTab(id);
      setIsLoading(false);
    }, 250);
  };

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-6 rounded-xl overflow-hidden">
        {/* Sidebar */}
        <div className="sm:w-60 flex sm:flex-col overflow-x-auto sm:overflow-visible whitespace-nowrap rounded-xl bg-black/5 dark:bg-white/5 backdrop-blur-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`relative group flex items-center w-full px-4 py-3 transition-all ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-(--background)/60 hover:text-secondary-foreground"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tabBackground"
                  className="absolute inset-0 bg-accent rounded-lg"
                  transition={{ duration: 0.2 }}
                />
              )}

              <div className="flex items-center gap-3 z-10">
                {tab.icon && <span className="text-xl">{tab.icon}</span>}
                <span className="font-medium">{tab.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 relative rounded-xl bg-(--accent)/80 backdrop-blur-lg shadow-lg overflow-hidden">
          <AnimatePresence>
            {isLoading && (
              <motion.div
                key="loader"
                className="absolute inset-0 z-20 flex items-center justify-center bg-(--secondary)/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
              >
                <div className="animate-spin h-8 w-8 border-4 border-accent border-t-transparent rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="p-1 mt-5 min-h-62.5"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {currentTab?.services.map((service, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-accent shadow-md"
                  >
                    <h4 className=" text-center mb-6">
                      {service.title}
                    </h4>
                    <p className="text-sm text-center opacity-80">{service.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
