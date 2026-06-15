"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  GraduationCap,
  Award,
  Code,
  Target,
  Briefcase,
  Cpu,
  Zap,
  Rocket,
  Brain,
  Settings,
  BookOpen,
  Calendar,
  ExternalLink,
  ChevronDown,
  Moon,
  Sun,
  Sparkles,
  BarChart3,
  Ruler,
  Waves,
  Shield,
  Users,
  Lightbulb,
  X,
  Menu,
  Download,
  Star,
  Globe,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [rotatingIndex, setRotatingIndex] = useState(0)
  const [projectCount, setProjectCount] = useState(0)
  const [skillCount, setSkillCount] = useState(0)
  const [certCount, setCertCount] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const rotatingTexts = [
    "Embedded Systems Engineer",
    "IoT Developer",
    "AI Automation Enthusiast",
    "Data Analytics Specialist",
  ]

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  useEffect(() => {
    const currentText = rotatingTexts[rotatingIndex]
    let index = 0
    setTypedText("")

    const typingInterval = setInterval(() => {
      if (index <= currentText.length) {
        setTypedText(currentText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setRotatingIndex((prev) => (prev + 1) % rotatingTexts.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [rotatingIndex])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 191, 255, 0.3)"
        ctx.fill()
      })

      // Connect nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(0, 191, 255, ${0.1 * (1 - distance / 100)})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills", "experience", "projects", "achievements", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const animateCounter = (target: number, setter: (val: number) => void, duration = 2000) => {
      const step = target / (duration / 16)
      let current = 0
      const timer = setInterval(() => {
        current += step
        if (current >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(current))
        }
      }, 16)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === "stats") {
          animateCounter(8, setProjectCount)
          animateCounter(20, setSkillCount)
          animateCounter(18, setCertCount)
        }
      })
    })

    const statsSection = document.getElementById("stats")
    if (statsSection) observer.observe(statsSection)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observeElements = document.querySelectorAll(".popup-animate")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    observeElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const skills = [
    { name: "Embedded Systems", icon: Cpu, level: 95 },
    { name: "IoT Integration", icon: Waves, level: 90 },
    { name: "AI & Machine Learning", icon: Brain, level: 85 },
    { name: "Data Analytics", icon: BarChart3, level: 88 },
    { name: "Circuit Design", icon: Zap, level: 92 },
    { name: "Automation", icon: Settings, level: 87 },
  ]

  const projects = [

    {
      title: "Prompt to Action",
      tech: ["AI", "IoT", "Microcontroller"],
      description: "AI web interface that auto-generates and uploads microcontroller code",
      link: "https://youtu.be/vDmGV_lc8pI",
      image: "/ai-microcontroller-prompt-interface.jpg",
      icon: Brain,
    },
    {
      title: "Hybrid Supercapacitor–Battery Energy Storage",
      tech: ["ESP32", "Arduino IDE", "IoT", "INA226"],
      description: "Hybrid energy storage system achieving 40% efficiency improvement by combining batteries and supercapacitors to optimize performance and reduce stress",
      link: "https://drive.google.com/file/d/1BdePpaumKQsyglS4Y9qyJNA5PrTO-YsY/view?usp=drivesdk",
      image: "/supercapacitor-battery-storage.png",
      icon: Zap,
    },

    {
      title: "Connected Vehicle",
      tech: ["ESP32", "Arduino IDE", "IoT", "WiFi"],
      description: "EV charging station auto-booking system with State of Charge tracking and nearby charging slot prediction",
      link: "https://youtu.be/3CKnwdY5Yxw",
      image: "/electric-vehicle-charging-system.jpg",
      icon: Cpu,
    },
    
    {
      title: "BLDC Motor Design",
      tech: ["ANSYS Maxwell", "RMxprt", "Simulation"],
      description: "Optimized motor performance and thermal stability by reducing electromagnetic losses",
      link: null,
      image: "/bldc-motor-design-simulation.jpg",
      icon: Zap,
    },



    {
      title: "REWOP 2K25 Portal",
      tech: ["HTML", "CSS", "JavaScript", "Google Forms"],
      description: "Responsive event registration portal for 200+ participants at national-level technical symposium",
      link: "https://rewopsrec.in",
      image: "/event-registration-portal.jpg",
      icon: Users,
    },

    {
      title: "Project SOLVE",
      tech: ["IoT", "Solar", "Automation", "Arduino"],
      description: "Solar-powered IoT-enabled public sanitation system reducing manual maintenance effort by 30%",
      link: null,
      image: "/solar-iot-lavatory-system.jpg",
      icon: Lightbulb,
    },

      {
      title: "Vision Guard",
      tech: ["Python", "YOLOv8", "AI"],
      description: "AI-powered PPE detection with 24/7 offline operation",
      link: "https://youtu.be/zSVimLt4yWg",
      image: "/ppe-detection-safety-monitoring.jpg",
      icon: Shield,
    },
  ]

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none hidden md:block" />

      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold neon-text">JP</h2>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {["Home", "About", "Education", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 ${
                  activeSection === item.toLowerCase() ? "text-primary scale-110" : "text-muted-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-4 rounded-lg glass-button hover:bg-primary/10 transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <button
            onClick={toggleDarkMode}
            className="hidden lg:block p-2 rounded-lg border border-border hover:bg-accent transition-all hover:scale-110 glow-on-hover"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden glass-card border-t border-white/10 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              {["Home", "About", "Education", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`w-full text-left text-lg font-medium py-3 px-4 rounded-lg transition-all active:scale-95 ${
                    activeSection === item.toLowerCase()
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:bg-white/5"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in-up">
          <div className="relative inline-block animate-float">
            {/* Orbital rings - hidden on mobile, shown on desktop */}
            <div className="orbital-ring hidden md:block"></div>
            <div className="orbital-ring-2 hidden md:block"></div>

            <div className="hexagon-container-mobile md:hexagon-container relative">
              <div className="hexagon-border-mobile md:hexagon-border">
                <div className="hexagon-glow-mobile md:hexagon-glow"></div>
                <div className="hexagon-image-wrapper-mobile md:hexagon-image-wrapper">
                  <Image
                    src="/assets/images/profile.jpg"
                    alt="Jeevith Pranav P"
                    width={10}
                    height={200}
                    className="hexagon-image-mobile md:hexagon-image w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="popup-animate absolute -top-4 -right-4 md:-top-8 md:-right-8 w-10 h-10 md:w-16 md:h-16 bg-primary/30 rounded-xl md:rounded-2xl flex items-center justify-center animate-bounce-slow glow-border-mobile md:glow-border-intense backdrop-blur-md hover:scale-110 md:hover:scale-150 transition-all duration-500 cursor-pointer group active:scale-95">
              <Cpu className="w-5 h-5 md:w-8 md:h-8 text-primary md:group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <div className="popup-animate popup-delay-1 absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-10 h-10 md:w-16 md:h-16 bg-accent/30 rounded-xl md:rounded-2xl flex items-center justify-center animate-bounce-slower glow-border-mobile md:glow-border-intense backdrop-blur-md hover:scale-110 md:hover:scale-150 transition-all duration-500 cursor-pointer group active:scale-95">
              <Zap className="w-5 h-5 md:w-8 md:h-8 text-accent-foreground md:group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <div className="popup-animate popup-delay-2 absolute top-1/2 -right-8 md:-right-12 w-9 h-9 md:w-14 md:h-14 bg-primary/30 rounded-xl md:rounded-2xl flex items-center justify-center animate-spin-slow glow-border-mobile md:glow-border-intense backdrop-blur-md hover:scale-110 md:hover:scale-150 transition-all duration-500 cursor-pointer group active:scale-95">
              <Rocket className="w-4 h-4 md:w-7 md:h-7 text-primary md:group-hover:scale-125" />
            </div>
            <div className="popup-animate popup-delay-3 absolute top-1/2 -left-8 md:-left-12 w-9 h-9 md:w-14 md:h-14 bg-accent/30 rounded-xl md:rounded-2xl flex items-center justify-center animate-pulse-glow glow-border-mobile md:glow-border-intense backdrop-blur-md hover:scale-110 md:hover:scale-150 transition-all duration-500 cursor-pointer group active:scale-95">
              <Brain className="w-4 h-4 md:w-7 md:h-7 text-accent-foreground md:group-hover:scale-125" />
            </div>
            <div className="popup-animate popup-delay-4 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 md:-translate-y-8 w-9 h-9 md:w-14 md:h-14 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl md:rounded-2xl flex items-center justify-center animate-bounce-slower glow-border-mobile md:glow-border-intense backdrop-blur-md hover:scale-110 md:hover:scale-150 transition-all duration-500 cursor-pointer group active:scale-95">
              <Sparkles className="w-4 h-4 md:w-7 md:h-7 text-purple-400 md:group-hover:rotate-180 transition-transform duration-500" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-slide-in neon-text-glow px-2">
            JEEVITH PRANAV P
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-4">
            <GraduationCap className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-base sm:text-lg md:text-xl text-center">Electrical & Electronics Engineering</span>
          </p>

          <div className="h-16 sm:h-12 flex items-center justify-center px-4">
            <p className="text-base sm:text-lg md:text-xl text-primary font-mono text-center">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 sm:pt-8 px-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="neon-button group w-full sm:w-auto text-base py-6 sm:py-4 active:scale-95"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View Projects
              <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
           <Button
  asChild
  size="lg"
  variant="outline"
  className="glass-button group bg-transparent w-full sm:w-auto text-base py-6 sm:py-4 active:scale-95"
>
  <a
    href="/resume/Jeevith_Pranav_P_71812303036.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
  >
    <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
    Resume
  </a>
</Button>

          </div>

          <div className="flex gap-4 sm:gap-6 justify-center pt-6 flex-wrap px-4">
            <a
              href="https://www.linkedin.com/in/jeevith-pranav-7a6043290/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-mobile md:social-icon group popup-animate active:scale-90"
            >
              <Linkedin className="w-7 h-7 md:w-6 md:h-6 group-hover:scale-125 transition-transform" />
            </a>
            <a
              href="https://github.com/Jeevith-Pranav"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-mobile md:social-icon group popup-animate popup-delay-1 active:scale-90"
            >
              <Github className="w-7 h-7 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="mailto:jeevithpranav.2303036@srec.ac.in"
              className="social-icon-mobile md:social-icon group popup-animate popup-delay-2 active:scale-90"
            >
              <Mail className="w-7 h-7 md:w-6 md:h-6 group-hover:scale-125 transition-transform" />
            </a>
            <a
              href="tel:+919342906002"
              className="social-icon-mobile md:social-icon group popup-animate popup-delay-3 active:scale-90"
            >
              <Phone className="w-7 h-7 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce mt-8 sm:mt-16 text-primary hover:text-foreground transition-colors inline-block"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
        </div>
      </section>

      <section id="stats" className="py-12 md:py-16 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <Card className="glass-card p-6 md:p-8 text-center hover-lift group active:scale-95">
              <Rocket className="w-14 h-14 md:w-12 md:h-12 mx-auto mb-4 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all" />
              <div className="text-5xl md:text-5xl font-bold neon-text mb-2">{projectCount}+</div>
              <div className="text-muted-foreground font-medium text-base">Projects</div>
            </Card>
            <Card className="glass-card p-6 md:p-8 text-center hover-lift group active:scale-95">
              <Code className="w-14 h-14 md:w-12 md:h-12 mx-auto mb-4 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all" />
              <div className="text-5xl md:text-5xl font-bold neon-text mb-2">{skillCount}+</div>
              <div className="text-muted-foreground font-medium text-base">Skills</div>
            </Card>
            <Card className="glass-card p-6 md:p-8 text-center hover-lift group active:scale-95">
              <Award className="w-14 h-14 md:w-12 md:h-12 mx-auto mb-4 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all" />
              <div className="text-5xl md:text-5xl font-bold neon-text mb-2">{certCount}+</div>
              <div className="text-muted-foreground font-medium text-base">Certifications</div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <Card className="glass-card p-8 md:p-12 hover-lift">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Passionate about <span className="text-primary font-semibold">Embedded Systems</span>,{" "}
                  <span className="text-primary font-semibold">IoT</span>,{" "}
                  <span className="text-primary font-semibold">AI</span>, and{" "}
                  <span className="text-primary font-semibold">Data Analytics</span>. Building real-world engineering
                  solutions that merge hardware and software.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg flex flex-col items-center gap-2 hover:scale-110 transition-transform cursor-pointer glow-on-hover">
                  <Cpu className="w-8 h-8 text-primary" />
                  <span className="text-xs font-medium">IoT</span>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg flex flex-col items-center gap-2 hover:scale-110 transition-transform cursor-pointer glow-on-hover">
                  <Brain className="w-8 h-8 text-accent-foreground" />
                  <span className="text-xs font-medium">AI</span>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg flex flex-col items-center gap-2 hover:scale-110 transition-transform cursor-pointer glow-on-hover">
                  <Zap className="w-8 h-8 text-primary" />
                  <span className="text-xs font-medium">Embedded</span>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg flex flex-col items-center gap-2 hover:scale-110 transition-transform cursor-pointer glow-on-hover">
                  <BarChart3 className="w-8 h-8 text-accent-foreground" />
                  <span className="text-xs font-medium">Analytics</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="education" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Education</h2>
          <div className="space-y-8">
            {[
              {
                degree: "B.E – Electrical & Electronics Engineering",
                institution: "Sri Ramakrishna Engineering College",
                score: "CGPA: 8.27",
                period: "2023 – 2027",
                icon: GraduationCap,
              },
              {
                degree: "Higher Secondary Certificate",
                institution: "Saraswathi Vidhyashram Matric Hr Sec School",
                score: "85.83%",
                period: "2022 – 2023",
                icon: BookOpen,
              },
              {
                degree: "Secondary School Leaving Certificate",
                institution: "Saraswathi Vidhyashram Matric Hr Sec School",
                score: "100%",
                period: "2020 – 2021",
                icon: Star,
              },
            ].map((edu, index) => (
              <Card key={index} className="glass-card p-6 md:p-8 timeline-card hover-lift group">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all glow-border">
                      <edu.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      <p className="text-primary font-semibold text-lg">{edu.score}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Skills & Expertise</h2>

          {/* Programming Languages - 2 columns on mobile, more on desktop */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6 md:mb-8 justify-center">
              <Code className="w-7 h-7 md:w-8 md:h-8 text-primary animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold neon-text">Programming Languages</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-6 md:gap-8">
              {/* C Programming */}
              <div className="skill-icon-card-mobile md:skill-icon-card group active:scale-95">
                <div className="skill-icon-wrapper-mobile md:skill-icon-wrapper">
                  <i className="devicon-c-plain colored text-5xl md:text-7xl group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500"></i>
                </div>
                <span className="skill-tooltip-mobile md:skill-tooltip">C</span>
              </div>

              {/* Java */}
              <div className="skill-icon-card-mobile md:skill-icon-card group active:scale-95">
                <div className="skill-icon-wrapper-mobile md:skill-icon-wrapper">
                  <i className="devicon-java-plain colored text-5xl md:text-7xl group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500"></i>
                </div>
                <span className="skill-tooltip-mobile md:skill-tooltip">Java</span>
              </div>

              {/* Python */}
              <div className="skill-icon-card-mobile md:skill-icon-card group active:scale-95">
                <div className="skill-icon-wrapper-mobile md:skill-icon-wrapper">
                  <i className="devicon-python-plain colored text-5xl md:text-7xl group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500"></i>
                </div>
                <span className="skill-tooltip-mobile md:skill-tooltip">Python</span>
              </div>

              {/* HTML5 */}
              <div className="skill-icon-card-mobile md:skill-icon-card group active:scale-95">
                <div className="skill-icon-wrapper-mobile md:skill-icon-wrapper">
                  <i className="devicon-html5-plain colored text-5xl md:text-7xl group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500"></i>
                </div>
                <span className="skill-tooltip-mobile md:skill-tooltip">HTML5</span>
              </div>

              {/* CSS3 */}
              <div className="skill-icon-card-mobile md:skill-icon-card group active:scale-95">
                <div className="skill-icon-wrapper-mobile md:skill-icon-wrapper">
                  <i className="devicon-css3-plain colored text-5xl md:text-7xl group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500"></i>
                </div>
                <span className="skill-tooltip-mobile md:skill-tooltip">CSS3</span>
              </div>

              {/* JavaScript */}
              <div className="skill-icon-card-mobile md:skill-icon-card group active:scale-95">
                <div className="skill-icon-wrapper-mobile md:skill-icon-wrapper">
                  <i className="devicon-javascript-plain colored text-5xl md:text-7xl group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500"></i>
                </div>
                <span className="skill-tooltip-mobile md:skill-tooltip">JavaScript</span>
              </div>

              {/* SQL */}
              <div className="skill-icon-card-mobile md:skill-icon-card group active:scale-95">
                <div className="skill-icon-wrapper-mobile md:skill-icon-wrapper">
                  <i className="devicon-postgresql-plain colored text-5xl md:text-7xl group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500"></i>
                </div>
                <span className="skill-tooltip-mobile md:skill-tooltip">SQL</span>
              </div>
            </div>
          </div>

          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6 md:mb-8 justify-center">
              <Settings className="w-7 h-7 md:w-8 md:h-8 text-primary animate-spin-slow" />
              <h3 className="text-2xl md:text-3xl font-bold neon-text">Tools & Software</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {/* MATLAB */}
              <Card className="glass-card p-4 md:p-6 hover-lift-mobile md:hover-lift-intense group cursor-pointer text-center active:scale-95">
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <i className="devicon-matlab-plain colored text-5xl md:text-7xl group-hover:scale-110 md:group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500"></i>
                  <span className="font-semibold text-xs md:text-sm group-hover:text-primary transition-colors">
                    MATLAB
                  </span>
                </div>
              </Card>

              {/* Simulink */}
              <Card className="glass-card p-4 md:p-6 hover-lift-mobile md:hover-lift-intense group cursor-pointer text-center active:scale-95">
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 md:group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-orange-500/50">
                    <Settings className="w-7 h-7 md:w-10 md:h-10" />
                  </div>
                  <span className="font-semibold text-xs md:text-sm group-hover:text-orange-500 transition-colors">
                    Simulink
                  </span>
                </div>
              </Card>

              {/* Power BI */}
              <Card className="glass-card p-4 md:p-6 hover-lift-mobile md:hover-lift-intense group cursor-pointer text-center active:scale-95">
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 md:group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-yellow-500/50">
                    <BarChart3 className="w-7 h-7 md:w-10 md:h-10" />
                  </div>
                  <span className="font-semibold text-xs md:text-sm group-hover:text-yellow-500 transition-colors">
                    Power BI
                  </span>
                </div>
              </Card>

              {/* AutoCAD */}
              <Card className="glass-card p-4 md:p-6 hover-lift-mobile md:hover-lift-intense group cursor-pointer text-center active:scale-95">
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 md:group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-red-500/50">
                    <Ruler className="w-7 h-7 md:w-10 md:h-10" />
                  </div>
                  <span className="font-semibold text-xs md:text-sm group-hover:text-red-500 transition-colors">
                    AutoCAD
                  </span>
                </div>
              </Card>

              {/* ANSYS Maxwell */}
              <Card className="glass-card p-4 md:p-6 hover-lift-mobile md:hover-lift-intense group cursor-pointer text-center active:scale-95">
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 md:group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/50">
                    <Waves className="w-7 h-7 md:w-10 md:h-10" />
                  </div>
                  <span className="font-semibold text-xs md:text-sm group-hover:text-blue-500 transition-colors">
                    ANSYS Maxwell
                  </span>
                </div>
              </Card>

              {/* STM32Cube */}
              <Card className="glass-card p-4 md:p-6 hover-lift-mobile md:hover-lift-intense group cursor-pointer text-center active:scale-95">
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-xs md:text-sm group-hover:scale-110 md:group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-cyan-500/50">
                    STM32
                  </div>
                  <span className="font-semibold text-xs md:text-sm group-hover:text-cyan-400 transition-colors">
                    STM32Cube
                  </span>
                </div>
              </Card>

              {/* KeilμVision */}
              <Card className="glass-card p-4 md:p-6 hover-lift-mobile md:hover-lift-intense group cursor-pointer text-center active:scale-95">
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-xs md:text-sm group-hover:scale-110 md:group-hover:scale-125 md:group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-green-500/50">
                    Keil
                  </div>
                  <span className="font-semibold text-xs md:text-sm group-hover:text-green-400 transition-colors">
                    Keil μVision
                  </span>
                </div>
              </Card>
            </div>
          </div>

          {/* Core Technical Skills with Progress Bars */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold neon-text">Core Expertise</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="glass-card p-6 hover-lift skill-card group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full progress-bar transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold neon-text">Domains</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Embedded Systems", icon: Cpu },
                  { name: "IoT", icon: Waves },
                  { name: "Automation", icon: Settings },
                  { name: "Data Analytics", icon: BarChart3 },
                  { name: "AI Solutions", icon: Brain },
                ].map((domain) => (
                  <div
                    key={domain.name}
                    className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg hover:scale-105 hover:bg-primary/20 transition-all cursor-pointer"
                  >
                    <domain.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{domain.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold neon-text">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Leadership", icon: Star },
                  { name: "Time Management", icon: Calendar },
                  { name: "Teamwork", icon: Users },
                  { name: "Problem Solving", icon: Lightbulb },
                  { name: "Communication", icon: Globe },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg hover:scale-105 hover:bg-accent/20 transition-all cursor-pointer"
                  >
                    <skill.icon className="w-5 h-5 text-accent-foreground flex-shrink-0" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">Experience</h2>
          <div className="space-y-8">
            {[
              {
                company: "TECTZO Pvt. Ltd.",
                location: "Coimbatore",
                project: "Project SOLVE",
                period: "Dec 2024 – Jan 2025",
                description: "Solar-operated smart lavatory with IoT-enabled sensors for remote monitoring",
                tech: ["IoT", "Microcontroller", "Solar"],
                icon: Lightbulb,
              },
              {
                company: "Sakthi Sugars Limited",
                location: "Bhavani",
                project: "Cogeneration Power Plant",
                period: "Jun 2025 (2 Weeks)",
                description: "Industrial power generation, turbines, and electrical systems exposure",
                tech: ["Power Systems", "Industrial"],
                icon: Zap,
              },
            ].map((exp, index) => (
              <Card key={index} className="glass-card p-6 md:p-8 hover-lift group">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all glow-border">
                      <exp.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                      <div>
                        <h3 className="text-2xl font-bold neon-text">{exp.company}</h3>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          {exp.location}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      {exp.project}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card overflow-hidden hover-lift project-card group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all glow-border">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full glass-button group/btn bg-transparent"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Project
                        <ChevronDown className="w-3 h-3 ml-2 rotate-[-90deg] group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-bold neon-text">Achievements</h3>
              </div>
              <div className="space-y-3">
                {[
                  { title: "1st Prize – Best Design Challenge 6.0", org: "SREC CoIn", icon: Star },
                  { title: "2nd Prize – AUTOwn'24", org: "BITS Pilani", icon: Award },
                  { title: "2nd Prize – Texperia'26", org: "SNS", icon: Award },
                  { title: "2nd Prize – Code Baton Competition", org: "C3, SREC", icon: Code },
                  { title: "2nd Prize – Circuit Debugging Competition", org: "EEETA, SREC", icon: Code },
                  { title: "2nd Prize – Zonal Badminton Championship", org: "Anna University (2025)", icon: Target },
                  { title: "Shortlisted – Smart India Hackathon", org: "Top 50 teams (2024, 2025)", icon: Rocket },
                  { title: "Shortlisted – Virtual Proof of Concept", org: "Techgium 9th Edition", icon: Lightbulb },
                  { title: "Shortlisted – Visteon Scholar Program", org: "Visteon", icon: Star },
                  { title: "Joint Secretary – EEETA", org: "2025–2026", icon: Users },
                  { title: "Innovation Ambassador", org: "CoIn (2024–2026)", icon: Lightbulb },
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-all group cursor-pointer border border-transparent hover:border-primary/30"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all flex-shrink-0">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold group-hover:text-primary transition-colors">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">{achievement.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-bold neon-text">Certifications</h3>
              </div>
              <div className="space-y-2">
                {[
                  "SkillRack – C and Python Programming",
                  "HackerRank – Problem Solving in C (Basic & Intermediate)",
                  "Infosys Springboard – Python, HTML, JavaScript",
                  "MATLAB – ONRAMP & SIMULINK",
                  "Great Learning – Cyber Security and Ethical Hacking",
                  "NPTEL – Introduction to Internet of Things",
                  "NPTEL – Smart Grid: Basics to Advanced Technologies",
                  "NPTEL – Enclosure Design of Electronics Equipment",
                  "NPTEL – Understanding Incubation and Entrepreneurship",
                  "ANSYS Maxwell – Hands-on Workshop",
                  "Power BI Training – ICT Academy",
                  "Snap on Chip – Image Processing Workshop (NIT Trichy PROBE)",
                  "300+ LeetCode Problems Solved",
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded hover:bg-accent/10 transition-all group cursor-pointer border border-transparent hover:border-primary/30"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Get In Touch</h2>
          <Card className="glass-card p-8 md:p-12 hover-lift">
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:jeevithpranav.2303036@srec.ac.in"
                className="flex items-center gap-4 p-6 bg-primary/10 rounded-xl hover:scale-105 hover:bg-primary/20 transition-all cursor-pointer glow-on-hover group"
              >
                <div className="w-14 h-14 bg-primary/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Email</div>
                  <div className="font-semibold">jeevithpranav.2303036
                    @srec.ac.in</div>
                </div>
              </a>
              <a
                href="tel:+919342906002"
                className="flex items-center gap-4 p-6 bg-accent/10 rounded-xl hover:scale-105 hover:bg-accent/20 transition-all cursor-pointer glow-on-hover group"
              >
                <div className="w-14 h-14 bg-accent/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Phone className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Phone</div>
                  <div className="font-semibold">+91 93429 06002</div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/jeevith-pranav-7a6043290/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-primary/10 rounded-xl hover:scale-105 hover:bg-primary/20 transition-all cursor-pointer glow-on-hover group"
              >
                <div className="w-14 h-14 bg-primary/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Linkedin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">LinkedIn</div>
                  <div className="font-semibold">jeevith-pranav</div>
                </div>
              </a>
              <a
                href="https://github.com/Jeevith-Pranav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-accent/10 rounded-xl hover:scale-105 hover:bg-accent/20 transition-all cursor-pointer glow-on-hover group"
              >
                <div className="w-14 h-14 bg-accent/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Github className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">GitHub</div>
                  <div className="font-semibold">jeevith-Pranav</div>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 Jeevith Pranav P. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/jeevith-pranav-7a6043290/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/jeevith-Pranav"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:jeevithpranav.2303036@srec.ac.in" className="social-icon-sm">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
