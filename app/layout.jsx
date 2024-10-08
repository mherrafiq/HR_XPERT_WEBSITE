import  '@/styles/globals.css';

export default function layout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#f5f7fa' }}>
        {children}
      </body>
    </html>
  );
}
