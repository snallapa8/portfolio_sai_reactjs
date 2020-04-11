import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="MS in Computer Science" where="Florida Institute Of Technology" from="Aug 2013" to="Dec 2014"/>
<Widecard title="Bachelors in Electronics and Communiction Engineering" where="Jawaharlal Nehru Technological University" from="Aug 2007" to="April 2011"/>
</div>
)
}
}
export default Education