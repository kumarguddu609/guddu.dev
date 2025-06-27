import { Card } from "@/components/ui/card"
import {
  Code2,
  Database,
  Server,
  Globe,
  Layers,
  Terminal,
  GitBranch,
  Palette,
  TestTube,
  Cloud,
  Container,
} from "lucide-react"

const technologies = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Code2 },
      { name: "TailwindCSS", icon: Palette },
      { name: "Redux", icon: Layers },
      { name: "GraphQL", icon: Database },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "Python", icon: Code2 },
      { name: "Django", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", icon: Container },
      { name: "AWS", icon: Cloud },
      { name: "CI/CD", icon: GitBranch },
      { name: "Git", icon: GitBranch },
      { name: "Linux", icon: Terminal },
      { name: "Nginx", icon: Server },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", icon: Code2 },
      { name: "Postman", icon: Server },
      { name: "Figma", icon: Palette },
      { name: "Jest", icon: TestTube },
      { name: "GitHub", icon: GitBranch },
      { name: "Vercel", icon: Cloud },
    ],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => {
              const IconComponent = skill.icon
              return (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
                >
                  <IconComponent className="h-3 w-3" />
                  {skill.name}
                </span>
              )
            })}
          </div>
        </Card>
      ))}
    </div>
  )
}
