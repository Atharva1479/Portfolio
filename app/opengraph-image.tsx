import { ImageResponse } from '@vercel/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#09090b',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Emerald accent bar */}
        <div style={{ width: '100%', height: 4, backgroundColor: '#10b981', display: 'flex' }} />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            padding: '60px 70px',
            gap: 24,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#ffffff',
              display: 'flex',
              letterSpacing: '-0.02em',
            }}
          >
            Atharva Jamdar
          </div>

          {/* Role */}
          <div
            style={{
              fontSize: 28,
              color: '#10b981',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            Full Stack Developer & Gen AI
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 20,
              color: '#71717a',
              display: 'flex',
              textAlign: 'center',
              maxWidth: 700,
              lineHeight: 1.6,
            }}
          >
            Building scalable applications and AI-powered solutions
          </div>

          {/* Tech pills */}
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            {['Spring Boot', 'React', 'LangChain', 'FastAPI', 'PostgreSQL'].map((t) => (
              <div
                key={t}
                style={{
                  padding: '8px 20px',
                  backgroundColor: '#18181b',
                  border: '1px solid #27272a',
                  borderRadius: 8,
                  color: '#d4d4d8',
                  fontSize: 16,
                  display: 'flex',
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px 70px',
            borderTop: '1px solid #27272a',
          }}
        >
          <div style={{ fontSize: 16, color: '#52525b', display: 'flex' }}>
            atharvajamdar.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
