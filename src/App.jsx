import React, { useState, useEffect, useRef } from 'react';
import logo from './assets/rislogo.png';
import kurt from './assets/kurt.jpg';
import eris from './assets/res.png';
import project1 from './assets/1.jpg';
import project2 from './assets/2.jpg';
import project3 from './assets/3.jpg';
import project4 from './assets/4.jpg';
import project5 from './assets/5.jpg';
import project6 from './assets/6.jpg';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
  {
    title: "Student Information",
    description: "A student information system that manages and displays details about a student's subjects, instructors, and class schedules in an organized format.",
    tech: ["HTML/CSS", "PHP", "SQL", "JavaScript", "AJAX"],
    image: project1
  },
  {
    title: "The Pet Parlor",
    description: "The Pet Parlor is a business website developed for my first client, designed to showcase and sell pets through an organized and user-friendly online platform.",
    tech: ["HTML/CSS", "PHP", "SQL", "JavaScript", "AJAX"],
    image: project2
  },
  {
    title: "Barangay Silangan Portal",
    description: "A barangay portal that allows residents to report community issues, request barangay certificates, and access local services online.",
    tech: ["HTML/CSS", "PHP", "SQL", "JavaScript", "AJAX"],
    image: project3
  },
  {
    title: "Student Attendance",
    description: "A web-based student attendance system designed to efficiently track and manage student attendance records.",
    tech: ["HTML/CSS", "PHP", "SQL", "JavaScript", "AJAX"],
    image: project4
  },
  {
    title: "Purong Ginto",
    description: "An e-commerce web application for online grocery shopping, allowing users to browse products, add to cart, and place orders conveniently.",
    tech: ["HTML/CSS", "PHP", "SQL", "JavaScript", "AJAX"],
    image: project5
  },
  {
    title: "BITE-Ex",
    description: "A social media–based recipe platform that allows users to share, discover, and explore a variety of dishes from different cuisines in an interactive and engaging way.",
    tech: ["HTML/CSS", "PHP", "SQL", "JavaScript", "AJAX"],
    image: project6
  }
];


  const skills = [
    { 
      name: "Frontend Development", 
      items: ["HTML/CSS", "React", "JavaScript", "Tailwind CSS"] 
    },
    { 
      name: "UI/UX Design", 
      items: ["Figma", "Responsive Design", "Accessibility"] 
    },
    { 
      name: "Backend & Tools", 
      items: ["Node.js", "Git", "SQL"] 
    }
  ];

  const navigation = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'CONTACT', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] via-[#D4B5A0] to-[#C9A88A] text-gray-900 relative overflow-hidden">
      <nav className="fixed top-0 w-full z-50 bg-[#F5E6D3] bg-opacity-95 backdrop-blur-sm border-b border-[#4A3829] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center">
              <img src={logo} alt="RIS Logo" className="w-auto h-12 sm:h-16" />
            </div>
            
            <div className="hidden md:flex space-x-12">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wider transition-colors duration-200 ${
                    activeSection === item.id ? 'text-[#D4B5A0]' : 'text-[#654321] hover:text-[#D4A574]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-[#5A4639] transition-colors text-[#6B5544]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#5A4639] border-t border-[#4A3829]">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-colors text-sm tracking-wider ${
                    activeSection === item.id ? 'bg-[#6B5544] text-[#D4A574]' : 'text-[#F5E6D3] hover:bg-[#6B5544] hover:text-[#D4A574]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section 
        id="home" 
        ref={(el) => (sectionRefs.current.home = el)}
        className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-20 pb-10 relative z-10 transition-all duration-1000 ${
          visibleSections.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-8 leading-tight text-[#3D2B1F]" style={{ fontFamily: "'Lora', serif" }}>
                Dream. Design. Develop.
              </h1>
              <p className="text-sm sm:text-lg md:text-xl font-bold text-[#5A4639] leading-relaxed max-w-2xl" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                A college student taking up computer science at cavite state university – bacoor campus. i'm passionate about technology and programming, and i enjoy using my creativity to explore new ideas and improve my skills in the field.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-6 sm:px-8 py-2 sm:py-3 bg-[#6B5544] text-[#F5E6D3] font-bold tracking-wider hover:bg-[#5A4639] transition-colors rounded text-xs sm:text-sm md:text-base"
                  style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                >
                  VIEW MY WORK
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-[#6B5544] text-[#6B5544] font-bold tracking-wider hover:bg-[#6B5544] hover:text-[#F5E6D3] transition-colors rounded text-xs sm:text-sm md:text-base"
                  style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                >
                  CONTACT ME
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div 
                className="w-full max-w-xs sm:max-w-md h-56 sm:h-96 rounded-lg shadow-2xl border-4 border-[#8B6F5C] overflow-hidden"
              >
                <img src={kurt} alt="Kurt's Portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="about" 
        ref={(el) => (sectionRefs.current.about = el)}
        className={`py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 relative z-10 transition-all duration-1000 ${
          visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-16 text-[#3D2B1F]" style={{ fontFamily: "'Lora', serif" }}>- ABOUT ME</h2>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16 mb-12 sm:mb-20">
            <div>
              <p className="text-sm sm:text-lg text-[#5A4639] mb-4 sm:mb-6 leading-relaxed" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                I'm Kurt Eris Navarette, a beginner developer with a growing passion for programming and technology. 
                I aspire to become a skilled and well-rounded developer by continuously learning and improving my craft. 
                I enjoy working on projects that challenge me to think creatively and apply what I've learned in meaningful ways.
              </p>
              <p className="text-sm sm:text-lg text-[#5A4639] mb-4 sm:mb-6 leading-relaxed" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                Outside of school, I like playing the guitar, video games, and spending time with friends. 
                I also enjoy photoshoots and bike riding—
                after a long day of programming, going for a ride and capturing photos of sunsets helps ease my stress and clears my mind.
              </p>
            </div>
            <div className="bg-[#E8D5C4] bg-opacity-90 p-6 sm:p-8 rounded-lg border border-[#C9A88A] backdrop-blur-sm shadow-lg">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-[#3D2B1F]" style={{ fontFamily: "'Lora', serif" }}>Quick Facts</h3>
              <ul className="space-y-3 sm:space-y-4 text-[#5A4639] text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-[#8B6F5C] mr-3 mt-1">▹</span>
                  <span style={{ fontFamily: "'Tenor Sans', sans-serif" }}>3rd Year College</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F5C] mr-3 mt-1">▹</span>
                  <span style={{ fontFamily: "'Tenor Sans', sans-serif" }}>5+ successful projects delivered</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F5C] mr-3 mt-1">▹</span>
                  <span style={{ fontFamily: "'Tenor Sans', sans-serif" }}>Bachelor's in Computer Science</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-[#3D2B1F]" style={{ fontFamily: "'Lora', serif" }}>SKILLS & EXPERTISE</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[#E8D5C4] bg-opacity-90 border border-[#C9A88A] rounded-lg p-6 sm:p-8 hover:bg-opacity-100 transition-all duration-300 backdrop-blur-sm shadow-lg">
                <h4 className="text-lg sm:text-xl font-bold mb-4 text-[#3D2B1F]" style={{ fontFamily: "'Lora', serif" }}>{skill.name}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-[#5A4639] flex items-center text-sm sm:text-base" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                      <span className="w-1.5 h-1.5 bg-[#8B6F5C] rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="projects" 
        ref={(el) => (sectionRefs.current.projects = el)}
        className={`py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 relative z-10 transition-all duration-1000 ${
          visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-16 text-[#3D2B1F]" style={{ fontFamily: "'Lora', serif" }}>PROJECTS</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#E8D5C4] bg-opacity-90 rounded-lg border border-[#C9A88A] overflow-hidden hover:border-[#8B6F5C] transition-all duration-300 backdrop-blur-sm shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-full h-40 sm:h-56 overflow-hidden bg-[#D4B5A0]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-[#3D2B1F]" style={{ fontFamily: "'Lora', serif" }}>{project.title}</h3>
                  <p className="text-[#5A4639] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 bg-[#8B6F5C] text-[#F5E6D3] text-xs sm:text-sm rounded-full border border-[#6B5544]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3D2B1F] mb-4" style={{ fontFamily: "'Lora', serif" }}>GET IN TOUCH</h2>
          <div className="w-24 h-1.5 bg-[#8B6F5C] mb-12 sm:mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#3D2B1F]" style={{ fontFamily: "'Lora', serif" }}>Reach Me Anytime!</h3>
              
              <p className="text-[#5A4639] text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                I’m always excited to explore new projects and collaborations. Don’t hesitate to reach out if you’d like to connect or share an idea!
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <a href="mailto:navarette.kurteris@gmail.com" className="flex items-center text-[#5A4639] hover:text-[#3D2B1F] transition-colors">
                  <div className="w-12 h-12 bg-white bg-opacity-40 backdrop-blur-sm flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#6B5544]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>navarette.kurteris@gmail.com</span>
                </a>
                <a href="https://github.com/erisnavarette" className="flex items-center text-[#5A4639] hover:text-[#3D2B1F] transition-colors">
                  <div className="w-12 h-12 bg-white bg-opacity-40 backdrop-blur-sm flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#6B5544]" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>github.com/erisnavarette</span>
                </a>
                <a href="https://www.linkedin.com/in/navarette-kurt-eris-b75433374/" className="flex items-center text-[#5A4639] hover:text-[#3D2B1F] transition-colors">
                  <div className="w-12 h-12 bg-white bg-opacity-40 backdrop-blur-sm flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#6B5544]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>linkedin.com/in/kurteris</span>
                </a>
              </div>
            </div>

            <div className="bg-white bg-opacity-40 backdrop-blur-sm border-l-4 border-[#8B6F5C] p-6 sm:p-8">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={eris} 
                  alt="Contact" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#6B5544] border-t border-[#5A4639] py-6 sm:py-8 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#F5E6D3] text-xs sm:text-base">
            © 2025 Kurt Eris Navarette. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}