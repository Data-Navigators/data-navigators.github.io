import React, { useState } from 'react';

const distributionOptions = {
  normal: {
    label: 'Normal distribution',
    description:
      'A symmetric distribution where the left and right sides are approximately mirror images. The observations are balanced around the center.',
    example: [20, 25, 28, 30, 32, 35, 40],
    relationship: 'Mean ≈ Median ≈ Mode',
    identify: [
      'The left and right sides are approximately balanced.',
      'Mean, median, and mode are close together.',
      'There is no noticeably longer tail on either side.'
    ],
    whyItMatters:
      'Symmetry makes the mean a useful measure of central tendency. Many statistical methods also work particularly well when data is approximately normally distributed.'
  },

  positive: {
    label: 'Positively skewed (right-skewed)',
    description:
      'A few unusually large values stretch the distribution toward the right, creating a longer tail on the high-value side.',
    example: [10, 15, 18, 20, 22, 24, 30, 60, 90],
    relationship: 'Mode < Median < Mean',
    identify: [
      'The long tail extends toward larger values.',
      'The mean is pulled toward the right tail.',
      'Mean is usually greater than the median, while the mode remains near the peak.'
    ],
    whyItMatters:
      'Income, transaction values, house prices, and delivery times can be right-skewed. In such cases, the mean can be pulled upward by a small number of unusually large observations.'
  },

  negative: {
    label: 'Negatively skewed (left-skewed)',
    description:
      'A few unusually small values stretch the distribution toward the left, creating a longer tail on the low-value side.',
    example: [5, 8, 12, 20, 22, 25, 28, 30, 31],
    relationship: 'Mean < Median < Mode',
    identify: [
      'The long tail extends toward smaller values.',
      'The mean is pulled toward the left tail.',
      'Mean is usually smaller than the median, while the mode remains near the peak.'
    ],
    whyItMatters:
      'This pattern can occur when most observations are relatively high but a few unusually low values pull the mean downward.'
  }
};

