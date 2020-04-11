import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Experience extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Expereince</h1>
<Widecard title="Capital Group Companies" where="San Antonio, Texas" from="Mar 2015" to="Present"/>
<Widecard title="AIG" where="Houston, Texas" from="Apr 2016" to="Jul 2016"/>
<Widecard title="USSI" where="Melbourne, Florida" from="May 2014" to="Dec 2014"/>
<Widecard title="Infosys Limited" where="Hyderabad, India" from="Oct 2011" to="Jul 2013"/>
</div>
)
}
}
export default Experience