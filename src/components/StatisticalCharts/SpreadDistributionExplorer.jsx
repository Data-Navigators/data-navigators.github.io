import React, { useState } from 'react';

const spreadOptions = {
  normal: {
    label: 'Normal distribution',
    type: 'reference',
    description:
      'A symmetric, bell-shaped distribution where values are concentrated around the center and become less frequent toward the tails.',
    sd: 'Moderate',
    variance: 'Moderate',
    iqr: 'Moderate',
    insight:
      'For a perfectly symmetric normal distribution, the mean, median, and mode are at the same center.',
    takeaway:
      'Normality describes the shape of the distribution. It does not by itself mean that the standard deviation or variance is high or low.'
  },

  highSd: {
    label: 'High SD',
    type: 'wide',
    description:
      'Observations are spread farther away from the mean, producing a wider and flatter distribution.',
    sd: 'High',
    variance: 'High',
    iqr: 'Wide',
    insight:
      'A larger standard deviation means observations tend to lie farther from the mean.',
    takeaway:
      'Higher SD means greater variability. The corresponding variance is also higher because variance is the square of SD.'
  },

  lowSd: {
    label: 'Low SD',
    type: 'narrow',
    description:
      'Observations are concentrated close to the mean, producing a narrower and taller distribution.',
    sd: 'Low',
    variance: 'Low',
    iqr: 'Narrow',
    insight:
      'A smaller standard deviation means observations tend to stay close to the mean.',
    takeaway:
      'Lower SD means less variability and generally greater consistency in the observations.'
  },

  highVariance: {
    label: 'High variance',
    type: 'wide',
    description:
      'The observations have large squared deviations from the mean, resulting in high variance and high overall spread.',
    sd: 'High',
    variance: 'High',
    iqr: 'Wide',
    insight:
      'Variance is measured in squared units, so a larger variance corresponds to a larger standard deviation.',
    takeaway:
      'Remember: Variance = SD². High variance and high SD describe the same direction of variability.'
  },

  lowVariance: {
    label: 'Low variance',
    type: 'narrow',
    description:
      'Most observations are close to the mean, so the squared deviations from the mean are small.',
    sd: 'Low',
    variance: 'Low',
    iqr: 'Narrow',
    insight:
      'Low variance means low standard deviation and therefore a more concentrated distribution.',
    takeaway:
      'Low variance indicates that observations are relatively consistent around the mean.'
  },

  wideCombo: {
    label: 'Wide spread + large IQR',
    type: 'wide',
    description:
      'The distribution is broad and the middle 50% of observations covers a large range.',
    sd: 'High',
    variance: 'High',
    iqr: 'Large',
    insight:
      'Both the overall spread and the central 50% of observations are wide.',
    takeaway:
      'A wide distribution may indicate genuine differences between observations or multiple underlying groups.'
  },

  tightCombo: {
    label: 'Tight spread + small IQR',
    type: 'narrow',
    description:
      'The distribution is compact and the middle 50% of observations occupies a small range.',
    sd: 'Low',
    variance: 'Low',
    iqr: 'Small',
    insight:
      'Most observations are close to the center, making the typical value more representative.',
    takeaway:
      'A tight distribution usually indicates greater consistency and predictability.'
  }
};

const curveSettings = {
  reference: {
    left: 75,
    right: 285,
    peakY: 55,
    q1: 125,
    q3: 235
  },

  wide: {
    left: 55,
    right: 305,
    peakY: 82,
    q1: 105,
    q3: 255
  },

  narrow: {
    left: 115,
    right: 245,
    peakY: 30,
    q1: 145,
    q3: 215
  }
};

