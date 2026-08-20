import React, { useMemo, useState } from "react";

/*
 * ============================================================
 * EDA VISUALS
 * ============================================================
 *
 * This file contains all interactive visuals for the
 * Exploratory Data Analysis module.
 *
 * Each visual is independently exported and can be embedded
 * into the Docusaurus MDX document.
 *
 * VISUAL 1
 * <EDAVisual1Histogram />
 * Anchor: eda-visual-1-histogram
 *
 * VISUAL 2
 * <EDAVisual2CategoryFrequency />
 * Anchor: eda-visual-2-category-frequency
 *
 * VISUAL 3
 * <EDAVisual3GroupComparison />
 * Anchor: eda-visual-3-group-comparison
 *
 * VISUAL 4
 * <EDAVisual4DistributionComparison />
 * Anchor: eda-visual-4-distribution-comparison
 *
 * VISUAL 5
 * <EDAVisual5CorrelationExplorer />
 * Anchor: eda-visual-5-correlation-explorer
 *
 * VISUAL 6
 * <EDAVisual6TrendExplorer />
 * Anchor: eda-visual-6-trend-explorer
 *
 * VISUAL 7
 * <EDAVisual7OutlierExplorer />
 * Anchor: eda-visual-7-outlier-explorer
 *
 * VISUAL 8
 * <EDAVisual8FeatureEngineeringExplorer />
 * Anchor: eda-visual-8-feature-engineering-explorer
 *
 * The data below is illustrative and self-contained.
 * It can later be replaced with actual course datasets.
 */

/* ============================================================
   SHARED STYLES
   ============================================================ */

const styles = {
  card: {
    border: "1px solid #d9dee7",
    borderRadius: "14px",
    padding: "20px",
    margin: "25px 0",
    background: "var(--ifm-background-surface-color, #ffffff)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },

  title: {
    marginBottom: "5px",
  },

  description: {
    color: "#667085",
    fontSize: "14px",
    marginBottom: "18px",
  },

  controls: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "20px",
  },

  select: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #cfd5df",
    background: "var(--ifm-background-color, #ffffff)",
    fontSize: "14px",
  },

  insight: {
    marginTop: "18px",
    padding: "14px",
    borderRadius: "10px",
    background: "rgba(59, 130, 246, 0.08)",
    lineHeight: "1.55",
    fontSize: "14px",
  },

  metricGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "10px",
    marginTop: "15px",
  },

  metric: {
    border: "1px solid #e3e7ed",
    borderRadius: "10px",
    padding: "12px",
  },

  metricLabel: {
    fontSize: "12px",
    color: "#667085",
  },

  metricValue: {
    display: "block",
    marginTop: "5px",
    fontWeight: "600",
  },
};


/* ============================================================
   SHARED COMPONENTS
   ============================================================ */

function SectionCard({ anchor, title, description, children }) {
  return (
    <section
      id={anchor}
      data-eda-visual={anchor}
      style={styles.card}
    >
      <h3 style={styles.title}>{title}</h3>

      {description && (
        <p style={styles.description}>
          {description}
        </p>
      )}

      {children}
    </section>
  );
}


function Metric({ label, value }) {
  return (
    <div style={styles.metric}>
      <div style={styles.metricLabel}>{label}</div>
      <strong style={styles.metricValue}>{value}</strong>
    </div>
  );
}


/* ============================================================
   DEMO DATA
   ============================================================ */

const histogramData = {
  sales: {
    label: "Sales",
    unit: "₹",
    values: [
      120, 180, 260, 340, 450,
      520, 610, 700, 820, 940,
      1100, 1250, 1450, 1700,
      2050, 2600, 3400, 4600,
      6800, 9800
    ],
  },

  profit: {
    label: "Profit",
    unit: "₹",
    values: [
      -80, -20, 10, 25, 45,
      60, 75, 90, 110, 130,
      155, 180, 220, 280,
      360, 470, 620, 850,
      1200, 2200
    ],
  },

  delivery: {
    label: "Delivery Days",
    unit: "",
    values: [
      1, 1, 1, 2, 2,
      2, 2, 3, 3, 3,
      3, 4, 4, 4, 5,
      5, 6, 7, 10, 14
    ],
  },
};


