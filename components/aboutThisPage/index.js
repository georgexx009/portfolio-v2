export default function AboutThisPage({ aboutThisPage }) {
  const {
    contentFormatHtml = '...',
    title = '<insert title here>',
  } = aboutThisPage;
  return (
    <section className="about-this-page-section">
      <p className="title">{title}</p>
      <hr className="break-line" />
      <div
        dangerouslySetInnerHTML={{ __html: contentFormatHtml }}
        className="text-container"
      />
    </section>
  );
}
