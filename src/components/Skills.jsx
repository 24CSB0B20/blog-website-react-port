import './Skills.css'

const SKILL_GROUPS = [
  { name: 'Languages', items: ['C', 'C++', 'TypeScript', 'Python', 'Java', 'SQL', 'Bash'] },
  { name: 'Frameworks', items: ['React Native', 'Next.js', 'NestJS', 'Express.js', 'Socket.io'] },
  { name: 'Cloud & Databases', items: ['AWS', 'Azure', 'PostgreSQL', 'Firebase', 'SQLite'] },
  { name: 'Developer Tools', items: ['Git', 'Docker', 'Postman', 'Linux'] },
]

export default function Skills() {
  return (
    <div>
      {SKILL_GROUPS.map((group) => (
        <div className="skill-group" key={group.name}>
          <h3>{group.name}</h3>
          <div className="chips">
            {group.items.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}