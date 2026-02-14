import { ImageResponse } from '@vercel/og';
import { PROJECTS } from '@/lib/constants';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#09090b',
            color: '#fff',
            fontSize: 48,
            fontFamily: 'sans-serif',
          }}
        >
          Project Not Found
        </div>
      ),
      { ...size }
    );
  }

  const statusLabel =
    project.status === 'live' ? 'Live' :
    project.status === 'building' ? 'Building' : 'Completed';

  const statusColor =
    project.status === 'live' ? '#10b981' :
    project.status === 'building' ? '#f59e0b' : '#10b981';

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
            padding: '60px 70px',
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          {/* Top section */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Status badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: statusColor,
                  display: 'flex',
                }}
              />
              <span style={{ color: statusColor, fontSize: 18, fontWeight: 600 }}>
                {statusLabel}
              </span>
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
                marginBottom: 20,
                display: 'flex',
              }}
            >
              {project.title}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: 22,
                color: '#a1a1aa',
                lineHeight: 1.5,
                maxWidth: 900,
                display: 'flex',
                overflow: 'hidden',
              }}
            >
              {project.description[0].length > 150
                ? project.description[0].slice(0, 150) + '...'
                : project.description[0]}
            </div>
          </div>

          {/* Bottom section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            {/* Tech badges */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', maxWidth: 800 }}>
              {project.tech.slice(0, 6).map((t) => (
                <div
                  key={t}
                  style={{
                    padding: '8px 16px',
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

            {/* Branding */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                flexShrink: 0,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', display: 'flex' }}>
                Atharva Jamdar
              </div>
              <div style={{ fontSize: 14, color: '#10b981', display: 'flex' }}>
                Full Stack Developer & Gen AI
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