export default function SpreadDistributionExplorer() {
  const [selected, setSelected] = useState('normal');

  const current = spreadOptions[selected];
  const config = curveSettings[current.type];

  const center = 180;
  const baseline = 160;

  /*
    Build a smooth bell-shaped curve.

    The important teaching relationship is:

    High SD  -> wider + flatter
    Low SD   -> narrower + taller

    The center remains fixed.
  */
  const curvePath = `
    M ${config.left} ${baseline}
    C
      ${config.left + 35} ${baseline},
      ${center - 70} ${config.peakY + 10},
      ${center} ${config.peakY}
    C
      ${center + 70} ${config.peakY + 10},
      ${config.right - 35} ${baseline},
      ${config.right} ${baseline}
    Z
  `;

  return (
    <div style={{ margin: '1.5rem 0 2rem' }}>

      {/* Selection buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '1rem'
        }}
      >
        {Object.entries(spreadOptions).map(([key, option]) => (
          <button
            key={key}
            type="button"
            onClick={() => setSelected(key)}
            style={{
              padding: '0.5rem 0.9rem',
              borderRadius: '8px',
              border:
                selected === key
                  ? '2px solid #2563eb'
                  : '1px solid #cbd5e1',
              background:
                selected === key
                  ? '#dbeafe'
                  : '#fff',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '1.25rem',
          alignItems: 'stretch'
        }}
      >

        {/* DISTRIBUTION GRAPH */}
        <div
          style={{
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '1rem',
            background: '#f8fafc'
          }}
        >
          <svg
            width="100%"
            height="260"
            viewBox="0 0 360 210"
            role="img"
            aria-label={`${current.label} distribution`}
          >

            {/* IQR region */}
            <rect
              x={config.q1}
              y="35"
              width={config.q3 - config.q1}
              height="125"
              fill="rgba(59,130,246,0.08)"
              rx="6"
            />

            {/* Distribution */}
            <path
              d={curvePath}
              fill="rgba(37,99,235,0.20)"
              stroke="#2563eb"
              strokeWidth="2.5"
            />

            {/* X-axis */}
            <line
              x1="35"
              y1={baseline}
              x2="325"
              y2={baseline}
              stroke="#475569"
              strokeWidth="1.5"
            />

            {/* Mean / Median / Mode */}
            <line
              x1={center}
              y1="25"
              x2={center}
              y2={baseline}
              stroke="#0f172a"
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />

            {/* Q1 */}
            <line
              x1={config.q1}
              y1="50"
              x2={config.q1}
              y2={baseline}
              stroke="#64748b"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />

            {/* Q3 */}
            <line
              x1={config.q3}
              y1="50"
              x2={config.q3}
              y2={baseline}
              stroke="#64748b"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />

            {/* IQR bracket */}
            <line
              x1={config.q1}
              y1="178"
              x2={config.q3}
              y2="178"
              stroke="#2563eb"
              strokeWidth="2"
            />

            <line
              x1={config.q1}
              y1="173"
              x2={config.q1}
              y2="183"
              stroke="#2563eb"
              strokeWidth="2"
            />

            <line
              x1={config.q3}
              y1="173"
              x2={config.q3}
              y2="183"
              stroke="#2563eb"
              strokeWidth="2"
            />

            {/* Labels */}
            <text
              x={center}
              y="20"
              textAnchor="middle"
              fill="#0f172a"
              fontSize="11"
              fontWeight="700"
            >
              Mean = Median = Mode
            </text>

            <text
              x={config.q1}
              y="47"
              textAnchor="middle"
              fill="#475569"
              fontSize="11"
              fontWeight="700"
            >
              Q1
            </text>

            <text
              x={config.q3}
              y="47"
              textAnchor="middle"
              fill="#475569"
              fontSize="11"
              fontWeight="700"
            >
              Q3
            </text>

            <text
              x="180"
              y="193"
              textAnchor="middle"
              fill="#2563eb"
              fontSize="11"
              fontWeight="700"
            >
              IQR = Q3 − Q1
            </text>

            <text
              x="38"
              y="150"
              fill="#475569"
              fontSize="10"
              fontWeight="600"
            >
              Lower values
            </text>

            <text
              x="270"
              y="150"
              fill="#475569"
              fontSize="10"
              fontWeight="600"
            >
              Higher values
            </text>

          </svg>

          {/* Explanation below graph */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '0.25rem',
              fontSize: '0.85rem',
              color: '#475569'
            }}
          >
            <span>
              <strong>Spread:</strong>{' '}
              {current.sd}
            </span>

            <span>
              <strong>IQR:</strong>{' '}
              {current.iqr}
            </span>
          </div>
        </div>

        {/* EXPLANATION PANEL */}
        <div
          style={{
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '1rem',
            background: '#fff'
          }}
        >
          <h4 style={{ marginTop: 0 }}>
            {current.label}
          </h4>

          <p>
            {current.description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '0.5rem',
              margin: '1rem 0'
            }}
          >
            <div
              style={{
                padding: '0.6rem',
                background: '#f8fafc',
                borderRadius: '8px'
              }}
            >
              <strong>SD</strong>
              <br />
              {current.sd}
            </div>

            <div
              style={{
                padding: '0.6rem',
                background: '#f8fafc',
                borderRadius: '8px'
              }}
            >
              <strong>Variance</strong>
              <br />
              {current.variance}
            </div>

            <div
              style={{
                padding: '0.6rem',
                background: '#f8fafc',
                borderRadius: '8px'
              }}
            >
              <strong>IQR</strong>
              <br />
              {current.iqr}
            </div>
          </div>

          <div
            style={{
              padding: '0.75rem',
              background: '#eff6ff',
              borderRadius: '8px',
              marginBottom: '1rem'
            }}
          >
            <strong>Key relationship</strong>

            <div
              style={{
                marginTop: '0.4rem',
                fontFamily: 'monospace',
                fontSize: '1rem'
              }}
            >
              Variance = SD²
            </div>
          </div>

          <p>
            <strong>Interpretation:</strong>{' '}
            {current.insight}
          </p>
        </div>
      </div>

      {/* TAKEAWAY */}
      <div
        style={{
          marginTop: '1rem',
          borderLeft: '4px solid #2563eb',
          paddingLeft: '1rem'
        }}
      >
        <p>
          <strong>Why it matters:</strong>{' '}
          {current.takeaway}
        </p>
      </div>
    </div>
  );
}