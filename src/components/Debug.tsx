export default function Debug() {
  return (
    <div style={{position: 'fixed', bottom: 0, right: 0, background: 'black', color: 'white', padding: '10px', zIndex: 9999, maxWidth: '300px', fontSize: '12px'}}>
      <div>BASE_PATH: {process.env.NEXT_PUBLIC_BASE_PATH || 'not set'}</div>
      <div>Example path: {`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/styles/globals.css`}</div>
      <div>Window location: {typeof window !== 'undefined' ? window.location.href : 'SSR'}</div>
    </div>
  );
} 