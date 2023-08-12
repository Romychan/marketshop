import { ReactNode } from 'react';

const CatalogLayout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default CatalogLayout;
