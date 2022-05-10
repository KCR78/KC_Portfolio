import React from 'react';

const Skill = () => {

    const skills = [
        {
            data: [
                { name: 'C', value: '70' },
                { name: 'C++', value: '60' }
            ]
        },
        {
            data: [
                { name: 'React', value: '90' },
                { name: 'NextJS', value: '80' },
                { name: 'NodeJS', value: '60' },
                { name: 'MongoDB', value: '50' },
                { name: 'Bootstrap', value: '85' },
                { name: 'HTML', value: '95' },
                { name: 'CSS', value: '85' },
                { name: 'Java Script', value: '80' }
            ]
        },
        {
            data: [
                { name: 'Microsoft Visual Studio', value: '50' },
                { name: 'Python Flask', value: '40' },
                { name: 'MySQL', value: '60' }
            ]
        }
    ];

    return (
        <section className="section bg-gray" id="skillbar" data-aos="fade-up">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <span className="text-color mb-0 text-uppercase letter-spacing text-sm"><i className="bi bi-dash-lg mr-2"></i>Skills Set</span>
                            <h2 className="title">Expertise</h2>
                        </div>
                    </div>


                    <div className='col-lg-8'>
                        <div className='row'>

                            {skills.map((skillItem, skillIndex) =>
                                <div className='col-sm-4 skill-items' key={skillIndex}>
                                    {skillItem.data.map((item, index) =>
                                        <div className="skill-bar mb-4 mb-lg-0" key={index}>
                                            <div className="text-right"><h4 className="font-weight-normal">{item.name}</h4></div>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: `${item.value}%` }}></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;