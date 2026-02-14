'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Hash, Folder, ArrowUp, ArrowDown, CornerDownLeft } from 'lucide-react';
import { PROJECTS } from '../lib/constants';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  label: string;
  type: 'section' | 'project';
  href: string;
  keywords?: string;
}

const SECTIONS: CommandItem[] = [
  { id: 'home', label: 'Home', type: 'section', href: '#home' },
  { id: 'about', label: 'About', type: 'section', href: '#about' },
  { id: 'experience', label: 'Experience', type: 'section', href: '#experience' },
  { id: 'skills', label: 'Tech Stack', type: 'section', href: '#skills' },
  { id: 'projects', label: 'Projects', type: 'section', href: '#projects' },
  { id: 'achievements', label: 'Recognition', type: 'section', href: '#achievements' },
  { id: 'contact', label: 'Contact', type: 'section', href: '#contact' },
];

const PROJECT_ITEMS: CommandItem[] = PROJECTS.map(p => ({
  id: p.slug,
  label: p.title,
  type: 'project',
  href: `/projects/${p.slug}`,
  keywords: p.tech.join(' '),
}));

const ALL_ITEMS = [...SECTIONS, ...PROJECT_ITEMS];

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const filtered = query.trim()
    ? ALL_ITEMS.filter(item => {
        const q = query.toLowerCase();
        return (
          item.label.toLowerCase().includes(q) ||
          (item.keywords && item.keywords.toLowerCase().includes(q))
        );
      })
    : ALL_ITEMS;

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keep active index in bounds
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Scroll active item into view
  useEffect(() => {
    const activeEl = listRef.current?.querySelector('[data-active="true"]');
    activeEl?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const selectItem = useCallback(
    (item: CommandItem) => {
      onClose();
      if (item.type === 'project') {
        router.push(item.href);
      } else {
        // Section scroll — navigate home first if not on homepage
        if (pathname !== '/') {
          router.push('/' + item.href);
        } else {
          const el = document.querySelector(item.href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    [onClose, router, pathname]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(i => (i + 1) % filtered.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(i => (i - 1 + filtered.length) % filtered.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (filtered[activeIndex]) selectItem(filtered[activeIndex]);
        break;
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="command-palette-overlay fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4"
      onClick={onClose}
    >
      <div
        className="command-palette-panel w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search input */}
        <div className="flex items-center px-4 border-b border-zinc-800">
          <span className="text-zinc-500 text-sm mr-2">&#8250;</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search sections & projects..."
            className="flex-1 bg-transparent py-4 text-sm text-zinc-100 placeholder-zinc-500 outline-none font-mono"
          />
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-72 overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {filtered.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-zinc-500">No results found</p>
          ) : (
            filtered.map((item, i) => (
              <button
                key={item.id}
                data-active={i === activeIndex}
                onClick={() => selectItem(item)}
                onMouseEnter={() => setActiveIndex(i)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  i === activeIndex ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {item.type === 'section' ? (
                  <Hash className="w-4 h-4 text-zinc-500 shrink-0" />
                ) : (
                  <Folder className="w-4 h-4 text-zinc-500 shrink-0" />
                )}
                <span className="truncate">{item.label}</span>
                {item.type === 'project' && (
                  <span className="ml-auto text-[10px] font-mono text-zinc-600">project</span>
                )}
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 px-4 py-2.5 border-t border-zinc-800 text-[11px] text-zinc-600">
          <span className="inline-flex items-center gap-1">
            <ArrowUp className="w-3 h-3" />
            <ArrowDown className="w-3 h-3" />
            navigate
          </span>
          <span className="inline-flex items-center gap-1">
            <CornerDownLeft className="w-3 h-3" />
            select
          </span>
          <span className="inline-flex items-center gap-1">
            <kbd className="px-1 rounded bg-zinc-800 text-zinc-500 font-mono">esc</kbd>
            close
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
