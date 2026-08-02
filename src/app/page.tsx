import { CodeCopy } from "@/components/code-copy";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8 overflow-x-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ThemeToggle />
      <main className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Tailwind CSS Examples
        </h1>

        {/* Table of Contents */}
        <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Table of Contents
          </h2>
          <nav className="space-y-1">
            <a
              href="#spacing"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              1. Spacing (Margin & Padding)
            </a>
            <a
              href="#flexbox"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              2. Flexbox
            </a>
            <a
              href="#grid"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              3. Grid
            </a>
            <a
              href="#typography"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              4. Typography
            </a>
            <a
              href="#backgrounds"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              5. Backgrounds & Borders
            </a>
            <a
              href="#transforms"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              6. Transforms & Transitions
            </a>
            <a
              href="#filters"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              7. Filters & Effects
            </a>
            <a
              href="#animations"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              8. Animations
            </a>
            <a
              href="#states"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              9. Hover & Focus States
            </a>
            <a
              href="#responsive"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              10. Responsive Design Patterns
            </a>
            <a
              href="#sizing"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              11. Sizing (Width & Height)
            </a>
          </nav>
        </section>

        {/* Update each section with an id attribute */}
        <section
          id="spacing"
          className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow scroll-mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Spacing (Margin & Padding)
          </h2>

          {/* Padding Examples */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Padding
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="p-4 bg-blue-200 dark:bg-blue-800 border-2 border-dashed border-blue-400">
                    p-4 (all sides)
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;p-4&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="px-8 bg-blue-200 dark:bg-blue-800 border-2 border-dashed border-blue-400">
                    px-8 (horizontal padding)
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;px-8&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="py-6 bg-blue-200 dark:bg-blue-800 border-2 border-dashed border-blue-400">
                    py-6 (vertical padding)
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;py-6&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="pt-6 bg-blue-200 dark:bg-blue-800 border-2 border-dashed border-blue-400">
                    pt-6 (top padding)
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;pt-6&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Margin Examples */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Margin
              </h3>
              <div className="space-y-8 relative bg-gray-100 dark:bg-gray-700 p-8">
                <div className="flex flex-col gap-2">
                  <div className="relative">
                    <div className="m-4 bg-green-200 dark:bg-green-800 p-2">
                      m-4 (all sides margin)
                    </div>
                    <div className="absolute inset-0 border-2 border-dashed border-green-400 pointer-events-none" />
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;m-4&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-4">
                    <div className="mx-4 bg-green-200 dark:bg-green-800 p-2">
                      mx-4 (horizontal margin)
                    </div>
                    <div className="mx-4 bg-green-200 dark:bg-green-800 p-2">
                      mx-4 (horizontal margin)
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;mx-4&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="space-y-4">
                    <div className="my-4 bg-green-200 dark:bg-green-800 p-2">
                      my-4 (vertical margin)
                    </div>
                    <div className="my-4 bg-green-200 dark:bg-green-800 p-2">
                      my-4 (vertical margin)
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;my-4&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Space Between Examples */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Space Between Elements
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="space-y-2 bg-yellow-100 dark:bg-yellow-900 p-4">
                    <div className="bg-yellow-300 dark:bg-yellow-700 p-2">
                      Item 1
                    </div>
                    <div className="bg-yellow-300 dark:bg-yellow-700 p-2">
                      Item 2
                    </div>
                    <div className="bg-yellow-300 dark:bg-yellow-700 p-2">
                      Item 3
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;space-y-2&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="space-x-4 flex bg-yellow-100 dark:bg-yellow-900 p-4">
                    <div className="bg-yellow-300 dark:bg-yellow-700 p-2">
                      Item 1
                    </div>
                    <div className="bg-yellow-300 dark:bg-yellow-700 p-2">
                      Item 2
                    </div>
                    <div className="bg-yellow-300 dark:bg-yellow-700 p-2">
                      Item 3
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;space-x-4 flex&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flexbox Section */}
        <section
          id="flexbox"
          className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow scroll-mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Flexbox
          </h2>
          <div className="space-y-8">
            {/* Basic Flex */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Basic Flex
              </h3>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 bg-purple-100 dark:bg-purple-900 p-4">
                  <div className="bg-purple-300 dark:bg-purple-700 p-2">
                    Item 1
                  </div>
                  <div className="bg-purple-300 dark:bg-purple-700 p-2">
                    Item 2
                  </div>
                  <div className="bg-purple-300 dark:bg-purple-700 p-2">
                    Item 3
                  </div>
                </div>
                <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  className=&quot;flex gap-2&quot;
                </CodeCopy>
              </div>
            </div>

            {/* Justify Content */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Justify Content
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-start bg-purple-100 dark:bg-purple-900 p-4">
                    <div className="bg-purple-300 dark:bg-purple-700 p-2 mx-1">
                      Start
                    </div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-2 mx-1">
                      Start
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;flex justify-start&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-center bg-purple-100 dark:bg-purple-900 p-4">
                    <div className="bg-purple-300 dark:bg-purple-700 p-2 mx-1">
                      Center
                    </div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-2 mx-1">
                      Center
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;flex justify-center&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between bg-purple-100 dark:bg-purple-900 p-4">
                    <div className="bg-purple-300 dark:bg-purple-700 p-2">
                      Between
                    </div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-2">
                      Between
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;flex justify-between&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-around bg-purple-100 dark:bg-purple-900 p-4">
                    <div className="bg-purple-300 dark:bg-purple-700 p-2">
                      Around
                    </div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-2">
                      Around
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;flex justify-around&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Align Items */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Align Items
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start bg-purple-100 dark:bg-purple-900 p-4 h-24">
                    <div className="bg-purple-300 dark:bg-purple-700 p-2">
                      Top
                    </div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-2">
                      Top
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;flex items-start&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center bg-purple-100 dark:bg-purple-900 p-4 h-24">
                    <div className="bg-purple-300 dark:bg-purple-700 p-2">
                      Center
                    </div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-2">
                      Center
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;flex items-center&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-end bg-purple-100 dark:bg-purple-900 p-4 h-24">
                    <div className="bg-purple-300 dark:bg-purple-700 p-2">
                      Bottom
                    </div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-2">
                      Bottom
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;flex items-end&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Flex Direction */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Flex Direction
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row bg-purple-100 dark:bg-purple-900 p-4">
                    <div className="bg-purple-300 dark:bg-purple-700 p-2 m-1">
                      1
                    </div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-2 m-1">
                      2
                    </div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-2 m-1">
                      3
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;flex flex-row&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col bg-purple-100 dark:bg-purple-900 p-4">
                    <div className="bg-purple-300 dark:bg-purple-700 p-2 m-1">
                      1
                    </div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-2 m-1">
                      2
                    </div>
                    <div className="bg-purple-300 dark:bg-purple-700 p-2 m-1">
                      3
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;flex flex-col&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Flex Wrap */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Flex Wrap
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap bg-purple-100 dark:bg-purple-900 p-4 w-64">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className="bg-purple-300 dark:bg-purple-700 p-2 m-1"
                      >
                        Item {n}
                      </div>
                    ))}
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;flex flex-wrap&quot;
                  </CodeCopy>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-nowrap overflow-x-auto bg-purple-100 dark:bg-purple-900 p-4 w-64">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className="bg-purple-300 dark:bg-purple-700 p-2 m-1 flex-shrink-0"
                      >
                        Item {n}
                      </div>
                    ))}
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;flex flex-nowrap&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Section */}
        <section
          id="grid"
          className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow scroll-mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Grid
          </h2>
          <div className="space-y-8">
            {/* Basic Grid */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Basic Grid
              </h3>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3 gap-2 bg-orange-100 dark:bg-orange-900 p-4">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div
                      key={n}
                      className="bg-orange-300 dark:bg-orange-700 p-4 text-center"
                    >
                      {n}
                    </div>
                  ))}
                </div>
                <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  className=&quot;grid grid-cols-3 gap-2&quot;
                </CodeCopy>
              </div>
            </div>

            {/* Responsive Grid */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Responsive Grid
              </h3>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-orange-100 dark:bg-orange-900 p-4">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div
                      key={n}
                      className="bg-orange-300 dark:bg-orange-700 p-4 text-center"
                    >
                      {n}
                    </div>
                  ))}
                </div>
                <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  className=&quot;grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                  gap-2&quot;
                </CodeCopy>
              </div>
            </div>

            {/* Grid Column Span */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Column Span
              </h3>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3 gap-2 bg-orange-100 dark:bg-orange-900 p-4">
                  <div className="bg-orange-300 dark:bg-orange-700 p-4 text-center col-span-2">
                    col-span-2
                  </div>
                  <div className="bg-orange-300 dark:bg-orange-700 p-4 text-center">
                    1 col
                  </div>
                  <div className="bg-orange-300 dark:bg-orange-700 p-4 text-center">
                    1 col
                  </div>
                  <div className="bg-orange-300 dark:bg-orange-700 p-4 text-center col-span-2">
                    col-span-2
                  </div>
                </div>
                <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  className=&quot;col-span-2&quot; (within grid-cols-3)
                </CodeCopy>
              </div>
            </div>

            {/* Grid Rows */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Grid Rows
              </h3>
              <div className="flex flex-col gap-2">
                <div className="grid grid-rows-3 grid-flow-col gap-2 bg-orange-100 dark:bg-orange-900 p-4 h-64">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div
                      key={n}
                      className="bg-orange-300 dark:bg-orange-700 p-4 text-center"
                    >
                      {n}
                    </div>
                  ))}
                </div>
                <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  className=&quot;grid grid-rows-3 grid-flow-col&quot;
                </CodeCopy>
              </div>
            </div>

            {/* Grid Auto Flow Dense */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Auto Flow Dense
              </h3>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3 gap-2 auto-rows-auto grid-flow-dense bg-orange-100 dark:bg-orange-900 p-4">
                  <div className="bg-orange-300 dark:bg-orange-700 p-4 text-center">
                    1
                  </div>
                  <div className="bg-orange-300 dark:bg-orange-700 p-4 text-center col-span-2">
                    2
                  </div>
                  <div className="bg-orange-300 dark:bg-orange-700 p-4 text-center">
                    3
                  </div>
                  <div className="bg-orange-300 dark:bg-orange-700 p-4 text-center col-span-2">
                    4
                  </div>
                  <div className="bg-orange-300 dark:bg-orange-700 p-4 text-center">
                    5
                  </div>
                </div>
                <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  className=&quot;grid grid-cols-3 auto-rows-auto
                  grid-flow-dense&quot;
                </CodeCopy>
              </div>
            </div>

            {/* Grid Gap Variations */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Gap Variations
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-4 bg-orange-100 dark:bg-orange-900 p-4">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <div
                        key={n}
                        className="bg-orange-300 dark:bg-orange-700 p-4 text-center"
                      >
                        {n}
                      </div>
                    ))}
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;grid grid-cols-3 gap-x-8 gap-y-4&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Grid Template Areas */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Template Areas
              </h3>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] grid-rows-[auto_auto_1fr_auto] md:grid-rows-[auto_1fr_auto] gap-2 bg-orange-100 dark:bg-orange-900 p-4">
                  <div className="bg-orange-300 dark:bg-orange-700 p-4 col-span-2">
                    Header
                  </div>
                  <div className="bg-orange-300 dark:bg-orange-700 p-4">
                    Sidebar
                  </div>
                  <div className="bg-orange-300 dark:bg-orange-700 p-4">
                    Main Content
                  </div>
                  <div className="bg-orange-300 dark:bg-orange-700 p-4 col-span-2">
                    Footer
                  </div>
                </div>
                <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  className=&quot;grid grid-cols-1 md:grid-cols-[200px_1fr]
                  grid-rows-[auto_1fr_auto]&quot;
                </CodeCopy>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section
          id="typography"
          className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow scroll-mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Typography
          </h2>
          <div className="space-y-8">
            {/* Font Size */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Font Size
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <p className="text-xs">text-xs: The quick brown fox</p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-xs&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm">text-sm: The quick brown fox</p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-sm&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base">text-base: The quick brown fox</p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-base&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-lg">text-lg: The quick brown fox</p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-lg&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-2xl">text-2xl: The quick brown fox</p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-2xl&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Font Weight */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Font Weight
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <p className="font-light">font-light: The quick brown fox</p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;font-light&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-normal">
                    font-normal: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;font-normal&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium">
                    font-medium: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;font-medium&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">
                    font-semibold: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;font-semibold&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">font-bold: The quick brown fox</p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;font-bold&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Text Alignment */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Text Alignment
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <p className="text-left bg-gray-100 dark:bg-gray-700 p-2">
                    text-left: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-left&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-center bg-gray-100 dark:bg-gray-700 p-2">
                    text-center: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-center&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-right bg-gray-100 dark:bg-gray-700 p-2">
                    text-right: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-right&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Text Decoration */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Text Decoration
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <p className="underline">underline: The quick brown fox</p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;underline&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="line-through">
                    line-through: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;line-through&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="underline decoration-wavy">
                    decoration-wavy: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;underline decoration-wavy&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="underline decoration-2 underline-offset-4">
                    decoration-2 underline-offset-4: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;underline decoration-2
                    underline-offset-4&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Text Transform */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Text Transform
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <p className="uppercase">uppercase: The quick brown fox</p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;uppercase&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="lowercase">LOWERCASE: The Quick Brown Fox</p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;lowercase&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="capitalize">capitalize: the quick brown fox</p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;capitalize&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Text Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Text Colors
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <p className="text-blue-500">
                    text-blue-500: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-blue-500&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-green-500">
                    text-green-500: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-green-500&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-red-500">
                    text-red-500: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-red-500&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500">
                    text-gray-500: The quick brown fox
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-gray-500&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Backgrounds & Borders Section */}
        <section
          id="backgrounds"
          className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow scroll-mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Backgrounds & Borders
          </h2>
          <div className="space-y-8">
            {/* Background Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Background Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;bg-gradient-to-r from-cyan-500
                    to-blue-500&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;bg-gradient-to-br from-pink-500
                    via-purple-500 to-blue-500&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Border Styles */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Border Styles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="h-20 border-2 border-dashed border-blue-500 rounded p-4">
                    Dashed Border
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;border-2 border-dashed border-blue-500&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-20 border-4 border-double border-purple-500 rounded p-4">
                    Double Border
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;border-4 border-double
                    border-purple-500&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Border Radius */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Border Radius
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="h-20 w-20 rounded bg-blue-500"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;rounded&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-20 w-20 rounded-2xl bg-purple-500"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;rounded-2xl&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-20 w-20 rounded-full bg-green-500"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;rounded-full&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transforms & Transitions */}
        <section
          id="transforms"
          className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow scroll-mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Transforms & Transitions
          </h2>
          <div className="space-y-8">
            {/* Scale */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Scale Transform
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="h-20 w-20 bg-blue-500 hover:scale-110 transition-transform duration-300"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:scale-110 transition-transform
                    duration-300&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-20 w-20 bg-purple-500 hover:scale-75 transition-transform duration-300"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:scale-75 transition-transform
                    duration-300&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-20 w-20 bg-green-500 hover:scale-x-150 transition-transform duration-300"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:scale-x-150 transition-transform
                    duration-300&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Rotate */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Rotate Transform
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="h-20 w-20 bg-blue-500 hover:rotate-45 transition-transform duration-300"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:rotate-45 transition-transform
                    duration-300&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-20 w-20 bg-purple-500 hover:-rotate-45 transition-transform duration-300"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:-rotate-45 transition-transform
                    duration-300&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-20 w-20 bg-green-500 hover:rotate-180 transition-transform duration-300"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:rotate-180 transition-transform
                    duration-300&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Effects */}
        <section
          id="filters"
          className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow scroll-mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Filters & Effects
          </h2>
          <div className="space-y-8">
            {/* Blur */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Blur
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="relative h-32">
                    <div className="absolute inset-0 bg-blue-500 blur-sm"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      Content
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;blur-sm&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="relative h-32">
                    <div className="absolute inset-0 bg-purple-500 blur-md"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      Content
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;blur-md&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="relative h-32">
                    <div className="absolute inset-0 bg-green-500 blur-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      Content
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;blur-xl&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Shadows */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Shadows
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="h-20 w-20 bg-white dark:bg-slate-600 shadow-sm dark:shadow-slate-900/50"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;shadow-sm dark:shadow-slate-900/50&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-20 w-20 bg-white dark:bg-slate-600 shadow-lg dark:shadow-slate-900/50"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;shadow-lg dark:shadow-slate-900/50&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-20 w-20 bg-white dark:bg-slate-600 shadow-2xl dark:shadow-slate-900/50"></div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;shadow-2xl dark:shadow-slate-900/50&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animations Section */}
        <section
          id="animations"
          className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow scroll-mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Animations
          </h2>
          <div className="space-y-8">
            {/* Basic Animations */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Basic Animations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 bg-blue-500 animate-pulse"></div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;animate-pulse&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 bg-purple-500 animate-bounce"></div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;animate-bounce&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 bg-green-500 animate-spin"></div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;animate-spin&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Hover Animations */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Hover Animations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 bg-blue-500 hover:animate-ping"></div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:animate-ping&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 bg-purple-500 transition-all duration-300 hover:scale-110 hover:rotate-12"></div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;transition-all duration-300 hover:scale-110
                    hover:rotate-12&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 bg-green-500 transition-all duration-500 hover:bg-blue-500 hover:shadow-xl"></div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;transition-all duration-500
                    hover:bg-blue-500 hover:shadow-xl&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Loading Animations */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Loading Animations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center items-center h-24">
                    <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;animate-spin border-4 border-blue-500
                    rounded-full border-t-transparent&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center items-center h-24 gap-1">
                    <div className="h-4 w-4 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-4 w-4 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-4 w-4 bg-purple-500 rounded-full animate-bounce"></div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;animate-bounce [animation-delay:-0.3s]&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center items-center h-24">
                    <div className="relative h-16 w-16">
                      <div className="absolute inset-0 border-8 border-gray-200 rounded-full"></div>
                      <div className="absolute inset-0 border-8 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;border-8 border-blue-500 rounded-full
                    border-t-transparent animate-spin&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Custom Keyframe Animations */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Custom Keyframe Animations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 bg-blue-500 animate-[wiggle_1s_ease-in-out_infinite]"></div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;animate-[wiggle_1s_ease-in-out_infinite]&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 bg-purple-500 animate-[fadeIn_1s_ease-in]"></div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;animate-[fadeIn_1s_ease-in]&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 bg-green-500 animate-[slideIn_1s_ease-out]"></div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;animate-[slideIn_1s_ease-out]&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hover & Focus States Section */}
        <section
          id="states"
          className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow scroll-mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Hover & Focus States
          </h2>
          <div className="space-y-8">
            {/* Button States */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Button States
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg
                    hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    dark:focus:ring-offset-gray-800 transition-colors"
                  >
                    Hover, Focus, & Active States
                  </button>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:bg-blue-600 active:bg-blue-700
                    focus:ring-2&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    className="px-4 py-2 border-2 border-purple-500 text-purple-500 rounded-lg
                    hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                    dark:focus:ring-offset-gray-800 transition-all duration-300"
                  >
                    Hover Fill Effect
                  </button>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:bg-purple-500 hover:text-white
                    transition-all&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Link States */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Link States
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 hover:underline
                    focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-colors"
                  >
                    Hover Underline Link
                  </a>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:text-blue-700 hover:underline&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="relative text-purple-500 hover:text-purple-700
                    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-500
                    hover:after:w-full after:transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                  >
                    Hover Line Grow
                  </a>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;after:w-0 hover:after:w-full
                    after:transition-all&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Input States */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Input States
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Hover and Focus me"
                    className="px-4 py-2 border border-gray-300 rounded-lg
                      hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none
                      dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:border-blue-400
                      transition-colors"
                  />
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:border-blue-500 focus:ring-2&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Scale on Focus"
                    className="px-4 py-2 border border-gray-300 rounded-lg
                      focus:scale-105 focus:border-purple-500 focus:outline-none
                      dark:border-gray-600 dark:bg-gray-700 dark:text-white
                      transition-all duration-300"
                  />
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;focus:scale-105 transition-all
                    duration-300&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Card Hover Effects */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Card Hover Effects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <div
                    className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md
                    hover:shadow-xl hover:-translate-y-1 cursor-pointer
                    transition-all duration-300"
                  >
                    <h4 className="font-medium">Lift & Shadow</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Hover to lift card
                    </p>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:shadow-xl hover:-translate-y-1
                    transition-all&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    className="group p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md
                    hover:bg-blue-50 dark:hover:bg-blue-900 cursor-pointer
                    transition-colors duration-300"
                  >
                    <h4 className="font-medium group-hover:text-blue-500 transition-colors">
                      Group Hover
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">
                      Hover to change colors
                    </p>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;group-hover:text-blue-500
                    transition-colors&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* List Item Hover */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                List Item Hover
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {["Item 1", "Item 2", "Item 3"].map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600
                          cursor-pointer transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:bg-gray-100 transition-colors&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <ul className="space-y-2">
                    {["Item 1", "Item 2", "Item 3"].map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg
                          hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400
                          cursor-pointer transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hover:border-blue-500
                    hover:text-blue-500&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Design Patterns Section */}
        <section
          id="responsive"
          className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow scroll-mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Responsive Design Patterns
          </h2>
          <div className="space-y-8">
            {/* Responsive Layout */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Responsive Layout
              </h3>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="bg-blue-100 dark:bg-blue-900 p-4 text-center rounded-lg"
                    >
                      Item {n}
                    </div>
                  ))}
                </div>
                <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  className=&quot;grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                  lg:grid-cols-4&quot;
                </CodeCopy>
              </div>
            </div>

            {/* Responsive Navigation */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Responsive Navigation
              </h3>
              <div className="flex flex-col gap-2">
                <nav className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="font-bold mb-4 sm:mb-0">Logo</div>
                    <ul className="flex flex-col sm:flex-row gap-4">
                      {["Home", "About", "Services", "Contact"].map((item) => (
                        <li
                          key={item}
                          className="hover:text-blue-500 transition-colors cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
                <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  className=&quot;flex flex-col sm:flex-row&quot;
                </CodeCopy>
              </div>
            </div>

            {/* Responsive Text */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Responsive Typography
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    Responsive Heading
                  </h4>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-xl sm:text-2xl md:text-3xl
                    lg:text-4xl&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm sm:text-base md:text-lg">
                    Responsive paragraph text that changes size at different
                    breakpoints.
                  </p>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;text-sm sm:text-base md:text-lg&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Responsive Card Layout */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Responsive Card Layout
              </h3>
              <div className="flex flex-col gap-2">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-blue-500 w-full md:w-48 h-48 md:h-auto"></div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">Card Title</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Card content that wraps differently on mobile and
                        desktop views.
                      </p>
                    </div>
                  </div>
                </div>
                <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  className=&quot;flex flex-col md:flex-row&quot;
                </CodeCopy>
              </div>
            </div>

            {/* Responsive Spacing */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Responsive Spacing
              </h3>
              <div className="flex flex-col gap-2">
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <div className="bg-purple-200 dark:bg-purple-800 p-4 text-center">
                    Content with responsive padding
                  </div>
                </div>
                <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  className=&quot;p-4 sm:p-6 md:p-8 lg:p-12&quot;
                </CodeCopy>
              </div>
            </div>

            {/* Responsive Hidden/Visible Elements */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Responsive Visibility
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="hidden md:block bg-green-100 dark:bg-green-900 p-4 rounded-lg">
                    Only visible on medium screens and up
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;hidden md:block&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="md:hidden bg-red-100 dark:bg-red-900 p-4 rounded-lg">
                    Only visible on small screens
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;md:hidden&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add new Sizing section before the end of main */}
        <section
          id="sizing"
          className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow scroll-mt-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Sizing (Width & Height)
          </h2>
          <div className="space-y-8">
            {/* Fixed Width */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Fixed Width
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 items-end">
                    <div className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white text-sm">
                      w-16
                    </div>
                    <div className="w-24 h-16 bg-blue-500 flex items-center justify-center text-white text-sm">
                      w-24
                    </div>
                    <div className="w-32 h-16 bg-blue-500 flex items-center justify-center text-white text-sm">
                      w-32
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;w-16 | w-24 | w-32&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Responsive Width */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Responsive Width
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="w-full sm:w-3/4 md:w-1/2 h-16 bg-purple-500 flex items-center justify-center text-white text-sm">
                    w-full → sm:w-3/4 → md:w-1/2
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;w-full sm:w-3/4 md:w-1/2&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Min/Max Width */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Min/Max Width
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="min-w-[200px] max-w-sm bg-green-500 p-4 text-white text-sm">
                    min-w-[200px] max-w-sm: This box has a minimum width of
                    200px and maximum width of 24rem (384px)
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;min-w-[200px] max-w-sm&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Fixed Height */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Fixed Height
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 h-32">
                    <div className="w-16 h-16 bg-orange-500 flex items-center justify-center text-white text-sm">
                      h-16
                    </div>
                    <div className="w-16 h-24 bg-orange-500 flex items-center justify-center text-white text-sm">
                      h-24
                    </div>
                    <div className="w-16 h-32 bg-orange-500 flex items-center justify-center text-white text-sm">
                      h-32
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;h-16 | h-24 | h-32&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Min/Max Height */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Min/Max Height
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="min-h-[100px] max-h-48 bg-red-500 overflow-auto p-4 text-white text-sm">
                    <p className="mb-2">min-h-[100px] max-h-48</p>
                    <p className="mb-2">
                      Scroll appears if content exceeds max-h-48
                    </p>
                    <p className="mb-2">Lorem ipsum dolor sit amet...</p>
                    <p className="mb-2">Lorem ipsum dolor sit amet...</p>
                    <p>Lorem ipsum dolor sit amet...</p>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;min-h-[100px] max-h-48&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Viewport Units */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Viewport Units
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="w-screen max-w-full h-32 bg-teal-500 flex items-center justify-center text-white text-sm">
                    w-screen (full viewport width)
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;w-screen h-32&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-[50vh] bg-teal-600 flex items-center justify-center text-white text-sm">
                    h-[50vh] (50% of viewport height)
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;h-[50vh]&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Square/Auto Sizing */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Square & Auto Sizing
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4">
                    <div className="size-16 bg-indigo-500 flex items-center justify-center text-white text-sm">
                      size-16
                    </div>
                    <div className="size-24 bg-indigo-500 flex items-center justify-center text-white text-sm">
                      size-24
                    </div>
                    <div className="h-32 w-auto bg-indigo-500 px-4 flex items-center justify-center text-white text-sm">
                      w-auto
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;size-16 | size-24 | w-auto&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>

            {/* Percentage Sizing */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                Percentage Sizing
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="h-32 bg-gray-200 dark:bg-gray-700 p-2">
                    <div className="w-1/2 h-full bg-pink-500 flex items-center justify-center text-white text-sm">
                      w-1/2 (50%)
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;w-1/2 h-full&quot;
                  </CodeCopy>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-32 bg-gray-200 dark:bg-gray-700 p-2">
                    <div className="w-full h-1/2 bg-pink-500 flex items-center justify-center text-white text-sm">
                      h-1/2 (50%)
                    </div>
                  </div>
                  <CodeCopy className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    className=&quot;w-full h-1/2&quot;
                  </CodeCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ... rest of the code remains the same ... */}
      </main>
    </div>
  );
}
