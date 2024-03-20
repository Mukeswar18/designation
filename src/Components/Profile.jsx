import { useState } from "react";
import Content from "./Content";
import "./Profile.css";
export default function Profile() {
    const [selected, setSelected] = useState({
        title: 'CEO',
        person: 'Rathan Raju',
        description:'A chief executive officer (CEO) (executive officer, or just chief executive, or as managing director in the UK) is the highest officer charged with the management of an organization – especially a company or nonprofit institution. CEOs find roles in various organizations, including public and private corporations, nonprofit organizations, and even some government organizations'
    });
    function display(temp){
        let titleValue;
        let personValue;
        let description;
        if(temp==="ceo"){
            titleValue="CEO";
            personValue="Rathan Raju";
            description="A chief executive officer (CEO) (executive officer, or just chief executive, or as managing director in the UK) is the highest officer charged with the management of an organization – especially a company or nonprofit institution. CEOs find roles in various organizations, including public and private corporations, nonprofit organizations, and even some government organizations"
        }
        else if(temp==="cao"){
            titleValue="CAO";
            personValue="Meghana";
            description="A chief administrative officer (CAO) is an executive who manages the daily administrative functions of an organization. CAOs are usually appointed by the CEO and report directly to them."
        }
        else if(temp==="coo"){
            titleValue="COO";
            personValue="William"
            description="A chief operating officer (COO) (or chief operations officer) is an executive in charge of the daily operations of an organization, i.e., personnel, resources, and logistics. COOs are usually second-in-command immediately after the CEO, and reports directly to them and acts on their behalf in their absence."
        }
        else if(temp==="cmo"){
            titleValue="CMO";
            personValue="Narasimha"
            description="A chief marketing officer (CMO), also called a global marketing officer or marketing director, or chief brand officer, is a corporate executive responsible for managing marketing activities in an organization. Whilst historically these titles may have signified a legal responsibility, for example at Companies House in the UK, the titles are less strict/formal in the 21st Century and allow companies to acknowledge the evolving and increasingly significant role that marketers can play in an organisation, not least because of the inherent character of successful marketers."
        }
        else{
            titleValue="CFO";
            personValue="Jhansi & Mukeswar"
            description="The term chief financial officer (CFO) refers to a senior executive responsible for managing the financial actions of a company. The CFO's duties include tracking cash flow and financial planning as well as analyzing the company's financial strengths and weaknesses and proposing corrective actions. The role of a CFO is similar to a treasurer or controller because they are responsible for managing the finance and accounting divisions and for ensuring that the company’s financial reports are accurate and completed in a timely manner."
        }
        setSelected({
            title:titleValue,
            person:personValue,
            description:description
        });
    }

  return (
    <div id="profile-container">
      <div id="container">
        <h1>SOCIO</h1>
        <select
          id="values"
          onChange={(e) => display(e.target.value)}
        >
          <option value="ceo">CEO</option>
          <option value="cao">CAO</option>
          <option value="coo">COO</option>
          <option value="cmo">CMO</option>
          <option value="cfo">CFO</option>
        </select>

      </div>
      <div id="content">
      <Content title={selected.title} person={selected.person} description={selected.description}/>
    </div>
    </div>
  );
}
