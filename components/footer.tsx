const Footer = () => {
  return (
    <footer role="contentinfo" style={{ color: 'white', padding: '16px 0', marginTop: 'auto', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Jon Scott - All rights reserved.</p>
    </footer>
  );
};

export default Footer;