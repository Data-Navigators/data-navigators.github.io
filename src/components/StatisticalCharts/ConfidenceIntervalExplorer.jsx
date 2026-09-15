import React, { useState } from 'react';

const confidenceLevels = [
  { label: '90%', alpha: 0.1, z: 1.645 },
  { label: '95%', alpha: 0.05, z: 1.96 },
  { label: '99%', alpha: 0.01, z: 2.576 },
];

function normalPdf(x) {
  return Math.exp(-(x * x) / 2) / Math.sqrt(2 * Math.PI);
}

export default function ConfidenceIntervalExplorer() {
  const [selectedLevel, setSelectedLevel] = useState(confidenceLevels[1]);

  const left = -selectedLevel.z;
  const right = selectedLevel.z;
  const xMin = -4;
  const xMax = 4;
  const width = 760;
  const height = 260;
  const padLeft = 60;
  const padRight = 40;
  const plotWidth = width - padLeft - padRight;

  const xScale = (x) => padLeft + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const yScale = (y) => height - 34 - y * 150;

  const curvePoints = Array.from({ length: 300 }, (_, index) => {
    const x = xMin + ((xMax - xMin) * index) / 299;
    const y = normalPdf(x);
    return `${xScale(x)},${yScale(y)}`;
  }).join(' ');

  const shadedPoints = Array.from({ length: 260 }, (_, index) => {
    const x = left + ((right - left) * index) / 259;
    const y = normalPdf(x);
    return `${xScale(x)},${yScale(y)}`;
  }).join(' ');

  const meanX = xScale(0);
  const oneSdLeft = xScale(-1);
  const oneSdRight = xScale(1);
  const twoSdLeft = xScale(-2);
  const twoSdRight = xScale(2);
  const threeSdLeft = xScale(-3);
  const threeSdRight = xScale(3);

  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '24px auto',
        padding: '20px',
        border: '1px solid #dfe3ea',
        borderRadius: '18px',
        background: '#ffffff',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '12px',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '14px',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#6b7280',
              fontWeight: 700,
            }}
          >
            Confidence intervals
          </div>
          <h3 style={{ margin: '6px 0 0', fontSize: '24px', color: '#111827' }}>
            Normal distribution and uncertainty
          </h3>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {confidenceLevels.map((level) => {
            const active = selectedLevel.label === level.label;
            return (
              <button
                key={level.label}
                onClick={() => setSelectedLevel(level)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '999px',
                  border: active ? '1px solid #2563eb' : '1px solid #cbd5e1',
                  background: active ? '#eff6ff' : '#ffffff',
                  color: active ? '#1d4ed8' : '#374151',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                {level.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '14px',
          overflow: 'hidden',
        }}
      >
        <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="260" role="img" aria-label="Normal distribution showing standard deviations and confidence interval">
          <defs>
            <linearGradient id="ciShaded" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.12" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width={width} height={height} fill="#f8fafc" />

          <polyline
            points={curvePoints}
            fill="none"
            stroke="#1e293b"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <polygon
            points={`M ${xScale(left)},${yScale(0)} ${shadedPoints} L ${xScale(right)},${yScale(0)} Z`}
            fill="url(#ciShaded)"
            stroke="none"
          />

          <line x1={meanX} x2={meanX} y1={18} y2={height - 25} stroke="#0f172a" strokeDasharray="5 6" />
          <text x={meanX - 8} y={18} fill="#0f172a" fontSize="14" fontWeight="700">μ</text>

          <line x1={oneSdLeft} x2={oneSdLeft} y1={28} y2={height - 25} stroke="#cbd5e1" strokeWidth="1.25" />
          <line x1={oneSdRight} x2={oneSdRight} y1={28} y2={height - 25} stroke="#cbd5e1" strokeWidth="1.25" />
          <line x1={twoSdLeft} x2={twoSdLeft} y1={28} y2={height - 25} stroke="#94a3b8" strokeWidth="1.25" />
          <line x1={twoSdRight} x2={twoSdRight} y1={28} y2={height - 25} stroke="#94a3b8" strokeWidth="1.25" />
          <line x1={threeSdLeft} x2={threeSdLeft} y1={28} y2={height - 25} stroke="#e2e8f0" strokeWidth="1.25" />
          <line x1={threeSdRight} x2={threeSdRight} y1={28} y2={height - 25} stroke="#e2e8f0" strokeWidth="1.25" />

          <text x={oneSdLeft - 8} y={24} fill="#64748b" fontSize="12">-1σ</text>
          <text x={oneSdRight + 4} y={24} fill="#64748b" fontSize="12">+1σ</text>
          <text x={twoSdLeft - 10} y={24} fill="#475569" fontSize="12">-2σ</text>
          <text x={twoSdRight + 5} y={24} fill="#475569" fontSize="12">+2σ</text>
          <text x={threeSdLeft - 12} y={24} fill="#64748b" fontSize="12">-3σ</text>
          <text x={threeSdRight + 6} y={24} fill="#64748b" fontSize="12">+3σ</text>

          <text x={xScale(-selectedLevel.z) + 8} y={yScale(0.42) - 10} fill="#1d4ed8" fontWeight="700" fontSize="13">
            {selectedLevel.label} confidence interval
          </text>

          <line x1={xScale(left)} x2={xScale(left)} y1={yScale(0.15)} y2={yScale(0.6)} stroke="#2563eb" strokeWidth="2" />
          <line x1={xScale(right)} x2={xScale(right)} y1={yScale(0.15)} y2={yScale(0.6)} stroke="#2563eb" strokeWidth="2" />

          <text x={xScale(-selectedLevel.z) - 16} y={yScale(0.7)} fill="#1d4ed8" fontSize="12" fontWeight="700">
            -{selectedLevel.z.toFixed(2)}σ
          </text>
          <text x={xScale(selectedLevel.z) + 5} y={yScale(0.7)} fill="#1d4ed8" fontSize="12" fontWeight="700">
            +{selectedLevel.z.toFixed(2)}σ
          </text>
        </svg>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
          marginTop: '18px',
        }}
      >
        <div style={{ padding: '12px 14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div style={{ color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Level</div>
          <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>{selectedLevel.label}</div>
        </div>

        <div style={{ padding: '12px 14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div style={{ color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Alpha</div>
          <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>{selectedLevel.alpha.toFixed(2)}</div>
        </div>

        <div style={{ padding: '12px 14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div style={{ color: '#64748b', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Approx spread</div>
          <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>±{selectedLevel.z.toFixed(2)}σ</div>
        </div>
      </div>

      <p style={{ margin: '18px 0 0', color: '#475569', lineHeight: 1.7 }}>
        A common teaching rule is that about 95% of values fall within roughly ±2 standard deviations of the mean. In confidence-interval language, a 95% confidence level corresponds to <strong>α = 0.05</strong>. The remaining 5% is split across the two tails of the distribution.
      </p>
    </div>
  );
}
