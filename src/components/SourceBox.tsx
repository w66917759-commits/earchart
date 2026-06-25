import { sources } from "@/lib/sources";

export function SourceBox() {
  return (
    <aside className="source-box">
      <h3>Sources and safety notes</h3>
      <ul>
        <li>
          <strong>Manual review:</strong>
          <span>Manually reviewed educational content. Use it for research, not as a substitute for professional or medical advice.</span>
        </li>
        {sources.map((source) => (
          <li key={source.href}>
            <a href={source.href} rel="noreferrer" target="_blank">
              {source.label}
            </a>
            <span>{source.note}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