export default function DistributionExplorer() {
  const [selected, setSelected] = useState('normal');
  const current = distributionOptions[selected];

  /*
    Correct statistical positions:

    NORMAL:
      Mean = Median = Mode

    RIGHT-SKEWED:
      Mode < Median < Mean

    LEFT-SKEWED:
      Mean < Median < Mode

    Therefore, visually:

      Right skew:
      Mode ---- Median -------- Mean

      Left skew:
      Mean -------- Median ---- Mode
  */

  const measurePositions = {
    normal: {
      mean: {
        x: 180,
        y: 45,
        labelY: 12
      },
      median: {
        x: 180,
        y: 45,
        labelY: 27
      },
      mode: {
        x: 180,
        y: 45,
        labelY: 42
      }
    },

    positive: {
      // Peak
      mode: {
        x: 190,
        y: 52,
        labelY: 18
      },

      // Between Mode and Mean
      median: {
        x: 215,
        y: 62,
        labelY: 36
      },

      // Pulled toward the right tail
      mean: {
        x: 255,
        y: 112,
        labelY: 18
      }
    },

    negative: {
      // Pulled toward the left tail
      mean: {
        x: 105,
        y: 112,
        labelY: 18
      },

      // Between Mean and Mode
      median: {
        x: 145,
        y: 66,
        labelY: 36
      },

      // Peak
      mode: {
        x: 170,
        y: 52,
        labelY: 18
      }
    }
  };

  const positions = measurePositions[selected];

  const renderShape = () => {
    if (selected === 'normal') {
      return (
        <path
          d="
            M 40 160
            C 75 160, 100 145, 120 115
            C 140 80, 155 52, 180 45
            C 205 52, 220 80, 240 115
            C 260 145, 285 160, 320 160
            Z
          "
          fill="rgba(59,130,246,0.22)"
          stroke="#2563eb"
          strokeWidth="2.5"
        />
      );
    }

    if (selected === 'positive') {
      return (
        <path
          d="
            M 40 160
            C 70 160, 105 158, 125 150
            C 140 142, 145 125, 150 100
            C 155 65, 170 48, 190 52
            C 215 58, 230 80, 245 105
            C 265 130, 285 145, 305 153
            C 320 158, 335 160, 345 160
            Z
          "
          fill="rgba(245,158,11,0.22)"
          stroke="#d97706"
          strokeWidth="2.5"
        />
      );
    }

    return (
      <path
        d="
          M 15 160
          C 25 160, 40 158, 55 153
          C 75 145, 95 130, 115 105
          C 130 80, 145 58, 170 52
          C 190 48, 205 65, 210 100
          C 215 125, 220 142, 235 150
          C 255 158, 290 160, 320 160
          Z
        "
        fill="rgba(16,185,129,0.22)"
        stroke="#059669"
        strokeWidth="2.5"
      />
    );
  };

  const renderMeasureLine = (
    measure,
    label,
    color
  ) => {
    const { x, y, labelY } = positions[measure];

    return (
      <g key={label}>
        {/* Label background */}
        <rect
          x={x - 30}
          y={labelY - 11}
          width="60"
          height="15"
          rx="4"
          fill="#ffffff"
          opacity="0.96"
        />

        {/* Label */}
        <text
          x={x}
          y={labelY}
          textAnchor="middle"
          fill={color}
          fontSize="10"
          fontWeight="700"
        >
          {label}
        </text>

        {/* Guide line */}
        <line
          x1={x}
          y1={labelY + 4}
          x2={x}
          y2={y}
          stroke={color}
          strokeWidth="1.8"
          strokeDasharray="5 4"
        />

        {/* Point on the distribution */}
        <circle
          cx={x}
          cy={y}
          r="5"
          fill="#ffffff"
          stroke={color}
          strokeWidth="2.5"
        />

        <circle
          cx={x}
          cy={y}
          r="2.5"
          fill={color}
        />
      </g>
    );
  };

  return (
    <div
      style={{
        marginTop: '2rem',
        marginBottom: '2rem'
      }}
    >
      {/* Selection buttons */}
      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '1rem'
        }}
      >
        {Object.entries(distributionOptions).map(
          ([key, option]) => (
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
                fontWeight: '600'
              }}
            >
              {option.label}
            </button>
          )
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '1.5rem',
          alignItems: 'start'
        }}
      >
        {/* GRAPH */}
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
            height="270"
            viewBox="0 0 360 215"
            role="img"
            aria-label={`${current.label} showing mean, median and mode`}
          >
            {/* Distribution */}
            {renderShape()}

            {/* Measures */}
            {renderMeasureLine(
              'mean',
              'Mean',
              '#dc2626'
            )}

            {renderMeasureLine(
              'median',
              'Median',
              '#0891b2'
            )}

            {renderMeasureLine(
              'mode',
              'Mode',
              '#7c3aed'
            )}

            {/* X-axis */}
            <line
              x1="25"
              y1="160"
              x2="340"
              y2="160"
              stroke="#475569"
              strokeWidth="1.5"
            />

            {/* Right-skewed annotation */}
            {selected === 'positive' && (
              <g>
                <text
                  x="275"
                  y="105"
                  fill="#b45309"
                  fontSize="11"
                  fontWeight="700"
                >
                  Long right tail
                </text>

                <line
                  x1="275"
                  y1="110"
                  x2="330"
                  y2="145"
                  stroke="#b45309"
                  strokeWidth="1.8"
                />
              </g>
            )}

            {/* Left-skewed annotation */}
            {selected === 'negative' && (
              <g>
                <text
                  x="28"
                  y="105"
                  fill="#047857"
                  fontSize="11"
                  fontWeight="700"
                >
                  Long left tail
                </text>

                <line
                  x1="90"
                  y1="110"
                  x2="30"
                  y2="145"
                  stroke="#047857"
                  strokeWidth="1.8"
                />
              </g>
            )}

            {/* Direction labels */}
            <text
              x="30"
              y="200"
              fill="#64748b"
              fontSize="10"
              fontWeight="600"
            >
              Lower values
            </text>

            <text
              x="270"
              y="200"
              fill="#64748b"
              fontSize="10"
              fontWeight="600"
            >
              Higher values
            </text>
          </svg>

          {/* Relationship box */}
          <div
            style={{
              marginTop: '0.25rem',
              padding: '0.75rem',
              borderRadius: '8px',
              background: '#eff6ff',
              textAlign: 'center'
            }}
          >
            <strong>
              {current.relationship}
            </strong>
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
              padding: '0.75rem',
              background: '#f8fafc',
              borderRadius: '8px',
              margin: '1rem 0'
            }}
          >
            <strong>
              Mean – Median – Mode relationship
            </strong>

            <div
              style={{
                marginTop: '0.5rem',
                fontSize: '1.05rem',
                fontFamily: 'monospace'
              }}
            >
              {current.relationship}
            </div>
          </div>

          <p>
            <strong>
              Example values:
            </strong>{' '}
            {current.example.join(', ')}
          </p>

          <div
            style={{
              marginTop: '1rem',
              padding: '0.75rem',
              borderLeft: '3px solid #64748b',
              background: '#f8fafc'
            }}
          >
            <strong>Key idea:</strong>

            <p
              style={{
                marginBottom: 0
              }}
            >
              The direction of skewness is determined by
              the direction of the <strong>long tail</strong>,
              not by where the peak is located.
            </p>
          </div>
        </div>
      </div>

      {/* INTERPRETATION */}
      <div
        style={{
          marginTop: '1.25rem',
          borderLeft: '4px solid #2563eb',
          paddingLeft: '1rem'
        }}
      >
        <h4 style={{ marginTop: 0 }}>
          What this tells us about the data
        </h4>

        <p>
          {current.description}
        </p>

        <p>
          <strong>
            How to identify it using values:
          </strong>
        </p>

        <ul>
          {current.identify.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>
          <strong>Why it matters:</strong>{' '}
          {current.whyItMatters}
        </p>
      </div>
    </div>
  );
}