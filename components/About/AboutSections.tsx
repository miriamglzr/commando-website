export default function AboutSections({ section }) {
	return (
		<ul>
			<li key={section.heading}>
				<h4>{section.heading}</h4>
				{section.image?.url && (
					<img src={section.image.url} alt={section.heading} />
				)}
				<div dangerouslySetInnerHTML={{ __html: section.description.html }} />
			</li>
		</ul>
	);
}
