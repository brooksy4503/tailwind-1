"use client";

import { type ReactNode, useRef, useState } from "react";

type CodeCopyProps = {
  children: ReactNode;
  className?: string;
};

export function CodeCopy({ children, className = "" }: CodeCopyProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    const text = codeRef.current?.innerText.trim() ?? "";

    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="group relative">
      <code
        ref={codeRef}
        className={`${className} block pr-20 whitespace-pre-wrap break-words`}
      >
        {children}
      </code>
      <button
        type="button"
        onClick={copyCode}
        aria-label="Copy code example"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
