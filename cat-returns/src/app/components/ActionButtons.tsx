interface ActionButtonsProps {
    onAction: (action: string) => void;
  }
  
  export function ActionButtons({ onAction }: ActionButtonsProps) {
    const buttonStyles = {
      eat: 'bg-green-100 hover:bg-green-200 text-green-800',
      'pull whisker': 'bg-red-100 hover:bg-red-200 text-red-800',
      exercise: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800'
    };

    const actions = ['eat', 'pull whisker', 'exercise'] as const;
  
    return (
      <div className="grid grid-cols-3 gap-3 pt-4 p-4 rounded-lg">
      {actions.map(action => (
        <button
          key={action}
          onClick={() => onAction(action)}
          className={`${buttonStyles[action]} px-4 py-2 rounded transition`}
        >
          {action}
        </button>
      ))}
    </div>
    );
  }