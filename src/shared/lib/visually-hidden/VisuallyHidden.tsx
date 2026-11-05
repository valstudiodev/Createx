interface VisuallyHiddenProps {
  children: React.ReactNode
}

function VisuallyHidden({
  children
}: VisuallyHiddenProps) {
  return (
    <div className="sr-only">
      {children}
    </div>
  );
}

export default VisuallyHidden;