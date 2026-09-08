---
sidebar_position: 4
title: Choosing the Right Visualisation Tool
---

# Choosing the Right Visualisation Tool

There are many tools available for creating data visualisations and dashboards.

Examples include:

- Tableau,
- Power BI,
- Qlik,
- Looker,
- Apache Superset,
- Metabase,
- Streamlit,
- Plotly,
- Matplotlib,
- Grafana.

However, the purpose of this section is not to memorise a list of products.

An analyst should choose a tool based on the needs of the analytical solution.

The principle is:

> **Understand the problem first. Choose the tool second.**

---

# Start With the Requirements

Before choosing a visualisation tool, ask:

- Who will use the output?
- What decision will it support?
- What data is required?
- How much data is involved?
- Does the user need interactivity?
- How will the visualisation be shared?
- How often should the data refresh?
- What security is required?
- What tools and skills already exist in the organisation?

The same analytical problem can sometimes be solved using several different tools.

The best choice depends on the context.

---

# 1. Audience

Who will use the visualisation?

Possible audiences include:

- senior executives,
- business users,
- operational teams,
- analysts,
- data scientists,
- external customers.

For example, an executive dashboard should generally be easy to access and understand.

A data scientist may instead need a flexible environment for experimenting with data and models.

---

# 2. Data Sources

Consider where the data is stored.

Examples include:

- Excel files,
- CSV files,
- relational databases,
- cloud data warehouses,
- data lakes,
- APIs,
- streaming platforms.

The selected visualisation tool should be able to connect to the required data sources effectively.

---

# 3. Data Volume

Small datasets can often be analysed locally.

Larger datasets may require:

- database connections,
- optimised queries,
- extracts,
- cloud infrastructure,
- appropriate refresh strategies.

The amount of data can therefore influence the tool and architecture used.

---

# 4. Interactivity

Does the audience simply need to view the result?

Or do they need to explore it?

Interactive requirements may include:

- filters,
- drill-down,
- tooltips,
- cross-filtering,
- parameters,
- detailed views.

For example, an executive may only need a high-level dashboard.

An operational manager may need to filter the dashboard by team, product or location.

---

# 5. Distribution

How will the visualisation reach the audience?

Possible delivery methods include:

- presentation slides,
- PDF reports,
- internal dashboards,
- public websites,
- mobile devices,
- embedded applications.

The delivery method may affect the choice of tool.

---

# 6. Security and Governance

Business dashboards may contain confidential information.

Consider:

- authentication,
- user permissions,
- data access,
- row-level security,
- governance,
- audit requirements.

A tool that is appropriate for public data may not be appropriate for sensitive organisational data.

---

# 7. Refresh Frequency

How current does the information need to be?

Examples include:

- annual reporting,
- monthly reporting,
- daily dashboards,
- hourly monitoring,
- near-real-time operational monitoring.

A monthly management report has different requirements from an operational monitoring system.

---

# 8. Cost

Cost may include more than the software licence.

Consider:

- licence fees,
- infrastructure,
- maintenance,
- administration,
- training,
- development effort.

Organisations should evaluate the overall cost of supporting the solution.

---

# 9. Skills

Consider the skills available in the organisation.

Business analysts may prefer tools with visual interfaces.

Data scientists may prefer code-based tools.

Developers may need tools that can be integrated into applications.

The most technically powerful tool is not automatically the best tool.

---

# Categories of Visualisation Tools

Different tools are designed for different types of work.

---

## Business Intelligence Tools

Examples include:

- Tableau,
- Power BI,
- Qlik.

They are commonly used for:

- business dashboards,
- management reporting,
- KPI monitoring,
- interactive analysis,
- self-service analytics.

They are particularly useful when many business users need access to the same analytical information.

---

## Code-Based Visualisation Tools

Examples include:

- Matplotlib,
- Plotly,
- other Python visualisation libraries.

They can be useful when:

- the analysis already takes place in Python,
- customised visualisations are required,
- charts need to be produced programmatically,
- the analyst needs greater technical control.

These tools generally require programming skills.

---

## Data Applications

Tools such as Streamlit allow analysts and data scientists to create interactive applications using code.

They can be useful when:

- users need to provide inputs,
- an application needs to run analytical logic,
- a predictive model needs to be demonstrated,
- more customised interaction is required.

---

## Monitoring Tools

Tools such as Grafana are commonly used for:

- system monitoring,
- infrastructure metrics,
- operational telemetry,
- near-real-time monitoring.

This is a different use case from a typical management dashboard.

---

# Example 1: Executive Dashboard

Suppose the Chief Operating Officer says:

> "I want a dashboard showing our main operational KPIs. Around 50 managers need access, the data should refresh every morning, and users should be able to filter by region."

Important requirements include:

- shared business access,
- interactive filtering,
- scheduled refresh,
- governance,
- business-friendly presentation.

A business intelligence platform such as Tableau or Power BI may be appropriate.

---

# Example 2: Data Science Application

Suppose a data scientist says:

> "I want users to enter information about a customer and see the churn probability produced by our machine-learning model."

Important requirements include:

- user input,
- Python integration,
- model execution,
- customised interaction.

A data application framework may be more appropriate.

---

# Example 3: Quarterly Presentation

Suppose an analyst needs three charts for a quarterly management presentation.

A complete interactive dashboard platform may not be necessary.

The analyst could create the required analysis using an existing business intelligence tool, spreadsheet or programming environment and place the final visuals into the presentation.

---

# A Simple Tool Selection Guide

| Requirement | Possible Tool Category |
|---|---|
| Executive dashboard | Business Intelligence |
| Interactive management reporting | Business Intelligence |
| Self-service analysis | Business Intelligence |
| Custom statistical analysis | Code-Based Visualisation |
| Data science prototype | Data Application |
| Operational system monitoring | Monitoring Tool |
| Static management presentation | Existing BI, Spreadsheet or Code |
| Public interactive analytical application | Data / Web Application |

This is a guide rather than a strict rule.

Many tools can support several different use cases.

---

# Why Tableau Is Used in This Module

In the next section, we will use Tableau to apply the analytical process we have learned.

The objective is not simply to learn where buttons are located in Tableau.

Instead, we will use Tableau to practise the entire process:

**Business Problem  
→ Analytical Questions  
→ Data Model  
→ Metrics  
→ Analysis  
→ Visualisation  
→ Dashboard  
→ Insight  
→ Recommendation**

The same thinking can later be applied to other visualisation tools.

Learning the analytical process is more important than memorising one piece of software.

---

# Key Takeaways

Choose the visualisation tool only after understanding:

- the business problem,
- the audience,
- the data,
- the analytical requirements,
- the level of interactivity,
- the delivery method,
- security requirements,
- refresh requirements,
- cost,
- available skills.

Remember:

> **The tool should support the analytical solution. The analytical solution should not be designed around the tool.**

In the next section, we will bring everything together by solving a business problem and building an executive dashboard in Tableau.
