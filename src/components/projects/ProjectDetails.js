import React from 'react';

const ProjectDetails = (props) => {
        const id = props.match.params.id;
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <span className="card-title">Project Title - {id}</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda aut cum deserunt dignissimos explicabo, facilis incidunt laborum nam nihil odit officia pariatur quia reiciendis repellat,                            reprehenderit soluta tenetur vel?
                    </p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by the Ninja</div>
                    <div>2th september</div>
                </div>
            </div>
        );

}

export default ProjectDetails;