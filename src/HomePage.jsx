import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="p-6 border-b shadow-sm sticky top-0 bg-white z-10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">DocShock</h1>
          <nav className="space-x-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="#portfolio" className="hover:underline">Portfolio</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Hi, I'm Dan Shock</h2>
          <p className="text-lg leading-relaxed">
            I'm a veterinarian and PhD epidemiologist with 17+ years in animal health. This site is a home for my blog, insights, and a showcase of my writing work. Whether you're a farmer, vet, or curious reader—welcome.
          </p>
        </section>

        <section id="blog" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">📝 Recent Blog Posts</h3>
          <ul className="space-y-4">
            <li className="border-l-4 border-blue-500 pl-4">
              <a href="#" className="text-lg font-medium hover:underline">Why Mastitis Vaccines Are a No-Brainer</a>
              <p className="text-sm text-gray-600">Understanding efficacy through real-world data, not myths.</p>
            </li>
            <li className="border-l-4 border-blue-500 pl-4">
              <a href="#" className="text-lg font-medium hover:underline">AI in Animal Agriculture: What’s Coming Next?</a>
              <p className="text-sm text-gray-600">A vet’s perspective on the future of tech and herd health.</p>
            </li>
          </ul>
        </section>

        <section id="portfolio" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">📚 Writing Portfolio</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">Regulatory White Paper: Antimicrobial Stewardship in Dairy</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Case Study: BVDV Vaccine Adoption in Western Canada</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Slide Deck: Udder Health Strategy for Large Herds</a></li>
          </ul>
        </section>

        <section id="about" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">👨‍⚕️ About Me</h3>
          <p className="text-lg leading-relaxed">
            Based in Canada, I’ve worked across veterinary practice, research, and industry. I translate complex science into engaging, accessible insights that help people make better decisions in agriculture.
          </p>
        </section>

        <section id="contact" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">📬 Contact</h3>
          <p>Reach me at <a href="mailto:dan@docshock.ca" className="text-blue-600 hover:underline">dan@docshock.ca</a></p>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Dan Shock. All rights reserved.
      </footer>
    </div>
  );
}
