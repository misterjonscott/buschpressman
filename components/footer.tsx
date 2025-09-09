const Footer = () => {
  return (
    <footer role="contentinfo" style={{ backgroundColor: '#319795', color: 'white', padding: '16px 0', marginTop: 'auto', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      <p>
        <a href="/privacy-policy" style={{ color: 'white' }}>Privacy Policy</a> | 
        <a href="/terms-of-service" style={{ color: 'white' }}> Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;