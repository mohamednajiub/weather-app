import React, {useState} from 'react';
import * as styles from './Tabs.module.scss';

import TabButton from './TabButton/TabButton';

const Tabs = () => {

    const [activeTab, setActiveTab] = useState('hourly');

    let tabs= [
        {
            label: "Hourly",
            value: "hourly"
        },{
            label: "Daily",
            value: "daily"
        },
    ]

    return (
        <section>
            <div >
                {
                    tabs.map(tab => (
                        <TabButton
                            value={tab.value}
                            onClick={setActiveTab}
                            active={activeTab === tab.value ? true:false}
                            className={[]}
                            label={tab.label}
                        />
                    ))
                }
            </div>
            
            {
                activeTab === 'hourly'? 
                <h1>Hourly</h1>:
                <h1>Daily</h1>
            }

        </section>
    )

}

export default Tabs;