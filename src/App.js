import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Code2, Layers, Database, Globe } from 'lucide-react';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">Ankit</h1>
          <nav className="space-x-4 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a
              href="/Ankit_Resume.pdf"
              className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
              download
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-white text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center py-24 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Ankit  👋</h1>
          <p className="text-xl text-gray-600 mb-6">B.Tech IT | Web Developer | AI Enthusiast</p>
          <a
            href="/ANKIT-RESUME.pdf"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition"
            download
          >
            Download Resume
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-gray-100 text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <img
            src="/ankit.jpg"
            alt="Ankit Kumar"
            className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg object-cover"
          />
          <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
            I'm Ankit, a passionate web developer currently pursuing my B.Tech in Information Technology from Bhagwan Parshuram Institute of Technology.
            I love designing creative and functional web apps using modern tools like React and Tailwind CSS.
            I'm especially excited about building AI-integrated features to solve real-world problems.
          </p>
        </section>

        <section id="skills" className="py-20 px-6 bg-white text-center">
  <h2 className="text-4xl font-bold mb-8">Skills</h2>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

    {/* Languages */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Code2 className="text-indigo-600" size={20} />
        <h3 className="text-2xl font-semibold text-indigo-600">Languages</h3>
      </div>
      <ul className="space-y-2 text-gray-700 text-sm">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>C</li>
        <li>C++</li>
      </ul>
    </div>

    {/* Frameworks & Libraries */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Layers className="text-indigo-600" size={20} />
        <h3 className="text-2xl font-semibold text-indigo-600">Frameworks & Libraries</h3>
      </div>
      <ul className="space-y-2 text-gray-700 text-sm">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
      </ul>
    </div>

    {/* Database & Tools */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Database className="text-indigo-600" size={20} />
        <h3 className="text-2xl font-semibold text-indigo-600">Database & Tools</h3>
      </div>
      <ul className="space-y-2 text-gray-700 text-sm">
        <li>MongoDB</li>
        <li className="flex items-center gap-1">
          <Github size={14} /> Git & GitHub
        </li>
        <li className="flex items-center gap-1">
          <Globe size={14} /> AI Integration
        </li>
      </ul>
    </div>

  </div>
</section>


        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-white text-center">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Project Card - AI Resume Analyzer */}
            <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6">
              <img
                src="/ai-resume-analyzer.png"
                alt="AI Resume Analyzer"
                className="rounded-xl w-full h-48 object-cover mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">AI Resume Analyzer</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Uploads, analyzes, and scores resumes using AI. Provides improvement suggestions and ATS score visualization.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://a-iresume-analyzer.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-indigo-600 px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/ankit5501/AIresume-analyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 border border-indigo-600 px-4 py-2 rounded-full text-sm hover:bg-indigo-50 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* You can add more projects in same format */}
          </div>
        </section>

        {/* Contact Section */}
<section id="contact" className="py-20 px-6 bg-gray-100 text-center">
  <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
  <p className="text-lg text-gray-700 mb-10">
    Feel free to reach out for collaboration, opportunities, or just to say hi!
  </p>

  <form className="max-w-xl mx-auto text-left space-y-6">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <textarea
      rows="5"
      placeholder="Your Message"
      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    ></textarea>
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
    >
      Send Message
    </button>
  </form>
</section>
</main>
     <footer className="bg-white text-center py-6 border-t border-gray-200">
  <div className="flex flex-col gap-2 items-center">
    <p className="text-sm text-gray-500">
      © {new Date().getFullYear()} Ankit — Built with ❤️ in Delhi, India 🇮🇳
    </p>
    <div className="flex gap-5 mt-2">
      <a
        href="mailto:ankit@example.com"
        className="text-gray-600 hover:text-indigo-600 transition"
        aria-label="Email"
      >
        <Mail size={22} />
      </a>
      <a
        href="https://github.com/ankit5501
"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-indigo-600 transition"
        aria-label="GitHub"
      >
        <Github size={22} />
      </a>
      <a
        href="https://linkedin.com/in/ankit-kushwaha-260235293"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-indigo-600 transition"
        aria-label="LinkedIn"
      >
        <Linkedin size={22} />
      </a>
      <a
        href="https://twitter.com/AnkitKumar20357"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-indigo-600 transition"
        aria-label="Twitter"
      >
        <Twitter size={22} />
      </a>
    </div>
  </div>
</footer>



    </>
  );
}

export default App;
