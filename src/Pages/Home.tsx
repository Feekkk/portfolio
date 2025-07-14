import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
    Github,
    Linkedin,
    Mail,
    Download,
    ExternalLink,
    Code2,
    Rocket,
    ChevronDown,
    MapPin,
    Calendar,
    Menu,
    X,
    Database,
    Layers,
    Search,
    Trophy,
    Crown
} from "lucide-react";

const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const projects = [
        {
            title: "AI Agent",
            description: "A powerful AI-driven activity recommendation system powered by React and Ollama",
            tech: ["ReactJS", "Vite", "Ollama", "OpenAI API", "Tailwind CSS"],
            image: "/ollama.png",
            github: "https://github.com/Feekkk/react-AIagent"
        },
        {
            title: "Gmail Analyzer",
            description: "Email analysis tool with gmail API integration",
            tech: ["Python", "Gmail API"],
            image: "/python.png",
            github: "https://github.com/afiqq03/python-gmailanalyzer"
        },
        {
            title: "Stock Oracle",
            description: "AI-Powered Stock Prediction Report Generator",
            tech: ["ReactJS", "Javascript", "Vite", "Groq AI", "Polygon.io"],
            image: "/polygon.png",
            github: "https://github.com/Feekkk/AI-engineering"
        },
        {
            title: "ToDo Application",
            description: "Full-stack ToDo application with modern web app and RESTfukl API design",
            tech: ["ReactJS", "NodeJS", "ExpressJS", "PostgreSQL",],
            image: "/postgre.png",
            github: "https://github.com/Feekkk/react-learningpostgre"
        },
        {
            title: "NeighborHub Mobile Application",
            description: "Full-stack Mobile Application with Flutter integration with Cloudflare and Digital Ocean",
            tech: ["Flutter", "DigitalOcean", "Javascript", "Cloudflare",],
            image: "/NeighborHub.png",
            github: "https://github.com/Feekkk/react-learningpostgre"
        }
    ];

    const skills = [
        {
            name: "Programming Languages",
            icon: Code2,
            items: ["JavaScript", "PHP", "Java", "C++", "Python", "Dart"]
        },
        {
            name: "Frameworks and Technologies",
            icon: Layers,
            items: ["ReactJS", "Flutter", "Laravel", "Flowise AI", "Prisma ORM"]
        },
        {
            name: "Databases",
            icon: Database,
            items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "AWS", "CloudFlare", "Digital Ocean"]
        },
        {
            name: "Tools",
            icon: Rocket,
            items: ["Git", "GitHub", "Postman", "Docker", "Cisco Packet Tracer", "VMware", "VSCode", "CursorAI", "Android Studio"]
        }
    ];

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen" style={{background: 'linear-gradient(to bottom right, #F2F2F2, #EAE4D5, #B6B09F)'}}>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent">

                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Projects
                            </button>
                            <a href="mailto:wanafiq.d03@gmail.com">
                                <Button variant="outline" size="sm">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Contact
                                </Button>
                            </a>
                        </div>

                        {/* Mobile Navigation Toggle */}
                        <div className="flex items-center space-x-3 md:hidden">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2"
                            >
                                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </Button>
                        </div>
                    </div>                        {/* Mobile Menu */}
                        {mobileMenuOpen && (
                            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                                <div className="flex flex-col space-y-4 pt-4">
                                    <button
                                        onClick={() => scrollToSection('hero')}
                                        className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
                                    >
                                        Home
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('about')}
                                        className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
                                    >
                                        About
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('projects')}
                                        className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
                                    >
                                        Projects
                                    </button>
                                    <a href="mailto:wanafiq.d03@gmail.com">
                                        <Button variant="outline" size="sm" className="justify-start w-fit">
                                            <Mail className="w-4 h-4 mr-2" />
                                            Contact
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="mb-4">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    Available for internship
                                </Badge>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                                    Hi, I'm{" "}
                                    <span className="bg-gradient-to-r from-stone-800 via-stone-700 to-stone-600 bg-clip-text text-transparent">
                                        AFIQ
                                    </span>
                                </h1>
                                <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light">
                                    Full-Stack Developer
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                    I collect tech stacks like Pokémon cards. Web2, Database, Cloud Computing, AI — gotta code 'em all!
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                    "Warning: This developer requires regular coffee updates to function properly ⚠️"
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                <a href="/resume_real.pdf" download="wanafiq_Resume.pdf">
                                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-stone-800 to-stone-700 hover:from-stone-900 hover:to-stone-800 text-white">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Resume
                                    </Button>
                                </a>
                                <Button variant="outline" size="lg" onClick={() => scrollToSection('projects')} className="w-full sm:w-auto">
                                    View Projects
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
                                <a href="https://github.com/Feekkk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-stone-600 transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="www.linkedin.com/in/wanafiqdanial03" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-stone-600 transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="mailto:wanafiq.d03@gmail.com" className="text-gray-600 hover:text-stone-600 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end order-first lg:order-last">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                                <Avatar className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border-4 border-white shadow-2xl relative z-10">
                                    <AvatarImage
                                        src="/pfp.jpg"
                                        alt="Profile"
                                        className="object-cover w-full h-full"
                                        style={{
                                            objectFit: 'cover',
                                            aspectRatio: '1/1'
                                        }}
                                    />
                                    <AvatarFallback className="text-4xl sm:text-5xl lg:text-6xl">A</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 lg:mt-12 animate-bounce">
                        <button onClick={() => scrollToSection('about')}>
                            <ChevronDown className="w-8 h-8 text-gray-400" />
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6" style={{background: 'linear-gradient(to bottom, #EAE4D5, #B6B09F)'}}>
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12 lg:mb-16">
                        <Badge variant="secondary" className="mb-4">
                            <MapPin className="w-3 h-3 mr-1" />
                            About Me
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            AI Architect, Data Sculptor,
                            <span className="bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent block sm:inline">
                                {" "}Full-Stack Wizard
                            </span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                            Stacking skills faster than certificates. Tech enthusiast with a serious case of "ooh, shiny new framework" syndrome.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Story Cards */}
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-stone-300 bg-black text-white">
                                <CardHeader className="text-center pb-4">
                                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-stone-700 to-stone-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Search className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg text-white">Background Study</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Bachelor of Computer Science in Netcentric Computing from UiTM Jasin. Basically, I learned how to make computers talk to each other... and now they won't stop chatting!
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-stone-300 bg-black text-white">
                                <CardHeader className="text-center pb-4">
                                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-stone-600 to-stone-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Trophy className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg text-white">Project Enthusiast</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        I love building personal projects in my free time. From Mobile apps to Serverless architecture — if it can be coded, I've probably tried it and definitely bragged about it!
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-stone-300 bg-black text-white">
                                <CardHeader className="text-center pb-4">
                                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-stone-800 to-stone-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Crown className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg text-white">The Leader</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Secretariat of UiTM Jasin College Representative Committee. I kept the paperwork organized while secretly plotting tech world domination between meetings.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Skills Section */}
                        <div className="space-y-8">
                            <div className="text-center">
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                    Technical Arsenal
                                </h3>
                                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                                    The tools and technologies I wield to bring ideas to life
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {skills.map((skill, index) => (
                                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-stone-300 bg-gradient-to-br from-white to-gray-50">
                                        <CardHeader className="pb-4">
                                            <div className="flex items-center space-x-3 mb-4">
                                                <div className="p-3 bg-gradient-to-r from-stone-700 to-stone-600 rounded-xl group-hover:scale-110 transition-transform">
                                                    <skill.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <CardTitle className="text-xl text-black group-hover:text-stone-600 transition-colors">
                                                    {skill.name}
                                                </CardTitle>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {skill.items.map((item, itemIndex) => (
                                                    <Badge
                                                        key={itemIndex}
                                                        variant="secondary"
                                                        className="text-xs hover:bg-stone-100 transition-colors cursor-default"
                                                    >
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6" style={{background: '#B6B09F'}}>
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Projects
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Keep grinding, stacking skills, and building things that make the world a better place. Here are some of my recent projects:
                        </p>
                    </div>

                    {/* Scrolling Projects Carousel */}
                    <div className="relative overflow-hidden">
                        <div className="flex gap-6 animate-scroll">
                            {/* First set of projects */}
                            {projects.map((project, index) => (
                                <Card key={`first-${index}`} className="flex-shrink-0 w-80 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-stone-300">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-stone-600 transition-colors text-lg sm:text-xl">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="line-clamp-3 text-sm sm:text-base">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <Badge key={techIndex} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex justify-center">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" size="sm" className="w-full">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    View on GitHub
                                                </Button>
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {projects.map((project, index) => (
                                <Card key={`second-${index}`} className="flex-shrink-0 w-80 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-stone-300">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-stone-600 transition-colors text-lg sm:text-xl">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="line-clamp-3 text-sm sm:text-base">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <Badge key={techIndex} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex justify-center">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" size="sm" className="w-full">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    View on GitHub
                                                </Button>
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
    <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something Amazing Together
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-12 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects and explore new opportunities. Whether you have a brilliant idea, need a dedicated developer, or just want to discuss the latest tech trends over coffee ☕
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="mailto:wanafiq.d03@gmail.com">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-stone-800 to-stone-700 hover:from-stone-900 hover:to-stone-800 text-white">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                </Button>
            </a>
            <a href="/resume.pdf" download="wanafiq_Resume.pdf">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                </Button>
            </a>
        </div>
    </div>
</section>
        </div>
    );
};

export default Home;