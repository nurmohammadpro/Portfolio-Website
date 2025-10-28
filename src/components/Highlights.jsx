const Highlights = ({ position, company, year, description }) => {
  return (
    <div className="relative p-8 rounded-sm border-l-2 border-default hover:shadow-sm transition-colors ease-in-out duration-300 bg-surface">
      <div className="absolute -left-2 -top-2 w-5 h-5 bg-input rounded-full border-4 border-secondary-color"></div>
      <h3 className="text-xl font-semibold text-primary">{position}</h3>
      <p className="text-secondary italic mb-2">
        {company} | {year}
      </p>
      <ul className="list-disc p-4 text-secondary space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Highlights;
