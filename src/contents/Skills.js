import React, { Component } from 'react'
class Skills extends Component {
constructor(props)
{
super(props);
this.state={
'myskills':['Java, J2EE, Scala', 'Web Services, SOAP, REST API', 'ReactJS, EmberJS, ExtJS, GraphQL', 'Adobe Experience Manager (6.1-6.5, AEM as a Cloud Service)', 'Apache Sling, OSGI, Editable Templates', 'Adobe Analytics, Adobe Launch, Adobe Target', 'Headless Commerce Architecture', 'Akamai EdgeKV, EdgeWorkers, ESI', 'Maven, Webpack, Jenkins, Python', 'AWS (Lambda, S3, CloudFront)', 'Azure AD/MSAL', 'Salesforce Integration', 'AI/OpenAI Integration']
};
}
render() {
return (
<div className="condiv skills">
<h1 className="subtopic">My Skills</h1>
<ul>
{this.state.myskills.map((value)=>{
return <li>{value}</li>
})}
</ul>
</div>
)
}
}
export default Skills
