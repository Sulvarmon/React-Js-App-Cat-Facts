import React from 'react';

function ACat(props) {
    return (
        <div className='d-flex flex-column m-4 p-2 align-items-center border border-secondary rounded' style={{ position: "relative", zIndex: "10", width: "250px" }}>
            <div className='text-info mb-2'>{props.name}</div>
            <img className='mb-3' src={`https://cdn2.thecatapi.com/images/${props.img}.jpg`} width="200px" height="200px" />
            <div className='d-flex flex-column gap-3'>
                <div><b className='text-warning'>Origin :</b> {props.origin}</div>
                <div><b className='text-warning'>Temperament :</b> {props.temperament}</div>
                <div><b className='text-warning'>Life Span :</b> {props.lifeSpan}</div>
                <div><b className='text-warning'>Description :</b> {props.description}</div>
            </div>
            <div className='btn btn-primary mt-2'><a target="_blank" rel="noreferrer" href={props.wiki}>Aditional Information</a></div>
        </div>
    );
}
export default ACat