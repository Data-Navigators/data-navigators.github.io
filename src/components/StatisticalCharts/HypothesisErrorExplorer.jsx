import React, { useState } from 'react';

const alphaOptions = [0.1, 0.05, 0.01];
const effectOptions = [0.5, 1.0, 1.5, 2.0];

const normalPdf = (x, mean = 0, sd = 1) => {
  return (1 / (sd * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mean) / sd) ** 2);
};

const erf = (x) => {
  const sign = x >= 0 ? 1 : -1;
  const absX = Math.abs(x);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const t = 1 / (1 + p * absX);
  const y = 1 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX));
  return sign * y;
};

const normalCdf = (x) => 0.5 * (1 + erf(x / Math.sqrt(2)));

const zCritical = (alpha, oneSided = false) => {
  const map = {
    0.1: oneSided ? 1.282 : 1.645,
    0.05: oneSided ? 1.645 : 1.96,
    0.01: oneSided ? 2.326 : 2.576,
  };
  return map[alpha] ?? 1.645;
};

export default function HypothesisErrorExplorer() {
  const [alpha, setAlpha] = useState(0.05);
  const [effectSize, setEffectSize] = useState(1.0);

  const z = zCritical(alpha, false);
  const thresholdLeft = -z;
  const thresholdRight = z;

  const xMin = -4;
  const xMax = 6;
  const width = 820;
  const height = 300;
  const padLeft = 46;
  const padRight = 16;
  const padTop = 18;
  const padBottom = 32;
  const plotWidth = width - padLeft - padRight;

  const xScale = (x) => padLeft + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const yScale = (y) => height - padBottom - y * 180;

  const nullCurve = Array.from({ length: 360 }, (_, i) => {
    const x = xMin + ((xMax - xMin) * i) / 359;
    const y = normalPdf(x, 0, 1);
    return `${xScale(x)},${yScale(y)}`;
  }).join(' ');

  const altCurve = Array.from({ length: 360 }, (_, i) => {
    const x = xMin + ((xMax - xMin) * i) / 359;
    const y = normalPdf(x, effectSize, 1);
    return `${xScale(x)},${yScale(y)}`;
  }).join(' ');

  const leftTailPoints = Array.from({ length: 220 }, (_, i) => {
    const x = xMin + ((thresholdLeft - xMin) * i) / 219;
    const y = normalPdf(x, 0, 1);
    return [xScale(x), yScale(y)];
  });

  const rightTailPoints = Array.from({ length: 220 }, (_, i) => {
    const x = thresholdRight + ((xMax - thresholdRight) * i) / 219;
    const y = normalPdf(x, 0, 1);
    return [xScale(x), yScale(y)];
  });

  const betaPoints = Array.from({ length: 260 }, (_, i) => {
    const x = thresholdLeft + ((thresholdRight - thresholdLeft) * i) / 259;
    const y = normalPdf(x, effectSize, 1);
    return [xScale(x), yScale(y)];
  });

  const leftShadePoints = [
    [xScale(xMin), yScale(0)],
    ...leftTailPoints,
    [xScale(thresholdLeft), yScale(0)],
  ];

  const rightShadePoints = [
    [xScale(thresholdRight), yScale(0)],
    ...rightTailPoints,
    [xScale(xMax), yScale(0)],
  ];

  const betaShadePoints = [
    [xScale(thresholdLeft), yScale(0)],
    ...betaPoints,
    [xScale(thresholdRight), yScale(0)],
  ];

  const alphaTotal = alpha;
  const alphaEachTail = alpha / 2;
  const beta = normalCdf(z - effectSize) - normalCdf(-z - effectSize);
  const betaPct = (beta * 100).toFixed(0);
  const alphaPct = (alpha * 100).toFixed(0);
  const alphaTailPct = (alphaEachTail * 100).toFixed(1);

  const thresholdLeftX = xScale(thresholdLeft);
  const thresholdRightX = xScale(thresholdRight);
  const meanX = xScale(0);
  const h1MeanX = xScale(effectSize);

  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #dfe3ea',
        borderRadius: '18px',
        background: '#ffffff',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06)',
      }}
    >
      <div style={{ marginBottom: '12px' }}>
        <div
          style={{
            fontSize: '12px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#6b7280',
            fontWeight: 700,
          }}
        >
          Region A vs Region B case study
        </div>
        <h3 style={{ margin: '6px 0 0', color: '#111827', fontSize: '24px' }}>
          Type I and Type II error under the normal distribution
        </h3>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#374151' }}>Alpha:</span>
          {alphaOptions.map((option) => (
            <button
              key={option}
              onClick={() => setAlpha(option)}
              style={{
                padding: '8px 12px',
                borderRadius: '999px',
                border: alpha === option ? '1px solid #2563eb' : '1px solid #cbd5e1',
                background: alpha === option ? '#eff6ff' : '#ffffff',
                color: alpha === option ? '#1d4ed8' : '#374151',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {option}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#374151' }}>True difference:</span>
          {effectOptions.map((option) => (
            <button
              key={option}
              onClick={() => setEffectSize(option)}
              style={{
                padding: '8px 12px',
                borderRadius: '999px',
                border: effectSize === option ? '1px solid #0f766e' : '1px solid #cbd5e1',
                background: effectSize === option ? '#ecfeff' : '#ffffff',
                color: effectSize === option ? '#0f766e' : '#374151',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {option.toFixed(1)}σ
            </button>
          ))}
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="330" role="img" aria-label="Two normal distributions showing Type I and Type II error areas for a two-sided hypothesis test">
        <defs>
          <linearGradient id="h0Red" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.68" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id="h1Blue" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={width} height={height} fill="#f8fafc" />

        <polyline
          points={nullCurve}
          fill="none"
          stroke="#1f2937"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points={altCurve}
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <polygon
          points={leftShadePoints.map(([x, y]) => `${x},${y}`).join(' ')}
          fill="url(#h0Red)"
          stroke="#ef4444"
          strokeWidth="1.2"
          opacity="0.9"
        />
        <polygon
          points={rightShadePoints.map(([x, y]) => `${x},${y}`).join(' ')}
          fill="url(#h0Red)"
          stroke="#ef4444"
          strokeWidth="1.2"
          opacity="0.9"
        />

        <polygon
          points={betaShadePoints.map(([x, y]) => `${x},${y}`).join(' ')}
          fill="url(#h1Blue)"
          stroke="#3b82f6"
          strokeWidth="1.2"
          opacity="0.9"
        />

        <line x1={meanX} x2={meanX} y1={padTop} y2={height - padBottom} stroke="#0f172a" strokeDasharray="5 6" />
        <line x1={h1MeanX} x2={h1MeanX} y1={padTop} y2={height - padBottom} stroke="#2563eb" strokeDasharray="5 6" />

        <line x1={thresholdLeftX} x2={thresholdLeftX} y1={padTop} y2={height - padBottom} stroke="#ef4444" strokeWidth="2.5" strokeDasharray="6 5" />
        <line x1={thresholdRightX} x2={thresholdRightX} y1={padTop} y2={height - padBottom} stroke="#ef4444" strokeWidth="2.5" strokeDasharray="6 5" />

        <text x={meanX - 50} y={24} fill="#0f172a" fontSize="14" fontWeight="700">H0: no difference</text>
        <text x={h1MeanX - 48} y={42} fill="#2563eb" fontSize="14" fontWeight="700">H1: real difference</text>

        <text x={xScale(-2.2)} y={yScale(0.52)} fill="#dc2626" fontSize="13" fontWeight="700">Type I = FP = α / 2</text>
        <text x={xScale(0.9)} y={yScale(0.52)} fill="#dc2626" fontSize="13" fontWeight="700">Type I = FP = α / 2</text>
        <text x={xScale(-0.9)} y={yScale(0.38)} fill="#2563eb" fontSize="13" fontWeight="700">Type II = FN = β</text>

        <text x={xScale(-4)} y={height - 8} fill="#475569" fontSize="12">-4σ</text>
        <text x={xScale(0)} y={height - 8} fill="#475569" fontSize="12">0</text>
        <text x={xScale(2)} y={height - 8} fill="#475569" fontSize="12">2σ</text>
        <text x={xScale(4)} y={height - 8} fill="#475569" fontSize="12">4σ</text>
      </svg>

      <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
        <div style={{ padding: '12px 14px', borderRadius: '12px', background: '#fef2f2', border: '1px solid #fecaca' }}>
          <div style={{ fontWeight: 700, color: '#b91c1c', marginBottom: '6px' }}>Type I error = False Positive</div>
          <div style={{ color: '#7f1d1d', lineHeight: 1.6 }}>
            Red shaded tails = α = {alphaPct}% total. Each tail is {alphaTailPct}%.
          </div>
        </div>

        <div style={{ padding: '12px 14px', borderRadius: '12px', background: '#eff6ff', border: '1px solid #bfdbfe' }}>
          <div style={{ fontWeight: 700, color: '#1d4ed8', marginBottom: '6px' }}>Type II error = False Negative</div>
          <div style={{ color: '#1e3a8a', lineHeight: 1.6 }}>
            Blue shaded middle region under H1 = β ≈ {betaPct}%.
          </div>
        </div>
      </div>

      <p style={{ margin: '18px 0 0', color: '#475569', lineHeight: 1.7 }}>
        In this case, the business question is: <strong>“Is customer satisfaction different between Region A and Region B?”</strong> This is a two-sided hypothesis test. Because we are testing for any difference, the rejection region is split in both tails. We choose α in advance, which directly controls the Type I error rate. The red area is therefore the false-positive region. The blue area under the alternative distribution is the false-negative region, and it changes with sample size, effect size, and variance: when the true difference is small, β becomes larger.
      </p>
    </div>
  );
}
