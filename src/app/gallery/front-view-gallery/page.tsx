import Gallery from '@/components/Gallery/Gallery'
import React from 'react'

export default function page() {
    const galleryData = [
        "/img/gallery/front-view/1.jpg",
        "/img/gallery/front-view/2.png",
        "/img/gallery/front-view/3.jpg",
        "/img/gallery/front-view/4.png",
    ]
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* <div className="subtitle">Hotel Pradeep</div> */}
                            <div className="title">Front View Gallery</div>
                        </div>
                    </div>
                </div>
            </section>

            <Gallery imageData={galleryData} title='Gallery' />

        </>
    )
}
