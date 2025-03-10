import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  ExternalLink 
} from 'lucide-react';

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:lisapatel1998@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/lisapatel98"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/LISAPATEL98"
  },
  {
    icon: ExternalLink,
    label: "Blog",
    href: "https://medium.com/@lisaapatel"
  },
  {
    icon: FileText,
    label: "Resume",
    href: "/resume.pdf" // Update with actual resume path
  }
];

export default function Contact() {
  return (
    <div className="section-container">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Let's Connect!</h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I enjoy meeting new people and collaborating or even just talking over some good coffee, so please feel free to reach out!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 min-w-[80px]"
            >
              <div className="p-3 sm:p-4 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/40 transition-all group-hover:scale-105 group-hover:border-border/60 group-hover:shadow-md">
                <Icon className="w-6 h-6 text-foreground transition-colors group-hover:text-foreground/80" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium tracking-tight text-muted-foreground group-hover:text-foreground transition-colors">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
