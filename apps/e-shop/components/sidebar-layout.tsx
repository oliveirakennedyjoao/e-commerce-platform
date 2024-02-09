import Link from 'next/link';
import styles from './sidebar-layout.module.scss';

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <nav>
          <ul>
            <Link href="/products">Products</Link>
            <li> Ajuda </li>
          </ul>
        </nav>
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}