const regionData = [
  {
    name: "South",
    orders: 4200,
    revenue: 5.2,
    profit: 0.82,
    aov: 1238,
  },
  {
    name: "West",
    orders: 3800,
    revenue: 6.8,
    profit: 1.02,
    aov: 1789,
  },
  {
    name: "North",
    orders: 2700,
    revenue: 4.1,
    profit: 0.64,
    aov: 1519,
  },
  {
    name: "East",
    orders: 1900,
    revenue: 2.0,
    profit: 0.31,
    aov: 1053,
  },
];


const categoryData = [
  {
    name: "Electronics",
    count: 6200,
    revenue: 9.8,
    profit: 1.55,
  },
  {
    name: "Furniture",
    count: 3900,
    revenue: 5.9,
    profit: 0.72,
  },
  {
    name: "Clothing",
    count: 4100,
    revenue: 3.8,
    profit: 0.91,
  },
];


const segmentData = [
  {
    name: "Consumer",
    count: 7200,
    revenue: 8.1,
    profit: 1.22,
  },
  {
    name: "Corporate",
    count: 5200,
    revenue: 9.3,
    profit: 1.31,
  },
  {
    name: "Small Business",
    count: 1800,
    revenue: 2.1,
    profit: 0.42,
  },
];


const monthlyData = [
  {
    month: "Jan",
    revenue: 2.1,
    profit: 0.42,
    orders: 10,
  },
  {
    month: "Feb",
    revenue: 2.2,
    profit: 0.44,
    orders: 10.4,
  },
  {
    month: "Mar",
    revenue: 2.4,
    profit: 0.47,
    orders: 11,
  },
  {
    month: "Apr",
    revenue: 2.6,
    profit: 0.46,
    orders: 12.2,
  },
  {
    month: "May",
    revenue: 2.3,
    profit: 0.38,
    orders: 11.6,
  },
  {
    month: "Jun",
    revenue: 2.8,
    profit: 0.35,
    orders: 14,
  },
];


const relationshipData = {
  discountProfit: {
    title: "Discount vs Profit",
    xLabel: "Discount",
    yLabel: "Profit",

    points: [
      [0.00, 420],
      [0.02, 390],
      [0.04, 350],
      [0.05, 320],
      [0.07, 300],
      [0.09, 265],
      [0.10, 240],
      [0.12, 220],
      [0.15, 180],
      [0.17, 155],
      [0.20, 130],
      [0.24, 95],
      [0.28, 60],
      [0.32, 35],
      [0.40, 10],
    ],

    correlation: -0.62,
  },

  salesQuantity: {
    title: "Sales vs Quantity",
    xLabel: "Quantity",
    yLabel: "Sales",

    points: [
      [1, 250],
      [1, 420],
      [2, 580],
      [2, 650],
      [3, 820],
      [3, 900],
      [4, 1120],
      [4, 1280],
      [5, 1450],
      [6, 1660],
      [7, 1820],
      [8, 2050],
      [9, 2300],
      [10, 2500],
    ],

    correlation: 0.71,
  },

  deliverySales: {
    title: "Delivery Days vs Sales",
    xLabel: "Delivery Days",
    yLabel: "Sales",

    points: [
      [1, 1450],
      [2, 1320],
      [2, 1100],
      [3, 1250],
      [3, 980],
      [4, 1150],
      [4, 1040],
      [5, 1000],
      [5, 920],
      [6, 880],
      [7, 910],
      [8, 850],
      [10, 780],
      [14, 720],
    ],

    correlation: -0.18,
  },
};


const outlierData = [
  {
    id: "O1842",
    sales: 950000,
    region: "West",
    category: "Electronics",
    profit: 12000,
    delivery: 7,
    reason: "Potential large enterprise order",
  },

  {
    id: "O0921",
    sales: 18000,
    region: "South",
    category: "Furniture",
    profit: 2200,
    delivery: 5,
    reason: "High-value furniture order",
  },

  {
    id: "O2217",
    sales: 15,
    region: "East",
    category: "Clothing",
    profit: -500,
    delivery: 45,
    reason: "Potential data quality issue",
  },
];


