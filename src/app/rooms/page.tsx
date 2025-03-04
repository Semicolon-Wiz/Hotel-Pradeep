import React from 'react'
import Rooms from './rooms'

export default function page() {
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* <div className="subtitle">Hotel Pradeep</div> */}
                            <div className="title">Rooms & Suites</div>
                        </div>
                    </div>
                </div>
            </section>
           <Rooms/>
        </>
    )
}
