interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true, light = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`section-title ${light ? "text-background" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${centered ? "mx-auto" : ""} ${light ? "text-background/70" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
