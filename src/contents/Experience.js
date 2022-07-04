import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Experience extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Expereince</h1>
<Widecard title="Twitter Inc" where="Austin, Texas" from="Aug 2021" to="Present"/>
<Widecard title="Hero Digital Llc" where="Austin, Texas" from="June 2020" to="Aug 2021"/>
<Widecard title="Capital Group Companies" where="San Antonio, Texas" from="Mar 2015" to="May 2020"/>
<Widecard title="AIG" where="Houston, Texas" from="Apr 2016" to="Jul 2016"/>
<Widecard title="USSI" where="Melbourne, Florida" from="May 2014" to="Dec 2014"/>
<Widecard title="Infosys Limited" where="Hyderabad, India" from="Oct 2011" to="Jul 2013"/>
</div>
)
}
}
export default Experience