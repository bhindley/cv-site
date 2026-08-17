export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>Ben Hindley &copy; {year}</p>
      </div>
    </footer>
  );
}
