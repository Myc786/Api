interface DynamicBookProps {
    params: {
      id: string;
    };
  }
  
  const DynamicBook = ({ params }: DynamicBookProps) => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-7xl font-bold text-violet-950">
          Book ID: {params.id}
        </h1>
      </div>
    );
  };
  
  export default DynamicBook;
  