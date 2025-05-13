---
sidebar_position: 4
---

# Visualization Tools

This page lists some of the popular and widely used tools for data visualization,
The Data Visualization tools can be broadly classified into two categories:
1. Commercial vs Open Source 
2. Online vs Offline 

Some key points to consider while choosing the right tool for your data visualization needs are:
- **Ease of Use**: The tool should be easy to use and should not require extensive training or expertise to get started.

- **Integration**: The tool should be able to integrate with other tools existing tools with external systems, data pipeline, data warehouses, and data lakes or Local data sources.

- **Cost**: The tool should be cost-effective and should not require a large upfront investment. Some tools may offer free versions or trial periods, while others may require a subscription or one-time payment. Some tools offer pay-as-you-go pricing models, which can be more cost-effective for smaller projects. Team size and scalibility should be considered for tool selection.

- **Scalability**: Depending on the size of team members who create the visualizations vs who consume the visualizations, the accessibility of the tool with authentication and authorization should be considered. Some time managing the access to the data and visualizations itself will be of a greater challenge than creating the visualizations.

- **Support**: The tool should have a good support system in place, including documentation, tutorials, and a community of users who can help with any questions or issues that may arise.Public community support and Customization / Extension options should be available.

Note: We have listed only some of the popular tools available in the market, and there are many other tools available that may be more suitable for your specific needs. We need to consider all the above points while selecting the right tool for the client needs.   
As the effort and time required to setup the tool will be time consuming and cannot be undone easily.

## Commercial Visualization Tools
- [Tableau](https://www.tableau.com/en-gb/products/public/download) - Tableau is a powerful data visualization tool that allows users to create interactive and shareable dashboards. It is widely used in business intelligence and analytics.
- [Microsoft Power BI](https://www.microsoft.com/en-us/power-platform/products/power-bi) - Power BI is a business analytics tool by Microsoft that provides interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.
- [Qlik Sense](https://www.qlik.com/us/products/qlik-sense) - Qlik Sense is a self-service data analytics and visualization tool that allows users to create interactive dashboards and reports.

Cost and licensing models vary based on the number of users and the features required. 
These are generally recommended for large organizations with a large number of users and a large amount of data to be processed.

## Open Source Visualization Tools


- [Apache Superset](https://github.com/apache/superset) - Apache Superset is a modern data exploration and visualization platform that allows users to create interactive dashboards and reports. It is built on top of Flask, React, and SQLAlchemy.

- [Metabase](https://github.com/metabase/metabase) - Metabase is an open-source business intelligence tool that allows users to create interactive dashboards and reports. It is designed for non-technical users and provides a simple interface for creating visualizations.

- [streamlit](https://github.com/streamlit/streamlit) - Streamlit is an another popular open-source app framework projecting more libraries  specifically for machine learning and data science projects. Recently it has gained lots of popularity with its features to create interactive dashboards and reports using python code and also the code can be tracked with version control systems end to end unlike other tools.

- [Redash](https://github.com/getredash/redash) - Redash is an open-source data visualization and collaboration tool that allows users to create interactive dashboards and reports. It is designed for data analysts and provides a simple interface for creating visualizations. 

Note: Except for Apache Superset, all the other tools also provide a Software as a Service (PaaS) version, which can be used for free for small teams. The PaaS version is hosted on the cloud and provides all the features of the open-source version, which can be free from hosting and maintenance overhead.

### Additional tools
Some small team use [Grafana](https://grafana.com/) for data visualization, but it is primarily used for monitoring and observability for realtime data. Grafana is a powerful open-source analytics and monitoring platform that allows users to create interactive dashboards and visualizations. It will not have the exquisite features or interactive dashboard setup for data visualization and reporting, but it can be used for data visualization for small usecases.

## Open Source Visualization Libraries

Visualization libraries are programming libraries that can be integrated into our code itself to create visualizations, Which can then be exported as images or PDF or PowerPoint slides automatically. They are typically easier to use than visualization tools, but they may not be as powerful or flexible. Sometime the customization and extension of tools will be limited, where these libraries can be used to create custom visualizations and can have more flexibility in terms of design and functionality.
These will not have all the features of a full-fledged visualization tool, but they can be used to create simple customized visualizations provided we have the expertise in the code platform .

Visualization Tools are standalone applications that can be used to create visualizations, dashboards, and reports. They are typically more powerful and flexible than visualization libraries, but they may require more time and effort to set up and use.


- [Matplotlib](https://matplotlib.org/) Visualization library in python
- [Seaborn](https://seaborn.pydata.org/) statistical data Visualization in python built upon matplotlib
- [Plotly](https://dash.plotly.com): build beautiful interactive visualizations without needing loads and loads of Javascript
- [Plotly Express](https://plotly.com/python/plotly-express/): build beautiful interactive visualizations in literally a few lines!


## Commercial Visualization Tools - Web-based
- [Looker (Formerly Data Studio)](https://lookerstudio.google.com) - Googles very own Google Data Studio is a business intelligence tool that allows users to create interactive dashboards and reports. If our data is in Google Cloud BigQuery or BigTable, Then this is a good option to consider.

- [Google Charts](https://developers.google.com/chart/) - Google Charts is a free tool that allows that can also be used to create simple light weight charts. It is a simple easy to use and can be integrated with other Google data.

- [QuickSight](https://aws.amazon.com/quicksight/) - Amazon QuickSight is a cloud-based business intelligence service that allows users to create interactive dashboards and reports. All the access and authentication can be managed through AWS IAM and SSO, and support integrations with other AWS services.



