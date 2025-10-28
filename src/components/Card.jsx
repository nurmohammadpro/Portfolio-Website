const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-card p-6 hover:shadow-sm transition-colors ease-in-out duration-300 border-default">
      {/* Icon aligned to the left */}
      {Icon && (
        <div className="mb-4">
          <Icon className="w-8 h-8 text-primary-color" strokeWidth={1.5} />
        </div>
      )}

      {/* Content */}
      <div className="space-y-3 flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Card;
