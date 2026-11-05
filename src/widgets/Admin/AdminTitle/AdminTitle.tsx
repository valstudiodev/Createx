import './adminTitle.scss';

interface AdminTitleProps {
  title: string
}

function AdminTitle({
  title
}: AdminTitleProps): React.JSX.Element {
  const adminTitle = 'admin-title'

  return (
    <h1 className={adminTitle}>
      {title}
    </h1>
  );
}

export default AdminTitle;