"use client";

import React from "react";

interface ExperienceCardProps {
  title: string;
  role: string;
  description: string;
  date: string;
  duration: string;
  location: string;
}

export default function ExperienceCard({
  title,
  role,
  description,
  date,
  duration,
  location,
}: ExperienceCardProps) {
  return (
    <div className="relative group">
      {/* Glow */}
      <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-fuchsia-500 to-cyan-400 blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>

      {/* Card */}
      <div className="relative bg-secondary p-6 border border-accent rounded-2xl text-primary shadow-xl">
        
        <h4 className="text-lg font-semibold mb-2 text-background">
          {title}
        </h4>

        <p className="font-medium mb-3 text-neutral-300">
          {role}
        </p>

        <p className="text-sm mb-5 text-neutral-400">
          {description}
        </p>

        <div className="text-xs text-neutral-500 space-y-1 border-t border-neutral-700 pt-4">
          <p><strong>Fecha:</strong> {date}</p>
          <p><strong>Duración:</strong> {duration}</p>
          <p><strong>Ubicación:</strong> {location}</p>
        </div>

      </div>
    </div>
  );
}

