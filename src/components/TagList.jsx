export default function TagList({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}