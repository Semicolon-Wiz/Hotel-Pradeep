import Gallery from '@/components/Gallery/Gallery'
import React from 'react'

export default function page() {
    const galleryData = [
        "/img/gallery/parking/1.jpg",
        "/img/gallery/parking/2.jpg",
        "/img/gallery/parking/3.jpg",
        "/img/gallery/parking/4.jpg",
    ]
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* <div className="subtitle">Hotel Pradeep</div> */}
                            <div className="title">Parking Gallery</div>
                        </div>
                    </div>
                </div>
            </section>

            <Gallery imageData={galleryData} title='Gallery' />

        </>
    )
}
