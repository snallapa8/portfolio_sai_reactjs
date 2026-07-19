import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Experience extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Expereince</h1>
<Widecard title="AEM Tech Lead/Tech Architect" where="Sony Interactive Entertainment, Austin, Texas" from="July 2024" to="Present"/>
<Widecard title="Senior AEM Developer" where="Microsoft/XBOX, Austin, Texas" from="Jan 2023" to="June 2024"/>
<Widecard title="Senior AEM Developer" where="Twitter Inc, Austin, Texas" from="June 2020" to="Jan 2023"/>
<Widecard title="AEM/Java Consultant" where="Capital Group Companies, San Antonio, Texas" from="Mar 2015" to="May 2020"/>
<Widecard title="Engineering Intern" where="United Service Source Inc, Melbourne, Florida" from="May 2014" to="Dec 2014"/>
<Widecard title="Software Engineer" where="Infosys Limited, Hyderabad, India" from="Oct 2011" to="Jul 2013"/>
</div>
)
}
}
export default Experience