/* ============================================================
   HELPER: BAR CHART
   ============================================================ */

function BarChart({
  data,
  valueKey,
  labelKey = "name",
  suffix = "",
}) {
  const maxValue = Math.max(
    ...data.map((item) => item[valueKey])
  );

  return (
    <div
      style={{
        display: "grid",
        gap: "12px",
      }}
    >
      {data.map((item) => (
        <div key={item[labelKey]}>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "13px",
              marginBottom: "4px",
            }}
          >
            <span>{item[labelKey]}</span>

            <strong>
              {item[valueKey]}
              {suffix}
            </strong>
          </div>

          <div
            style={{
              height: "20px",
              background: "#eef1f5",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(
                  item[valueKey] / maxValue
                ) * 100}%`,
                height: "100%",
                background: "#3b82f6",
                borderRadius: "6px",
              }}
            />
          </div>

        </div>
      ))}
    </div>
  );
}


/* ============================================================
   VISUAL 1
   HISTOGRAM
   ============================================================ */

/*
 * MDX LOCATION
 *
 * Place immediately after:
 *
 * ## Histogram
 *
 * in the EDA document.
 *
 * Usage:
 *
 * <EDAVisual1Histogram />
 */

export function EDAVisual1Histogram() {

  const [variable, setVariable] =
    useState("sales");

  const [bins, setBins] =
    useState(8);

  const selected =
    histogramData[variable];

  const values =
    selected.values;

  const mean =
    values.reduce(
      (sum, value) => sum + value,
      0
    ) / values.length;

  const sorted =
    [...values].sort(
      (a, b) => a - b
    );

  const median =
    sorted.length % 2 === 0
      ? (
          sorted[sorted.length / 2 - 1] +
          sorted[sorted.length / 2]
        ) / 2
      : sorted[
          Math.floor(sorted.length / 2)
        ];

  const min =
    Math.min(...values);

  const max =
    Math.max(...values);

  const histogram = useMemo(() => {

    const step =
      (max - min) / bins || 1;

    return Array.from(
      { length: bins },
      (_, index) => {

        const lower =
          min + index * step;

        const upper =
          index === bins - 1
            ? max + 0.0001
            : lower + step;

        const count =
          values.filter(
            (value) =>
              value >= lower &&
              value < upper
          ).length;

        return {
          lower,
          upper,
          count,
        };
      }
    );

  }, [values, bins, min, max]);

  const maxFrequency =
    Math.max(
      ...histogram.map(
        (item) => item.count
      )
    );

  return (
    <SectionCard
      anchor="eda-visual-1-histogram"
      title="Visual 1 — Histogram Explorer"
      description="Change the variable and number of bins to understand the shape of the distribution."
    >

      <div style={styles.controls}>

        <select
          style={styles.select}
          value={variable}
          onChange={(event) =>
            setVariable(
              event.target.value
            )
          }
        >

          <option value="sales">
            Sales
          </option>

          <option value="profit">
            Profit
          </option>

          <option value="delivery">
            Delivery Days
          </option>

        </select>


        <select
          style={styles.select}
          value={bins}
          onChange={(event) =>
            setBins(
              Number(event.target.value)
            )
          }
        >

          <option value={5}>
            5 bins
          </option>

          <option value={8}>
            8 bins
          </option>

          <option value={10}>
            10 bins
          </option>

          <option value={12}>
            12 bins
          </option>

        </select>

      </div>


      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "5px",
          height: "250px",
          padding: "10px 4px",
        }}
      >

        {histogram.map(
          (item, index) => (

            <div
              key={index}
              style={{
                flex: 1,
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
              }}
            >

              <div
                title={`${item.count} observations`}
                style={{
                  width: "100%",
                  height: `${
                    (item.count /
                      maxFrequency) *
                    90
                  }%`,
                  background:
                    "#3b82f6",
                  borderRadius:
                    "5px 5px 0 0",
                }}
              />

            </div>

          )
        )}

      </div>


      <div style={styles.metricGrid}>

        <Metric
          label="Observations"
          value={values.length}
        />

        <Metric
          label="Mean"
          value={`${selected.unit}${mean.toFixed(1)}`}
        />

        <Metric
          label="Median"
          value={`${selected.unit}${median.toFixed(1)}`}
        />

        <Metric
          label="Range"
          value={`${selected.unit}${min} – ${selected.unit}${max}`}
        />

      </div>


      <div style={styles.insight}>

        <strong>
          What should you notice?
        </strong>

        <br />

        {mean > median
          ? "The mean is higher than the median. This suggests that relatively high values are pulling the average upward."
          : "The mean and median are relatively close, suggesting that the distribution is more balanced."}

      </div>

    </SectionCard>
  );
}


/* ============================================================
   VISUAL 2
   FREQUENCY ANALYSIS
   ============================================================ */

/*
 * MDX LOCATION:
 *
 * ## Frequency Analysis for Categorical Variables
 *
 * Usage:
 *
 * <EDAVisual2CategoryFrequency />
 */

export function EDAVisual2CategoryFrequency() {

  const [dimension, setDimension] =
    useState("region");

  let data;

  if (dimension === "region") {

    data = regionData.map(
      (item) => ({
        name: item.name,
        count: item.orders,
      })
    );

  } else if (
    dimension === "category"
  ) {

    data = categoryData.map(
      (item) => ({
        name: item.name,
        count: item.count,
      })
    );

  } else {

    data = segmentData.map(
      (item) => ({
        name: item.name,
        count: item.count,
      })
    );
  }

  const total =
    data.reduce(
      (sum, item) =>
        sum + item.count,
      0
    );

  return (
    <SectionCard
      anchor="eda-visual-2-category-frequency"
      title="Visual 2 — Frequency Explorer"
      description="Explore how observations are distributed across categorical variables."
    >

      <div style={styles.controls}>

        <select
          style={styles.select}
          value={dimension}
          onChange={(event) =>
            setDimension(
              event.target.value
            )
          }
        >

          <option value="region">
            Region
          </option>

          <option value="category">
            Product Category
          </option>

          <option value="segment">
            Customer Segment
          </option>

        </select>

      </div>


      <BarChart
        data={data}
        valueKey="count"
      />


      <div style={styles.insight}>

        <strong>
          What should you notice?
        </strong>

        <br />

        Frequency tells us how many
        observations belong to each
        category. A category with the
        most observations is not
        necessarily the most valuable
        category from a revenue or
        profit perspective.

      </div>


      <p style={{
        color: "#667085",
        fontSize: "13px",
        marginTop: "12px"
      }}>
        Total observations:
        {" "}
        {total.toLocaleString()}
      </p>

    </SectionCard>
  );
}


/* ============================================================
   VISUAL 3
   GROUP COMPARISON
   ============================================================ */

/*
 * MDX LOCATION:
 *
 * ## Compare Groups
 *
 * Usage:
 *
 * <EDAVisual3GroupComparison />
 */

export function EDAVisual3GroupComparison() {

  const [group, setGroup] =
    useState("region");

  const [metric, setMetric] =
    useState("revenue");

  let data;

  if (group === "region") {

    data = regionData;

  } else if (
    group === "category"
  ) {

    data = categoryData;

  } else {

    data = segmentData;
  }

  const availableMetrics =
    group === "region"
      ? [
          ["revenue", "Revenue"],
          ["profit", "Profit"],
          ["orders", "Orders"],
          ["aov", "Average Order Value"],
        ]
      : [
          ["revenue", "Revenue"],
          ["profit", "Profit"],
          ["count", "Observations"],
        ];

  const chartData =
    data.map((item) => ({
      name: item.name,
      value: item[metric],
    }));

  return (
    <SectionCard
      anchor="eda-visual-3-group-comparison"
      title="Visual 3 — Group Comparison Explorer"
      description="Compare the same groups using different business metrics."
    >

      <div style={styles.controls}>

        <select
          style={styles.select}
          value={group}
          onChange={(event) => {

            setGroup(
              event.target.value
            );

            setMetric("revenue");

          }}
        >

          <option value="region">
            Region
          </option>

          <option value="category">
            Product Category
          </option>

          <option value="segment">
            Customer Segment
          </option>

        </select>


        <select
          style={styles.select}
          value={metric}
          onChange={(event) =>
            setMetric(
              event.target.value
            )
          }
        >

          {availableMetrics.map(
            ([value, label]) => (
              <option
                key={value}
                value={value}
              >
                {label}
              </option>
            )
          )}

        </select>

      </div>


      <BarChart
        data={chartData}
        valueKey="value"
        suffix={
          metric === "revenue" ||
          metric === "profit"
            ? "M"
            : ""
        }
      />


      <div style={styles.insight}>

        <strong>
          What should you notice?
        </strong>

        <br />

        The ranking of groups can
        change depending on the metric.
        This is why a consultant should
        not make conclusions from a
        single metric without understanding
        the business question.

      </div>

    </SectionCard>
  );
}


/* ============================================================
   VISUAL 4
   DISTRIBUTION COMPARISON
   ============================================================ */

/*
 * MDX LOCATION:
 *
 * ## Compare Distributions
 *
 * Usage:
 *
 * <EDAVisual4DistributionComparison />
 */

export function EDAVisual4DistributionComparison() {

  const [metric, setMetric] =
    useState("sales");

  const distributions = {

    sales: [
      {
        name: "South",
        q1: 500,
        median: 900,
        q3: 1600,
      },
      {
        name: "West",
        q1: 600,
        median: 1050,
        q3: 2100,
      },
      {
        name: "North",
        q1: 550,
        median: 980,
        q3: 1800,
      },
      {
        name: "East",
        q1: 400,
        median: 750,
        q3: 1300,
      },
    ],

    delivery: [
      {
        name: "South",
        q1: 2,
        median: 3,
        q3: 5,
      },
      {
        name: "West",
        q1: 3,
        median: 5,
        q3: 7,
      },
      {
        name: "North",
        q1: 2,
        median: 4,
        q3: 6,
      },
      {
        name: "East",
        q1: 2,
        median: 3,
        q3: 5,
      },
    ],
  };

  const selected =
    distributions[metric];

  const maximum = Math.max(
    ...selected.map(
      (item) => item.q3
    )
  );

  return (
    <SectionCard
      anchor="eda-visual-4-distribution-comparison"
      title="Visual 4 — Distribution Comparison"
      description="Compare medians and the spread of observations across groups."
    >

      <div style={styles.controls}>

        <select
          style={styles.select}
          value={metric}
          onChange={(event) =>
            setMetric(
              event.target.value
            )
          }
        >

          <option value="sales">
            Sales
          </option>

          <option value="delivery">
            Delivery Days
          </option>

        </select>

      </div>


      {selected.map((item) => (

        <div
          key={item.name}
          style={{
            marginBottom: "20px",
          }}
        >

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              fontSize: "13px",
            }}
          >

            <strong>
              {item.name}
            </strong>

            <span>
              Median: {item.median}
            </span>

          </div>


          <div
            style={{
              position: "relative",
              height: "42px",
              marginTop: "5px",
            }}
          >

            <div
              style={{
                position: "absolute",
                left: "5%",
                right: "5%",
                top: "20px",
                height: "2px",
                background:
                  "#cfd5df",
              }}
            />


            <div
              style={{
                position: "absolute",
                left: `${
                  (item.q1 /
                    maximum) *
                    85 +
                  5
                }%`,

                width: `${
                  Math.max(
                    5,
                    ((item.q3 -
                      item.q1) /
                      maximum) *
                      85
                  )
                }%`,

                top: "8px",
                height: "24px",

                border:
                  "2px solid #2563eb",

                background:
                  "rgba(37,99,235,0.12)",

                borderRadius: "5px",
              }}
            />


            <div
              style={{
                position: "absolute",

                left: `${
                  (item.median /
                    maximum) *
                    85 +
                  5
                }%`,

                top: "5px",

                height: "30px",

                width: "3px",

                background:
                  "#2563eb",
              }}
            />

          </div>

        </div>

      ))}


      <div style={styles.insight}>

        <strong>
          What should you notice?
        </strong>

        <br />

        Comparing only averages can hide
        important differences in spread.
        Distribution-based comparisons
        help us see whether a group is
        relatively consistent or highly variable.

      </div>

    </SectionCard>
  );
}


/* ============================================================
   VISUAL 5
   CORRELATION EXPLORER
   ============================================================ */

/*
 * MDX LOCATION:
 *
 * ## Explore Relationships Between Variables
 *
 * Usage:
 *
 * <EDAVisual5CorrelationExplorer />
 */

export function EDAVisual5CorrelationExplorer() {

  const [relationship, setRelationship] =
    useState("discountProfit");

  const [segment, setSegment] =
    useState("all");

  const base =
    relationshipData[relationship];

  let points =
    base.points;

  if (segment !== "all") {

    const index =
      segment === "electronics"
        ? 0
        : segment === "furniture"
          ? 1
          : 2;

    points =
      base.points.filter(
        (_, i) =>
          i % 3 === index
      );
  }

  let correlation =
    base.correlation;

  if (
    relationship ===
    "discountProfit" &&
    segment !== "all"
  ) {

    correlation =
      segment === "electronics"
        ? -0.75
        : segment === "furniture"
          ? -0.35
          : -0.10;
  }

  return (
    <SectionCard
      anchor="eda-visual-5-correlation-explorer"
      title="Visual 5 — Correlation Explorer"
      description="Explore relationships between numerical variables and see how segmentation can change the observed relationship."
    >

      <div style={styles.controls}>

        <select
          style={styles.select}
          value={relationship}
          onChange={(event) =>
            setRelationship(
              event.target.value
            )
          }
        >

          <option value="discountProfit">
            Discount vs Profit
          </option>

          <option value="salesQuantity">
            Sales vs Quantity
          </option>

          <option value="deliverySales">
            Delivery Days vs Sales
          </option>

        </select>


        <select
          style={styles.select}
          value={segment}
          onChange={(event) =>
            setSegment(
              event.target.value
            )
          }
        >

          <option value="all">
            All Data
          </option>

          <option value="electronics">
            Electronics
          </option>

          <option value="furniture">
            Furniture
          </option>

          <option value="clothing">
            Clothing
          </option>

        </select>

      </div>


      <ScatterPlot
        points={points}
        xLabel={base.xLabel}
        yLabel={base.yLabel}
      />


      <div style={styles.metricGrid}>

        <Metric
          label="Correlation"
          value={correlation.toFixed(2)}
        />

        <Metric
          label="Direction"
          value={
            correlation > 0
              ? "Positive"
              : correlation < 0
                ? "Negative"
                : "None"
          }
        />

        <Metric
          label="Strength"
          value={
            Math.abs(correlation) > 0.7
              ? "Strong"
              : Math.abs(correlation) > 0.4
                ? "Moderate"
                : "Weak"
          }
        />

      </div>


      <div style={styles.insight}>

        <strong>
          What should you notice?
        </strong>

        <br />

        Correlation shows association,
        not causation. Also notice that
        the apparent relationship can change
        after splitting the data into categories.

      </div>

    </SectionCard>
  );
}


/* ============================================================
   SHARED SCATTER PLOT
   ============================================================ */

function ScatterPlot({
  points,
  xLabel,
  yLabel,
}) {

  const width = 760;
  const height = 320;
  const padding = 50;

  const xs =
    points.map(
      (point) => point[0]
    );

  const ys =
    points.map(
      (point) => point[1]
    );

  const minX =
    Math.min(...xs);

  const maxX =
    Math.max(...xs);

  const minY =
    Math.min(...ys);

  const maxY =
    Math.max(...ys);

  const x = (value) =>
    padding +
    ((value - minX) /
      Math.max(
        maxX - minX,
        0.0001
      )) *
      (width -
        padding * 2);

  const y = (value) =>
    height -
    padding -
    ((value - minY) /
      Math.max(
        maxY - minY,
        0.0001
      )) *
      (height -
        padding * 2);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      role="img"
      aria-label="Scatter plot"
    >

      <line
        x1={padding}
        x2={padding}
        y1={padding}
        y2={height - padding}
        stroke="#cfd5df"
      />

      <line
        x1={padding}
        x2={width - padding}
        y1={height - padding}
        y2={height - padding}
        stroke="#cfd5df"
      />


      {points.map(
        ([px, py], index) => (

          <circle
            key={index}
            cx={x(px)}
            cy={y(py)}
            r="6"
            fill="#2563eb"
            opacity="0.72"
          />

        )
      )}


      <text
        x={width / 2}
        y={height - 12}
        textAnchor="middle"
        fontSize="13"
      >
        {xLabel}
      </text>


      <text
        x="15"
        y={height / 2}
        textAnchor="middle"
        fontSize="13"
        transform={`rotate(-90 15 ${
          height / 2
        })`}
      >
        {yLabel}
      </text>

    </svg>
  );
}


/* ============================================================
   VISUAL 6
   TREND EXPLORER
   ============================================================ */

/*
 * MDX LOCATION:
 *
 * ## Explore Trends Over Time
 *
 * Usage:
 *
 * <EDAVisual6TrendExplorer />
 */

export function EDAVisual6TrendExplorer() {

  const [metric, setMetric] =
    useState("revenue");

  return (
    <SectionCard
      anchor="eda-visual-6-trend-explorer"
      title="Visual 6 — Trend Explorer"
      description="Explore how business performance changes over time across different metrics."
    >

      <div style={styles.controls}>

        <select
          style={styles.select}
          value={metric}
          onChange={(event) =>
            setMetric(
              event.target.value
            )
          }
        >

          <option value="revenue">
            Revenue
          </option>

          <option value="profit">
            Profit
          </option>

          <option value="orders">
            Orders
          </option>

        </select>

      </div>


      <LineChart
        data={monthlyData}
        metric={metric}
      />


      <div style={styles.insight}>

        <strong>
          What should you notice?
        </strong>

        <br />

        Revenue and profit do not always
        move together. A consultant should
        examine multiple related metrics
        before describing a trend as
        "improving" or "declining."

      </div>

    </SectionCard>
  );
}


/* ============================================================
   LINE CHART
   ============================================================ */

function LineChart({
  data,
  metric,
}) {

  const width = 760;
  const height = 300;
  const padding = 50;

  const values =
    data.map(
      (item) => item[metric]
    );

  const min =
    Math.min(...values);

  const max =
    Math.max(...values);

  const x = (index) =>
    padding +
    (index /
      (data.length - 1)) *
      (width -
        padding * 2);

  const y = (value) =>
    height -
    padding -
    ((value - min) /
      Math.max(
        max - min,
        0.0001
      )) *
      (height -
        padding * 2);

  const points =
    data
      .map(
        (item, index) =>
          `${x(index)},${y(
            item[metric]
          )}`
      )
      .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
    >

      <line
        x1={padding}
        x2={padding}
        y1={padding}
        y2={height - padding}
        stroke="#cfd5df"
      />

      <line
        x1={padding}
        x2={width - padding}
        y1={height - padding}
        y2={height - padding}
        stroke="#cfd5df"
      />


      <polyline
        points={points}
        fill="none"
        stroke="#2563eb"
        strokeWidth="4"
      />


      {data.map(
        (item, index) => (

          <g key={item.month}>

            <circle
              cx={x(index)}
              cy={y(item[metric])}
              r="5"
              fill="#2563eb"
            />

            <text
              x={x(index)}
              y={height - 18}
              textAnchor="middle"
              fontSize="12"
            >
              {item.month}
            </text>

            <text
              x={x(index)}
              y={
                y(item[metric]) -
                10
              }
              textAnchor="middle"
              fontSize="11"
            >
              {item[metric]}
            </text>

          </g>

        )
      )}

    </svg>
  );
}


/* ============================================================
   VISUAL 7
   OUTLIER EXPLORER
   ============================================================ */

/*
 * MDX LOCATION:
 *
 * ## Investigate Outliers
 *
 * Usage:
 *
 * <EDAVisual7OutlierExplorer />
 */

export function EDAVisual7OutlierExplorer() {

  const [selectedId, setSelectedId] =
    useState(
      outlierData[0].id
    );

  const selected =
    outlierData.find(
      (item) =>
        item.id === selectedId
    );

  return (
    <SectionCard
      anchor="eda-visual-7-outlier-explorer"
      title="Visual 7 — Outlier Investigation"
      description="Select an unusual observation and investigate it before deciding whether it is an error."
    >

      <div style={styles.controls}>

        <select
          style={styles.select}
          value={selectedId}
          onChange={(event) =>
            setSelectedId(
              event.target.value
            )
          }
        >

          {outlierData.map(
            (item) => (

              <option
                key={item.id}
                value={item.id}
              >
                {item.id} — ₹
                {item.sales.toLocaleString()}
              </option>

            )
          )}

        </select>

      </div>


      <div style={styles.metricGrid}>

        <Metric
          label="Order ID"
          value={selected.id}
        />

        <Metric
          label="Sales"
          value={`₹${selected.sales.toLocaleString()}`}
        />

        <Metric
          label="Profit"
          value={`₹${selected.profit.toLocaleString()}`}
        />

        <Metric
          label="Region"
          value={selected.region}
        />

        <Metric
          label="Category"
          value={selected.category}
        />

        <Metric
          label="Delivery"
          value={`${selected.delivery} days`}
        />

      </div>


      <div style={styles.insight}>

        <strong>
          Investigation result:
        </strong>

        <br />

        {selected.reason}

        <br />
        <br />

        The important analytical principle
        is: <strong>Detect → Investigate → Understand → Decide.</strong>

        Do not automatically remove an
        observation simply because it looks unusual.

      </div>

    </SectionCard>
  );
}


/* ============================================================
   VISUAL 8
   FEATURE ENGINEERING EXPLORER
   ============================================================ */

/*
 * MDX LOCATION:
 *
 * ## Create Useful Analytical Variables
 *
 * Usage:
 *
 * <EDAVisual8FeatureEngineeringExplorer />
 */

export function EDAVisual8FeatureEngineeringExplorer() {

  const [date, setDate] =
    useState("2026-08-18");

  const parsedDate =
    new Date(
      `${date}T00:00:00`
    );

  const month =
    parsedDate.toLocaleString(
      "en-US",
      {
        month: "long",
      }
    );

  const day =
    parsedDate.toLocaleString(
      "en-US",
      {
        weekday: "long",
      }
    );

  const quarter =
    `Q${
      Math.floor(
        parsedDate.getMonth() / 3
      ) + 1
    }`;

  const weekend =
    parsedDate.getDay() === 0 ||
    parsedDate.getDay() === 6;

  return (
    <SectionCard
      anchor="eda-visual-8-feature-engineering-explorer"
      title="Visual 8 — Feature Engineering Explorer"
      description="See how a raw date can be transformed into useful analytical variables."
    >

      <div style={styles.controls}>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >

          Date:

          <input
            type="date"
            style={styles.select}
            value={date}
            onChange={(event) =>
              setDate(
                event.target.value
              )
            }
          />

        </label>

      </div>


      <div style={styles.metricGrid}>

        <Metric
          label="Original Date"
          value={date}
        />

        <Metric
          label="Month"
          value={month}
        />

        <Metric
          label="Quarter"
          value={quarter}
        />

        <Metric
          label="Day"
          value={day}
        />

        <Metric
          label="Weekend?"
          value={
            weekend
              ? "Yes"
              : "No"
          }
        />

      </div>


      <div style={styles.insight}>

        <strong>
          What should you notice?
        </strong>

        <br />

        Feature engineering can be very
        simple. Turning a raw date into
        month, quarter, weekday, or weekend
        variables can make patterns easier
        to analyse.

      </div>

    </SectionCard>
  );
}


/* ============================================================
   DEFAULT EXPORT
   ============================================================
 *
 * This is only useful if you want to see all visuals on one page
 * while developing/testing the component.
 *
 * For the actual course MDX, use the individual named exports.
 */

export default function EDAVisuals() {

  return (
    <div>

      <EDAVisual1Histogram />

      <EDAVisual2CategoryFrequency />

      <EDAVisual3GroupComparison />

      <EDAVisual4DistributionComparison />

      <EDAVisual5CorrelationExplorer />

      <EDAVisual6TrendExplorer />

      <EDAVisual7OutlierExplorer />

      <EDAVisual8FeatureEngineeringExplorer />

    </div>
  );
}