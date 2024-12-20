interface PageHeaderProps {
  title: string;
  description?: string;
  showLogo?: boolean;
}

export default function PageHeader({ title, description, showLogo = false }: PageHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          {showLogo && (
            <img src="/images/favicon.png" alt="Logo" className="w-5 h-5" />
          )}
          <h1 className="text-lg font-medium text-gray-900">{title}</h1>
        </div>
      </div>
      {description && (
        <div className="p-4 text-gray-600">{description}</div>
      )}
    </div>
  );
}