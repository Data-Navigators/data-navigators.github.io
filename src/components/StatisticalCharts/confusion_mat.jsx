import React, { useState } from 'react';

const scenarios = {
  medical: {
    label: 'Cancer Screening',
    shortLabel: 'False Negative is Critical',
    icon: '🩺',
    title: 'Cancer Screening',
    subtitle: 'Missing a real case can be far more dangerous than a false alarm.',

    positiveLabel: 'Cancer detected',
    negativeLabel: 'Cancer not detected',

    hypothesis:
      'Can the screening test reliably identify patients who actually have cancer?',

    businessQuestion:
      'How can we detect as many genuine cancer cases as possible without creating unnecessary follow-up for healthy patients?',

    priority: 'Minimise False Negatives',

    priorityExplanation:
      'A false negative means a patient actually has cancer, but the screening test says they do not. Missing a genuine case can delay diagnosis and treatment, making this error especially costly.',

    fpImpact:
      'A healthy patient is incorrectly flagged as having cancer. This may lead to anxiety, additional testing, cost, and unnecessary follow-up.',

    fnImpact:
      'A patient who actually has cancer is incorrectly classified as negative. This can delay diagnosis and treatment.',

    tpImpact:
      'A patient who actually has cancer is correctly identified as positive and can proceed to appropriate follow-up.',

    tnImpact:
      'A patient who does not have cancer is correctly identified as negative.',

    strategy:
      'Prioritise sensitivity/recall so that genuine cases are less likely to be missed. Some additional false positives may be acceptable because the follow-up test can investigate them.',

    takeaway:
      'In high-risk detection problems, missing a real positive can be much more costly than creating a false alarm.'
  },

  fraud: {
    label: 'Fraud Detection',
    shortLabel: 'False Positive is Critical',
    icon: '💳',
    title: 'Fraud Transaction Detection',
    subtitle: 'Incorrectly blocking legitimate customers can be extremely costly.',

    positiveLabel: 'Fraud detected',
    negativeLabel: 'Legitimate transaction',

    hypothesis:
      'Can the fraud detection system correctly identify fraudulent transactions without unnecessarily blocking legitimate customers?',

    businessQuestion:
      'How can we prevent fraudulent transactions while protecting legitimate customers from unnecessary declines or investigation?',

    priority: 'Minimise False Positives',

    priorityExplanation:
      'A false positive means a legitimate transaction is incorrectly classified as fraud. Too many false positives can frustrate customers, reduce conversion, and damage trust.',

    fpImpact:
      'A legitimate customer transaction is incorrectly flagged as fraud. The transaction may be blocked or sent for investigation.',

    fnImpact:
      'A fraudulent transaction is incorrectly treated as legitimate. The business may suffer a direct financial loss.',

    tpImpact:
      'A genuinely fraudulent transaction is correctly detected and can be blocked or investigated.',

    tnImpact:
      'A legitimate transaction is correctly allowed to proceed.',

    strategy:
      'Control the false-positive rate while maintaining sufficient fraud detection. Use additional verification or risk-based thresholds instead of automatically blocking every suspicious transaction.',

    takeaway:
      'When false alarms damage customer experience or revenue, reducing false positives becomes a major business objective.'
  },

  customer: {
    label: 'Customer Feedback',
    shortLabel: 'Both Errors Matter',
    icon: '⭐',
    title: 'Customer Satisfaction Risk',
    subtitle: 'Our original case study: identify customers likely to provide negative feedback.',

    positiveLabel: 'Negative feedback detected',
    negativeLabel: 'Positive / neutral feedback',

    hypothesis:
      'Can we reliably identify customers who are likely to provide negative feedback?',

    businessQuestion:
      'Can we identify customers at risk of a poor experience early enough to intervene without wasting resources on customers who are actually satisfied?',

    priority: 'Balance False Positives and False Negatives',

    priorityExplanation:
      'Both errors matter. A false negative means we miss a genuinely dissatisfied customer. A false positive means we spend intervention effort on a customer who would have been satisfied anyway.',

    fpImpact:
      'A satisfied customer is incorrectly classified as at risk. The business may waste retention or service resources unnecessarily.',

    fnImpact:
      'A genuinely dissatisfied customer is classified as not at risk. The business misses an opportunity to intervene before the customer leaves negative feedback or churns.',

    tpImpact:
      'A genuinely dissatisfied customer is correctly identified. The business can intervene and potentially improve the experience.',

    tnImpact:
      'A satisfied customer is correctly identified as not at risk. No unnecessary intervention is required.',

    strategy:
      'Balance precision and recall based on the cost of intervention and the cost of missing an at-risk customer. Adjust the decision threshold according to business priorities.',

    takeaway:
      'In many business problems, there is no universally correct balance. The right balance depends on the cost of each type of error.'
  }
};

const matrixData = {
  tp: {
    label: 'True Positive',
    shortLabel: 'Correctly detected',
    key: 'tp'
  },
  fp: {
    label: 'False Positive',
    shortLabel: 'False alarm',
    key: 'fp'
  },
  fn: {
    label: 'False Negative',
    shortLabel: 'Missed case',
    key: 'fn'
  },
  tn: {
    label: 'True Negative',
    shortLabel: 'Correctly cleared',
    key: 'tn'
  }
};

export default function InferenceErrorMatrix() {
  const [selectedScenario, setSelectedScenario] = useState('customer');
  const [selectedCell, setSelectedCell] = useState('fn');

  const scenario = scenarios[selectedScenario];

  const getCellExplanation = (cell) => {
    switch (cell) {
      case 'tp':
        return {
          title: 'True Positive',
          type: 'Correct',
          description: scenario.tpImpact
        };

      case 'fp':
        return {
          title: 'False Positive',
          type: 'Incorrect',
          description: scenario.fpImpact
        };

      case 'fn':
        return {
          title: 'False Negative',
          type: 'Incorrect',
          description: scenario.fnImpact
        };

      case 'tn':
        return {
          title: 'True Negative',
          type: 'Correct',
          description: scenario.tnImpact
        };

      default:
        return null;
    }
  };

  const selectedExplanation = getCellExplanation(selectedCell);

  /*
    Example counts are deliberately illustrative.
    The objective of this visual is conceptual understanding,
    not calculation from a real dataset.
  */

  const counts = {
    medical: {
      tp: 82,
      fp: 18,
      fn: 5,
      tn: 95
    },
    fraud: {
      tp: 72,
      fp: 12,
      fn: 8,
      tn: 108
    },
    customer: {
      tp: 68,
      fp: 22,
      fn: 17,
      tn: 93
    }
  };

  const currentCounts = counts[selectedScenario];

  const total =
    currentCounts.tp +
    currentCounts.fp +
    currentCounts.fn +
    currentCounts.tn;

  const accuracy =
    ((currentCounts.tp + currentCounts.tn) / total) * 100;

  const precision =
    currentCounts.tp /
    (currentCounts.tp + currentCounts.fp) *
    100;

  const recall =
    currentCounts.tp /
    (currentCounts.tp + currentCounts.fn) *
    100;

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        maxWidth: '1100px',
        margin: '24px auto',
        padding: '20px',
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        background: '#ffffff',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
      }}
    >
      {/* HEADER */}

      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#6b7280',
            marginBottom: '6px'
          }}
        >
          Understanding Decision Errors
        </div>

        <h2
          style={{
            margin: 0,
            fontSize: '26px',
            color: '#111827'
          }}
        >
          When is a False Positive or False Negative more important?
        </h2>

        <p
          style={{
            marginTop: '8px',
            marginBottom: 0,
            color: '#4b5563',
            lineHeight: 1.6
          }}
        >
          The same statistical error can have very different business
          consequences depending on the problem.
        </p>
      </div>

      {/* SCENARIO SELECTOR */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '10px',
          marginBottom: '24px'
        }}
      >
        {Object.entries(scenarios).map(([key, item]) => {
          const active = selectedScenario === key;

          return (
            <button
              key={key}
              onClick={() => {
                setSelectedScenario(key);
                setSelectedCell(
                  key === 'medical'
                    ? 'fn'
                    : key === 'fraud'
                    ? 'fp'
                    : 'fn'
                );
              }}
              style={{
                padding: '14px',
                textAlign: 'left',
                borderRadius: '12px',
                border: active
                  ? '2px solid #2563eb'
                  : '1px solid #d1d5db',
                background: active
                  ? '#eff6ff'
                  : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  marginBottom: '6px'
                }}
              >
                {item.icon}
              </div>

              <div
                style={{
                  fontWeight: 700,
                  color: '#111827'
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  fontSize: '12px',
                  marginTop: '4px',
                  color: '#6b7280'
                }}
              >
                {item.shortLabel}
              </div>
            </button>
          );
        })}
      </div>

      {/* SCENARIO DESCRIPTION */}

      <div
        style={{
          padding: '16px',
          borderRadius: '12px',
          background: '#f9fafb',
          border: '1px solid #e5e7eb',
          marginBottom: '24px'
        }}
      >
        <div
          style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#111827',
            marginBottom: '4px'
          }}
        >
          {scenario.icon} {scenario.title}
        </div>

        <div
          style={{
            color: '#4b5563',
            marginBottom: '12px'
          }}
        >
          {scenario.subtitle}
        </div>

        <div
          style={{
            fontSize: '14px',
            color: '#111827',
            lineHeight: 1.6
          }}
        >
          <strong>Hypothesis:</strong> {scenario.hypothesis}
        </div>
      </div>

      {/* ACTUAL VS PREDICTED */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'minmax(480px, 1.2fr) minmax(300px, 0.8fr)',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        {/* LEFT SIDE - MATRIX */}

        <div>
          <div
            style={{
              textAlign: 'center',
              fontWeight: 700,
              color: '#374151',
              marginBottom: '8px'
            }}
          >
            Actual outcome
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '90px 1fr 1fr',
              gridTemplateRows: '60px 140px 140px',
              border: '1px solid #d1d5db',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
          >
            {/* EMPTY CORNER */}

            <div
              style={{
                background: '#f9fafb',
                borderRight: '1px solid #d1d5db',
                borderBottom: '1px solid #d1d5db'
              }}
            />

            {/* ACTUAL NEGATIVE */}

            <div
              style={{
                background: '#f9fafb',
                borderRight: '1px solid #d1d5db',
                borderBottom: '1px solid #d1d5db',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '8px',
                fontSize: '13px',
                fontWeight: 700
              }}
            >
              Actual Negative
              <br />
              <span
                style={{
                  fontWeight: 400,
                  color: '#6b7280'
                }}
              >
                {scenario.negativeLabel}
              </span>
            </div>

            {/* ACTUAL POSITIVE */}

            <div
              style={{
                background: '#f9fafb',
                borderBottom: '1px solid #d1d5db',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '8px',
                fontSize: '13px',
                fontWeight: 700
              }}
            >
              Actual Positive
              <br />
              <span
                style={{
                  fontWeight: 400,
                  color: '#6b7280'
                }}
              >
                {scenario.positiveLabel}
              </span>
            </div>

            {/* PREDICTED NEGATIVE LABEL */}

            <div
              style={{
                background: '#f9fafb',
                borderRight: '1px solid #d1d5db',
                borderBottom: '1px solid #d1d5db',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                fontWeight: 700
              }}
            >
              Predicted Negative
            </div>

            {/* TRUE NEGATIVE */}

            <MatrixCell
              type="tn"
              value={currentCounts.tn}
              selected={selectedCell === 'tn'}
              onClick={() => setSelectedCell('tn')}
              title="True Negative"
              subtitle="Correctly cleared"
            />

            {/* FALSE NEGATIVE */}

            <MatrixCell
              type="fn"
              value={currentCounts.fn}
              selected={selectedCell === 'fn'}
              onClick={() => setSelectedCell('fn')}
              title="False Negative"
              subtitle="Missed case"
            />

            {/* PREDICTED POSITIVE LABEL */}

            <div
              style={{
                background: '#f9fafb',
                borderRight: '1px solid #d1d5db',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                fontWeight: 700
              }}
            >
              Predicted Positive
            </div>

            {/* FALSE POSITIVE */}

            <MatrixCell
              type="fp"
              value={currentCounts.fp}
              selected={selectedCell === 'fp'}
              onClick={() => setSelectedCell('fp')}
              title="False Positive"
              subtitle="False alarm"
            />

            {/* TRUE POSITIVE */}

            <MatrixCell
              type="tp"
              value={currentCounts.tp}
              selected={selectedCell === 'tp'}
              onClick={() => setSelectedCell('tp')}
              title="True Positive"
              subtitle="Correct detection"
            />
          </div>

          <div
            style={{
              textAlign: 'center',
              fontSize: '12px',
              color: '#6b7280',
              marginTop: '10px'
            }}
          >
            Click any cell to understand what the result means.
          </div>

          {/* METRICS */}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(3, 1fr)',
              gap: '10px',
              marginTop: '18px'
            }}
          >
            <MetricCard
              label="Accuracy"
              value={`${accuracy.toFixed(1)}%`}
            />

            <MetricCard
              label="Precision"
              value={`${precision.toFixed(1)}%`}
            />

            <MetricCard
              label="Recall"
              value={`${recall.toFixed(1)}%`}
            />
          </div>
        </div>

        {/* RIGHT SIDE - EXPLANATION */}

        <div>
          <div
            style={{
              padding: '18px',
              borderRadius: '14px',
              border: '1px solid #e5e7eb',
              background: '#ffffff',
              minHeight: '260px'
            }}
          >
            <div
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: 700,
                color:
                  selectedCell === 'fp' ||
                  selectedCell === 'fn'
                    ? '#b45309'
                    : '#047857',
                marginBottom: '6px'
              }}
            >
              {selectedExplanation.type}
            </div>

            <h3
              style={{
                margin: 0,
                fontSize: '22px',
                color: '#111827'
              }}
            >
              {selectedExplanation.title}
            </h3>

            <p
              style={{
                lineHeight: 1.65,
                color: '#4b5563',
                marginTop: '12px'
              }}
            >
              {selectedExplanation.description}
            </p>

            <div
              style={{
                marginTop: '16px',
                padding: '12px',
                borderRadius: '10px',
                background: '#f9fafb',
                fontSize: '13px',
                lineHeight: 1.6
              }}
            >
              <strong>Think about it:</strong>

              <div style={{ marginTop: '5px' }}>
                What happens to the business if this error
                occurs repeatedly?
              </div>
            </div>
          </div>

          {/* PRIORITY */}

          <div
            style={{
              marginTop: '14px',
              padding: '16px',
              borderRadius: '14px',
              background: '#eff6ff',
              border: '1px solid #bfdbfe'
            }}
          >
            <div
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#1d4ed8',
                marginBottom: '5px'
              }}
            >
              Business Priority
            </div>

            <div
              style={{
                fontWeight: 700,
                fontSize: '17px',
                color: '#111827',
                marginBottom: '8px'
              }}
            >
              {scenario.priority}
            </div>

            <div
              style={{
                fontSize: '14px',
                color: '#374151',
                lineHeight: 1.6
              }}
            >
              {scenario.priorityExplanation}
            </div>
          </div>

          {/* APPROACH */}

          <div
            style={{
              marginTop: '14px',
              padding: '16px',
              borderRadius: '14px',
              background: '#f9fafb',
              border: '1px solid #e5e7eb'
            }}
          >
            <div
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#6b7280',
                marginBottom: '5px'
              }}
            >
              What should we do?
            </div>

            <div
              style={{
                fontSize: '14px',
                color: '#374151',
                lineHeight: 1.6
              }}
            >
              {scenario.strategy}
            </div>
          </div>
        </div>
      </div>

      {/* FOUR OUTCOMES SUMMARY */}

      <div style={{ marginTop: '28px' }}>
        <h3
          style={{
            marginBottom: '12px',
            color: '#111827'
          }}
        >
          The Four Possible Outcomes
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '10px'
          }}
        >
          {Object.entries(matrixData).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setSelectedCell(key)}
              style={{
                textAlign: 'left',
                padding: '13px',
                borderRadius: '10px',
                border:
                  selectedCell === key
                    ? '2px solid #2563eb'
                    : '1px solid #e5e7eb',
                background:
                  selectedCell === key
                    ? '#eff6ff'
                    : '#ffffff',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  color: '#111827'
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginTop: '3px'
                }}
              >
                {item.shortLabel}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* SCENARIO TAKEAWAY */}

      <div
        style={{
          marginTop: '22px',
          padding: '18px',
          borderRadius: '14px',
          background: '#111827',
          color: '#ffffff'
        }}
      >
        <div
          style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            opacity: 0.7,
            marginBottom: '6px'
          }}
        >
          Key takeaway
        </div>

        <div
          style={{
            fontSize: '16px',
            lineHeight: 1.6
          }}
        >
          {scenario.takeaway}
        </div>
      </div>

      {/* IMPORTANT CONCEPT */}

      <div
        style={{
          marginTop: '20px',
          padding: '16px',
          borderLeft: '4px solid #2563eb',
          background: '#f8fafc',
          color: '#374151',
          lineHeight: 1.65
        }}
      >
        <strong>Remember:</strong> "Positive" does not necessarily
        mean something good. It means that the condition we are
        trying to detect has been identified.
        <br />
        <br />
        For example, in our customer case:
        <br />
        <strong>Positive = customer predicted to give negative feedback.</strong>
      </div>
    </div>
  );
}


/* -------------------------------------------------------
   MATRIX CELL
------------------------------------------------------- */

function MatrixCell({
  type,
  value,
  selected,
  onClick,
  title,
  subtitle
}) {
  const styles = {
    tn: {
      background: '#ecfdf5',
      borderColor: '#a7f3d0'
    },

    tp: {
      background: '#eff6ff',
      borderColor: '#bfdbfe'
    },

    fp: {
      background: '#fff7ed',
      borderColor: '#fed7aa'
    },

    fn: {
      background: '#fef2f2',
      borderColor: '#fecaca'
    }
  };

  const style = styles[type];

  return (
    <button
      onClick={onClick}
      style={{
        border: 'none',
        borderRight: '1px solid #d1d5db',
        borderBottom: '1px solid #d1d5db',
        background: style.background,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px',
        outline: selected
          ? '3px solid #2563eb'
          : 'none',
        outlineOffset: '-3px',
        transition: 'all 0.2s ease'
      }}
    >
      <div
        style={{
          fontSize: '30px',
          fontWeight: 800,
          color: '#111827'
        }}
      >
        {value}
      </div>

      <div
        style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#111827',
          marginTop: '4px'
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: '11px',
          color: '#6b7280',
          marginTop: '3px'
        }}
      >
        {subtitle}
      </div>
    </button>
  );
}


/* -------------------------------------------------------
   METRIC CARD
------------------------------------------------------- */

function MetricCard({ label, value }) {
  return (
    <div
      style={{
        padding: '12px',
        borderRadius: '10px',
        background: '#f9fafb',
        border: '1px solid #e5e7eb',
        textAlign: 'center'
      }}
    >
      <div
        style={{
          fontSize: '11px',
          textTransform: 'uppercase',
          color: '#6b7280',
          fontWeight: 700
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: '20px',
          fontWeight: 800,
          color: '#111827',
          marginTop: '4px'
        }}
      >
        {value}
      </div>
    </div>
  );
}